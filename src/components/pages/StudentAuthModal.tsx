import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { BoardType, ClassLevel, Language } from '../../types';
import { X, User, Phone, Mail, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';

interface StudentAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export const StudentAuthModal: React.FC<StudentAuthModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const { loginStudent, registerStudent } = useAuth();
  const { language } = useLanguage();
  const [mode, setMode] = useState<'login' | 'register'>('login');

  // Login form state
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginName, setLoginName] = useState('');

  // Register form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [board, setBoard] = useState<BoardType>('CBSE');
  const [classLevel, setClassLevel] = useState<ClassLevel>('Class 10');
  const [preferredLang, setPreferredLang] = useState<Language>('en');
  const [parentContact, setParentContact] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [registeredId, setRegisteredId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginIdentifier.trim()) {
      setError('Please enter your Student ID or Mobile Number.');
      return;
    }
    setError(null);
    setLoading(true);

    const res = await loginStudent(loginIdentifier, loginName);
    setLoading(false);
    if (res.success) {
      if (onSuccess) onSuccess();
      onClose();
    } else {
      setError(res.error || 'Login failed. Please check your credentials or register.');
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError('Student name and mobile number are required.');
      return;
    }
    setError(null);
    setLoading(true);

    const res = await registerStudent({
      name,
      phone,
      email,
      board,
      classLevel,
      preferredLanguage: preferredLang,
      parentContact
    });

    setLoading(false);
    if (res.success && res.user) {
      setRegisteredId(res.user.studentId || 'DC-NEW');
    } else {
      setError(res.error || 'Registration failed.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="p-2 bg-amber-400 text-blue-950 rounded-lg">
              <GraduationCap className="w-5 h-5" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Divya Classes Student Portal
            </span>
          </div>

          <h2 className="text-2xl font-bold">
            {mode === 'login' ? 'Student Sign In' : 'Create Student Account'}
          </h2>
          <p className="text-slate-300 text-xs mt-1">
            Access chapter practice tests, AI question papers & verified certificates.
          </p>
        </div>

        {/* Tab switch */}
        {!registeredId && (
          <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50">
            <button
              onClick={() => { setMode('login'); setError(null); }}
              className={`flex-1 py-3 text-sm font-semibold text-center transition-colors ${
                mode === 'login'
                  ? 'text-blue-900 dark:text-amber-400 border-b-2 border-blue-900 dark:border-amber-400 bg-white dark:bg-slate-900'
                  : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'
              }`}
            >
              Sign In (Existing Student)
            </button>
            <button
              onClick={() => { setMode('register'); setError(null); }}
              className={`flex-1 py-3 text-sm font-semibold text-center transition-colors ${
                mode === 'register'
                  ? 'text-blue-900 dark:text-amber-400 border-b-2 border-blue-900 dark:border-amber-400 bg-white dark:bg-slate-900'
                  : 'text-slate-500 hover:text-slate-700 dark:text-slate-400'
              }`}
            >
              New Registration
            </button>
          </div>
        )}

        <div className="p-6">
          {error && (
            <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs">
              {error}
            </div>
          )}

          {registeredId ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Registration Successful!
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Your unique Student ID for Divya Classes is:
                </p>
                <div className="mt-2 text-2xl font-mono font-black text-blue-900 dark:text-amber-400 bg-slate-100 dark:bg-slate-800 py-2 px-4 rounded-xl inline-block tracking-wider">
                  {registeredId}
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Please save this Student ID. You can use it to log in anytime from any device.
              </p>
              <button
                onClick={() => {
                  if (onSuccess) onSuccess();
                  onClose();
                }}
                className="w-full py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-xl text-sm transition-colors shadow-md"
              >
                Go to My Student Dashboard
              </button>
            </div>
          ) : mode === 'login' ? (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Student ID or Mobile Number *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. DC-2026-1001 or 9835123456"
                    value={loginIdentifier}
                    onChange={(e) => setLoginIdentifier(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Student Name (Optional for quick login)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Kumar"
                  value={loginName}
                  onChange={(e) => setLoginName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-blue-900 to-indigo-900 hover:from-blue-800 hover:to-indigo-800 text-white font-bold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                {loading ? 'Verifying...' : 'Sign In to Dashboard'}
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setMode('register')}
                  className="text-xs text-blue-800 dark:text-amber-400 hover:underline font-medium"
                >
                  Don't have an account yet? Register here
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anjali Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="9835xxxxxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="student@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Board *
                  </label>
                  <select
                    value={board}
                    onChange={(e) => setBoard(e.target.value as BoardType)}
                    className="w-full px-3.5 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                  >
                    <option value="CBSE">CBSE Board</option>
                    <option value="Bihar Board">Bihar Board (BSEB)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Class *
                  </label>
                  <select
                    value={classLevel}
                    onChange={(e) => setClassLevel(e.target.value as ClassLevel)}
                    className="w-full px-3.5 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                  >
                    <option value="Class 10">Class 10</option>
                    <option value="Class 9">Class 9</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Parent / Guardian Mobile
                </label>
                <input
                  type="tel"
                  placeholder="Parent phone number"
                  value={parentContact}
                  onChange={(e) => setParentContact(e.target.value)}
                  className="w-full px-3.5 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold rounded-xl text-sm shadow-md transition-all mt-2"
              >
                {loading ? 'Creating Student Profile...' : 'Complete Registration'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
