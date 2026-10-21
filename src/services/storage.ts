import {
  Test,
  TestAttempt,
  AdmissionEnquiry,
  ResourceItem,
  Announcement,
  Certificate,
  SyllabusChapter,
  User
} from '../types';
import {
  INITIAL_TESTS,
  INITIAL_ATTEMPTS,
  INITIAL_ADMISSIONS,
  INITIAL_RESOURCES,
  INITIAL_ANNOUNCEMENTS,
  INITIAL_CERTIFICATES,
  INITIAL_SYLLABUS
} from '../data/initialData';

const STORAGE_KEYS = {
  TESTS: 'divya_tests',
  ATTEMPTS: 'divya_attempts',
  ADMISSIONS: 'divya_admissions',
  RESOURCES: 'divya_resources',
  ANNOUNCEMENTS: 'divya_announcements',
  CERTIFICATES: 'divya_certificates',
  SYLLABUS: 'divya_syllabus',
  STUDENTS: 'divya_students',
  TEACHER_PHOTO: 'divya_teacher_photo'
};

function getStoredItem<T>(key: string, defaultValue: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error(`Error reading ${key} from storage:`, err);
    return defaultValue;
  }
}

function setStoredItem<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(`Error writing ${key} to storage:`, err);
  }
}

export const StorageService = {
  // Tests
  getTests(): Test[] {
    const stored = getStoredItem<Test[]>(STORAGE_KEYS.TESTS, INITIAL_TESTS);
    const existingIds = new Set(stored.map((t) => t.id));
    const missing = INITIAL_TESTS.filter((t) => !existingIds.has(t.id));
    if (missing.length > 0) {
      const merged = [...stored, ...missing];
      setStoredItem(STORAGE_KEYS.TESTS, merged);
      return merged;
    }
    return stored;
  },
  saveTest(test: Test): void {
    const tests = this.getTests();
    const idx = tests.findIndex(t => t.id === test.id);
    if (idx >= 0) {
      tests[idx] = test;
    } else {
      tests.unshift(test);
    }
    setStoredItem(STORAGE_KEYS.TESTS, tests);
  },
  deleteTest(testId: string): void {
    const tests = this.getTests().filter(t => t.id !== testId);
    setStoredItem(STORAGE_KEYS.TESTS, tests);
  },

  // Test Attempts
  getAttempts(): TestAttempt[] {
    return getStoredItem<TestAttempt[]>(STORAGE_KEYS.ATTEMPTS, INITIAL_ATTEMPTS);
  },
  saveAttempt(attempt: TestAttempt): void {
    const attempts = this.getAttempts();
    attempts.unshift(attempt);
    setStoredItem(STORAGE_KEYS.ATTEMPTS, attempts);

    // Auto-check if eligible for certificate
    if (attempt.percentage >= 80) {
      this.generateCertificateForAttempt(attempt);
    }
  },
  updateAttempt(attemptId: string, updates: Partial<TestAttempt>): void {
    const attempts = this.getAttempts();
    const idx = attempts.findIndex(a => a.id === attemptId);
    if (idx >= 0) {
      attempts[idx] = { ...attempts[idx], ...updates };
      setStoredItem(STORAGE_KEYS.ATTEMPTS, attempts);
    }
  },

  // Admissions
  getAdmissions(): AdmissionEnquiry[] {
    return getStoredItem<AdmissionEnquiry[]>(STORAGE_KEYS.ADMISSIONS, INITIAL_ADMISSIONS);
  },
  saveAdmission(admission: AdmissionEnquiry): void {
    const admissions = this.getAdmissions();
    admissions.unshift(admission);
    setStoredItem(STORAGE_KEYS.ADMISSIONS, admissions);
  },
  updateAdmissionStatus(id: string, status: AdmissionEnquiry['status'], notes?: string): void {
    const admissions = this.getAdmissions();
    const idx = admissions.findIndex(a => a.id === id);
    if (idx >= 0) {
      admissions[idx].status = status;
      if (notes !== undefined) admissions[idx].notes = notes;
      setStoredItem(STORAGE_KEYS.ADMISSIONS, admissions);
    }
  },
  deleteAdmission(id: string): void {
    const admissions = this.getAdmissions().filter(a => a.id !== id);
    setStoredItem(STORAGE_KEYS.ADMISSIONS, admissions);
  },

  // Resources
  getResources(): ResourceItem[] {
    return getStoredItem<ResourceItem[]>(STORAGE_KEYS.RESOURCES, INITIAL_RESOURCES);
  },
  saveResource(resource: ResourceItem): void {
    const resources = this.getResources();
    const idx = resources.findIndex(r => r.id === resource.id);
    if (idx >= 0) {
      resources[idx] = resource;
    } else {
      resources.unshift(resource);
    }
    setStoredItem(STORAGE_KEYS.RESOURCES, resources);
  },
  deleteResource(id: string): void {
    const resources = this.getResources().filter(r => r.id !== id);
    setStoredItem(STORAGE_KEYS.RESOURCES, resources);
  },
  incrementDownload(id: string): void {
    const resources = this.getResources();
    const idx = resources.findIndex(r => r.id === id);
    if (idx >= 0) {
      resources[idx].downloadCount = (resources[idx].downloadCount || 0) + 1;
      setStoredItem(STORAGE_KEYS.RESOURCES, resources);
    }
  },

  // Announcements
  getAnnouncements(): Announcement[] {
    return getStoredItem<Announcement[]>(STORAGE_KEYS.ANNOUNCEMENTS, INITIAL_ANNOUNCEMENTS);
  },
  saveAnnouncement(announcement: Announcement): void {
    const announcements = this.getAnnouncements();
    const idx = announcements.findIndex(a => a.id === announcement.id);
    if (idx >= 0) {
      announcements[idx] = announcement;
    } else {
      announcements.unshift(announcement);
    }
    setStoredItem(STORAGE_KEYS.ANNOUNCEMENTS, announcements);
  },
  deleteAnnouncement(id: string): void {
    const announcements = this.getAnnouncements().filter(a => a.id !== id);
    setStoredItem(STORAGE_KEYS.ANNOUNCEMENTS, announcements);
  },

  // Syllabus
  getSyllabus(): SyllabusChapter[] {
    return getStoredItem<SyllabusChapter[]>(STORAGE_KEYS.SYLLABUS, INITIAL_SYLLABUS);
  },
  updateSyllabusStatus(chapterId: string, status: SyllabusChapter['status']): void {
    const chapters = this.getSyllabus();
    const idx = chapters.findIndex(c => c.id === chapterId);
    if (idx >= 0) {
      chapters[idx].status = status;
      setStoredItem(STORAGE_KEYS.SYLLABUS, chapters);
    }
  },

  // Certificates
  getCertificates(): Certificate[] {
    return getStoredItem<Certificate[]>(STORAGE_KEYS.CERTIFICATES, INITIAL_CERTIFICATES);
  },
  generateCertificateForAttempt(attempt: TestAttempt): Certificate | null {
    const existing = this.getCertificates();
    const alreadyIssued = existing.find(c => c.studentId === attempt.studentId && c.title === attempt.testTitle);
    if (alreadyIssued) return alreadyIssued;

    let achievement: Certificate['achievement'] = 'Participation';
    if (attempt.percentage >= 95) achievement = 'First Rank';
    else if (attempt.percentage >= 88) achievement = 'Second Rank';
    else if (attempt.percentage >= 80) achievement = 'Third Rank';
    else if (attempt.percentage >= 70) achievement = 'Outstanding Performance';

    const cert: Certificate = {
      id: `CERT-DC-${Date.now().toString().slice(-6)}`,
      studentId: attempt.studentId,
      studentName: attempt.studentName,
      board: attempt.board,
      classLevel: attempt.classLevel,
      title: `${attempt.board} ${attempt.classLevel} ${attempt.subject} Exam`,
      achievement,
      score: attempt.marksObtained,
      totalScore: attempt.totalMarks,
      percentage: attempt.percentage,
      issueDate: new Date().toISOString().split('T')[0],
      authorizedBy: 'Dipak Kumar (Dipak Sir)',
      verificationCode: `DIVYA-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${attempt.percentage}P`
    };

    existing.unshift(cert);
    setStoredItem(STORAGE_KEYS.CERTIFICATES, existing);
    return cert;
  },
  verifyCertificate(codeOrId: string): Certificate | undefined {
    const trimmed = codeOrId.trim().toUpperCase();
    return this.getCertificates().find(
      c => c.id.toUpperCase() === trimmed || c.verificationCode.toUpperCase() === trimmed
    );
  },

  // Students
  getStudents(): User[] {
    const defaultStudents: User[] = [
      { id: 'std-1', studentId: 'DC-2026-1001', name: 'Rohan Verma', phone: '9835001122', email: 'rohan.v@example.com', board: 'CBSE', classLevel: 'Class 10', role: 'student', createdAt: '2026-10-10' },
      { id: 'std-2', studentId: 'DC-2026-1002', name: 'Ananya Raj', phone: '8709112233', email: 'ananya.r@example.com', board: 'CBSE', classLevel: 'Class 10', role: 'student', createdAt: '2026-10-12' },
      { id: 'std-3', studentId: 'DC-2026-1003', name: 'Suman Kumar', phone: '9123887766', email: 'suman.k@example.com', board: 'Bihar Board', classLevel: 'Class 10', role: 'student', createdAt: '2026-10-14' },
      { id: 'std-4', studentId: 'DC-2026-1004', name: 'Nisha Bharti', phone: '9934223344', email: 'nisha.b@example.com', board: 'Bihar Board', classLevel: 'Class 10', role: 'student', createdAt: '2026-10-15' },
      { id: 'std-5', studentId: 'DC-2026-1005', name: 'Vikram Singh', phone: '9431445566', email: 'vikram.s@example.com', board: 'CBSE', classLevel: 'Class 10', role: 'student', createdAt: '2026-10-16' }
    ];
    return getStoredItem<User[]>(STORAGE_KEYS.STUDENTS, defaultStudents);
  },

  // Teacher Photo
  getTeacherPhoto(): string | null {
    return localStorage.getItem(STORAGE_KEYS.TEACHER_PHOTO);
  },
  saveTeacherPhoto(photoDataUrl: string): void {
    localStorage.setItem(STORAGE_KEYS.TEACHER_PHOTO, photoDataUrl);
  },

  // Statistics calculation directly from stored records
  getRealStatistics() {
    const students = this.getStudents();
    const attempts = this.getAttempts();
    const admissions = this.getAdmissions();
    const resources = this.getResources();
    const tests = this.getTests();
    const certificates = this.getCertificates();

    // Unique students who took at least one test
    const uniqueTestTakers = new Set(attempts.map(a => a.studentId)).size;
    const completedTests = attempts.filter(a => a.status === 'completed' || a.status === 'evaluated').length;

    // Average percentage
    const avgScore = attempts.length > 0
      ? Math.round(attempts.reduce((sum, a) => sum + (a.percentage || 0), 0) / attempts.length)
      : 0;

    const pendingAdmissions = admissions.filter(a => a.status === 'Pending').length;
    const contactedAdmissions = admissions.filter(a => a.status === 'Contacted').length;
    const enrolledStudents = admissions.filter(a => a.status === 'Enrolled').length;

    return {
      totalStudents: students.length,
      uniqueTestTakers,
      totalAttempts: attempts.length,
      completedTests,
      publishedTests: tests.filter(t => t.isPublished).length,
      totalAdmissions: admissions.length,
      pendingAdmissions,
      contactedAdmissions,
      enrolledStudents,
      totalResources: resources.length,
      totalCertificates: certificates.length,
      averageScorePercentage: avgScore
    };
  },

  // Monthly top 5 leaderboard
  getMonthlyTopFive() {
    const attempts = this.getAttempts();
    // Group by student and calculate average
    const studentMap: Record<string, { studentId: string; studentName: string; board: string; classLevel: string; scores: number[]; count: number }> = {};

    attempts.forEach(a => {
      if (!studentMap[a.studentId]) {
        studentMap[a.studentId] = {
          studentId: a.studentId,
          studentName: a.studentName,
          board: a.board,
          classLevel: a.classLevel,
          scores: [],
          count: 0
        };
      }
      studentMap[a.studentId].scores.push(a.percentage);
      studentMap[a.studentId].count += 1;
    });

    const ranked = Object.values(studentMap)
      .map(s => {
        const avg = Math.round(s.scores.reduce((a, b) => a + b, 0) / s.scores.length);
        return {
          studentId: s.studentId,
          studentName: s.studentName,
          board: s.board,
          classLevel: s.classLevel,
          averagePercentage: avg,
          testsCompleted: s.count
        };
      })
      .sort((a, b) => b.averagePercentage - a.averagePercentage || b.testsCompleted - a.testsCompleted)
      .slice(0, 5);

    return ranked;
  },

  // Export functions to CSV
  exportToCsv(filename: string, rows: Record<string, any>[]) {
    if (!rows.length) return;
    const headers = Object.keys(rows[0]);
    const csvContent = [
      headers.join(','),
      ...rows.map(row =>
        headers
          .map(header => {
            const val = row[header];
            const str = typeof val === 'object' ? JSON.stringify(val) : String(val ?? '');
            return `"${str.replace(/"/g, '""')}"`;
          })
          .join(',')
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};
