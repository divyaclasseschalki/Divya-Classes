import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showSubtitle = true }) => {
  const [imgSrc, setImgSrc] = useState('/assets/divya-classes-logo.png');
  const [imgError, setImgError] = useState(false);

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Divya Classes Official Logo Emblem */}
      <div className={`relative flex items-center justify-center rounded-full overflow-hidden bg-white border-2 border-amber-400 shadow-md ring-2 ring-blue-900/30 shrink-0 ${iconSizes[size]}`}>
        {!imgError ? (
          <img
            src={imgSrc}
            alt="Divya Classes - Empowering Minds Logo"
            className="w-full h-full object-cover scale-105"
            onError={() => {
              if (imgSrc === '/assets/divya-classes-logo.png') {
                setImgSrc('/assets/aistudio/WhatsApp_Image_2026-10-21_at_2.46.07_PM_175415b7.jpeg');
              } else {
                setImgError(true);
              }
            }}
          />
        ) : (
          <div className="w-full h-full bg-blue-900 flex items-center justify-center font-bold text-amber-400 text-xs">
            DC
          </div>
        )}
      </div>

      <div className="flex flex-col">
        <div className={`font-black tracking-tight leading-none text-slate-900 dark:text-white font-['Cinzel',serif] ${textSizes[size]}`}>
          <span className="text-blue-900 dark:text-blue-400">DIVYA</span>{' '}
          <span className="text-amber-500 font-sans tracking-normal font-extrabold">CLASSES</span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 mt-0.5">
            Empowering Minds • Begusarai
          </span>
        )}
      </div>
    </div>
  );
};
