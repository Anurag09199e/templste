import React, { useState, useMemo } from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
import { CourseCard } from '../components/courses/CourseCard';
import { COURSES } from '../data/mockData';
import { Filter, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GradientButton } from '../components/common/GradientButton';
import { motion, AnimatePresence } from 'framer-motion';

const LEVELS = ['All Levels', 'CEFR A1', 'CEFR A2', 'CEFR B1', 'CEFR B2', 'CEFR C1', 'CEFR C2'];

export const GermanCourses: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All Levels');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.germanTitle.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = activeFilter === 'All Levels' || `CEFR ${course.level}` === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  return (
    <div className="relative min-h-screen pb-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[#f9f7f1] dark:bg-[#0B0F19] z-0 pointer-events-none"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 pt-40 lg:pt-48 pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Premium Page Hero */}
        <div className="text-center flex flex-col items-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-500 font-extrabold text-[11.5px] uppercase tracking-widest mb-6 shadow-sm">
            CEFR ACCREDITED CATALOG
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black font-heading text-[#200e4f] dark:text-white mb-6 tracking-tight max-w-4xl leading-tight">
            German Language Courses <span className="text-amber-500">(A1 - C2)</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Comprehensive German courses prepared for official Goethe-Zertifikat, Telc, TestDaF, and DSH examinations with guaranteed 100% exam simulation.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-[#1a2133] border border-slate-700/50 rounded-3xl p-3 sm:p-5 flex flex-col lg:flex-row items-center justify-between gap-4 mb-12 shadow-2xl">

          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 hide-scrollbar px-2 sm:px-0">
            <Filter className="w-5 h-5 text-slate-400 mr-2 shrink-0 hidden sm:block" />
            <span className="text-slate-400 text-sm font-semibold mr-2 shrink-0 hidden sm:block">Filter:</span>

            <div className="flex items-center gap-2">
              {LEVELS.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setActiveFilter(lvl)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-sm ${activeFilter === lvl
                      ? 'bg-amber-500 text-white shadow-amber-500/30 font-extrabold'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white'
                    }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search course title or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full lg:w-[280px] bg-slate-900/50 border border-slate-700 text-white text-sm rounded-full pl-11 pr-4 py-2.5 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* CSS Grid for Courses */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 dark:text-slate-400 text-lg">No courses found matching your criteria.</p>
            <button onClick={() => { setSearchQuery(''); setActiveFilter('All Levels'); }} className="mt-4 text-amber-500 font-bold hover:underline">
              Clear Filters
            </button>
          </div>
        )}

      </div>

      {/* CTA Box matching user prompt */}
      <section className="relative z-10 px-4 mt-20">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-2xl p-8 sm:p-12 md:p-16 text-center text-white relative overflow-hidden flex flex-col items-center">

          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05] mix-blend-overlay"></div>

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading tracking-tight mb-4 drop-shadow-md">
            Not Sure Which Level to Start With?
          </h3>

          <p className="text-orange-50 font-medium text-base sm:text-lg max-w-2xl mx-auto mb-10 opacity-90 drop-shadow-sm">
            Take a free German proficiency assessment and let our counselors guide you to the right course — and the right path to Germany.
          </p>

          <div className="relative z-10">
            <Link to="/book-demo">
              <button className="bg-slate-900 border border-slate-700 hover:bg-slate-800 text-white font-extrabold px-8 py-4 rounded-xl shadow-2xl transition-all hover:-translate-y-1 active:translate-y-0 text-sm tracking-wide">
                Book Free Assessment
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
