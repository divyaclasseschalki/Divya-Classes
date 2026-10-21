export type Language = 'en' | 'hi';
export type BoardType = 'CBSE' | 'Bihar Board';
export type ClassLevel = 'Class 9' | 'Class 10';
export type Subject = 'Mathematics' | 'Science' | 'Social Science' | 'English' | 'Hindi' | 'Sanskrit' | 'Information Technology (402)';

export interface User {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  role: 'student' | 'admin';
  studentId?: string;
  board?: BoardType;
  classLevel?: ClassLevel;
  preferredLanguage?: Language;
  parentContact?: string;
  createdAt: string;
}

export interface Question {
  id: number | string;
  type: 'mcq' | 'assertion_reason' | 'short_answer' | 'long_answer' | 'numerical';
  marks: number;
  text: string;
  options?: string[];
  correctOptionIndex?: number;
  correctAnswer?: string;
  explanation?: string;
}

export interface Test {
  id: string;
  title: string;
  board: BoardType;
  classLevel: ClassLevel;
  subject: string;
  chapter?: string;
  testType: 'chapter' | 'full_syllabus' | 'scheduled' | 'ai_generated' | 'sample_paper';
  durationMinutes: number;
  totalMarks: number;
  passingMarks: number;
  language: 'English' | 'Hindi' | 'Bilingual';
  instructions: string[];
  questions: Question[];
  isPublished: boolean;
  scheduledAt?: string;
  createdAt: string;
}

export interface TestAttempt {
  id: string;
  testId: string;
  testTitle: string;
  studentId: string;
  studentName: string;
  board: BoardType;
  classLevel: ClassLevel;
  subject: string;
  answers: Record<string | number, string | number>;
  marksObtained: number;
  totalMarks: number;
  percentage: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  status: 'completed' | 'evaluated' | 'provisional';
  submittedAt: string;
  teacherRemarks?: string;
}

export interface AdmissionEnquiry {
  id: string;
  studentName: string;
  phone: string;
  email?: string;
  board: BoardType;
  classLevel: ClassLevel;
  subjects: string[];
  preferredBatch?: string;
  address?: string;
  message?: string;
  status: 'Pending' | 'Contacted' | 'Enrolled' | 'Archived';
  notes?: string;
  createdAt: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  category: 'Notes' | 'Sample Paper' | 'Syllabus' | 'Formula Sheet' | 'Notice';
  board: BoardType | 'Both';
  classLevel: ClassLevel | 'Both';
  subject: string;
  chapter?: string;
  fileUrl: string;
  fileType: 'pdf' | 'image' | 'video' | 'link';
  fileSize?: string;
  isPublished: boolean;
  downloadCount: number;
  createdAt: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  category: 'Exam' | 'Batch' | 'Holiday' | 'Result' | 'General';
  targetBoard?: BoardType | 'All';
  targetClass?: ClassLevel | 'All';
  isImportant: boolean;
  isPublished: boolean;
  date: string;
}

export interface Certificate {
  id: string;
  studentId: string;
  studentName: string;
  board: BoardType;
  classLevel: ClassLevel;
  title: string;
  achievement: 'First Rank' | 'Second Rank' | 'Third Rank' | 'Outstanding Performance' | 'Participation';
  score?: number;
  totalScore?: number;
  percentage?: number;
  issueDate: string;
  authorizedBy: string;
  verificationCode: string;
}

export interface SyllabusChapter {
  id: string;
  board: BoardType;
  classLevel: ClassLevel;
  subject: string;
  subCategory?: string; // Physics, Chemistry, Biology etc.
  chapterNumber: number;
  title: string;
  description: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
  keyTopics: string[];
}
