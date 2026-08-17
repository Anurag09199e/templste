import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, Compass, Award, Briefcase, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';
import { COURSES } from '../../data/mockData';

interface MegaMenuProps {
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 pt-4 pointer-events-auto"
    >
      <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200/80 dark:border-slate-800/80 grid grid-cols-1 md:grid-cols-12 gap-8 bg-white/95 dark:bg-[#0B0F19]/95 backdrop-blur-2xl">
        
        {/* Column 1: CEFR Level Courses (6 cols) */}
        <div className="md:col-span-6 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200/60 dark:border-slate-800/60">
            <h4 className="font-heading font-extrabold text-sm uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> CEFR Level Certification (A1 - C2)
            </h4>
            <Link
              to="/courses"
              onClick={onClose}
              className="text-xs font-bold text-slate-500 hover:text-amber-500 flex items-center gap-1"
            >
              View All <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {COURSES.map((course) => (
              <Link
                key={course.id}
                to={`/courses/${course.level.toLowerCase()}`}
                onClick={onClose}
                className="group p-3 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 hover:border-amber-500/50 hover:bg-amber-500/5 dark:hover:bg-amber-500/10 transition-all duration-200 flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 font-extrabold font-heading text-xs flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  {course.level}
                </div>
                <div>
                  <h5 className="font-bold text-xs text-[#200e4f] dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {course.title}
                  </h5>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                    {course.durationWeeks} Weeks • Goethe Prep
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Column 2: Career & Pathways (3 cols) */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-heading font-extrabold text-sm uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-2 pb-2 border-b border-slate-200/60 dark:border-slate-800/60">
            <Compass className="w-4 h-4" /> Germany Pathways
          </h4>
          <div className="space-y-2">
            <Link
              to="/study-in-germany"
              onClick={onClose}
              className="p-3 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 hover:border-amber-500/50 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all block group"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-[#200e4f] dark:text-white group-hover:text-amber-500">
                <BookOpen className="w-4 h-4 text-sky-500" /> Study in Germany
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                Tuition-free public universities guide & APS verification.
              </p>
            </Link>

            <Link
              to="/ausbildung"
              onClick={onClose}
              className="p-3 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 hover:border-amber-500/50 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all block group"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-[#200e4f] dark:text-white group-hover:text-amber-500">
                <Briefcase className="w-4 h-4 text-emerald-500" /> Ausbildung Programs
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                Paid vocational training with €1,200+ monthly stipend.
              </p>
            </Link>
          </div>
        </div>

        {/* Column 3: Featured Accreditation Banner (3 cols) */}
        <div className="md:col-span-3 rounded-2xl bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-500/10 border border-amber-500/20 p-4 flex flex-col justify-between">
          <div>
            <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-amber-500 text-white mb-2">
              Goethe & Telc Standard
            </span>
            <h5 className="font-bold text-sm text-[#200e4f] dark:text-white">
              98.4% Pass Rate in First Attempt
            </h5>
            <ul className="mt-2 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> 1-on-1 Mock Exams
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Native German Pedagogy
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Visa & APS Support
              </li>
            </ul>
          </div>
          <Link
            to="/contact"
            onClick={onClose}
            className="mt-4 w-full py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-xs rounded-xl text-center shadow-md hover:brightness-110"
          >
            Book Free Trial Class
          </Link>
        </div>

      </div>
    </motion.div>
  );
};

