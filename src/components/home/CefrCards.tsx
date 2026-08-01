import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LevelBadge } from '../common/LevelBadge';
import { COURSES } from '../../data/mockData';
import { SectionTitle } from '../common/SectionTitle';
import { GlassCard } from '../common/GlassCard';
import { ArrowRight, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { CEFRLevel } from '../../types';

export const CefrCards: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel>('A1');

  const currentCourse = COURSES.find((c) => c.level === selectedLevel) || COURSES[0];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Interactive CEFR Framework"
          title="Explore All German"
          highlightedText="Language Levels"
          subtitle="Click on any CEFR level below to inspect its detailed syllabus, outcomes, and Goethe exam preparation focus."
        />

        {/* Level Tabs selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {COURSES.map((course) => {
            const isSelected = selectedLevel === course.level;
            return (
              <button
                key={course.level}
                onClick={() => setSelectedLevel(course.level)}
                className={`px-5 py-3 rounded-2xl font-heading font-extrabold text-sm sm:text-base transition-all duration-200 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-orange-500/30 scale-105 border border-amber-400/40'
                    : 'glass-card text-slate-700 dark:text-slate-300 hover:border-amber-500/50'
                }`}
              >
                <span>CEFR {course.level}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Level Inspection Card */}
        <motion.div
          key={selectedLevel}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <GlassCard className="p-8 sm:p-12 border-2 border-amber-500/40 shadow-2xl bg-gradient-to-br from-white/90 via-white/80 to-amber-500/5 dark:from-slate-900/90 dark:via-slate-900/80 dark:to-amber-950/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <LevelBadge level={currentCourse.level} size="lg" />
                  <span className="text-xs font-bold px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-lg border border-amber-500/20">
                    {currentCourse.germanTitle}
                  </span>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Clock className="w-4 h-4 text-amber-500" /> {currentCourse.durationHours} Total Hours ({currentCourse.durationWeeks} Weeks)
                  </span>
                </div>

                <h3 className="text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
                  {currentCourse.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {currentCourse.fullDesc}
                </p>

                {/* Key Outcomes List */}
                <div className="space-y-2">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                    What You Will Achieve:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {currentCourse.outcomes.map((out, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-white/60 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <Link
                    to={`/courses/${currentCourse.level.toLowerCase()}`}
                    className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-orange-500/20 hover:brightness-110 flex items-center gap-2"
                  >
                    <span>Full {currentCourse.level} Syllabus & Fees</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Media Frame (5 cols) */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl">
                  <img
                    src={currentCourse.image}
                    alt={currentCourse.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Target Exam</span>
                    <h4 className="text-lg font-bold">Goethe & Telc {currentCourse.level} Certified</h4>
                    <p className="text-xs text-slate-300 mt-1">100% Exam Simulation Included</p>
                  </div>
                </div>
              </div>

            </div>
          </GlassCard>
        </motion.div>

      </div>
    </section>
  );
};
