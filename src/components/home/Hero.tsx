import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Award,
  Globe,
  Play,
  ShieldCheck,
  Star,
} from 'lucide-react';
import { GradientButton } from '../common/GradientButton';
import { GlassCard } from '../common/GlassCard';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Background Animated Gradient Blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/15 dark:bg-amber-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-orange-600/15 dark:bg-orange-600/10 rounded-full blur-3xl animate-glow pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Content (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-amber-500/30 text-xs font-extrabold text-amber-600 dark:text-amber-400">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
              </span>
              <span>Germany's Leading Language & Career Institute 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 dark:text-white leading-[1.15] tracking-tight">
              Master <span className="text-gradient">German</span> Fluency for University & Career Success.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Certified CEFR training from <strong className="text-slate-900 dark:text-white font-bold">A1 to C2</strong>. Guaranteed Goethe & Telc exam preparation with native German pedogogy, tuition-free university prep, and Ausbildung job pathways.
            </p>

            {/* Bullet points */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-1.5 bg-white/60 dark:bg-slate-900/60 px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 98.4% Exam Pass Rate
              </div>
              <div className="flex items-center gap-1.5 bg-white/60 dark:bg-slate-900/60 px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Max 12 Students/Batch
              </div>
              <div className="flex items-center gap-1.5 bg-white/60 dark:bg-slate-900/60 px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Goethe Certified Trainers
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link to="/book-demo" className="w-full sm:w-auto">
                <GradientButton size="lg" icon={ArrowRight} fullWidth>
                  Book Free Demo Class
                </GradientButton>
              </Link>
              <Link to="/courses" className="w-full sm:w-auto">
                <GradientButton variant="outline" size="lg" icon={GraduationCap} fullWidth>
                  Explore A1-C2 Courses
                </GradientButton>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-3">
                {[
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
                  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80',
                  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80',
                ].map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt="Student"
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 object-cover shadow"
                  />
                ))}
              </div>
              <div className="text-left text-xs">
                <div className="flex items-center gap-1 text-amber-500 font-bold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="text-slate-900 dark:text-white font-extrabold ml-1">4.9/5.0</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400">
                  Trusted by <strong>4,850+</strong> successful alumni in Germany
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Graphic & Floating Glass Widgets (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Frame with Ambient Glow */}
              <div className="relative rounded-4xl overflow-hidden p-2 bg-gradient-to-tr from-amber-500/30 via-orange-500/20 to-red-500/30 backdrop-blur-xl shadow-2xl border border-white/20 dark:border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
                  alt="DeutschKraft Students in Germany"
                  className="w-full h-[450px] object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Play Video Pill Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card p-3 rounded-2xl flex items-center justify-between backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-lg animate-pulse">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">Watch Campus Tour</h4>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400">Munich & Berlin Campuses</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-extrabold text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded-lg">
                      2:45 MIN
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Glass Widget 1: Goethe Accreditation */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 hidden sm:flex items-center gap-3 glass-card p-4 rounded-2xl shadow-xl border border-amber-500/30 backdrop-blur-xl bg-white/90 dark:bg-slate-900/90"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 text-white flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">Goethe & Telc Prep</h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Certified Standard</p>
                </div>
              </motion.div>

              {/* Floating Glass Widget 2: Study in Germany Success */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 glass-card p-4 rounded-2xl shadow-xl border border-emerald-500/30 backdrop-blur-xl bg-white/90 dark:bg-slate-900/90"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">€0 Public Tuition</h4>
                  <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">TUM, LMU, Heidelberg</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
