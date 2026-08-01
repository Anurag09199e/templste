import React from 'react';
import { CEFRLevel } from '../../types';

interface LevelBadgeProps {
  level: CEFRLevel;
  size?: 'sm' | 'md' | 'lg';
}

export const LevelBadge: React.FC<LevelBadgeProps> = ({ level, size = 'md' }) => {
  const levelColors: Record<CEFRLevel, string> = {
    A1: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
    A2: 'bg-teal-500/15 text-teal-600 dark:text-teal-400 border-teal-500/30',
    B1: 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30',
    B2: 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 border-indigo-500/30',
    C1: 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30',
    C2: 'bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/30',
  };

  const sizeClasses = {
    sm: 'px-2.5 py-0.5 text-xs font-bold rounded-lg',
    md: 'px-3 py-1 text-xs font-extrabold rounded-xl',
    lg: 'px-4 py-1.5 text-sm font-extrabold rounded-xl tracking-wide',
  };

  return (
    <span className={`inline-flex items-center border font-heading ${levelColors[level]} ${sizeClasses[size]}`}>
      CEFR {level}
    </span>
  );
};
