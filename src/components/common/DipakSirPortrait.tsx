import React, { useState, useEffect } from 'react';
import { StorageService } from '../../services/storage';
import { Award, BookOpen, Camera, CheckCircle2, GraduationCap, MapPin, Sparkles, Star } from 'lucide-react';

interface DipakSirPortraitProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showBadges?: boolean;
}

export const DipakSirPortrait: React.FC<DipakSirPortraitProps> = ({
  className = '',
  size = 'md',
  showBadges = true
}) => {
  const [photoUrl, setPhotoUrl] = useState<string>('/assets/aistudio/dipak_sir_42213538.jpeg');
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    // Check if user uploaded a customized photo in admin
    const stored = StorageService.getTeacherPhoto();
    if (stored) {
      setPhotoUrl(stored);
    }
  }, []);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        setPhotoUrl(base64);
        setImgError(false);
        StorageService.saveTeacherPhoto(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const containerSizes = {
    sm: 'w-24 h-24',
    md: 'w-48 h-56',
    lg: 'w-64 h-72',
    hero: 'w-72 h-84 md:w-80 md:h-96'
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Outer Glow / Frame */}
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-amber-500 to-indigo-600 rounded-3xl opacity-35 group-hover:opacity-65 blur-lg transition duration-500"></div>

      {/* Distinction Badge */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-[10px] sm:text-[11px] font-black uppercase px-3.5 py-1 rounded-full shadow-lg border border-amber-300 flex items-center gap-1.5 whitespace-nowrap">
        <Star className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
        <span>Best for Teaching Maths & Science</span>
      </div>

      <div className={`relative overflow-hidden rounded-2xl bg-slate-900 border-2 border-amber-400/60 shadow-2xl flex flex-col items-center justify-center ${containerSizes[size]}`}>
        {!imgError ? (
          <img
            src={photoUrl}
            alt="Dipak Kumar (Dipak Sir) - Best for Teaching Maths & Science in Begusarai"
            className="w-full h-full object-cover object-top"
            onError={() => {
              if (photoUrl === '/assets/aistudio/dipak_sir_42213538.jpeg') {
                setPhotoUrl('/public/assets/aistudio/dipak_sir_42213538.jpeg');
              } else {
                setImgError(true);
              }
            }}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950">
            <div className="relative mb-3">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-amber-200 flex items-center justify-center shadow-lg ring-4 ring-blue-500/30">
                <GraduationCap className="w-10 h-10 text-blue-950" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white rounded-full p-1 ring-2 ring-slate-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
            </div>

            <div className="font-bold text-white text-lg leading-tight">
              Dipak Kumar
            </div>
            <div className="text-amber-400 text-xs font-semibold tracking-wide uppercase mt-0.5">
              Dipak Sir
            </div>
            <div className="text-slate-300 text-[11px] mt-1.5 flex items-center justify-center gap-1">
              <MapPin className="w-3 h-3 text-red-400 shrink-0" />
              <span>Chalki, Begusarai</span>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-800 text-[10px] text-amber-300 font-semibold">
              7 Yrs School • 5 Yrs Coaching
            </div>
          </div>
        )}

        {/* Upload Overlay Button (visible on hover) */}
        <label className="absolute bottom-2 right-2 bg-blue-950/85 hover:bg-blue-900 text-white text-xs px-2.5 py-1.5 rounded-lg border border-amber-400/40 backdrop-blur-xs cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 shadow-md">
          <Camera className="w-3.5 h-3.5 text-amber-300" />
          <span>Change Photo</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handlePhotoUpload}
            title="Upload photo"
          />
        </label>
      </div>

      {showBadges && size !== 'sm' && (
        <div className="mt-3.5 flex flex-col items-center gap-1.5 text-[11px]">
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            <span className="inline-flex items-center gap-1 bg-amber-500/15 border border-amber-500/40 text-amber-800 dark:text-amber-300 px-2.5 py-0.5 rounded-full font-bold">
              <Award className="w-3 h-3 text-amber-500" /> 7 Yrs School Teaching
            </span>
            <span className="inline-flex items-center gap-1 bg-blue-500/15 border border-blue-500/40 text-blue-800 dark:text-blue-300 px-2.5 py-0.5 rounded-full font-bold">
              <BookOpen className="w-3 h-3 text-blue-500" /> 5 Yrs Coaching
            </span>
          </div>
          <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
            Total 12+ Years Teaching Experience in Begusarai
          </span>
        </div>
      )}
    </div>
  );
};
