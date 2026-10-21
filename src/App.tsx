/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { CoursesPage } from './components/pages/CoursesPage';
import { SyllabusPage } from './components/pages/SyllabusPage';
import { StudyMaterialsPage } from './components/pages/StudyMaterialsPage';
import { OnlineTestsPage } from './components/pages/OnlineTestsPage';
import { LeaderboardPage } from './components/pages/LeaderboardPage';
import { CertificatesPage } from './components/pages/CertificatesPage';
import { YouTubeClassesPage } from './components/pages/YouTubeClassesPage';
import { AdmissionsPage } from './components/pages/AdmissionsPage';
import { StudentDashboard } from './components/pages/StudentDashboard';
import { AdminLoginPage } from './components/pages/AdminLoginPage';
import { AdminDashboardPage } from './components/pages/AdminDashboardPage';
import { LegalPage } from './components/pages/LegalPage';
import { StudentAuthModal } from './components/pages/StudentAuthModal';
import { ExamEngineModal } from './components/pages/ExamEngineModal';
import { StorageService } from './services/storage';
import { Test } from './types';

function MainContent() {
  const { currentUser, isAdmin, logout } = useAuth();
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [isStudentAuthOpen, setIsStudentAuthOpen] = useState(false);
  const [activeExam, setActiveExam] = useState<Test | null>(null);

  const handleStartExam = (testOrId?: Test | string) => {
    if (!testOrId) {
      const tests = StorageService.getTests().filter(t => t.isPublished);
      if (tests.length > 0) {
        setActiveExam(tests[0]);
      }
      return;
    }

    if (typeof testOrId === 'string') {
      const found = StorageService.getTests().find(t => t.id === testOrId);
      if (found) setActiveExam(found);
    } else {
      setActiveExam(testOrId);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Navbar is visible on all standard pages; hidden on full admin dashboard if preferred or kept for quick navigation */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        openStudentAuth={() => setIsStudentAuthOpen(true)}
      />

      <main className="flex-1">
        {currentTab === 'home' && (
          <HomePage
            onNavigate={(tab) => setCurrentTab(tab)}
            onOpenTest={(testId) => handleStartExam(testId)}
          />
        )}

        {currentTab === 'about' && (
          <AboutPage onNavigateAdmissions={() => setCurrentTab('admissions')} />
        )}

        {currentTab === 'courses' && (
          <CoursesPage
            onSelectCourseForAdmission={() => setCurrentTab('admissions')}
            onExploreSyllabus={() => setCurrentTab('syllabus')}
          />
        )}

        {currentTab === 'syllabus' && <SyllabusPage />}

        {currentTab === 'study_materials' && <StudyMaterialsPage />}

        {currentTab === 'online_tests' && (
          <OnlineTestsPage onStartExam={(test) => handleStartExam(test)} />
        )}

        {currentTab === 'leaderboard' && <LeaderboardPage />}

        {currentTab === 'certificates' && <CertificatesPage />}

        {currentTab === 'youtube' && <YouTubeClassesPage />}

        {currentTab === 'admissions' && <AdmissionsPage />}

        {currentTab === 'student_dashboard' && (
          <StudentDashboard
            onStartTest={() => handleStartExam()}
            onNavigateSyllabus={() => setCurrentTab('syllabus')}
          />
        )}

        {currentTab === 'admin_login' && (
          <AdminLoginPage
            onSuccess={() => setCurrentTab('admin_dashboard')}
            onBackToHome={() => setCurrentTab('home')}
          />
        )}

        {currentTab === 'admin_dashboard' && (
          <AdminDashboardPage
            onSignOut={() => {
              logout();
              setCurrentTab('home');
            }}
            onNavigateHome={() => setCurrentTab('home')}
          />
        )}

        {currentTab === 'privacy' && <LegalPage type="privacy" />}

        {currentTab === 'terms' && <LegalPage type="terms" />}
      </main>

      <Footer setCurrentTab={setCurrentTab} />

      {/* Student Registration / Sign In Modal */}
      <StudentAuthModal
        isOpen={isStudentAuthOpen}
        onClose={() => setIsStudentAuthOpen(false)}
        onSuccess={() => setCurrentTab('student_dashboard')}
      />

      {/* Full Examination Engine Modal */}
      {activeExam && (
        <ExamEngineModal
          test={activeExam}
          isOpen={Boolean(activeExam)}
          onClose={() => setActiveExam(null)}
          onAttemptSaved={() => {
            // refresh data
          }}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <MainContent />
      </AuthProvider>
    </LanguageProvider>
  );
}
