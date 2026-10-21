import React, { useState, useMemo } from 'react';
import { StorageService } from '../../services/storage';
import { Test, BoardType, ClassLevel } from '../../types';
import { BoardBadge } from '../common/BoardBadges';
import {
  BookOpen,
  Clock,
  Award,
  ArrowRight,
  Filter,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  FileCheck2,
  Search,
  BookMarked,
  Check,
  X
} from 'lucide-react';

interface OnlineTestsPageProps {
  onStartExam: (test: Test) => void;
}

export const OnlineTestsPage: React.FC<OnlineTestsPageProps> = ({ onStartExam }) => {
  const [tests] = useState<Test[]>(() => StorageService.getTests().filter((t) => t.isPublished));

  // Guided wizard flow state
  const [isGuidedMode, setIsGuidedMode] = useState(false);
  const [guideBoard, setGuideBoard] = useState<BoardType>('CBSE');
  const [guideClass, setGuideClass] = useState<ClassLevel>('Class 10');
  const [guideSubject, setGuideSubject] = useState<string>('Mathematics');
  const [guideChapterId, setGuideChapterId] = useState<string>('any');

  // Filter state for catalog view
  const [selectedSubject, setSelectedSubject] = useState<string>('All');
  const [filterBoard, setFilterBoard] = useState<BoardType | 'All'>('All');
  const [filterClass, setFilterClass] = useState<ClassLevel | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Available subjects derived dynamically
  const subjects = useMemo(() => {
    return ['All', 'Mathematics', 'Science', 'Social Science', 'Hindi', 'English', 'Sanskrit'];
  }, []);

  // Filtered tests logic
  const filteredTests = useMemo(() => {
    return tests.filter((t) => {
      const matchesBoard = filterBoard === 'All' || t.board === filterBoard;
      const matchesClass = filterClass === 'All' || t.classLevel === filterClass;
      
      let matchesSubject = true;
      if (selectedSubject !== 'All') {
        matchesSubject = t.subject.toLowerCase().includes(selectedSubject.toLowerCase());
      }

      let matchesSearch = true;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        matchesSearch =
          t.title.toLowerCase().includes(q) ||
          (t.chapter && t.chapter.toLowerCase().includes(q)) ||
          t.subject.toLowerCase().includes(q) ||
          t.board.toLowerCase().includes(q);
      }

      return matchesBoard && matchesClass && matchesSubject && matchesSearch;
    });
  }, [tests, filterBoard, filterClass, selectedSubject, searchQuery]);

  // Guided launch logic
  const guidedCandidates = useMemo(() => {
    return tests.filter(
      (t) =>
        t.board === guideBoard &&
        t.classLevel === guideClass &&
        t.subject.toLowerCase().includes(guideSubject.toLowerCase())
    );
  }, [tests, guideBoard, guideClass, guideSubject]);

  const handleLaunchGuided = () => {
    if (guideChapterId !== 'any') {
      const chosen = tests.find((t) => t.id === guideChapterId);
      if (chosen) {
        onStartExam(chosen);
        return;
      }
    }

    if (guidedCandidates.length > 0) {
      onStartExam(guidedCandidates[0]);
    } else if (tests.length > 0) {
      onStartExam(tests[0]);
    }
  };

  const getSubjectColorBadge = (sub: string) => {
    const s = sub.toLowerCase();
    if (s.includes('math')) return 'bg-blue-100 text-blue-900 border-blue-200 dark:bg-blue-950/70 dark:text-blue-300 dark:border-blue-800';
    if (s.includes('sci')) return 'bg-emerald-100 text-emerald-900 border-emerald-200 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-800';
    if (s.includes('social') || s.includes('sst')) return 'bg-amber-100 text-amber-900 border-amber-200 dark:bg-amber-950/70 dark:text-amber-300 dark:border-amber-800';
    if (s.includes('hindi')) return 'bg-purple-100 text-purple-900 border-purple-200 dark:bg-purple-950/70 dark:text-purple-300 dark:border-purple-800';
    if (s.includes('eng')) return 'bg-rose-100 text-rose-900 border-rose-200 dark:bg-rose-950/70 dark:text-rose-300 dark:border-rose-800';
    if (s.includes('sansk')) return 'bg-orange-100 text-orange-900 border-orange-200 dark:bg-orange-950/70 dark:text-orange-300 dark:border-orange-800';
    return 'bg-slate-100 text-slate-800 border-slate-200 dark:bg-slate-800 dark:text-slate-300';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header Banner */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
          <FileCheck2 className="w-4 h-4 text-amber-500" />
          <span>Real Examination Engine (Standard 20-Questions / 25-Marks Blueprint)</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
          Chapter-Wise Online Examination Portal
        </h1>
        <p className="text-slate-500 text-sm max-w-3xl mx-auto">
          Comprehensive tests for <strong>every chapter of all subjects</strong> (Mathematics, Science, Social Science, Hindi, English, Sanskrit) across <strong>Class 9 & 10</strong> for both <strong>CBSE and Bihar Board (BSEB)</strong>.
        </p>

        {/* Action Toggle */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setIsGuidedMode(!isGuidedMode)}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-500 text-slate-950 transition-colors shadow-sm inline-flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>{isGuidedMode ? 'Switch to Full Chapter Catalog' : 'Open Guided Test Selector'}</span>
          </button>
        </div>
      </div>

      {/* 1. GUIDED TEST SELECTION WIZARD */}
      {isGuidedMode && (
        <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-amber-400/30 space-y-6">
          <div className="border-b border-white/10 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Guided Test Setup
            </span>
            <h3 className="text-xl font-bold mt-1">
              Select Your Target Board, Class & Chapter
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Choose your subject and chapter to instantly enter a 45-minute timed test environment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Step 1: Board */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">
                1. Select Board
              </label>
              <select
                value={guideBoard}
                onChange={(e) => setGuideBoard(e.target.value as BoardType)}
                className="w-full bg-slate-800 border border-slate-700 text-white text-xs font-semibold px-3 py-2.5 rounded-xl"
              >
                <option value="CBSE">CBSE Board</option>
                <option value="Bihar Board">Bihar Board (BSEB)</option>
              </select>
            </div>

            {/* Step 2: Class */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">
                2. Select Class
              </label>
              <select
                value={guideClass}
                onChange={(e) => setGuideClass(e.target.value as ClassLevel)}
                className="w-full bg-slate-800 border border-slate-700 text-white text-xs font-semibold px-3 py-2.5 rounded-xl"
              >
                <option value="Class 10">Class 10</option>
                <option value="Class 9">Class 9</option>
              </select>
            </div>

            {/* Step 3: Subject */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">
                3. Subject
              </label>
              <select
                value={guideSubject}
                onChange={(e) => {
                  setGuideSubject(e.target.value);
                  setGuideChapterId('any');
                }}
                className="w-full bg-slate-800 border border-slate-700 text-white text-xs font-semibold px-3 py-2.5 rounded-xl"
              >
                <option value="Mathematics">Mathematics (गणित)</option>
                <option value="Science">Science (विज्ञान)</option>
                <option value="Social Science">Social Science (सामाजिक विज्ञान)</option>
                <option value="Hindi">Hindi (हिंदी)</option>
                <option value="English">English (अंग्रेजी)</option>
                <option value="Sanskrit">Sanskrit (संस्कृत - BSEB)</option>
              </select>
            </div>

            {/* Step 4: Specific Chapter Test */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">
                4. Select Chapter Test
              </label>
              <select
                value={guideChapterId}
                onChange={(e) => setGuideChapterId(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 text-white text-xs font-semibold px-3 py-2.5 rounded-xl"
              >
                <option value="any">Any Available Chapter Test</option>
                {guidedCandidates.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.chapter || c.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Test Pattern Bar */}
          <div className="bg-white/10 p-4 rounded-2xl flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="space-y-1">
              <span className="font-bold text-amber-300">Divya Classes Practice Blueprint:</span>
              <div className="text-slate-200">
                20 Questions • 25 Total Marks • 45 Minutes Duration • Timer, OMR Palette & Instant Model Solutions
              </div>
            </div>

            <button
              onClick={handleLaunchGuided}
              className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg transition-transform transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
            >
              <span>Begin Chapter Test Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 2. SUBJECT TABS */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <BookMarked className="w-5 h-5 text-amber-500" />
            <span>Select Subject to Explore Chapter Tests</span>
          </h2>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Showing {filteredTests.length} of {tests.length} tests
          </span>
        </div>

        {/* Subject Pills */}
        <div className="flex flex-wrap gap-2">
          {subjects.map((sub) => {
            const count =
              sub === 'All'
                ? tests.length
                : tests.filter((t) => t.subject.toLowerCase().includes(sub.toLowerCase())).length;

            const isSelected = selectedSubject === sub;
            return (
              <button
                key={sub}
                onClick={() => setSelectedSubject(sub)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-blue-900 text-white shadow-md ring-2 ring-amber-400'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-400'
                }`}
              >
                <span>{sub === 'All' ? 'All Subjects' : sub}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    isSelected
                      ? 'bg-amber-400 text-slate-950 font-black'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. SEARCH & SECONDARY FILTERS BAR */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        {/* Search bar */}
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search chapter e.g. Real Numbers, Light, Life Processes, समास..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Board and Class dropdown filters */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end text-xs">
          <select
            value={filterBoard}
            onChange={(e) => setFilterBoard(e.target.value as any)}
            className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-xl font-semibold text-slate-800 dark:text-slate-200"
          >
            <option value="All">All Boards</option>
            <option value="CBSE">CBSE Board</option>
            <option value="Bihar Board">Bihar Board (BSEB)</option>
          </select>

          <select
            value={filterClass}
            onChange={(e) => setFilterClass(e.target.value as any)}
            className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-xl font-semibold text-slate-800 dark:text-slate-200"
          >
            <option value="All">All Classes</option>
            <option value="Class 10">Class 10</option>
            <option value="Class 9">Class 9</option>
          </select>
        </div>
      </div>

      {/* 4. CHAPTER TEST CARDS GRID */}
      {filteredTests.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 space-y-3">
          <HelpCircle className="w-12 h-12 text-slate-400 mx-auto" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            No Chapter Tests Found
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try adjusting your search keyword or switching between CBSE and Bihar Board filters.
          </p>
          <button
            onClick={() => {
              setSelectedSubject('All');
              setFilterBoard('All');
              setFilterClass('All');
              setSearchQuery('');
            }}
            className="mt-2 px-4 py-2 bg-blue-900 text-white text-xs font-bold rounded-xl"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTests.map((test) => (
            <div
              key={test.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                {/* Top Badge Bar */}
                <div className="flex items-center justify-between gap-2">
                  <BoardBadge board={test.board} size="sm" />
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg border ${getSubjectColorBadge(test.subject)}`}>
                    {test.subject} • {test.classLevel}
                  </span>
                </div>

                {/* Chapter & Title */}
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-amber-500 mb-1">
                    {test.chapter || 'Chapter Exam'}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-blue-900 dark:group-hover:text-amber-400 transition-colors">
                    {test.title}
                  </h3>
                </div>

                {/* Test Metrics */}
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 pt-1">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-blue-500" />
                    <span>{test.durationMinutes} Mins</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span>{test.totalMarks} Marks ({test.questions.length} Qs)</span>
                  </div>
                  <span>•</span>
                  <span className="font-semibold">{test.language}</span>
                </div>

                {/* Blueprint Highlights */}
                <div className="pt-2 text-[11px] text-slate-600 dark:text-slate-400 space-y-1 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Section A: Single Choice MCQs</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Section B: Concept & Assertion-Reason</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>Section C & D: Numerical & Subjective</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium">
                  Passing: {test.passingMarks} / {test.totalMarks} Marks
                </span>

                <button
                  onClick={() => onStartExam(test)}
                  className="px-4 py-2 bg-blue-900 hover:bg-blue-800 dark:bg-amber-400 dark:hover:bg-amber-500 text-white dark:text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center gap-1.5 shadow-md group-hover:scale-105 transform cursor-pointer"
                >
                  <span>Take Chapter Test</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
