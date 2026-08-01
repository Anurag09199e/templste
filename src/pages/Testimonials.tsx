import React from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
import { GlassCard } from '../components/common/GlassCard';
import { TESTIMONIALS } from '../data/mockData';
import { LevelBadge } from '../components/common/LevelBadge';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <div className="pt-32 pb-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 font-extrabold text-xs uppercase tracking-widest border border-amber-500/20">
            Verified Reviews
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white">
            What Our <span className="text-gradient">Students Say</span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400">
            100% verified alumni reviews from Goethe-Zertifikat test takers, medical professionals, engineers, and university students studying across Germany.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((test) => (
            <GlassCard key={test.id} className="p-8 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={test.avatar}
                      alt={test.name}
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-amber-500/50"
                    />
                    <div>
                      <h4 className="font-extrabold font-heading text-base text-slate-900 dark:text-white">{test.name}</h4>
                      <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold">{test.role}</p>
                    </div>
                  </div>
                  <LevelBadge level={test.courseCompleted} size="md" />
                </div>

                <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-500 font-extrabold text-xs rounded-xl border border-emerald-500/20">
                  <ShieldCheck className="w-4 h-4" /> {test.goetheScore}
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed mb-6">
                  "{test.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-xs font-bold text-slate-500">
                <span>{test.destination}</span>
                <div className="flex text-amber-400">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </div>
  );
};
