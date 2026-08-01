import React, { useState } from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
import { CourseCard } from '../components/courses/CourseCard';
import { LevelQuiz } from '../components/courses/LevelQuiz';
import { COURSES } from '../data/mockData';
import { CEFRLevel } from '../types';
import { Filter, Search } from 'lucide-react';

export const GermanCourses: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | CEFRLevel>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = COURSES.filter((c) => {
    const matchesFilter = selectedFilter === 'ALL' || c.level === selectedFilter;
    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.level.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-32 pb-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 font-extrabold text-xs uppercase tracking-widest border border-amber-500/20">
            CEFR Accredited Catalog
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white">
            German Language Courses <span className="text-gradient">(A1 - C2)</span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Comprehensive German courses prepared for official Goethe-Zertifikat, Telc, TestDaF, and DSH examinations with guaranteed 100% exam simulation.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="glass-card rounded-2xl p-4 mb-12 flex flex-col md:flex-row items-center justify-between gap-4 border border-slate-200/80 dark:border-slate-800">
          
          {/* Level Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 flex items-center gap-1 mr-2">
              <Filter className="w-4 h-4" /> Filter:
            </span>
            {(['ALL', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const).map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedFilter(lvl)}
                className={`px-3.5 py-1.5 rounded-xl font-heading font-extrabold text-xs transition-all ${
                  selectedFilter === lvl
                    ? 'bg-amber-500 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {lvl === 'ALL' ? 'All Levels' : `CEFR ${lvl}`}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search course title or topic..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Level Quiz Recommendation */}
        <div className="pt-20">
          <LevelQuiz />
        </div>

      </div>
    </div>
  );
};
