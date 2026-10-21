import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, BoardType, ClassLevel, Language } from '../types';

interface AuthContextType {
  currentUser: User | null;
  isAdmin: boolean;
  isStudent: boolean;
  loginAdmin: (password: string, email?: string) => Promise<{ success: boolean; error?: string }>;
  loginStudent: (studentIdOrPhone: string, studentName?: string) => Promise<{ success: boolean; error?: string }>;
  registerStudent: (data: {
    name: string;
    phone: string;
    email?: string;
    board: BoardType;
    classLevel: ClassLevel;
    preferredLanguage: Language;
    parentContact?: string;
  }) => Promise<{ success: boolean; user?: User; error?: string }>;
  logout: () => void;
  updateStudentProfile: (fields: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  isAdmin: false,
  isStudent: false,
  loginAdmin: async () => ({ success: false }),
  loginStudent: async () => ({ success: false }),
  registerStudent: async () => ({ success: false }),
  logout: () => {},
  updateStudentProfile: () => {}
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    try {
      const stored = localStorage.getItem('divya_current_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const isAdmin = currentUser?.role === 'admin';
  const isStudent = currentUser?.role === 'student';

  const loginAdmin = async (password: string, email: string = 'divyaclasses@gmail.com') => {
    const cleanEmail = email.trim().toLowerCase();
    
    // Server-side verification request
    try {
      const res = await fetch('/api/auth/admin-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleanEmail, password })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        const adminUser: User = {
          id: 'admin_dipak_sir',
          name: 'Dipak Sir (Divya Classes Admin)',
          email: 'divyaclasses@gmail.com',
          role: 'admin',
          createdAt: new Date().toISOString()
        };
        setCurrentUser(adminUser);
        localStorage.setItem('divya_current_user', JSON.stringify(adminUser));
        localStorage.setItem('divya_admin_token', data.token || 'admin_token_active');
        return { success: true };
      }
    } catch (e) {
      console.warn('Network call to /api/auth/admin-login failed, falling back to secure local validator', e);
    }

    // Direct credential verification (Required admin password: Deepak@8092429753)
    if (cleanEmail === 'divyaclasses@gmail.com' && password === 'Deepak@8092429753') {
      const adminUser: User = {
        id: 'admin_dipak_sir',
        name: 'Dipak Sir (Divya Classes Admin)',
        email: 'divyaclasses@gmail.com',
        role: 'admin',
        createdAt: new Date().toISOString()
      };
      setCurrentUser(adminUser);
      localStorage.setItem('divya_current_user', JSON.stringify(adminUser));
      localStorage.setItem('divya_admin_token', 'local_admin_session_' + Date.now());
      return { success: true };
    }

    return { success: false, error: 'Invalid credentials. Expected divyaclasses@gmail.com with configured password.' };
  };

  const loginStudent = async (studentIdOrPhone: string, studentName?: string) => {
    try {
      const usersStr = localStorage.getItem('divya_students') || '[]';
      const students: User[] = JSON.parse(usersStr);
      const cleanInput = studentIdOrPhone.trim().toLowerCase();

      let matched = students.find(s => 
        (s.studentId && s.studentId.toLowerCase() === cleanInput) ||
        (s.phone && s.phone.trim() === cleanInput) ||
        (s.email && s.email.toLowerCase() === cleanInput)
      );

      // If logging in for the first time by phone/name, automatically create or log in
      if (!matched && studentName && studentName.trim().length > 1) {
        const newStudentId = `DC-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
        matched = {
          id: `std_${Date.now()}`,
          studentId: newStudentId,
          name: studentName.trim(),
          phone: studentIdOrPhone.trim(),
          role: 'student',
          board: 'CBSE',
          classLevel: 'Class 10',
          preferredLanguage: 'en',
          createdAt: new Date().toISOString()
        };
        students.push(matched);
        localStorage.setItem('divya_students', JSON.stringify(students));
      }

      if (matched) {
        setCurrentUser(matched);
        localStorage.setItem('divya_current_user', JSON.stringify(matched));
        return { success: true };
      }

      return { success: false, error: 'Student account not found. Please register or enter your Student ID or Mobile Number.' };
    } catch {
      return { success: false, error: 'Error logging in student' };
    }
  };

  const registerStudent = async (data: {
    name: string;
    phone: string;
    email?: string;
    board: BoardType;
    classLevel: ClassLevel;
    preferredLanguage: Language;
    parentContact?: string;
  }) => {
    try {
      const usersStr = localStorage.getItem('divya_students') || '[]';
      const students: User[] = JSON.parse(usersStr);

      const existing = students.find(s => s.phone === data.phone.trim() || (data.email && s.email === data.email.trim()));
      if (existing) {
        setCurrentUser(existing);
        localStorage.setItem('divya_current_user', JSON.stringify(existing));
        return { success: true, user: existing };
      }

      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const studentId = `DC-${new Date().getFullYear()}-${randomSuffix}`;

      const newStudent: User = {
        id: `std_${Date.now()}`,
        studentId,
        name: data.name.trim(),
        phone: data.phone.trim(),
        email: data.email?.trim(),
        board: data.board,
        classLevel: data.classLevel,
        preferredLanguage: data.preferredLanguage,
        parentContact: data.parentContact?.trim(),
        role: 'student',
        createdAt: new Date().toISOString()
      };

      students.push(newStudent);
      localStorage.setItem('divya_students', JSON.stringify(students));
      setCurrentUser(newStudent);
      localStorage.setItem('divya_current_user', JSON.stringify(newStudent));

      return { success: true, user: newStudent };
    } catch (e: any) {
      return { success: false, error: e?.message || 'Registration failed' };
    }
  };

  const updateStudentProfile = (fields: Partial<User>) => {
    if (!currentUser) return;
    const updated = { ...currentUser, ...fields };
    setCurrentUser(updated);
    localStorage.setItem('divya_current_user', JSON.stringify(updated));

    if (currentUser.role === 'student') {
      try {
        const usersStr = localStorage.getItem('divya_students') || '[]';
        const students: User[] = JSON.parse(usersStr);
        const index = students.findIndex(s => s.id === currentUser.id);
        if (index !== -1) {
          students[index] = updated;
          localStorage.setItem('divya_students', JSON.stringify(students));
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('divya_current_user');
    localStorage.removeItem('divya_admin_token');
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAdmin,
        isStudent,
        loginAdmin,
        loginStudent,
        registerStudent,
        logout,
        updateStudentProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
