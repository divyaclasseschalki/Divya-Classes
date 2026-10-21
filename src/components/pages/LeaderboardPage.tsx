import React, { useState } from 'react';
import { StorageService } from '../../services/storage';
import { Award, Trophy, Medal, Star, ShieldCheck, Calendar } from 'lucide-react';
import { BoardBadge } from '../common/BoardBadges';

export const LeaderboardPage: React.FC = () => {
  const [topPerformers] = useState(StorageService.getMonthlyTopFive());
  const currentMonthYear = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
          <Trophy className="w-4 h-4 text-amber-500" />
          <span>Monthly Academic Honors • {currentMonthYear}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
          Monthly Top Five Leaderboard
        </h1>
        <p className="text-slate-500 text-sm max-w-2xl mx-auto">
          Recognizing the five highest-performing students across CBSE and Bihar Board test evaluations. Ranks are computed automatically from verified test attempts.
        </p>
      </div>

      {/* Top 3 Podium Cards */}
      {topPerformers.length >= 3 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 items-end">
          {/* Rank 2 (Silver) */}
          <div className="order-2 md:order-1 bg-white dark:bg-slate-900 rounded-3xl p-6 border-2 border-slate-300 dark:border-slate-700 shadow-lg text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-slate-400 text-slate-500 flex items-center justify-center mx-auto text-2xl font-black shadow-md">
              🥈 2
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Second Rank
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                {topPerformers[1].studentName}
              </h3>
              <div className="text-xs text-slate-500 font-mono mt-0.5">
                {topPerformers[1].studentId}
              </div>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl">
              <div className="text-2xl font-black text-slate-800 dark:text-slate-200">
                {topPerformers[1].averagePercentage}%
              </div>
              <div className="text-[11px] text-slate-400">
                Avg. Score across {topPerformers[1].testsCompleted} tests
              </div>
            </div>

            <div className="text-xs text-slate-500 font-medium">
              {topPerformers[1].board} • {topPerformers[1].classLevel}
            </div>
          </div>

          {/* Rank 1 (Gold) */}
          <div className="order-1 md:order-2 bg-gradient-to-b from-amber-50 to-white dark:from-amber-950/40 dark:to-slate-900 rounded-3xl p-8 border-2 border-amber-400 shadow-2xl text-center space-y-4 -mt-4 relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-md tracking-wider flex items-center gap-1">
              <Star className="w-3 h-3 fill-slate-950" />
              <span>Monthly Champion</span>
            </div>

            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-amber-200 text-slate-950 flex items-center justify-center mx-auto text-3xl font-black shadow-xl ring-4 ring-amber-400/40">
              🥇 1
            </div>

            <div>
              <span className="text-xs font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                First Rank
              </span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                {topPerformers[0].studentName}
              </h3>
              <div className="text-xs text-slate-500 font-mono mt-0.5">
                {topPerformers[0].studentId}
              </div>
            </div>

            <div className="p-4 bg-amber-100/60 dark:bg-amber-950/60 rounded-2xl border border-amber-300 dark:border-amber-800">
              <div className="text-3xl font-black text-amber-900 dark:text-amber-300">
                {topPerformers[0].averagePercentage}%
              </div>
              <div className="text-xs text-amber-800 dark:text-amber-400 font-medium">
                Avg. Score across {topPerformers[0].testsCompleted} tests
              </div>
            </div>

            <div className="text-xs text-slate-600 dark:text-slate-300 font-bold">
              {topPerformers[0].board} • {topPerformers[0].classLevel}
            </div>
          </div>

          {/* Rank 3 (Bronze) */}
          <div className="order-3 bg-white dark:bg-slate-900 rounded-3xl p-6 border-2 border-amber-700/50 shadow-lg text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-900/10 dark:bg-amber-950/80 border-2 border-amber-600 text-amber-700 dark:text-amber-400 flex items-center justify-center mx-auto text-2xl font-black shadow-md">
              🥉 3
            </div>
            <div>
              <span className="text-xs font-bold text-amber-700 dark:text-amber-500 uppercase tracking-wider">
                Third Rank
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                {topPerformers[2].studentName}
              </h3>
              <div className="text-xs text-slate-500 font-mono mt-0.5">
                {topPerformers[2].studentId}
              </div>
            </div>

            <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl">
              <div className="text-2xl font-black text-slate-800 dark:text-slate-200">
                {topPerformers[2].averagePercentage}%
              </div>
              <div className="text-[11px] text-slate-400">
                Avg. Score across {topPerformers[2].testsCompleted} tests
              </div>
            </div>

            <div className="text-xs text-slate-500 font-medium">
              {topPerformers[2].board} • {topPerformers[2].classLevel}
            </div>
          </div>
        </div>
      )}

      {/* Complete Top 5 Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <h3 className="font-bold text-slate-900 dark:text-white text-base">
            Verified Rank List ({topPerformers.length} Qualifiers)
          </h3>
          <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Strict Privacy Safeguards Active</span>
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-500 text-xs uppercase font-bold tracking-wider border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="px-6 py-4">Rank</th>
                <th className="px-6 py-4">Student Public Name</th>
                <th className="px-6 py-4">Student ID</th>
                <th className="px-6 py-4">Board & Class</th>
                <th className="px-6 py-4">Average Percentage</th>
                <th className="px-6 py-4">Tests Completed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {topPerformers.map((student, idx) => (
                <tr key={student.studentId} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                  <td className="px-6 py-4 font-black text-base">
                    {idx === 0 ? '🥇 #1' : idx === 1 ? '🥈 #2' : idx === 2 ? '🥉 #3' : `#${idx + 1}`}
                  </td>
                  <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">
                    {student.studentName}
                  </td>
                  <td className="px-6 py-4 font-mono text-xs text-slate-500">
                    {student.studentId}
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-semibold">{student.board}</span> - {student.classLevel}
                  </td>
                  <td className="px-6 py-4 font-black font-mono text-blue-900 dark:text-amber-400">
                    {student.averagePercentage}%
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">
                    {student.testsCompleted} tests
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
