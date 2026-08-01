import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, BookOpen, Video, Award, HeartHandshake } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { GlassCard } from '../common/GlassCard';

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Certified Goethe & Telc Standards',
    desc: 'Our curriculum is built strictly according to official Goethe Institute & Telc evaluation benchmarks for 100% exam readiness.',
    badge: 'Official Standards'
  },
  {
    icon: Users,
    title: 'Small Interactive Batches (Max 12)',
    desc: 'Never get lost in a crowd of 50+. Small batch sizes guarantee daily individual speaking practice with instructors.',
    badge: 'Personalized Focus'
  },
  {
    icon: Video,
    title: 'HD Recording & Digital LMS Access',
    desc: 'Missed a lecture? Access 1080p recorded sessions, interactive flashcards, and PDF lecture notes anytime on mobile.',
    badge: '24/7 Portal Access'
  },
  {
    icon: BookOpen,
    title: '1-on-1 Goethe Mock Interviews',
    desc: 'Participate in realistic speaking and writing mock tests evaluated by senior Goethe certified examiners.',
    badge: 'Exam Mastery'
  },
  {
    icon: Award,
    title: 'End-to-End Visa & APS Guidance',
    desc: 'We assist with APS certificate verification, blocked accounts, motivation letters, and university applications in Germany.',
    badge: 'Complete Pathway'
  },
  {
    icon: HeartHandshake,
    title: 'Ausbildung & Employer Placement',
    desc: 'Direct connections with German hospitals and tech firms offering dual vocational training with €1,200+ monthly stipend.',
    badge: 'Career Guarantee'
  }
];

export const WhyUs: React.FC = () => {
  return (
    <section className="py-20 relative bg-slate-900/20 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle
          badge="Why DeutschKraft Institute"
          title="Designed for Unmatched"
          highlightedText="German Excellence"
          subtitle="Why thousands of international students and career professionals choose DeutschKraft for their journey to Germany."
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
                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2">
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
