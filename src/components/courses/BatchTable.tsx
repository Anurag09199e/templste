import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, Video, ArrowRight } from 'lucide-react';
import { UPCOMING_BATCHES } from '../../data/mockData';
import { LevelBadge } from '../common/LevelBadge';
import { GradientButton } from '../common/GradientButton';

export const BatchTable: React.FC = () => {
  return (
    <div className="glass-card rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-2xl">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800 text-xs uppercase tracking-wider font-extrabold text-slate-700 dark:text-slate-300">
              <th className="py-4 px-6">Course Level</th>
              <th className="py-4 px-6">Start Date</th>
              <th className="py-4 px-6">Batch Schedule</th>
              <th className="py-4 px-6">Mode</th>
              <th className="py-4 px-6">Instructor</th>
              <th className="py-4 px-6 text-center">Seats Left</th>
              <th className="py-4 px-6 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/60 dark:divide-slate-800/60 text-xs sm:text-sm font-medium text-[#200e4f] dark:text-slate-200">
            {UPCOMING_BATCHES.map((batch) => (
              <tr
                key={batch.id}
                className="hover:bg-amber-500/5 transition-colors group"
              >
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <LevelBadge level={batch.courseLevel} size="sm" />
                    <span className="font-bold font-heading text-[#200e4f] dark:text-white">
                      {batch.courseLevel} Batch
                    </span>
                  </div>
                </td>

                <td className="py-4 px-6 font-bold text-amber-600 dark:text-amber-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {batch.startDate}
                  </div>
                </td>

                <td className="py-4 px-6 text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-slate-400" />
                    {batch.timing}
                  </div>
                </td>

                <td className="py-4 px-6">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 font-bold text-xs border border-sky-500/20">
                    <Video className="w-3.5 h-3.5" />
                    {batch.mode}
                  </span>
                </td>

                <td className="py-4 px-6 font-semibold">
                  {batch.instructor}
                </td>

                <td className="py-4 px-6 text-center">
                  <span className="px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 font-extrabold text-xs animate-pulse">
                    {batch.seatsLeft} seats left
                  </span>
                </td>

                <td className="py-4 px-6 text-right">
                  <Link to="/contact">
                    <GradientButton size="sm">
                      Reserve Spot
                    </GradientButton>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

