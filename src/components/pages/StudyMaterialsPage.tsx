import React, { useState } from 'react';
import { StorageService } from '../../services/storage';
import { ResourceItem, BoardType, ClassLevel } from '../../types';
import { BoardBadge } from '../common/BoardBadges';
import {
  FileText,
  Download,
  Search,
  ExternalLink,
  BookOpen,
  Sparkles,
  Layers,
  Filter,
  CheckCircle2
} from 'lucide-react';

export const StudyMaterialsPage: React.FC = () => {
  const [resources, setResources] = useState<ResourceItem[]>(StorageService.getResources());
  const [search, setSearch] = useState('');
  const [selectedBoard, setSelectedBoard] = useState<BoardType | 'Both' | 'All'>('All');
  const [selectedClass, setSelectedClass] = useState<ClassLevel | 'Both' | 'All'>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const handleDownload = (res: ResourceItem) => {
    StorageService.incrementDownload(res.id);
    setResources(StorageService.getResources());

    if (res.fileUrl.startsWith('http')) {
      window.open(res.fileUrl, '_blank');
    } else {
      // Create download for handbook
      const element = document.createElement('a');
      const file = new Blob([
        `DIVYA CLASSES - ${res.title}\nMentor: Dipak Sir (Begusarai, Bihar)\nOfficial Educational Resource\nVisit: https://www.youtube.com/@EASYSCIENCE-j3w\n\n${res.description}\n`
      ], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = `${res.title.replace(/\s+/g, '_')}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  };

  const filteredResources = resources.filter((res) => {
    const matchesSearch =
      res.title.toLowerCase().includes(search.toLowerCase()) ||
      res.description.toLowerCase().includes(search.toLowerCase()) ||
      res.subject.toLowerCase().includes(search.toLowerCase());
    const matchesBoard = selectedBoard === 'All' || res.board === 'Both' || res.board === selectedBoard;
    const matchesClass = selectedClass === 'All' || res.classLevel === 'Both' || res.classLevel === selectedClass;
    const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;
    return matchesSearch && matchesBoard && matchesClass && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-4 h-4 text-amber-500" />
          <span>Verified Academic Study Materials</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
          Sample Papers, Revision Notes & Formula Sheets
        </h1>
        <p className="text-slate-500 text-sm max-w-2xl mx-auto">
          Download officially released CBSE & Bihar Board sample question papers, marking schemes, and Dipak Sir's handwritten chapter summaries.
        </p>

        {/* Board Official Resource Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs">
          <a
            href="https://cbseacademic.nic.in/SQP_CLASSX_2025-26.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
          >
            <span>CBSE Academic Official SQP 2025-26</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <span className="text-slate-300">•</span>
          <a
            href="https://secondary.biharboardonline.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
          >
            <span>Bihar Board Model Papers 2025-26</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-1 min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search sample papers, formula handbooks, notes..."
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
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-xl font-semibold"
          >
            <option value="All">All Categories</option>
            <option value="Sample Paper">Sample Papers</option>
            <option value="Formula Sheet">Formula Sheets</option>
            <option value="Notes">Revision Notes</option>
          </select>
        </div>
      </div>

      {/* Materials Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredResources.map((res) => (
          <div
            key={res.id}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  {res.category}
                </span>

                <span className="text-xs text-slate-400 font-mono">
                  {res.fileSize || '1.5 MB'}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                {res.title}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {res.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
                {res.board !== 'Both' && <BoardBadge board={res.board as any} size="sm" />}
                <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md font-semibold text-slate-600 dark:text-slate-400">
                  {res.classLevel}
                </span>
                <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md font-semibold text-slate-600 dark:text-slate-400">
                  {res.subject}
                </span>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                Downloaded {res.downloadCount || 0} times
              </span>

              <button
                onClick={() => handleDownload(res)}
                className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-xl text-xs transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>Download Resource</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
