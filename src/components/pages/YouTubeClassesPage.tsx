import React, { useState } from 'react';
import { INITIAL_YOUTUBE_VIDEOS } from '../../data/initialData';
import { Video, ExternalLink, Play, CheckCircle2, Search, Filter } from 'lucide-react';

export const YouTubeClassesPage: React.FC = () => {
  const [videos] = useState(INITIAL_YOUTUBE_VIDEOS);
  const [selectedSubject, setSelectedSubject] = useState<'All' | 'Science' | 'Mathematics'>('All');
  const [activeVideoId, setActiveVideoId] = useState<string | null>(videos[0]?.videoId || null);

  const filtered = videos.filter((v) => {
    return selectedSubject === 'All' || v.subject === selectedSubject;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
            <Video className="w-4 h-4" />
            <span>Official YouTube Education Channel</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Easy Science by Dipak Sir
          </h1>
          <p className="text-white/90 text-sm sm:text-base max-w-xl leading-relaxed">
            Free high-definition concept lectures, laboratory experiment explanations, and board examination numerical tricks for CBSE and Bihar Board students.
          </p>
        </div>

        <div className="shrink-0 text-center">
          <a
            href="https://www.youtube.com/@EASYSCIENCE-j3w"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white hover:bg-slate-100 text-red-600 font-black rounded-2xl text-sm uppercase tracking-wider shadow-xl transition-all transform hover:scale-105 inline-flex items-center gap-2"
          >
            <span>Subscribe on YouTube</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <div className="text-xs text-white/80 mt-2 font-medium">
            @EASYSCIENCE-j3w
          </div>
        </div>
      </div>

      {/* Featured Video Player Box */}
      {activeVideoId && (
        <div className="bg-slate-900 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 space-y-4">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-inner">
            <iframe
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=0&rel=0`}
              title="Easy Science by Dipak Sir Lecture"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 text-white">
            <div className="flex items-center gap-2 text-xs text-slate-300 font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
              <span>Easy Science by Dipak Sir • Concept Class</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold">
              <a
                href="https://youtu.be/XpKBMlitiag?si=tMuPo3QEzMnmWIpu"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-red-600 hover:bg-red-500 text-white flex items-center gap-1.5 shadow-md"
              >
                <span>Watch on YouTube App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.youtube.com/@EASYSCIENCE-j3w"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 flex items-center gap-1"
              >
                <span>Channel Playlist</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Video Catalog */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Featured Chapter Video Lessons
          </h2>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedSubject('All')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedSubject === 'All'
                  ? 'bg-red-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              All Subjects
            </button>
            <button
              onClick={() => setSelectedSubject('Science')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedSubject === 'Science'
                  ? 'bg-red-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              Science Lessons
            </button>
            <button
              onClick={() => setSelectedSubject('Mathematics')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedSubject === 'Mathematics'
                  ? 'bg-red-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
              }`}
            >
              Maths Lessons
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideoId(video.videoId)}
              className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                  <div className="w-12 h-12 rounded-full bg-red-600 group-hover:scale-110 text-white flex items-center justify-center shadow-lg transition-transform">
                    <Play className="w-5 h-5 ml-1 fill-white" />
                  </div>
                  <span className="absolute bottom-2 left-2 text-[10px] bg-black/70 text-white px-2 py-0.5 rounded-md font-mono">
                    {video.subject}
                  </span>
                </div>

                <h3 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-2 leading-snug group-hover:text-red-500 transition-colors">
                  {video.title}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {video.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>{video.board}</span>
                <span className="text-red-500 font-bold group-hover:underline">Play in Video Player →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
