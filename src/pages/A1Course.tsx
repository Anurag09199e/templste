import React from 'react';
import { Link } from 'react-router-dom';
import { COURSES } from '../data/mockData';
import { LevelBadge } from '../components/common/LevelBadge';
import { GlassCard } from '../components/common/GlassCard';
import { GradientButton } from '../components/common/GradientButton';
import { BatchTable } from '../components/courses/BatchTable';
import { CheckCircle2, Clock, Calendar, ShieldCheck, ArrowRight, BookOpen, Award } from 'lucide-react';

export const A1Course: React.FC = () => {
  const course = COURSES.find((c) => c.level === 'A1') || COURSES[0];

  return (
    <div className="pt-32 pb-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Course Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <LevelBadge level="A1" size="lg" />
              <span className="text-xs font-extrabold uppercase px-3 py-1 bg-amber-500/10 text-amber-500 rounded-lg border border-amber-500/20">
                {course.germanTitle}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#200e4f] dark:text-white">
              {course.title}
            </h1>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {course.fullDesc}
            </p>

            <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-700 dark:text-slate-300">
              <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-xl">
                <Clock className="w-4 h-4 text-amber-500" /> {course.durationHours} Hours ({course.durationWeeks} Weeks)
              </span>
              <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> Goethe A1 Exam Included
              </span>
              <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-xl">
                <Calendar className="w-4 h-4 text-sky-500" /> Next Batch: {course.upcomingBatchDate}
              </span>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link to="/book-demo">
                <GradientButton size="lg" icon={ArrowRight}>
                  Enroll in A1 Course
                </GradientButton>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <GlassCard className="p-6 border border-amber-500/30">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-64 object-cover rounded-2xl mb-4"
              />
              <div className="flex items-center justify-between font-heading">
                <div>
                  <span className="text-xs text-slate-400 font-bold block">Tuition Fee</span>
                  <span className="text-2xl font-extrabold text-[#200e4f] dark:text-white">
                    {course.priceLocal}
                  </span>
                </div>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-xs font-bold rounded-lg">
                  {course.mode} Live Interactive
                </span>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Curriculum Breakdown */}
        <div className="space-y-8">
          <h2 className="text-3xl font-extrabold font-heading text-[#200e4f] dark:text-white text-center">
            A1 Syllabus & Module Breakdown
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {course.syllabusModules.map((mod) => (
              <GlassCard key={mod.moduleNumber} className="p-6 border border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-amber-500 text-white font-bold flex items-center justify-center">
                    {mod.moduleNumber}
                  </div>
                  <h3 className="font-bold text-base font-heading text-[#200e4f] dark:text-white">
                    {mod.title}
                  </h3>
                </div>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                  {mod.topics.map((topic, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Live Batches Table */}
        <div className="pt-16">
          <h3 className="text-2xl font-bold font-heading text-[#200e4f] dark:text-white mb-6">
            Upcoming A1 Batches & Schedules
          </h3>
          <BatchTable />
        </div>

      </div>
    </div>
  );
};
