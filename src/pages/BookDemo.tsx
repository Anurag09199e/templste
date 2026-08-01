import React, { useState } from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
import { GlassCard } from '../components/common/GlassCard';
import { GradientButton } from '../components/common/GradientButton';
import { CEFRLevel } from '../types';
import { Sparkles, CheckCircle2, Calendar, Clock, Video, User } from 'lucide-react';

export const BookDemo: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel>('A1');
  const [batchType, setBatchType] = useState<'Online Live' | 'Hybrid Campus'>('Online Live');
  const [preferredSlot, setPreferredSlot] = useState('Morning (08:00 AM IST / 04:30 AM CET)');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="pt-32 pb-20 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-4 mb-12">
          <span className="px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 font-extrabold text-xs uppercase tracking-widest border border-amber-500/20">
            Free 1-on-1 Trial Class
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white">
            Book Your Free <span className="text-gradient">Demo Class</span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Experience our Goethe-certified interactive live methodology before enrolling. Zero payment required.
          </p>
        </div>

        <GlassCard className="p-8 sm:p-12 border-2 border-amber-500/40 shadow-2xl">
          {!confirmed ? (
            <form onSubmit={handleBooking} className="space-y-8">
              
              {/* Step 1: Select CEFR Level */}
              <div>
                <label className="block text-sm font-bold font-heading text-slate-900 dark:text-white mb-3">
                  1. Select Target CEFR Level:
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  {(['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as CEFRLevel[]).map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setSelectedLevel(lvl)}
                      className={`p-3 rounded-2xl font-extrabold font-heading text-sm text-center border transition-all ${
                        selectedLevel === lvl
                          ? 'border-amber-500 bg-amber-500 text-white shadow-lg scale-105'
                          : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-amber-500/50'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Mode & Timing Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold font-heading text-slate-900 dark:text-white mb-2">
                    2. Class Mode:
                  </label>
                  <div className="space-y-2">
                    {(['Online Live', 'Hybrid Campus'] as const).map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setBatchType(mode)}
                        className={`w-full p-3 rounded-xl text-xs font-bold text-left border flex items-center justify-between ${
                          batchType === mode
                            ? 'border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-extrabold'
                            : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span>{mode}</span>
                        {batchType === mode && <CheckCircle2 className="w-4 h-4 text-amber-500" />}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold font-heading text-slate-900 dark:text-white mb-2">
                    3. Preferred Time Slot:
                  </label>
                  <select
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900 text-xs font-semibold text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  >
                    <option>Morning (08:00 AM IST / 04:30 AM CET)</option>
                    <option>Afternoon (02:00 PM IST / 10:30 AM CET)</option>
                    <option>Evening (07:00 PM IST / 03:30 PM CET)</option>
                    <option>Weekend Intensive (Saturday & Sunday)</option>
                  </select>
                </div>
              </div>

              {/* Step 3: Contact Info */}
              <div className="space-y-4 pt-4 border-t border-slate-200/60 dark:border-slate-800">
                <h4 className="text-sm font-bold font-heading text-slate-900 dark:text-white">
                  4. Enter Contact Details:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name *"
                    className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address *"
                    className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="WhatsApp Phone Number *"
                    className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <GradientButton type="submit" size="lg" icon={Sparkles} fullWidth>
                Confirm Free Demo Slot
              </GradientButton>
            </form>
          ) : (
            <div className="text-center py-10 space-y-6">
              <div className="w-20 h-20 rounded-full bg-amber-500 text-white flex items-center justify-center mx-auto text-3xl shadow-xl animate-bounce">
                <Sparkles className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
                Demo Class Confirmed!
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                Vielen Dank, <strong>{name}</strong>! Your demo class for <strong>CEFR {selectedLevel}</strong> has been scheduled. Check your email (<strong>{email}</strong>) and WhatsApp for the Zoom HD joining link.
              </p>
              <GradientButton variant="outline" onClick={() => setConfirmed(false)}>
                Book Another Class
              </GradientButton>
            </div>
          )}
        </GlassCard>

      </div>
    </div>
  );
};
