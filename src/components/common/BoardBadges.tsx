import React, { useState } from 'react';

interface BoardBadgeProps {
  board: 'CBSE' | 'Bihar Board';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BoardBadge: React.FC<BoardBadgeProps> = ({ board, className = '', size = 'md' }) => {
  const isCBSE = board === 'CBSE';
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    sm: 'text-xs px-2.5 py-1 gap-2',
    md: 'text-sm px-3.5 py-1.5 gap-2.5 font-semibold',
    lg: 'text-base px-4 py-2 gap-3 font-bold'
  };

  const logoSizes = {
    sm: 'w-5 h-5',
    md: 'w-7 h-7',
    lg: 'w-9 h-9'
  };

  const logoSrc = isCBSE ? '/assets/cbse-logo.png' : '/assets/bseb-logo.png';

  return (
    <div
      className={`inline-flex items-center rounded-xl font-semibold transition-all border shadow-xs ${
        isCBSE
          ? 'bg-blue-50/90 dark:bg-blue-950/60 text-blue-900 dark:text-blue-200 border-blue-200 dark:border-blue-800'
          : 'bg-emerald-50/90 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800'
      } ${sizeClasses[size]} ${className}`}
    >
      {/* Official Board Logo Image */}
      <span className={`shrink-0 flex items-center justify-center rounded-md overflow-hidden bg-white p-0.5 shadow-xs border ${logoSizes[size]}`}>
        {!imgError ? (
          <img
            src={logoSrc}
            alt={isCBSE ? 'CBSE Official Logo' : 'Bihar School Examination Board (BSEB) Logo'}
            className="w-full h-full object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="text-[10px] font-black">{isCBSE ? 'CBSE' : 'BSEB'}</span>
        )}
      </span>

      <span>{isCBSE ? 'CBSE Board' : 'Bihar Board (BSEB)'}</span>
    </div>
  );
};
