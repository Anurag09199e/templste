import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, Star, ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';
import { Course } from '../../types';
import { GlassCard } from '../common/GlassCard';
import { LevelBadge } from '../common/LevelBadge';
import { GradientButton } from '../common/GradientButton';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <GlassCard className="flex flex-col justify-between h-full group border-slate-200/80 dark:border-slate-800/80 hover:border-amber-500/50 transition-all duration-300">
      <div>
        {/* Card Header Media */}
        <div className="relative h-52 rounded-2xl overflow-hidden mb-5">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

          <div className="absolute top-3 left-3 flex items-center gap-2">
            <LevelBadge level={course.level} size="md" />
            <span className="bg-slate-950/70 backdrop-blur-md text-amber-400 border border-amber-400/30 text-[11px] font-extrabold px-2.5 py-1 rounded-lg">
              {course.badgeTag}
            </span>
          </div>

          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
            <span className="flex items-center gap-1 bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-lg line-clamp-1 max-w-[70%] text-[10px]">
              <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" /> {course.durationString || `${course.durationHours} Hours (${course.durationWeeks} wks)`}
            </span>
            <span className="flex items-center gap-1 bg-amber-500 text-white font-extrabold px-2.5 py-1 rounded-lg">
              <Star className="w-3.5 h-3.5 fill-current" /> {course.rating} ({course.enrolledStudents})
            </span>
          </div>
        </div>

        {/* Titles & Desc */}
        <div className="space-y-2 mb-4">
          <h4 className="text-xs font-bold text-amber-600 dark:text-amber-400 tracking-wide uppercase">
            {course.germanTitle}
          </h4>
          <h3 className="text-xl font-extrabold font-heading text-[#200e4f] dark:text-white group-hover:text-amber-500 transition-colors">
            {course.title}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
            {course.shortDesc}
          </p>
        </div>

        {/* Outcomes highlights */}
        <ul className="space-y-1.5 mb-6 text-xs text-slate-700 dark:text-slate-300">
          {course.outcomes.slice(0, 2).map((outcome, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{outcome}</span>
            </li>
          ))}
        </ul>
        {course.classDurationString && (
          <div className="mb-6 text-[11.5px] font-bold text-slate-600 dark:text-slate-400 mt-2 bg-amber-500/10 dark:bg-amber-500/5 p-2 rounded-lg border border-amber-500/20">
            {course.classDurationString}
          </div>
        )}
      </div>

      {/* Pricing & CTA */}
      <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between gap-3">
        <div>
          <span className="text-[10px] text-slate-400 font-semibold uppercase block">Course Fee</span>
          <span className="text-lg font-extrabold text-[#200e4f] dark:text-white font-heading">
            {course.priceLocal}
          </span>
        </div>

        <Link to={`/courses/${course.level.toLowerCase()}`}>
          <GradientButton size="sm" icon={ArrowRight}>
            View Syllabus
          </GradientButton>
        </Link>
      </div>
    </GlassCard>
  );
};
