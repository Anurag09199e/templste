import React, { useState, useMemo } from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
import { ExamCard } from '../components/courses/ExamCard';
import { EXAMS, EXAM_HUB_FAQS } from '../data/mockData';
import { Filter, Search, HelpCircle, ChevronDown } from 'lucide-react';
import { GlassCard } from '../components/common/GlassCard';
import { Link } from 'react-router-dom';
import { GradientButton } from '../components/common/GradientButton';
import { motion, AnimatePresence } from 'framer-motion';

const EXAM_FILTERS = ['All Exams', 'Goethe', 'telc', 'ÖSD'];

export const GermanCourses: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All Exams');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const filteredExams = useMemo(() => {
    return EXAMS.filter((exam) => {
      const matchesSearch = exam.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exam.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesFilter = activeFilter === 'All Exams' ||
        exam.tags.some(tag => tag.toLowerCase().includes(activeFilter.toLowerCase())) ||
        exam.title.toLowerCase().includes(activeFilter.toLowerCase());

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
            German Exams We Prepare You For <br className="hidden sm:block" /><span className="text-amber-500">(Goethe, telc & ÖSD)</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Choose the right certification for your goal, university, work, or Ausbildung, with structured preparation across every major German exam, from A1 to C2.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-[#1a2133] border border-slate-700/50 rounded-3xl p-3 sm:p-5 flex flex-col lg:flex-row items-center justify-between gap-4 mb-12 shadow-2xl">

          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 hide-scrollbar px-2 sm:px-0">
            <Filter className="w-5 h-5 text-slate-400 mr-2 shrink-0 hidden sm:block" />
            <span className="text-slate-400 text-sm font-semibold mr-2 shrink-0 hidden sm:block">Filter:</span>

            <div className="flex items-center gap-2">
              {EXAM_FILTERS.map((exam) => (
                <button
                  key={exam}
                  onClick={() => setActiveFilter(exam)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-sm ${activeFilter === exam
                    ? 'bg-amber-500 text-white shadow-amber-500/30 font-extrabold'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white'
                    }`}
                >
                  {exam}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by exam name or purpose..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full lg:w-[280px] bg-slate-900/50 border border-slate-700 text-white text-sm rounded-full pl-11 pr-4 py-2.5 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder:text-slate-500"
            />
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredExams.map((exam) => (
              <motion.div
                key={exam.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <ExamCard exam={exam} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredExams.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 dark:text-slate-400 text-lg">No exams found matching your criteria.</p>
            <button onClick={() => { setSearchQuery(''); setActiveFilter('All Exams'); }} className="mt-4 text-amber-500 font-bold hover:underline">
              Clear Filters
            </button>
          </div>
        )}

      </div>

      {/* FAQ Section */}
      <section className="relative z-10 px-4 mt-8 pb-10">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about choosing and preparing for your German exam."
          />
          <div className="mt-12 space-y-4">
            {EXAM_HUB_FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <GlassCard key={faq.id} className="p-0 overflow-hidden border border-slate-200/80 dark:border-slate-800 transition-all duration-300">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full text-left p-6 flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <h4 className="font-bold text-base md:text-lg text-[#200e4f] dark:text-white flex items-start gap-3 font-heading pr-8">
                      <HelpCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      {faq.question}
                    </h4>
                    <ChevronDown className={`w-5 h-5 text-amber-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="p-6 pt-0 pl-14 text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Box matching user prompt */}
      <section className="relative z-10 px-4 mt-20">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-2xl p-8 sm:p-12 md:p-16 text-center text-white relative overflow-hidden flex flex-col items-center">

          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05] mix-blend-overlay"></div>

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading tracking-tight mb-4 drop-shadow-md">
            Goethe, telc or ÖSD. Not Sure Which One to Take?
          </h3>

          <p className="text-orange-50 font-medium text-base sm:text-lg max-w-2xl mx-auto mb-10 opacity-90 drop-shadow-sm">
            Every exam has its own format, requirements and purpose. Let our experts help you choose the right exam and preparation plan for your Germany journey.
          </p>

          <div className="relative z-10">
            <Link to="/book-demo">
              <button className="bg-slate-900 border border-slate-700 hover:bg-slate-800 text-white font-extrabold px-8 py-4 rounded-xl shadow-2xl transition-all hover:-translate-y-1 active:translate-y-0 text-sm tracking-wide">
                Find the Right Exam
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
