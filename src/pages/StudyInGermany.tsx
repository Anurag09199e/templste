import React from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
import { GlassCard } from '../components/common/GlassCard';
import { GradientButton } from '../components/common/GradientButton';
import { CheckCircle2, GraduationCap, Building2, ShieldCheck, ArrowRight, BookOpen, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export const StudyInGermany: React.FC = () => {
  const universities = [
    { name: 'Technical University of Munich (TUM)', ranking: '#1 in Germany', courses: 'Automotive, AI, Robotics, Biotech' },
    { name: 'Ludwig-Maximilians-Universität München (LMU)', ranking: '#2 in Germany', courses: 'Medicine, Law, Physics, Humanities' },
    { name: 'RWTH Aachen University', ranking: '#1 Engineering', courses: 'Mechanical, Electrical, Production Engineering' },
    { name: 'Heidelberg University', ranking: 'Oldest German University', courses: 'Medicine, Biochemistry, Life Sciences' },
  ];

  return (
    <div className="pt-32 pb-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-sky-500/10 text-sky-500 font-extrabold text-xs uppercase tracking-widest border border-sky-500/20">
            Tuition-Free Higher Education
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white">
            Study at Germany's Top <span className="text-gradient">Public Universities</span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Germany offers world-class, tuition-free higher education for international students across 15 federal states. Learn how DeutschKraft guides you through B2/C1 German, APS verification, and visa issuance.
          </p>
        </div>

        {/* 4 Steps Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          {[
            { step: '01', title: 'Language (A1 to B2/C1)', desc: 'Achieve official Goethe B2 or TestDaF TDN 4 certificate.' },
            { step: '02', title: 'APS Verification', desc: 'Document verification by the Academic Evaluation Centre (APS).' },
            { step: '03', title: 'Uni-Assist Application', desc: 'Direct application to tuition-free public university programs.' },
            { step: '04', title: 'Blocked Account & Visa', desc: 'Setup Expatrio/Fintiba account and secure your German student visa.' },
          ].map((item, idx) => (
            <GlassCard key={idx} className="p-6 border border-sky-500/30">
              <span className="text-3xl font-black font-heading text-sky-500 mb-2 block">{item.step}</span>
              <h3 className="font-bold text-base font-heading text-slate-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">{item.desc}</p>
            </GlassCard>
          ))}
        </div>

        {/* Top Universities Preview */}
        <div className="space-y-8">
          <SectionTitle
            badge="Destination Universities"
            title="Where Our Alumni"
            highlightedText="Are Studying"
            subtitle="Top-ranked German public institutions with 0 tuition fees for international students."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {universities.map((uni, idx) => (
              <GlassCard key={idx} className="p-6 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 bg-amber-500/10 text-amber-500 rounded">
                    {uni.ranking}
                  </span>
                  <h4 className="font-bold text-base font-heading text-slate-900 dark:text-white">{uni.name}</h4>
                  <p className="text-xs text-slate-500">{uni.courses}</p>
                </div>
                <GraduationCap className="w-8 h-8 text-amber-500 shrink-0" />
              </GlassCard>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="pt-16">
          <GlassCard className="p-10 text-center border-2 border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-orange-500/10">
            <h3 className="text-2xl font-extrabold font-heading text-slate-900 dark:text-white mb-3">
              Want a Free Profile Evaluation for German Universities?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-6">
              Our education advisors review your transcripts, APS status, and recommend the exact CEFR level required for your target master's or bachelor's degree in Germany.
            </p>
            <Link to="/book-demo">
              <GradientButton icon={ArrowRight}>Book Free Academic Counseling</GradientButton>
            </Link>
          </GlassCard>
        </div>

      </div>
    </div>
  );
};
