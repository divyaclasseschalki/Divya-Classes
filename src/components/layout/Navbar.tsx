import React, { useState } from 'react';
import { Logo } from '../common/Logo';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import {
  BookOpen,
  GraduationCap,
  Award,
  Video,
  FileText,
  Phone,
  User as UserIcon,
  Shield,
  Menu,
  X,
  Globe,
  ChevronDown,
  Sparkles,
  ClipboardList
} from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  openStudentAuth: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setCurrentTab, openStudentAuth }) => {
  const { language, setLanguage, t } = useLanguage();
  const { currentUser, isAdmin, isStudent, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdown, setCoursesDropdown] = useState(false);

  const handleNavClick = (tab: string) => {
    setCurrentTab(tab);
    setMobileMenuOpen(false);
    setCoursesDropdown(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-lg">
      {/* Top Notice / Announcement Strip */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 px-4 py-1.5 text-xs border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded-full tracking-wider">
              {language === 'hi' ? 'सूचना' : 'NEW ADMISSIONS'}
            </span>
            <span className="text-slate-200 truncate hidden sm:inline">
              {language === 'hi'
                ? 'सत्र 2025-2026 के लिए कक्षा 9वीं एवं 10वीं के नए बैच शुरू। संपर्क करें: 9065892913'
                : 'Admissions Open 2025-26 for CBSE & Bihar Board Classes 9 & 10. Call: +91 9065892913'}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs ml-auto">
            <a
              href="tel:9065892913"
              className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>9065892913</span>
            </a>

            {/* Language Switcher */}
            <div className="flex items-center bg-slate-800/80 rounded-full p-0.5 border border-slate-700">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 text-[11px] rounded-full font-bold transition-all ${
                  language === 'en'
                    ? 'bg-amber-400 text-slate-950 shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
                title="Switch to English"
              >
                English
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`px-2.5 py-0.5 text-[11px] rounded-full font-bold transition-all ${
                  language === 'hi'
                    ? 'bg-amber-400 text-slate-950 shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
                title="हिन्दी में बदलें"
              >
                हिन्दी
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="focus:outline-hidden text-left"
          >
            <Logo size="md" />
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                currentTab === 'home'
                  ? 'text-amber-400 bg-slate-800/80'
                  : 'text-slate-200 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {t('nav.home')}
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                currentTab === 'about'
                  ? 'text-amber-400 bg-slate-800/80'
                  : 'text-slate-200 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {t('nav.about')}
            </button>

            {/* Courses Dropdown */}
            <div className="relative">
              <button
                onClick={() => setCoursesDropdown(!coursesDropdown)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                  currentTab === 'courses'
                    ? 'text-amber-400 bg-slate-800/80'
                    : 'text-slate-200 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <span>{t('nav.courses')}</span>
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              {coursesDropdown && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl py-2 z-50">
                  <div className="px-3 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    CBSE Board
                  </div>
                  <button
                    onClick={() => handleNavClick('courses')}
                    className="w-full text-left px-4 py-2 text-sm text-slate-200 hover:bg-blue-900/50 hover:text-amber-300"
                  >
                    CBSE Class 10 (Maths & Science)
                  </button>
                  <button
                    onClick={() => handleNavClick('courses')}
                    className="w-full text-left px-4 py-2 text-sm text-slate-200 hover:bg-blue-900/50 hover:text-amber-300"
                  >
                    CBSE Class 9 (Maths & Science)
                  </button>

                  <div className="border-t border-slate-800 my-1"></div>
                  <div className="px-3 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Bihar Board (BSEB)
                  </div>
                  <button
                    onClick={() => handleNavClick('courses')}
                    className="w-full text-left px-4 py-2 text-sm text-slate-200 hover:bg-blue-900/50 hover:text-amber-300"
                  >
                    बिहार बोर्ड कक्षा 10 (मैट्रिक)
                  </button>
                  <button
                    onClick={() => handleNavClick('courses')}
                    className="w-full text-left px-4 py-2 text-sm text-slate-200 hover:bg-blue-900/50 hover:text-amber-300"
                  >
                    बिहार बोर्ड कक्षा 9
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('syllabus')}
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                currentTab === 'syllabus'
                  ? 'text-amber-400 bg-slate-800/80'
                  : 'text-slate-200 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {t('nav.syllabus')}
            </button>

            <button
              onClick={() => handleNavClick('study_materials')}
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                currentTab === 'study_materials'
                  ? 'text-amber-400 bg-slate-800/80'
                  : 'text-slate-200 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {t('nav.study_materials')}
            </button>

            {/* Online Test - Glowing CTA */}
            <button
              onClick={() => handleNavClick('online_tests')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-bold transition-all shadow-sm ${
                currentTab === 'online_tests'
                  ? 'bg-amber-400 text-slate-950'
                  : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/30'
              }`}
            >
              <ClipboardList className="w-4 h-4" />
              <span>{t('nav.online_tests')}</span>
            </button>

            <button
              onClick={() => handleNavClick('leaderboard')}
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                currentTab === 'leaderboard'
                  ? 'text-amber-400 bg-slate-800/80'
                  : 'text-slate-200 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {t('nav.leaderboard')}
            </button>

            <button
              onClick={() => handleNavClick('certificates')}
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                currentTab === 'certificates'
                  ? 'text-amber-400 bg-slate-800/80'
                  : 'text-slate-200 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {t('nav.certificates')}
            </button>

            <button
              onClick={() => handleNavClick('youtube')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                currentTab === 'youtube'
                  ? 'text-red-400 bg-slate-800/80'
                  : 'text-slate-200 hover:text-red-400 hover:bg-slate-800/50'
              }`}
            >
              <Video className="w-4 h-4 text-red-500" />
              <span>{t('nav.youtube')}</span>
            </button>

            <button
              onClick={() => handleNavClick('admissions')}
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                currentTab === 'admissions'
                  ? 'text-amber-400 bg-slate-800/80'
                  : 'text-slate-200 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {t('nav.admissions')}
            </button>
          </nav>

          {/* User & Admin Actions */}
          <div className="hidden lg:flex items-center gap-2">
            {currentUser ? (
              <div className="flex items-center gap-2">
                {isAdmin ? (
                  <button
                    onClick={() => handleNavClick('admin_dashboard')}
                    className="flex items-center gap-1.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-amber-500/30 transition-colors"
                  >
                    <Shield className="w-3.5 h-3.5" />
                    <span>Admin Panel</span>
                  </button>
                ) : (
                  <button
                    onClick={() => handleNavClick('student_dashboard')}
                    className="flex items-center gap-1.5 bg-blue-900/60 text-blue-200 border border-blue-700 px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-blue-800 transition-colors"
                  >
                    <UserIcon className="w-3.5 h-3.5" />
                    <span className="truncate max-w-[120px]">{currentUser.name.split(' ')[0]}</span>
                  </button>
                )}

                <button
                  onClick={logout}
                  className="text-xs text-slate-400 hover:text-rose-400 px-2 py-1 transition-colors"
                  title="Logout"
                >
                  {t('nav.logout')}
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={openStudentAuth}
                  className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-700 transition-colors"
                >
                  <UserIcon className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t('nav.student_login')}</span>
                </button>

                <button
                  onClick={() => handleNavClick('admin_login')}
                  className="p-1.5 text-slate-400 hover:text-amber-400 rounded-lg hover:bg-slate-800 transition-colors"
                  title="Admin Portal"
                >
                  <Shield className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('online_tests')}
              className="bg-amber-400 text-slate-950 font-bold px-2.5 py-1 rounded-md text-xs shadow-xs"
            >
              Test
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-6 space-y-1">
          <div className="flex items-center justify-between py-2 border-b border-slate-800 mb-2">
            <span className="text-xs font-bold text-slate-400 uppercase">Navigation</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
                className="text-xs font-bold text-amber-400 bg-slate-800 px-2.5 py-1 rounded-md"
              >
                {language === 'en' ? 'हिन्दी में देखें' : 'View in English'}
              </button>
            </div>
          </div>

          {[
            { id: 'home', label: t('nav.home') },
            { id: 'about', label: t('nav.about') },
            { id: 'courses', label: t('nav.courses') },
            { id: 'syllabus', label: t('nav.syllabus') },
            { id: 'study_materials', label: t('nav.study_materials') },
            { id: 'online_tests', label: t('nav.online_tests') },
            { id: 'leaderboard', label: t('nav.leaderboard') },
            { id: 'certificates', label: t('nav.certificates') },
            { id: 'youtube', label: t('nav.youtube') },
            { id: 'admissions', label: t('nav.admissions') }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                currentTab === item.id
                  ? 'bg-amber-400 text-slate-950'
                  : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-3 border-t border-slate-800 space-y-2">
            {currentUser ? (
              <>
                <button
                  onClick={() => handleNavClick(isAdmin ? 'admin_dashboard' : 'student_dashboard')}
                  className="w-full py-2.5 bg-blue-700 text-white rounded-lg text-sm font-bold text-center"
                >
                  {isAdmin ? 'Admin Dashboard' : 'My Student Dashboard'}
                </button>
                <button
                  onClick={logout}
                  className="w-full py-2 text-rose-400 text-sm font-semibold text-center"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openStudentAuth();
                  }}
                  className="w-full py-2.5 bg-blue-600 text-white rounded-lg text-sm font-bold text-center"
                >
                  Student Login / Register
                </button>
                <button
                  onClick={() => handleNavClick('admin_login')}
                  className="w-full py-2 text-slate-400 hover:text-amber-400 text-xs font-medium text-center"
                >
                  Admin Portal (Dipak Sir)
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
