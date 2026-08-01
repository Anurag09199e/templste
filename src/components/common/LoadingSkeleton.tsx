import React from 'react';

export const LoadingSkeleton: React.FC<{ count?: number }> = ({ count = 3 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="glass-card rounded-3xl p-6 space-y-4 animate-pulse"
        >
          <div className="h-48 bg-slate-200 dark:bg-slate-800 rounded-2xl w-full" />
          <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-lg w-3/4" />
          <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-lg w-1/2" />
          <div className="space-y-2 pt-2">
            <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-full" />
            <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-5/6" />
          </div>
          <div className="h-10 bg-slate-200 dark:bg-slate-800 rounded-xl w-full pt-4" />
        </div>
      ))}
    </div>
  );
};
