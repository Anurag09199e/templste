import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Compass, BookOpen, Briefcase, Award, Star, FileText, Plane, Home } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';

const ROADMAP_STEPS = [
  {
    step: '01',
    title: 'Discover Your Path',
    desc: 'We understand your education, skills, and goals to map out the right starting point for your journey.',
    subTitle: 'Career counselling & profile assessment',
    icon: Compass,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    step: '02',
    title: 'Learn German',
    desc: 'Structured German training with experienced instructors, exam preparation, and continuous progress monitoring.',
    subTitle: 'A1 · A2 · B1 · B2 · C1 · C2',
    icon: BookOpen,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    step: '03',
    title: 'Become Germany-Ready',
    desc: 'We prepare you not only to speak German, but to confidently study, train, and work in Germany.',
    subTitle: 'CV · Interviews · Cultural Orientation',
    icon: Briefcase,
    color: 'from-amber-500 to-orange-600',
  },
  {
    step: '04',
    title: 'Achieve Your Certification',
    desc: 'Preparation for internationally recognised German-language examinations, matched to the proficiency level your chosen pathway requires.',
    subTitle: 'Goethe · TELC · ÖSD',
    icon: Award,
    color: 'from-rose-500 to-red-600',
  },
  {
    step: '05',
    title: 'Find Your Opportunity',
    desc: 'This is where GLS goes beyond language training. We actively guide you toward the right university, Ausbildung, or job opportunity; matched to your qualifications and goals, not just handed to you as a generic list.',
    subTitle: 'Ausbildung · Higher Education',
    icon: Star,
    color: 'from-purple-500 to-fuchsia-600',
  },
  {
    step: '06',
    title: 'Application & Visa Support',
    desc: 'Support through every step between selection and departure so nothing falls through the cracks.',
    subTitle: 'Applications · Interviews · Visa Guidance',
    icon: FileText,
    color: 'from-sky-500 to-blue-600',
  },
  {
    step: '07',
    title: 'Welcome to Germany',
    desc: 'We help you land confidently, settled into your first steps to live, study, or work in Germany.',
    subTitle: 'Pre-departure preparation',
    icon: Plane,
    color: 'from-teal-500 to-emerald-600',
  },
  {
    step: '08',
    title: 'Post-Arrival Support',
    desc: "Your journey with GLS doesn't end at the airport. We stay connected as you settle in, helping with local registration (Anmeldung), initial housing questions, and ongoing support as you adjust to life in Germany.",
    subTitle: 'Housing · Registration · Ongoing Guidance',
    icon: Home,
    color: 'from-indigo-500 to-violet-600',
  },
];

const TimelineStep = ({ step, index }: { step: any; index: number }) => {
  const ref = useRef(null);
  // Triggers highlight when the card is exactly in the center of the screen
  const isInView = useInView(ref, { once: false, margin: '-45% 0px -45% 0px' });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group w-full mb-16 md:mb-20 last:mb-0">

      {/* Node Marker that highlights when passing threshold */}
      <div
        className={`absolute left-2 md:left-1/2 flex items-center justify-center w-8 h-8 rounded-full border-4 border-slate-50 dark:border-[#0B0F19] z-20 transition-all duration-700 ease-out md:-translate-x-1/2 ${isInView ? 'bg-amber-500 scale-125' : 'bg-slate-300 dark:bg-slate-700 scale-100'}`}
      >
        <div className={`w-2 h-2 rounded-full bg-white transition-opacity duration-300 ${isInView ? 'opacity-100' : 'opacity-40'}`} />
      </div>

      {/* Spacer for desktop layout (alternating empty side) */}
      <div className="hidden md:block w-[45%]" />

      {/* Animated Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`w-[calc(100%-4rem)] ml-16 md:ml-0 md:w-[45%] glass-card rounded-3xl p-6 relative flex flex-col border transition-all duration-700 ${isInView ? 'border-amber-500/60 shadow-[0_0_30px_-5px_rgba(245,158,11,0.15)] bg-white/70 dark:bg-slate-900/60' : 'border-slate-200/80 dark:border-slate-800/80 opacity-60 hover:opacity-100'}`}
      >
        <div className="flex items-center justify-between mb-5">
          <span className={`text-4xl font-black font-heading transition-colors duration-500 ${isInView ? 'text-amber-500' : 'text-slate-300 dark:text-slate-700'}`}>
            {step.step}
          </span>
          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${step.color} text-white flex items-center justify-center shadow-lg transition-transform duration-500 ${isInView ? 'scale-110' : 'scale-100'}`}>
            <step.icon className="w-6 h-6" />
          </div>
        </div>

        <h3 className={`text-xl font-bold font-heading mb-2 transition-colors duration-500 ${isInView ? 'text-amber-500' : 'text-slate-900 dark:text-white'}`}>
          {step.title}
        </h3>

        <span className="inline-block px-3 py-1.5 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400 text-[11px] font-bold mb-4 w-fit">
          {step.subTitle}
        </span>

        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {step.desc}
        </p>
      </motion.div>
    </div>
  );
};

export const Roadmap: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // The scroll progress calculates based on this entire timeline container's bounding box
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const pathHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="py-24 relative overflow-hidden bg-[#f9f7f1] dark:bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionTitle
          badge="The GLS Student Journey"
          title="The GLS Student Journey —"
          highlightedText="8 Steps"
          subtitle="GLS doesn't just teach you German. We prepare you for Germany."
        />

        {/* Timeline Tracking Container */}
        <div className="relative mt-20 max-w-5xl mx-auto pt-4 pb-4" ref={containerRef}>

          {/* Static Background Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-800 md:-translate-x-1/2 rounded-full hidden sm:block" />
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 rounded-full sm:hidden" />

          {/* Animated Scroll Line (Progress Bar) */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 w-1 bg-gradient-to-b from-amber-400 via-orange-500 to-rose-600 md:-translate-x-1/2 rounded-full hidden sm:block z-10 origin-top"
            style={{ height: pathHeight }}
          />
          <motion.div
            className="absolute left-6 top-0 w-1 bg-gradient-to-b from-amber-400 via-orange-500 to-rose-600 -translate-x-1/2 rounded-full sm:hidden z-10 origin-top"
            style={{ height: pathHeight }}
          />

          <div className="relative z-20">
            {ROADMAP_STEPS.map((step, idx) => (
              <TimelineStep key={step.step} step={step} index={idx} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
