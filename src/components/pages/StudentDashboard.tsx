import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { StorageService } from '../../services/storage';
import { PdfService } from '../../services/pdfGenerator';
import { BoardBadge } from '../common/BoardBadges';
import {
  User as UserIcon,
  Award,
  FileCheck2,
  BookOpen,
  Calendar,
  Clock,
  Download,
  TrendingUp,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface StudentDashboardProps {
  onStartTest: (testId?: string) => void;
  onNavigateSyllabus: () => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  onStartTest,
  onNavigateSyllabus
}) => {
  const { currentUser } = useAuth();
  const allAttempts = StorageService.getAttempts();
  const allCertificates = StorageService.getCertificates();

  // Filter only records belonging to the logged-in student
  const studentAttempts = allAttempts.filter(
    (a) => a.studentId === currentUser?.studentId || a.studentName === currentUser?.name
  );

  const studentCertificates = allCertificates.filter(
    (c) => c.studentId === currentUser?.studentId || c.studentName === currentUser?.name
  );

  const avgPercentage =
    studentAttempts.length > 0
      ? Math.round(studentAttempts.reduce((sum, a) => sum + a.percentage, 0) / studentAttempts.length)
      : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Student Welcome Profile Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-18 h-18 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-200 text-blue-950 flex items-center justify-center font-black text-2xl shadow-lg ring-4 ring-white/10 shrink-0">
              {currentUser?.name?.charAt(0) || 'S'}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                  Student Portal
                </span>
                <span className="bg-white/10 text-slate-200 text-[10px] font-mono px-2 py-0.5 rounded-md">
                  {currentUser?.studentId || 'DC-ACTIVE'}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black mt-1">
                Welcome back, {currentUser?.name}!
              </h1>
              <p className="text-xs text-slate-300 mt-1">
                {currentUser?.board || 'CBSE'} • {currentUser?.classLevel || 'Class 10'} • Mentored by Dipak Sir
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onStartTest()}
              className="px-5 py-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg transition-transform transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <FileCheck2 className="w-4 h-4" />
              <span>Take New Practice Exam</span>
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Tests Completed
          </div>
          <div className="text-3xl sm:text-4xl font-black text-blue-900 dark:text-amber-400 mt-1">
            {studentAttempts.length}
          </div>
          <div className="text-xs text-slate-400 mt-1">Evaluated exam attempts</div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Average Accuracy
          </div>
          <div className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
            {avgPercentage}%
          </div>
          <div className="text-xs text-slate-400 mt-1">Across all completed exams</div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Earned Certificates
          </div>
          <div className="text-3xl sm:text-4xl font-black text-amber-500 mt-1">
            {studentCertificates.length}
          </div>
          <div className="text-xs text-slate-400 mt-1">Signed by Dipak Sir</div>
        </div>
      </div>

      {/* Student Certificates Box */}
      {studentCertificates.length > 0 && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            <span>My Achievement Certificates ({studentCertificates.length})</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {studentCertificates.map((cert) => (
              <div
                key={cert.id}
                className="p-5 rounded-2xl border-2 border-amber-400/40 bg-amber-50/30 dark:bg-amber-950/20 flex items-center justify-between gap-4"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-amber-700 dark:text-amber-400 uppercase">
                    {cert.id} • {cert.achievement}
                  </span>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mt-0.5">
                    {cert.title}
                  </h4>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Score: {cert.score}/{cert.totalScore} ({cert.percentage}%) • Issued {cert.issueDate}
                  </div>
                </div>

                <button
                  onClick={() => PdfService.generateCertificatePdf(cert)}
                  className="px-3.5 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shrink-0"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>PDF</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Test Attempt History */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <h3 className="font-bold text-slate-900 dark:text-white text-base">
            My Examination History ({studentAttempts.length})
          </h3>
          <span className="text-xs text-slate-500 font-medium">Private Records</span>
        </div>

        {studentAttempts.length === 0 ? (
          <div className="p-12 text-center space-y-3">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
            <h4 className="font-bold text-slate-700 dark:text-slate-300">
              No exam attempts yet!
            </h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Start your first practice exam to track your chapter mastery and earn a certificate of excellence.
            </p>
            <button
              onClick={() => onStartTest()}
              className="px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-xl text-xs"
            >
              Start First Practice Exam
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-500 text-xs uppercase font-bold tracking-wider border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-6 py-4">Test Title</th>
                  <th className="px-6 py-4">Subject & Board</th>
                  <th className="px-6 py-4">Score</th>
                  <th className="px-6 py-4">Percentage</th>
                  <th className="px-6 py-4">Submitted Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {studentAttempts.map((att) => (
                  <tr key={att.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">
                      {att.testTitle}
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-600 dark:text-slate-400">
                      {att.subject} • {att.board}
                    </td>
                    <td className="px-6 py-4 font-mono font-bold text-blue-900 dark:text-amber-400">
                      {att.marksObtained} / {att.totalMarks}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                          att.percentage >= 80
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {att.percentage}%
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-500">
                      {new Date(att.submittedAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
