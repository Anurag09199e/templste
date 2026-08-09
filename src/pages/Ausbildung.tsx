import React from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
import { GlassCard } from '../components/common/GlassCard';
import { GradientButton } from '../components/common/GradientButton';
import { AUSBILDUNG_PROGRAMS } from '../data/mockData';
import { LevelBadge } from '../components/common/LevelBadge';
import { CheckCircle2, Briefcase, Euro, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Ausbildung: React.FC = () => {
  return (
    <div className="pt-32 pb-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 font-extrabold text-xs uppercase tracking-widest border border-emerald-500/20">
            Paid Vocational Apprenticeship in Germany
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#200e4f] dark:text-white">
            Ausbildung Programs with <span className="text-gradient">€1,200+ Monthly Stipend</span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Ausbildung is Germany’s renowned dual vocational training system. Learn on the job while getting paid a monthly salary with 0 tuition fees and guaranteed full-time employment.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {AUSBILDUNG_PROGRAMS.map((prog) => (
            <GlassCard key={prog.id} className="p-8 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 font-extrabold text-xs rounded-lg border border-emerald-500/20">
                    {prog.field}
                  </span>
                  <LevelBadge level={prog.requiredLevel} size="md" />
                </div>

                <h3 className="text-2xl font-extrabold font-heading text-[#200e4f] dark:text-white mb-2">
                  {prog.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {prog.description}
                </p>

                <div className="bg-slate-100/80 dark:bg-slate-900/80 p-4 rounded-2xl mb-6 space-y-2 border border-slate-200/60 dark:border-slate-800">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-500">Year 1 Monthly Stipend:</span>
                    <span className="text-emerald-500 font-extrabold">{prog.monthlyStipendYear1}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-500">Year 3 Monthly Stipend:</span>
                    <span className="text-emerald-500 font-extrabold">{prog.monthlyStipendYear3}</span>
                  </div>
                </div>

                <ul className="space-y-2 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-6">
                  {prog.keyBenefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-bold">Duration: {prog.durationYears} Years</span>
                <Link to="/book-demo">
                  <GradientButton size="sm" icon={ArrowRight}>Apply for Ausbildung</GradientButton>
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </div>
  );
};
