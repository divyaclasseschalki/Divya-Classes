import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { StorageService } from '../../services/storage';
import { DipakSirPortrait } from '../common/DipakSirPortrait';
import { BoardBadge } from '../common/BoardBadges';
import { Logo } from '../common/Logo';
import {
  BookOpen,
  GraduationCap,
  Award,
  Video,
  FileText,
  Phone,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Layers,
  MapPin,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  BrainCircuit,
  Compass
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (tab: string) => void;
  onOpenTest: (testId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenTest }) => {
  const { language, t } = useLanguage();
  const [stats] = useState(StorageService.getRealStatistics());
  const [announcements] = useState(StorageService.getAnnouncements().filter(a => a.isPublished));
  const [tests] = useState(StorageService.getTests().filter(t => t.isPublished));

  // Quick admission enquiry state
  const [quickName, setQuickName] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickBoard, setQuickBoard] = useState<'CBSE' | 'Bihar Board'>('CBSE');
  const [quickClass, setQuickClass] = useState<'Class 9' | 'Class 10'>('Class 10');
  const [quickSubmitted, setQuickSubmitted] = useState(false);

  const handleQuickAdmissionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickName.trim() || !quickPhone.trim()) return;

    StorageService.saveAdmission({
      id: `adm-${Date.now()}`,
      studentName: quickName.trim(),
      phone: quickPhone.trim(),
      board: quickBoard,
      classLevel: quickClass,
      subjects: ['Mathematics', 'Science'],
      status: 'Pending',
      createdAt: new Date().toISOString()
    });

    setQuickSubmitted(true);
    setQuickName('');
    setQuickPhone('');
  };

  return (
    <div className="space-y-16 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white pt-10 pb-20 border-b border-slate-800">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a15_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a15_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column (7 cols): Headlines & Actions */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-amber-400/30 text-amber-300 text-xs font-semibold backdrop-blur-xs">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>CBSE & Bihar Board Class 9 & 10 Coaching</span>
              </div>

              {/* Exact required headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
                Learn Better. Practice Smarter.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400">
                  Achieve More
                </span>{' '}
                with Divya Classes.
              </h1>

              {/* Exact required supporting text */}
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Prepare for CBSE and Bihar Board examinations with concept-focused Maths and Science teaching, chapter-wise study resources, practice tests, AI-generated question papers, and performance tracking.
              </p>

              {/* Board Logos & Mentorship tags */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
                <BoardBadge board="CBSE" size="md" />
                <BoardBadge board="Bihar Board" size="md" />
                <span className="text-xs text-slate-300 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                  📍 Chalki, Begusarai, Bihar
                </span>
              </div>

              {/* Five Prominent Actions */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4">
                <button
                  onClick={() => onNavigate('online_tests')}
                  className="px-6 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold rounded-xl text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Start Online Test</span>
                </button>

                <button
                  onClick={() => onNavigate('syllabus')}
                  className="px-5 py-3.5 bg-blue-900/80 hover:bg-blue-800 text-white font-semibold rounded-xl text-sm border border-blue-700 transition-all flex items-center gap-2"
                >
                  <Compass className="w-4 h-4 text-blue-300" />
                  <span>Explore Syllabus</span>
                </button>

                <button
                  onClick={() => onNavigate('study_materials')}
                  className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl text-sm border border-slate-700 transition-all flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>Download Sample Papers</span>
                </button>

                <button
                  onClick={() => onNavigate('youtube')}
                  className="px-5 py-3.5 bg-red-600/90 hover:bg-red-600 text-white font-semibold rounded-xl text-sm transition-all flex items-center gap-2"
                >
                  <Video className="w-4 h-4" />
                  <span>Watch YouTube Classes</span>
                </button>

                <button
                  onClick={() => onNavigate('admissions')}
                  className="px-5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition-all flex items-center gap-2"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Join Divya Classes</span>
                </button>
              </div>
            </div>

            {/* Right Column (5 cols): Dipak Sir Supplied Photograph & Profile */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <DipakSirPortrait size="hero" showBadges={true} />

              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2">
                  <span>Dipak Kumar</span>
                  <span className="text-amber-400 text-sm font-semibold">(Dipak Sir)</span>
                </h3>
                <p className="text-xs text-amber-300 font-bold mt-1 max-w-sm">
                  ★ Best for Teaching Maths & Science ★
                </p>
                <p className="text-xs text-slate-300 mt-0.5 max-w-xs">
                  7 Years School Teaching • 5 Years Coaching (Total 12+ Yrs) • Chalki, Begusarai
                </p>
                <div className="mt-3 flex items-center justify-center gap-3">
                  <a
                    href="tel:9065892913"
                    className="inline-flex items-center gap-1.5 text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1.5 rounded-lg font-bold hover:bg-emerald-500/30 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call: 9065892913</span>
                  </a>
                  <a
                    href="https://www.google.com/maps?q=25.714056,86.051528"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs bg-blue-900/40 text-blue-300 border border-blue-700 px-3 py-1.5 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-red-400" />
                    <span>Map Location</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LIVE DATABASE-BACKED STATISTICS (Genuine, never fabricated) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Students</div>
            <div className="text-3xl sm:text-4xl font-black text-blue-900 dark:text-blue-400 mt-1">
              {stats.totalStudents}
            </div>
            <div className="text-[11px] text-slate-500 mt-1">Verified student profiles</div>
          </div>

          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tests Completed</div>
            <div className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
              {stats.completedTests}
            </div>
            <div className="text-[11px] text-slate-500 mt-1">Total exam attempts</div>
          </div>

          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Admission Applications</div>
            <div className="text-3xl sm:text-4xl font-black text-amber-500 mt-1">
              {stats.totalAdmissions}
            </div>
            <div className="text-[11px] text-slate-500 mt-1">{stats.enrolledStudents} enrolled students</div>
          </div>

          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Study Resources</div>
            <div className="text-3xl sm:text-4xl font-black text-indigo-600 dark:text-indigo-400 mt-1">
              {stats.totalResources}
            </div>
            <div className="text-[11px] text-slate-500 mt-1">Sample papers & handbooks</div>
          </div>
        </div>
      </section>

      {/* 3. LATEST ANNOUNCEMENTS TICKER */}
      {announcements.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 rounded-2xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="p-2 bg-amber-400 text-slate-950 rounded-xl font-bold text-xs uppercase flex items-center gap-1 shrink-0">
                <Calendar className="w-4 h-4" />
                <span>Notice</span>
              </span>
              <div>
                <span className="font-bold text-slate-900 dark:text-amber-200 text-sm">
                  {announcements[0].title}:
                </span>{' '}
                <span className="text-slate-700 dark:text-slate-300 text-xs">
                  {announcements[0].content}
                </span>
              </div>
            </div>
            <button
              onClick={() => onNavigate('admissions')}
              className="text-xs font-bold text-blue-900 dark:text-amber-400 hover:underline shrink-0 flex items-center gap-1"
            >
              <span>Enroll Now</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>
      )}

      {/* 4. TARGETED COURSES SECTION (CBSE 9/10 & BIHAR BOARD 9/10) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 dark:text-amber-400 uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>Comprehensive Class Curriculum</span>
          </div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">
            Class 9 & 10 Dedicated Batches
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Focused Mathematics and Science programs structured according to the latest CBSE and Bihar Board examination guidelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: CBSE Class 10 */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border-2 border-blue-600 shadow-md hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
              Board Target
            </div>
            <div>
              <BoardBadge board="CBSE" size="sm" className="mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">CBSE Class 10</h3>
              <p className="text-xs text-slate-500 mt-1 mb-4">
                Mathematics, Science (Physics, Chemistry, Biology) & IT 402. Complete board syllabus with 20-question practice mocks.
              </p>
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>NCERT line-by-line concept clarity</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Assertion-Reason & Case Study drills</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Sunday 25-Marks practice tests</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onNavigate('courses')}
              className="w-full py-2.5 bg-blue-900 hover:bg-blue-800 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Explore CBSE 10</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: CBSE Class 9 */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <BoardBadge board="CBSE" size="sm" className="mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">CBSE Class 9</h3>
              <p className="text-xs text-slate-500 mt-1 mb-4">
                Laying strong foundational fundamentals in Number Systems, Polynomials, Motion, Force, and Cell Biology.
              </p>
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Strong numerical problem solving</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Scientific diagram representation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Class 10 bridge readiness</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onNavigate('courses')}
              className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Explore CBSE 9</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: Bihar Board Class 10 (Matric) */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border-2 border-emerald-600 shadow-md hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
              मैट्रिक विशेष
            </div>
            <div>
              <BoardBadge board="Bihar Board" size="sm" className="mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">बिहार बोर्ड मैट्रिक (Class 10)</h3>
              <p className="text-xs text-slate-500 mt-1 mb-4">
                50% वस्तुनिष्ठ (OMR) प्रश्नों की विशेष तैयारी, द्विघात समीकरण, त्रिकोणमिति, प्रकाश और जीवन प्रक्रम।
              </p>
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>100 वस्तुनिष्ठ प्रश्नों में से 50 का चयन अभ्यास</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>लघु एवं दीर्घ उत्तरीय सटीक उत्तर लेखन</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>दीपक सर द्वारा विशेष मॉडल पेपर</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onNavigate('courses')}
              className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
            >
              <span>मैट्रिक पाठ्यक्रम देखें</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 4: Bihar Board Class 9 */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <BoardBadge board="Bihar Board" size="sm" className="mb-4" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">बिहार बोर्ड कक्षा 9वीं</h3>
              <p className="text-xs text-slate-500 mt-1 mb-4">
                गणित और विज्ञान की आधारशिला। संख्या पद्धति, निर्देशांक ज्यामिति, गति और कार्य ऊर्जा की गहरी समझ।
              </p>
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>सटीक सूत्र याद करने की तकनीक</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>अध्यायवार साप्ताहिक टेस्ट</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>प्रत्येक विद्यार्थी पर व्यक्तिगत ध्यान</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onNavigate('courses')}
              className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
            >
              <span>कक्षा 9 पाठ्यक्रम देखें</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. TEACHING METHODOLOGY SECTION (Maths & Science Pedagogy) */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
              {language === 'hi' ? 'हमारी शिक्षण पद्धति' : 'Pedagogical Philosophy'}
            </span>
            <h2 className="text-3xl font-black">
              {language === 'hi'
                ? 'गणित और विज्ञान में 100% अवधारणात्मक स्पष्टता'
                : 'How Dipak Sir Teaches Mathematics and Science'}
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              Our structured approach replaces rote memorization with deep conceptual intuition, step-by-step problem breakdown, and rigorous examination practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mathematics Pedagogy */}
            <div className="bg-slate-800/80 rounded-3xl p-8 border border-slate-700 shadow-xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-400/20 text-amber-400 rounded-2xl border border-amber-400/30">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Mathematics Teaching Approach</h3>
                  <p className="text-xs text-slate-400">Concept Mastery & Board Accuracy</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/60">
                  <strong className="text-amber-300 block mb-1">Step-by-Step Solving</strong>
                  Logical progression from theorem statements to final answers.
                </div>
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/60">
                  <strong className="text-amber-300 block mb-1">Conceptual Understanding</strong>
                  Why formulas work before applying them in problems.
                </div>
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/60">
                  <strong className="text-amber-300 block mb-1">Calculation Accuracy</strong>
                  Eliminating common sign and algebraic calculation mistakes.
                </div>
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/60">
                  <strong className="text-amber-300 block mb-1">Board-Style Questions</strong>
                  Previous year questions (PYQs) and high-probability problems.
                </div>
              </div>
            </div>

            {/* Science Pedagogy */}
            <div className="bg-slate-800/80 rounded-3xl p-8 border border-slate-700 shadow-xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-500/20 text-blue-400 rounded-2xl border border-blue-500/30">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Science Teaching Approach</h3>
                  <p className="text-xs text-slate-400">Physics, Chemistry, and Biology Synergy</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/60">
                  <strong className="text-blue-300 block mb-1">Ray Diagrams & Circuits</strong>
                  Clear, reproducible drawing techniques for full marks in Physics.
                </div>
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/60">
                  <strong className="text-blue-300 block mb-1">Chemical Equations</strong>
                  Balancing equations and mastering color change observations.
                </div>
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/60">
                  <strong className="text-blue-300 block mb-1">Biological Processes</strong>
                  Heart, nephron, brain and digestion mechanisms simplified.
                </div>
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/60">
                  <strong className="text-blue-300 block mb-1">Assertion & Reasoning</strong>
                  Training logical deduction to ace modern board test patterns.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SAMPLE TESTS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Official Practice Examination Series
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Attempt the 20-question, 25-mark Divya Classes model tests with instant scoring.
            </p>
          </div>
          <button
            onClick={() => onNavigate('online_tests')}
            className="text-xs font-bold text-blue-900 dark:text-amber-400 hover:underline flex items-center gap-1"
          >
            <span>View All Tests</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tests.map((test) => (
            <div
              key={test.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <BoardBadge board={test.board} size="sm" />
                  <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-1 rounded-lg">
                    {test.durationMinutes} Mins • {test.totalMarks} Marks
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {test.title}
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  {test.chapter} • Language: {test.language}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  {test.questions.length} Questions (MCQs + Assertion-Reason + Subjective)
                </span>
                <button
                  onClick={() => onOpenTest(test.id)}
                  className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded-xl text-xs font-bold transition-colors"
                >
                  Start Exam
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. ADMISSIONS & QUICK ENQUIRY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Direct Enrollment
              </span>
              <h2 className="text-3xl sm:text-4xl font-black">
                Join Divya Classes Offline or Online Batches
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Take the first step toward board exam distinction in Maths and Science. Submit your enquiry below or speak directly with Dipak Sir at Chalki, Begusarai.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-red-400" />
                  <span>Chalki, Begusarai, Bihar</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <a href="tel:9065892913" className="hover:underline font-bold text-white">
                    9065892913
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Enquiry Form */}
            <div className="lg:col-span-5 bg-white text-slate-900 p-6 rounded-2xl shadow-xl">
              {quickSubmitted ? (
                <div className="text-center py-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-lg text-slate-900">Enquiry Received!</h4>
                  <p className="text-xs text-slate-500">
                    Thank you. Dipak Sir will contact you shortly on your provided mobile number.
                  </p>
                  <button
                    onClick={() => setQuickSubmitted(false)}
                    className="text-xs text-blue-900 font-bold hover:underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuickAdmissionSubmit} className="space-y-3">
                  <h4 className="font-bold text-base text-slate-900">Quick Admission Form</h4>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Student Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aditya Kumar"
                      value={quickName}
                      onChange={(e) => setQuickName(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9835xxxxxx"
                      value={quickPhone}
                      onChange={(e) => setQuickPhone(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Board
                      </label>
                      <select
                        value={quickBoard}
                        onChange={(e) => setQuickBoard(e.target.value as any)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium"
                      >
                        <option value="CBSE">CBSE Board</option>
                        <option value="Bihar Board">Bihar Board (BSEB)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Class
                      </label>
                      <select
                        value={quickClass}
                        onChange={(e) => setQuickClass(e.target.value as any)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium"
                      >
                        <option value="Class 10">Class 10</option>
                        <option value="Class 9">Class 9</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider shadow-md transition-all mt-2"
                  >
                    Request Callback from Dipak Sir
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
