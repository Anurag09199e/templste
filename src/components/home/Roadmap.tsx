import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Briefcase, GraduationCap, ArrowRight, Plane, Building2 } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';

const ROADMAP_STEPS = [
  {
    step: '01',
    title: 'A1 & A2 Grundstufe Foundation',
    desc: 'Master basic German phonetics, everyday greetings, ordering, and essential sentence structures.',
    duration: '3 - 4 Months',
    badge: 'Beginner Phase',
    icon: GraduationCap,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    step: '02',
    title: 'B1 & B2 Intermediate & Goethe Exam',
    desc: 'Achieve true fluency, workplace vocabulary, and pass official Goethe-Zertifikat or Telc B2 exams.',
    duration: '4 - 5 Months',
    badge: 'Core Gateway',
    icon: Award,
    color: 'from-amber-500 to-orange-600',
  },
  {
    step: '03',
    title: 'APS Verification & University / Job Visa',
    desc: 'DeutschKraft team assists with document verification, blocked accounts, and visa filing.',
    duration: '1 - 2 Months',
    badge: 'Visa Roadmap',
    icon: Plane,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    step: '04',
    title: 'Land in Germany & Start Career / Study',
    desc: 'Enroll at tuition-free universities or join Ausbildung paid training with €1,200+ monthly stipend.',
    duration: 'Lifetime Success',
    badge: 'Destination Achieved',
    icon: Building2,
    color: 'from-purple-500 to-rose-600',
  },
];

export const Roadmap: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-900/40 dark:bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionTitle
          badge="Structured Learning Pathway"
          title="Your Roadmap from"
          highlightedText="Zero to Germany"
          subtitle="A proven step-by-step methodology guiding you from absolute beginner to Goethe certification and visa approval."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {ROADMAP_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card rounded-3xl p-6 relative border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between group hover:border-amber-500/50 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black font-heading text-slate-300 dark:text-slate-700 group-hover:text-amber-500 transition-colors">
                    {step.step}
                  </span>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${step.color} text-white flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                </div>

                <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[11px] font-extrabold mb-3">
                  {step.badge}
                </span>

                <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white mb-2 group-hover:text-amber-500 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
                <span>Duration: {step.duration}</span>
                <ArrowRight className="w-4 h-4 text-amber-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
