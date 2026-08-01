import React from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
import { GlassCard } from '../components/common/GlassCard';
import { GradientButton } from '../components/common/GradientButton';
import { Award, ShieldCheck, HeartHandshake, Globe, CheckCircle2, ArrowRight, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TRAINERS } from '../data/mockData';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 font-extrabold text-xs uppercase tracking-widest border border-amber-500/20">
            About DeutschKraft Institute
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white">
            Empowering Global Talent with <span className="text-gradient">German Excellence</span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Founded by former Munich university educators and Goethe examiners, DeutschKraft Institute bridges the gap between language learning and real-world career integration in Germany.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <GlassCard className="p-8 sm:p-10 border border-amber-500/30">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-bold mb-6">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-3">
              Our Vision
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To be the world’s most trusted gateway for German language mastery, tuition-free higher education access, and dual vocational training placement in Germany.
            </p>
          </GlassCard>

          <GlassCard className="p-8 sm:p-10 border border-amber-500/30">
            <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center font-bold mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-3">
              Our Mission
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              We deliver rigorous CEFR-aligned instruction (A1 to C2) through native German pedagogy, small interactive batch sizes, and comprehensive visa & APS support.
            </p>
          </GlassCard>
        </div>

        {/* Heritage Section */}
        <div className="glass-card rounded-4xl p-8 sm:p-12 border border-slate-200/80 dark:border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-amber-500 uppercase">German Educational Standards</span>
            <h2 className="text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
              Why Our Students Consistently Outperform
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Standard language centers focus only on rote memorization. At DeutschKraft, we emphasize real-life situational immersion, phonetics correction, official Goethe mock exam simulations, and intercultural coaching.
            </p>
            <ul className="space-y-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Max 12 Students per class for max speaking time
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 1-on-1 feedback on Goethe essay writing
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Direct partnerships with German universities & hospitals
              </li>
            </ul>
          </div>
          <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
              alt="DeutschKraft Classroom"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Leadership Faculty */}
        <div className="pt-16">
          <SectionTitle
            badge="Academic Leadership"
            title="Meet Our Head"
            highlightedText="Faculty & Mentors"
            subtitle="Led by certified Goethe senior examiners and university professors."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRAINERS.map((t) => (
              <GlassCard key={t.id} className="text-center p-6 border border-slate-200/80 dark:border-slate-800">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-24 h-24 rounded-2xl object-cover mx-auto mb-4 border-2 border-amber-500/40"
                />
                <h4 className="font-extrabold font-heading text-slate-900 dark:text-white text-base">
                  {t.name}
                </h4>
                <p className="text-xs text-amber-500 font-semibold mb-2">{t.title}</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-3">{t.bio}</p>
              </GlassCard>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
