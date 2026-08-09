import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Briefcase, Award, Users, Tag } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { GlassCard } from '../common/GlassCard';

const FEATURES = [
  {
    icon: BookOpen,
    title: 'Goethe, TELC & ÖSD Success',
    desc: 'Master every exam with structured preparation, regular mock tests, speaking practice, and expert feedback aligned with official certification standards.',
    badge: 'EXAM EXCELLENCE'
  },
  {
    icon: GraduationCap,
    title: 'Beyond Language Classes',
    desc: 'We support you beyond the classroom with university admissions, Ausbildung guidance, visa assistance, APS support, and placements.',
    badge: '360° GUIDANCE'
  },
  {
    icon: Briefcase,
    title: 'Learn. Qualify. Get Placed.',
    desc: 'Access trusted pathways to Ausbildung programs and employment opportunities in Germany through dedicated career guidance and industry connections.',
    badge: 'CAREER PATHWAYS'
  },
  {
    icon: Award,
    title: 'A1 to C2 German Training',
    desc: 'Progress confidently through internationally recognized CEFR levels with a structured curriculum designed for real-world communication and exam success.',
    badge: 'CEFR CERTIFIED'
  },
  {
    icon: Users,
    title: "We Stay Until You're Placed",
    desc: "Passing an exam isn't the finish line for us; it's the midpoint. We work with you through applications and placements until you're actually on your way to Germany.",
    badge: 'THE LAST MILE'
  },
  {
    icon: Tag,
    title: 'Quality Guidance Without the Price Tag',
    desc: "A strong path to Germany shouldn't cost a fortune. We keep this accessible, so good guidance isn't reserved for people who can afford lakhs in consultancy fees.",
    badge: 'VALUE, NOT MARKUP'
  }
];

export const WhyUs: React.FC = () => {
  return (
    <section className="py-20 relative bg-[#f5f0e6] dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionTitle
          badge="Why Choose Us"
          title={<i className="italic">Why choose</i>}
          highlightedText="German Language Studio?"
          subtitle="Everything You Need to Build Your Future in Germany. From learning German to securing your next opportunity, GLS combines internationally recognized training with personalized guidance for every stage of your journey."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <GlassCard className="h-full border border-slate-200/80 dark:border-slate-800 hover:border-amber-500/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-6">
                  <feat.icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-full mb-3 inline-block">
                  {feat.badge}
                </span>
                <h3 className="text-xl font-bold font-heading text-[#200e4f] dark:text-white mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feat.desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
