import React, { useState } from 'react';
import { StorageService } from '../../services/storage';
import { SyllabusChapter, BoardType, ClassLevel } from '../../types';
import { BoardBadge } from '../common/BoardBadges';
import {
  Compass,
  Search,
  CheckCircle,
  Clock,
  Circle,
  ExternalLink,
  BookOpen,
  Filter
} from 'lucide-react';

export const SyllabusPage: React.FC = () => {
  const [chapters, setChapters] = useState<SyllabusChapter[]>(StorageService.getSyllabus());
  const [search, setSearch] = useState('');
  const [selectedBoard, setSelectedBoard] = useState<BoardType | 'All'>('All');
  const [selectedClass, setSelectedClass] = useState<ClassLevel | 'All'>('All');
  const [selectedSubject, setSelectedSubject] = useState<string>('All');

  const handleStatusChange = (chapterId: string, newStatus: SyllabusChapter['status']) => {
    StorageService.updateSyllabusStatus(chapterId, newStatus);
    setChapters(StorageService.getSyllabus());
  };

  const filteredChapters = chapters.filter((c) => {
    const matchesSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase()) ||
      c.keyTopics.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchesBoard = selectedBoard === 'All' || c.board === selectedBoard;
    const matchesClass = selectedClass === 'All' || c.classLevel === selectedClass;
    const matchesSubject = selectedSubject === 'All' || c.subject === selectedSubject;
    return matchesSearch && matchesBoard && matchesClass && matchesSubject;
  });

  // Calculate syllabus completion percentage
  const completedCount = filteredChapters.filter((c) => c.status === 'Completed').length;
  const inProgressCount = filteredChapters.filter((c) => c.status === 'In Progress').length;
  const percentCompleted = filteredChapters.length > 0 ? Math.round((completedCount / filteredChapters.length) * 100) : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
          <Compass className="w-4 h-4 text-amber-500" />
          <span>Curriculum & Progress Tracker (Session 2025-2026)</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
          CBSE & Bihar Board Complete Syllabus Library
        </h1>
        <p className="text-slate-500 text-sm max-w-2xl mx-auto">
          Explore chapter learning objectives, track topic completion status, and access verified board curricula.
        </p>

        {/* Official Board Reference Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs">
          <a
            href="https://cbseacademic.nic.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
          >
            <span>Official CBSE Academic Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <span className="text-slate-300">•</span>
          <a
            href="https://secondary.biharboardonline.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
          >
            <span>Official BSEB Secondary Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Progress Bar Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-white rounded-3xl p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Syllabus Completion Overview
          </div>
          <div className="text-2xl font-bold">
            {completedCount} of {filteredChapters.length} Chapters Mastered ({percentCompleted}%)
          </div>
          <div className="text-xs text-slate-300">
            {inProgressCount} chapters currently in progress under Dipak Sir's lecture plan.
          </div>
        </div>

        {/* Visual Progress Bar */}
        <div className="w-full md:w-72 bg-white/10 rounded-full h-4 overflow-hidden p-0.5 border border-white/20">
          <div
            className="bg-gradient-to-r from-amber-400 to-emerald-400 h-full rounded-full transition-all duration-500"
            style={{ width: `${percentCompleted}%` }}
          ></div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-1 min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search chapters, theorems, formulas, or key topics..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-sm focus:outline-hidden"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs">
          <select
            value={selectedBoard}
            onChange={(e) => setSelectedBoard(e.target.value as any)}
            className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-xl font-semibold"
          >
            <option value="All">All Boards</option>
            <option value="CBSE">CBSE Board</option>
            <option value="Bihar Board">Bihar Board (BSEB)</option>
          </select>

          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value as any)}
            className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-xl font-semibold"
          >
            <option value="All">All Classes</option>
            <option value="Class 10">Class 10</option>
            <option value="Class 9">Class 9</option>
          </select>

          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-xl font-semibold"
          >
            <option value="All">All Subjects</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Science">Science</option>
          </select>
        </div>
      </div>

      {/* Chapters Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredChapters.map((chapter) => (
          <div
            key={chapter.id}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <BoardBadge board={chapter.board} size="sm" />
                  <span className="text-xs font-bold text-slate-500">
                    {chapter.classLevel}
                  </span>
                  {chapter.subCategory && (
                    <span className="text-xs bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-md font-semibold">
                      {chapter.subCategory}
                    </span>
                  )}
                </div>

                {/* Status Selector */}
                <select
                  value={chapter.status}
                  onChange={(e) => handleStatusChange(chapter.id, e.target.value as any)}
                  className={`text-xs font-bold px-2.5 py-1 rounded-lg border focus:outline-hidden ${
                    chapter.status === 'Completed'
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300'
                      : chapter.status === 'In Progress'
                      ? 'bg-amber-50 text-amber-800 border-amber-300 dark:bg-amber-950/40 dark:text-amber-300'
                      : 'bg-slate-100 text-slate-600 border-slate-300 dark:bg-slate-800 dark:text-slate-400'
                  }`}
                >
                  <option value="Not Started">Not Started</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-slate-400">
                  Chapter {chapter.chapterNumber}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {chapter.title}
                </h3>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {chapter.description}
              </p>

              {/* Key topics badges */}
              <div className="pt-2">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                  Core Topics Tested in Board Exams:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {chapter.keyTopics.map((topic, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
