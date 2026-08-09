import React, { useState } from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
import { GlassCard } from '../components/common/GlassCard';
import { GradientButton } from '../components/common/GradientButton';
import { TRAINERS } from '../data/mockData';
import { Modal } from '../components/common/Modal';
import { Award, Volume2, CheckCircle2, MessageSquare } from 'lucide-react';
import { Trainer } from '../types';

export const Trainers: React.FC = () => {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);

  return (
    <div className="pt-32 pb-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 font-extrabold text-xs uppercase tracking-widest border border-amber-500/20">
            World-Class Faculty
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#200e4f] dark:text-white">
            Native German & <span className="text-gradient">Goethe Senior Examiners</span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Learn from passionate language educators with master's degrees in German pedagogy, decades of Goethe/Telc exam experience, and personal insight into living in Munich, Berlin & Stuttgart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TRAINERS.map((t) => (
            <GlassCard key={t.id} className="p-8 border border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row gap-6 items-start">
              <div className="relative shrink-0 mx-auto sm:mx-0">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-32 h-32 rounded-3xl object-cover border-2 border-amber-500/50 shadow-xl"
                />
                {t.nativeSpeaker && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 bg-amber-500 text-white font-black text-[10px] rounded-md uppercase tracking-wider">
                    Native Speaker
                  </span>
                )}
              </div>

              <div className="space-y-3 flex-1">
                <div>
                  <h3 className="text-xl font-extrabold font-heading text-[#200e4f] dark:text-white">{t.name}</h3>
                  <p className="text-xs font-bold text-amber-600 dark:text-amber-400">{t.title}</p>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{t.bio}</p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {t.specialties.map((s, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-extrabold text-slate-600 dark:text-slate-300">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500">{t.experienceYears} Years Exp</span>
                  <button
                    onClick={() => setSelectedTrainer(t)}
                    className="text-xs font-bold text-amber-500 hover:underline flex items-center gap-1"
                  >
                    <Volume2 className="w-4 h-4" /> German Greeting
                  </button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Audio / Video Greeting Modal */}
        {selectedTrainer && (
          <Modal
            isOpen={!!selectedTrainer}
            onClose={() => setSelectedTrainer(null)}
            title={`Greeting from ${selectedTrainer.name}`}
          >
            <div className="space-y-4 text-center py-4">
              <img
                src={selectedTrainer.avatar}
                alt={selectedTrainer.name}
                className="w-20 h-20 rounded-2xl mx-auto object-cover border-2 border-amber-500"
              />
              <div className="bg-amber-500/10 p-4 rounded-2xl border border-amber-500/20">
                <p className="text-sm font-semibold italic text-[#200e4f] dark:text-white mb-2">
                  "{selectedTrainer.greetingDe}"
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Translation: "{selectedTrainer.greetingEn}"
                </p>
              </div>
              <GradientButton fullWidth onClick={() => setSelectedTrainer(null)}>
                Close Preview
              </GradientButton>
            </div>
          </Modal>
        )}

      </div>
    </div>
  );
};
