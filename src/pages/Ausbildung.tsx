import React, { useState } from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
import { GlassCard } from '../components/common/GlassCard';
import { GradientButton } from '../components/common/GradientButton';
import { AUSBILDUNG_PROGRAMS } from '../data/mockData';
import { LevelBadge } from '../components/common/LevelBadge';
import { CheckCircle2, Briefcase, Euro, ShieldCheck, ArrowRight, Camera, HeartPulse, Laptop, Wrench, Building2, Truck, HelpCircle, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GALLERY_ITEMS, AUSBILDUNG_FAQS } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import ausbildungImage from '../img/ausbildung.webp';
import img3 from '../img/img-3.webp';

export const Ausbildung: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const POPULAR_SECTORS = [
    {
      icon: HeartPulse,
      title: 'Nursing',
      desc: 'Train in state-recognised hospitals and care homes, with some of the highest stipends and strongest hiring demand in Germany.'
    },
    {
      icon: Laptop,
      title: 'IT & Technology',
      desc: 'Hands-on training in networks, systems integration, and software support with leading German tech employers.'
    },
    {
      icon: Wrench,
      title: 'Engineering & Manufacturing',
      desc: "Work across mechanical, electrical, and automated systems in Germany's manufacturing and engineering sector."
    },
    {
      icon: Building2,
      title: 'Hospitality & Tourism',
      desc: 'Train in hotel operations, food service, or culinary arts at established hospitality businesses across Germany.'
    },
    {
      icon: Truck,
      title: 'Logistics',
      desc: 'Learn supply chain, warehousing, and freight operations, a sector with consistent, high-volume hiring.'
    }
  ];

  return (
    <div className="pt-32 pb-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 font-extrabold text-xs uppercase tracking-widest border border-emerald-500/20">
            PAID VOCATIONAL TRAINING IN GERMANY
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#200e4f] dark:text-white leading-tight">
            Ausbildung Programs with <br className="hidden sm:block" /><span className="text-gradient"><span className="italic">Up to €1,150</span> Monthly Stipend</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            Germany's dual training system pays you from day one while you learn on the job. Zero tuition, a recognised qualification, and real work experience by the time you finish.
          </p>
          <div className="pt-4">
            <Link to="/contact">
              <button className="inline-flex items-center justify-center gap-2 font-extrabold px-8 py-4 rounded-xl transition-all hover:-translate-y-1 active:translate-y-0 text-sm tracking-wide bg-gradient-to-r from-[#BD181E] to-[#e8b44b] text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:brightness-110 border border-[#e8b44b]/30">
                Check Your Eligibility <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>

        {/* Automatic Image Carousel (Marquee) */}
        <div className="mb-20 -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden relative">
          {/* Fading Edges for the Carousel */}
          <div className="absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10"></div>

          <motion.div
            className="flex gap-4 sm:gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30
            }}
          >
            {/* Duplicating the items so it scrolls seamlessly without breaking */}
            {[...GALLERY_ITEMS, ...GALLERY_ITEMS, ...GALLERY_ITEMS].map((item, i) => (
              <div
                key={`${item.id}-${i}`}
                className="h-[250px] sm:h-[320px] lg:h-[380px] w-auto inline-block rounded-[32px] overflow-hidden relative shrink-0 shadow-2xl border-4 border-white dark:border-slate-800"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Popular Ausbildung Sectors 5-Column Grid */}
        <section className="mt-8 mb-20 text-center">
          <SectionTitle
            title="Popular Ausbildung Sectors"
            subtitle="From nursing and healthcare to IT, automobile, hospitality, and logistics, the options are wide open. Find the paid training program that fits your interests and career goals."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-left">
            {POPULAR_SECTORS.map((sector, idx) => {
              const Icon = sector.icon;
              return (
                <div key={idx} className="bg-[#f5f0e6] dark:bg-[#11131a] rounded-[24px] p-6 border border-slate-200 dark:border-slate-800 shadow-xl hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 mb-6 flex items-center justify-center text-amber-500 border border-amber-500/10 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-[#200e4f] dark:text-white font-black text-lg mb-3 leading-tight tracking-tight">
                    {sector.title}
                  </h4>
                  <p className="text-[#55536B] dark:text-slate-400 text-sm leading-relaxed font-medium">
                    {sector.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Who Can Apply Split Section */}
        <section className="mt-32 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Text & Requirements */}
            <div className="lg:col-span-6 space-y-6">
              {/* Top Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-extrabold text-[11px] uppercase tracking-wider rounded-full border border-emerald-500/20">
                  AGE 18+
                </span>
                <span className="px-3 py-1.5 bg-amber-500/10 text-amber-600 dark:text-amber-500 font-extrabold text-[11px] uppercase tracking-wider rounded-full border border-amber-500/20">
                  CEFR B1
                </span>
                <span className="px-3 py-1.5 bg-slate-500/10 text-slate-600 dark:text-slate-400 font-extrabold text-[11px] uppercase tracking-wider rounded-full border border-slate-500/20">
                  12TH PASS OR EQUIVALENT
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-[#200e4f] dark:text-white leading-tight tracking-tight">
                Who Can Apply for Ausbildung?
              </h2>

              <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed font-medium">
                No prior work experience needed. If you've completed school and have a working grasp of German, you're likely eligible. GLS checks your profile against real program requirements before you apply, so there are no surprises later.
              </p>

              <div>
                <p className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-8 mb-4">
                  WHAT YOU'LL NEED:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-300 leading-snug">Completed 12th grade or equivalent qualification</p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-300 leading-snug">B1 level German (we help you get there if starting from zero)</p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-300 leading-snug">A valid passport</p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-300 leading-snug">Proof you can support yourself in year one</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link to="/contact">
                  <button className="hover: hover: font-extrabold px-8 py-4 rounded-xl transition-all hover:-translate-y-1 active:translate-y-0 text-[15px] flex items-center justify-center sm:justify-start gap-2 w-full sm:w-auto bg-gradient-to-r from-[#BD181E] to-[#e8b44b] text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:brightness-110 border border-[#e8b44b]/30">
                    Check Your Eligibility <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Column: Image with Overlay */}
            <div className="lg:col-span-6 relative mt-10 lg:mt-0">
              <div className="aspect-[4/3] lg:aspect-[4/5] w-full rounded-[40px] overflow-hidden shadow-2xl relative border-8 border-white dark:border-[#13161c]">
                <img
                  src={ausbildungImage}
                  alt="Student preparing for Ausbildung"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11131a] via-[#11131a]/40 to-transparent"></div>

                {/* Overlay Text Match */}
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
                  <span className="text-[11px] font-black uppercase tracking-wider text-amber-400 block mb-2">
                    VISA TYPE
                  </span>
                  <p className="text-3xl sm:text-4xl font-black text-white leading-tight mb-2">
                    Ausbildungsvisum
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-slate-300">
                    Full application and visa support included
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative z-10 px-4 mt-24 pb-10">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              title="Frequently Asked Questions"
              subtitle="Everything you need to know about starting an Ausbildung in Germany."
            />
            <div className="mt-12 space-y-4">
              {AUSBILDUNG_FAQS.map((faq) => {
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

        {/* 12. Final Contact CTA Banner */}
        <section className="py-20 relative px-4">
          <div
            className="max-w-[1400px] mx-auto rounded-[32px] shadow-2xl relative overflow-hidden min-h-[450px] md:min-h-[600px] flex items-center bg-[#0B0F19]"
          >
            {/* Background Image Mockup */}
            <div className="absolute inset-0 z-0">
              <img
                src={img3}
                alt="Train passing"
                className="w-full h-full object-cover opacity-60 md:opacity-100"
              />
              {/* Dark gradient for text legibility, specially on mobile */}
              <div className="absolute inset-0 bg-black/50 md:bg-black/20"></div>
            </div>

            <div className="relative z-10 w-full px-6 py-12 flex flex-col justify-center items-center text-center md:items-start md:text-left md:block md:w-auto md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-12 md:gap-8 md:my-10">
              <div className="hidden md:block md:col-span-4 lg:col-span-5">{/* Empty spacing for the left image element */}</div>

              {/* Right column for the text content */}
              <div className="md:col-span-8 lg:col-span-7 flex flex-col justify-center items-center md:items-start space-y-6 relative">

                {/* Paper Airplane and dotted path SVG */}
                <div className="absolute -top-[70px] left-[-30px] w-full h-[100px] pointer-events-none hidden md:block">
                  <svg className="w-full h-full text-white" viewBox="0 0 500 100" fill="none" preserveAspectRatio="none">
                    {/* The curved trajectory */}
                    <path d="M 0 90 Q 200 10 400 30" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" fill="transparent" strokeDashoffset="0" className="opacity-70" />
                  </svg>
                  {/* Airplane icon placed at the end of the line */}
                  <svg className="absolute top-[18px] right-[70px] w-8 h-8 text-white transform -rotate-12 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-heading text-white leading-[1.1] tracking-tight drop-shadow-md">
                  Ready to Start Your
                  <span className="italic font-medium opacity-90">Ausbildung Journey?</span>
                </h2>

                <p className="text-sm md:text-base lg:text-[17px] text-gray-200 font-medium max-w-[550px] leading-relaxed drop-shadow-sm mt-3">
                  Talk to our team and find out which program fits your background, your German level, and your goals. No pressure, just clarity on your next step.
                </p>

                <div className="pt-2 sm:pt-5 flex items-center gap-4">
                  <Link to="/contact">
                    <button className="font-bold px-8 py-3.5 rounded-xl transition-all hover:scale-105 active:scale-95 text-[15px] flex items-center group bg-gradient-to-r from-[#BD181E] to-[#e8b44b] text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:brightness-110 border border-[#e8b44b]/30">
                      Check Your Eligibility
                      <ArrowRight className="inline w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>

    </div>
  );
};

