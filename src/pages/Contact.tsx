import React, { useState } from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
import { GlassCard } from '../components/common/GlassCard';
import { GradientButton } from '../components/common/GradientButton';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 font-extrabold text-xs uppercase tracking-widest border border-amber-500/20">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-slate-900 dark:text-white">
            Contact Our <span className="text-gradient">Admissions Team</span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Have questions about batch starting dates, Goethe exam preparation, or university admissions in Germany? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard className="p-8 border border-amber-500/30 space-y-6">
              <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                Munich Campus Office
              </h3>
              
              <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-bold">Address</strong>
                    <span>Leopoldstraße 48, 80802 München, Bayern, Germany</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-bold">Phone / WhatsApp</strong>
                    <span>+49 89 2345 6789 / +91 98765 43210</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-bold">Email Admissions</strong>
                    <span>admissions@deutschkraft-institute.de</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white font-bold">Working Hours</strong>
                    <span>Mon - Sat: 09:00 AM - 08:00 PM (CET / IST)</span>
                  </div>
                </li>
              </ul>
            </GlassCard>

            {/* Interactive Location Visual */}
            <div className="rounded-3xl overflow-hidden glass-card p-4 border border-slate-800 text-center">
              <div className="w-full h-48 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400 text-xs font-semibold relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-orange-500/20" />
                <div className="relative z-10 text-center space-y-1">
                  <MapPin className="w-8 h-8 text-amber-500 mx-auto animate-bounce" />
                  <span className="block text-white font-bold">Munich & Berlin Campuses</span>
                  <span className="text-[10px] text-slate-300">Interactive Location Map</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form UI (7 cols) */}
          <div className="lg:col-span-7">
            <GlassCard className="p-8 sm:p-10 border border-slate-200/80 dark:border-slate-800">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-2">
                    Send Us a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+49 / +91 ..."
                        className="w-full px-4 py-3 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Interested Level / Pathway
                      </label>
                      <select className="w-full px-4 py-3 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:outline-none">
                        <option value="A1">A1 Beginner</option>
                        <option value="A2">A2 Elementary</option>
                        <option value="B1">B1 Intermediate</option>
                        <option value="B2">B2 Upper Intermediate</option>
                        <option value="C1">C1 Advanced</option>
                        <option value="Study">Study in Germany</option>
                        <option value="Ausbildung">Ausbildung Program</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Your Inquiry *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your background and language goals..."
                      className="w-full px-4 py-3 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>

                  <GradientButton type="submit" size="lg" icon={Send} fullWidth>
                    Submit Inquiry
                  </GradientButton>
                </form>
              ) : (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto text-2xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                    Inquiry Received!
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
                    Vielen Dank! Our admissions counselor will contact you within 24 hours via phone/email with your course details.
                  </p>
                  <GradientButton variant="outline" onClick={() => setSubmitted(false)}>
                    Send Another Inquiry
                  </GradientButton>
                </div>
              )}
            </GlassCard>
          </div>

        </div>

      </div>
    </div>
  );
};
