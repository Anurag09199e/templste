import React from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
import { GlassCard } from '../components/common/GlassCard';
import { GradientButton } from '../components/common/GradientButton';
import { Award, ShieldCheck, HeartHandshake, Globe, CheckCircle2, ArrowRight, Building2, Star, Users, GraduationCap, Briefcase, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TRAINERS } from '../data/mockData';
import { motion } from 'framer-motion';
import about1 from '../img/about-1.webp';
import about2 from '../img/about-2.webp';
import about3 from '../img/about-3.webp';
import about01 from '../img/about-01.webp';
import img3 from '../img/img-3.webp';

export const About: React.FC = () => {
  return (
    <div className="bg-[#f9f7f1] dark:bg-[#0B0F19] min-h-screen font-sans pt-32 pb-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Hero Header */}
        <div className="relative text-center max-w-5xl mx-auto pt-10 pb-20 mb-10 overflow-visible">
          {/* Animated Red & Yellow Background */}
          <motion.div
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            className="absolute inset-0 pointer-events-none -z-10 w-[100vw] left-1/2 -translate-x-1/2 h-[130%] -top-[10%] overflow-hidden bg-gradient-to-r from-red-100 via-yellow-100 to-red-100 dark:from-red-950 dark:via-yellow-950/30 dark:to-red-950"
            style={{ backgroundSize: "200% 200%" }}
          >
            {/* Animated Floating Shapes for extra magic */}
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[5%] left-[5%] w-[600px] h-[600px] bg-red-400/30 dark:bg-red-900/30 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen"
            />
            <motion.div
              animate={{ rotate: -360, scale: [1, 1.3, 1] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute top-[10%] right-[0%] w-[800px] h-[800px] bg-yellow-400/40 dark:bg-yellow-700/20 rounded-full blur-[140px] mix-blend-multiply dark:mix-blend-screen"
            />

            {/* Overlay Grid to give it texture (Optional, keeps it looking premium) */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay"></div>
          </motion.div>

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-slate-800 shadow-sm md:shadow-md border border-slate-100 dark:border-slate-700 mb-10 relative z-10 transition-all hover:shadow-lg">
            <div className="w-2 h-2 bg-amber-400 rounded-[1px]"></div>
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em]">Our Story</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] font-extrabold font-heading text-[#200e4f] dark:text-white leading-[1.05] mb-8 tracking-tight relative z-10">
            14 Years of Building <br className="hidden md:block" /> Careers <span className="text-amber-500 dark:text-amber-400">That Matter</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto relative z-10">
            German Language Studio (GLS) is a premier linguistic and career consultancy based in Gulmohar Park, New Delhi. For over 14 years, we've helped more than 10,000 students and professionals move beyond language classes into real careers in Germany — with a 90% success rate across Goethe-Zertifikat, TestDaF, and ÖSD exams.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="bg-white/70 dark:bg-slate-900/50 backdrop-blur-lg rounded-3xl p-8 mb-20 shadow-xl border border-amber-500/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 dark:from-white/5 to-transparent pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 lg:divide-x divide-slate-200 dark:divide-slate-800">
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center px-4 pt-6 md:pt-0">
              <div className="w-12 h-12 flex items-center justify-center rounded-[14px] bg-gradient-to-br from-amber-400 to-orange-500 shadow-[0_4_20px_rgba(249,115,22,0.3)] mb-5">
                <Star className="w-6 h-6 text-white" />
              </div>
              <p className="text-3xl font-extrabold text-[#200e4f] dark:text-white font-heading tracking-tight mb-2">14+</p>
              <p className="text-[13px] font-semibold tracking-wide text-slate-500 dark:text-slate-400 uppercase">Years of Excellence</p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center px-4 pt-6 md:pt-0">
              <div className="w-12 h-12 flex items-center justify-center rounded-[14px] bg-gradient-to-br from-amber-400 to-orange-500 shadow-[0_4_20px_rgba(249,115,22,0.3)] mb-5">
                <Users className="w-6 h-6 text-white" />
              </div>
              <p className="text-3xl font-extrabold text-[#200e4f] dark:text-white font-heading tracking-tight mb-2">10,000+</p>
              <p className="text-[13px] font-semibold tracking-wide text-slate-500 dark:text-slate-400 uppercase">Alumni</p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center px-4 pt-6 md:pt-0">
              <div className="w-12 h-12 flex items-center justify-center rounded-[14px] bg-gradient-to-br from-amber-400 to-orange-500 shadow-[0_4_20px_rgba(249,115,22,0.3)] mb-5">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <p className="text-3xl font-extrabold text-[#200e4f] dark:text-white font-heading tracking-tight mb-2">90%</p>
              <p className="text-[13px] font-semibold tracking-wide text-slate-500 dark:text-slate-400 uppercase">Success Rate</p>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center text-center px-4 pt-6 md:pt-0">
              <div className="w-12 h-12 flex items-center justify-center rounded-[14px] bg-gradient-to-br from-amber-400 to-orange-500 shadow-[0_4_20px_rgba(249,115,22,0.3)] mb-5">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <p className="text-3xl font-extrabold text-[#200e4f] dark:text-white font-heading tracking-tight mb-2">95%</p>
              <p className="text-[13px] font-semibold tracking-wide text-slate-500 dark:text-slate-400 uppercase">Successful Placements</p>
            </div>
          </div>
        </div>

        {/* Founder Story */}
        <div className="py-20 mb-10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Overlapping Landscape Images */}
            <div className="relative h-[500px] flex justify-center items-center">
              {/* Image 1 (Left/Bottom) */}
              <div className="absolute left-0 bottom-6 w-[60%] h-[320px] rounded-[32px] overflow-hidden shadow-2xl z-10 border-[6px] border-white dark:border-slate-900">
                <img src={about2} alt="Swati - Founder" className="w-full h-full object-cover" />
              </div>

              {/* Image 2 (Right/Top) */}
              <div className="absolute right-4 top-4 w-[60%] h-[380px] rounded-[32px] overflow-hidden shadow-xl z-0">
                <img src={about1} alt="GLS Office" className="w-full h-full object-cover" />
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-16 right-8 z-20 bg-white dark:bg-slate-800 rounded-full py-2.5 px-5 shadow-2xl flex items-center gap-3 border border-slate-100 dark:border-slate-700">
                <div className="flex -space-x-3">
                  <div className="w-9 h-9 rounded-full border-2 border-white dark:border-slate-800 overflow-hidden"><img src="https://i.pravatar.cc/100?img=1" alt="avatar" /></div>
                  <div className="w-9 h-9 rounded-full border-2 border-white dark:border-slate-800 overflow-hidden"><img src="https://i.pravatar.cc/100?img=2" alt="avatar" /></div>
                  <div className="w-9 h-9 rounded-full border-2 border-white dark:border-slate-800 overflow-hidden"><img src="https://i.pravatar.cc/100?img=3" alt="avatar" /></div>
                </div>
                <div>
                  <p className="text-[13px] font-extrabold text-[#200e4f] dark:text-white leading-tight">10,000+</p>
                  <p className="text-[10px] text-slate-500 font-medium">Alumni</p>
                </div>
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="space-y-6 md:pl-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50">
                <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Founder Story</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-medium font-heading text-[#200e4f] dark:text-white leading-[1.1] tracking-tight">
                Meet the Director
              </h2>

              <div className="space-y-5 text-base md:text-[17px] text-slate-500 dark:text-slate-400 leading-relaxed">
                <p>
                  Swati founded GLS in 2013 after a career path that took her from business management studies at Bangalore University into the world of German-English translation at AXA Business. Fluent in both Spanish and German, she went on to live and study in Germany, an experience that shaped GLS's core philosophy: language fluency alone isn't enough — students need cultural competence and a clear career pathway actually to succeed abroad.
                </p>
                <p>
                  Her international work continued through volunteering with AFS and collaborating with Kosmos Kids at the Max Planck Institute for Solar System Research, deepening her commitment to bridging India and the German-speaking world through education.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Story Image Collage */}
        <div className="w-full max-w-6xl mx-auto px-4 mb-24 relative z-10 -mt-10 lg:-mt-0">
          <img
            src={about3}
            alt="GLS Life and Germany Highlights"
            className="w-full h-auto rounded-[32px] shadow-2xl border-4 border-white dark:border-slate-800 object-cover hover:scale-[1.01] transition-transform duration-500"
          />
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <GlassCard className="p-8 sm:p-10 border border-amber-500/30">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-bold mb-6">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#200e4f] dark:text-white mb-3">
              Our Vision
            </h3>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              To be India's most trusted bridge to Germany, empowering students and professionals with the linguistic precision, cultural competence, and career pathways to build lives that matter in the DACH region.
            </p>
          </GlassCard>

          <GlassCard className="p-8 sm:p-10 border border-amber-500/30">
            <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center font-bold mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#200e4f] dark:text-white mb-3">
              Our Mission
            </h3>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              We deliver rigorous CEFR-aligned instruction (A1 to C2) with a focus on industry-specific German for Healthcare, IT, and Engineering. Backed by 14 years of experience and a 90% exam success rate, we guide every student from language mastery to real career outcomes — through Ausbildung, Masters, or direct job placement in Germany.
            </p>
          </GlassCard>
        </div>

        {/* Student Wall of Love Collage Section */}
        <div className="py-24 mb-10 overflow-hidden relative">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src={about01}
              alt="Students Background"
              className="w-full h-full object-cover opacity-200 dark:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#faf9f6] via-transparent to-[#faf9f6] dark:from-slate-950 dark:via-transparent dark:to-slate-950"></div>
          </div>

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 relative z-10 px-4">
            <div className="flex items-center justify-center gap-4">
              <div className="w-10 h-[2px] bg-red-600"></div>
              <span className="text-[11px] font-bold text-red-600 uppercase tracking-widest">WHAT OUR STUDENTS SAY</span>
              <div className="w-10 h-[2px] bg-amber-400"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-heading text-[#200e4f] dark:text-white leading-[1.05] tracking-tight">
              Kind Words. <br className="hidden md:block" /> <span className="text-red-600">Real Impact.</span>
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 max-w-md mx-auto font-medium">
              Messages of appreciation from our amazing students who found their confidence in German.
            </p>
          </div>

          {/* Desktop Collage Display */}
          <div className="hidden lg:block relative max-w-[1100px] mx-auto h-[700px] w-full">
            {/* WhatsApp Card 1: Ruchir */}
            <div className="absolute top-[3%] left-[2%] w-[330px] bg-[#E5DDD5] rounded-[24px] shadow-2xl overflow-hidden transform -rotate-6 hover:-translate-y-2 transition-transform duration-300 z-20 border-4 border-white dark:border-slate-800">
              <div className="bg-[#075E54] text-white px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-300 overflow-hidden shrink-0">
                  <img src="https://i.pravatar.cc/100?img=11" className="w-full h-full object-cover" alt="Ruchir" />
                </div>
                <div className="leading-tight flex-1">
                  <p className="font-bold text-[13px]">Ruchir</p>
                  <p className="text-[10px] text-white/80">online</p>
                </div>
                <div className="inline-flex gap-3 text-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" /></svg>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
                </div>
              </div>
              <div className="p-3 space-y-2 relative pb-8">
                <div className="absolute inset-0 bg-[#E5DDD5] opacity-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

                <div className="flex justify-center relative z-10 pt-1">
                  <div className="bg-[#E1F3FB] text-slate-600 text-[9px] font-bold px-3 py-1 rounded-lg shadow-sm uppercase tracking-wider">
                    TODAY
                  </div>
                </div>

                <div className="bg-[#FFF3C2] text-slate-700 text-[10px] px-3 py-1.5 rounded-lg shadow-sm text-center mx-auto w-[95%] relative z-10 mb-2 flex items-center justify-center gap-1.5 leading-tight">
                  <svg className="w-3 h-3 text-slate-500 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" /></svg>
                  <span>Messages to this chat and calls are now secured with end-to-end encryption. Tap for more info.</span>
                </div>

                <div className="bg-white pt-2 pb-1.5 px-3 rounded-xl rounded-tl-none text-[12px] text-[#200e4f] shadow-sm mr-auto w-[90%] relative z-10 mt-1 flex flex-col">
                  <p className="leading-snug">Hello mam, Ruchir here from A1 batch. This is to let you know that we really appreciate and admire your way of teaching , and the effort that you put in designing the methodology 👏🏻👏🏻👏🏻</p>
                  <div className="text-right text-[10px] text-slate-400 mt-0.5 self-end flex items-center">18:39 <span className="inline-block ml-0.5"><svg className="w-3 h-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7M5 13l4 4L19 7" /></svg></span></div>
                </div>

                <div className="bg-white pt-2 pb-1.5 px-3 rounded-xl rounded-tl-none text-[12px] text-[#200e4f] shadow-sm mr-auto w-auto relative z-10 flex flex-col">
                  <p>It is really effective</p>
                  <div className="text-right text-[10px] text-slate-400 mt-0.5 -mb-0.5 self-end flex items-center">18:39 <span className="inline-block ml-0.5"><svg className="w-3 h-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7M5 13l4 4L19 7" /></svg></span></div>
                </div>

                <div className="bg-[#DCF8C6] pt-2 pb-1.5 px-3 rounded-xl rounded-tr-none text-[12px] text-[#200e4f] shadow-sm ml-auto w-auto relative z-10 text-right flex flex-col">
                  <p className="text-left">🥹🥹 I'm flattered thanks!</p>
                  <div className="text-right text-[10px] text-slate-500 mt-0.5 -mb-0.5 self-end flex items-center">18:40 <span className="inline-block ml-0.5"><svg className="w-3 h-3 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7M5 13l4 4L19 7" /></svg></span></div>
                </div>

                <div className="bg-white pt-2 pb-1.5 px-3 rounded-xl rounded-tl-none text-[12px] text-[#200e4f] shadow-sm mr-auto w-auto relative z-10 flex flex-col">
                  <p>👍👍👍</p>
                  <div className="text-right text-[10px] text-slate-400 mt-0.5 -mb-0.5 self-end flex items-center">18:40 <span className="inline-block ml-0.5"><svg className="w-3 h-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7M5 13l4 4L19 7" /></svg></span></div>
                </div>

                {/* WhatsApp Badge Overlay */}
                <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-[#25D366] rounded-full text-white flex items-center justify-center shadow-lg border-[4px] border-white dark:border-slate-800 z-30">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.76.46 3.43 1.3 4.95L2 22l5.31-1.39c1.47.78 3.14 1.2 4.73 1.2 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.46 14.18c-.23.63-1.3 1.19-1.8 1.25-.49.06-1.12.2-3.15-.65-2.45-1.03-4.04-3.55-4.16-3.71-.12-.16-1-1.33-1-2.54s.64-1.8.87-2.05c.23-.25.5-.31.67-.31.17 0 .34 0 .49.01.17.01.4-.07.63.48.24.57.81 1.97.88 2.13.08.16.12.35.02.55-.1.2-.16.32-.32.51-.16.19-.34.42-.48.55-.16.16-.33.34-.14.67.19.33.85 1.41 1.83 2.29 1.26 1.14 2.3 1.49 2.63 1.65.33.16.53.14.73-.08.2-.23.86-1 .1 1.25 1.34 1.47 1.22.42.16.48-.65zm.36-.18" /></svg>
                </div>
              </div>
            </div>

            {/* Pink Handwritten Letter: Jasmin */}
            <div className="absolute top-[0%] left-[32%] w-[420px] bg-[#FFDED8] rounded-[4px] shadow-2xl p-7 pt-9 transform rotate-2 hover:rotate-1 transition-transform duration-300 z-10 border border-red-100 dark:border-none relative" style={{ boxShadow: '0 20px 40px -10px rgba(0,0,0,0.2)' }}>

              {/* Pushpin */}
              <div className="absolute -top-4 left-[55%] -translate-x-1/2 w-6 h-6 rounded-full bg-red-600 shadow-[0_5px_10px_rgba(0,0,0,0.3)] z-40 flex items-center justify-center">
                <div className="w-2 h-2 bg-white/60 rounded-full shadow-inner translate-x-[-1px] translate-y-[-1px]"></div>
                <div className="w-1.5 h-4 bg-gray-400 absolute -bottom-3 left-1/2 -translate-x-1/2 -z-10 shadow-lg"></div>
              </div>

              {/* Top Right Heart Sticker */}
              <div className="absolute top-4 right-4 text-yellow-400 drop-shadow-md z-20">
                <svg className="w-10 h-10 transform rotate-12" fill="#FFC107" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
              </div>

              <h4 className="font-serif text-[28px] text-[#4863A0] mb-3 font-semibold" style={{ fontFamily: "'Caveat', cursive, serif" }}>Liebe Swati,</h4>
              <p className="font-serif text-[18px] text-[#4863A0] leading-[1.3]" style={{ fontFamily: "'Caveat', cursive, serif" }}>
                Herzlich Willkommen in Deutschland!<br />
                Endlich ist es soweit und du bist hier.<br />
                Ich freue mich sehr, dass du dich für einen Freiwilligendienst entschieden hast!<br /><br />
                Wir hoffen du wirst ein abwechslungsreiches Jahr haben, viele interessante Erfahrungen sammeln, und die Kraft finden auch die schwierigen Tage zu überstehen.<br /><br />
                Ich habe genau wie du ein Jahr im Ausland verbracht und kann dir versprechen: Du wirst dieses Jahr NIE vergessen !<br /><br />
                Auch wenn dir einige Unterschiede zu deinem bisherigen Leben auffallen werden, hoffe ich, dass du dich immer wohlfühlen wirst!<br />
                Genieß die wundervollen Landschaften in Deutschland. Entdecke unser tolles Brot, schlender an einem warmen Sommerabend durch die Altstadt und fahr ein Wochenende ans Meer. Freu dich auf den ersten Schnee und die Sonne im Sommer. Freu dich auf die bunten Wälder im Herbst und auf Blumenwiesen im Frühjahr.<br /><br />
                Ich wünsche dir viel Glück und eine tolle Zeit !
              </p>
              <p className="font-serif text-right mt-2 text-[24px] text-[#4863A0] font-semibold" style={{ fontFamily: "'Caveat', cursive, serif" }}>Deine Jasmin <span className="text-red-500">&hearts;</span></p>

              {/* Bottom Left Heart Sticker */}
              <div className="absolute -bottom-6 -left-6 drop-shadow-lg z-30">
                <svg className="w-16 h-16 transform -rotate-12" fill="#D32F2F" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
              </div>
            </div>

            {/* WhatsApp Card 2: Right Side */}
            <div className="absolute top-[2%] right-[0%] w-[330px] bg-[#E5DDD5] rounded-[24px] shadow-2xl overflow-hidden transform rotate-6 hover:-translate-y-2 transition-transform duration-300 z-20 border-4 border-white dark:border-slate-800">
              <div className="p-3 space-y-2 relative pb-6 pt-6">
                <div className="absolute inset-0 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

                <div className="flex justify-center relative z-10">
                  <div className="bg-[#E1F3FB] text-slate-600 text-[10px] px-3 py-1 rounded-lg shadow-sm font-semibold">Sun, 5 Dec</div>
                </div>

                <div className="bg-white pt-2 pb-1.5 px-3 rounded-xl rounded-tl-none text-[12px] leading-snug text-[#200e4f] shadow-sm mr-auto w-[90%] mt-1 relative z-10 flex flex-col">
                  <p>Ich habe meine A2 Prüfung am Freitag und ich möchte Sprechen üben. Deshalb brauche ich ein Prüfungspartner.</p>
                  <div className="text-right text-[10px] text-slate-400 mt-0.5 -mb-0.5 self-end">17:53</div>
                </div>

                {/* WhatsApp Badge Overlay Top Left */}
                <div className="absolute top-0 left-0 w-14 h-14 bg-[#25D366] rounded-full text-white flex items-center justify-center shadow-lg border-[4px] border-white z-40 transform -translate-x-6 translate-y-12">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.76.46 3.43 1.3 4.95L2 22l5.31-1.39c1.47.78 3.14 1.2 4.73 1.2 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.46 14.18c-.23.63-1.3 1.19-1.8 1.25-.49.06-1.12.2-3.15-.65-2.45-1.03-4.04-3.55-4.16-3.71-.12-.16-1-1.33-1-2.54s.64-1.8.87-2.05c.23-.25.5-.31.67-.31.17 0 .34 0 .49.01.17.01.4-.07.63.48.24.57.81 1.97.88 2.13.08.16.12.35.02.55-.1.2-.16.32-.32.51-.16.19-.34.42-.48.55-.16.16-.33.34-.14.67.19.33.85 1.41 1.83 2.29 1.26 1.14 2.3 1.49 2.63 1.65.33.16.53.14.73-.08.2-.23.86-1 .1 1.25 1.34 1.47 1.22.42.16.48-.65zm.36-.18" /></svg>
                </div>

                <div className="flex justify-center relative z-10 pt-4">
                  <div className="bg-[#E1F3FB] text-slate-600 text-[10px] px-3 py-1 rounded-lg shadow-sm font-semibold">Yesterday</div>
                </div>

                <div className="bg-white pt-2 pb-1.5 px-3 rounded-xl rounded-tl-none text-[12px] leading-[1.4] text-[#200e4f] shadow-sm mr-auto w-[85%] mt-1 relative z-10 flex flex-col">
                  <p>Ma'am my B1 results:-<br />Hören : 90<br />Lesen : 90<br />Schreiben : 99<br />Sprechen : 94</p>
                  <div className="text-right text-[10px] text-slate-400 mt-0.5 -mb-0.5 self-end flex items-center">15:45 <span className="inline-block ml-0.5"><svg className="w-3 h-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7M5 13l4 4L19 7" /></svg></span></div>
                </div>

                <div className="bg-[#DCF8C6] pt-1.5 pb-1 px-3 rounded-xl rounded-tr-none text-[12px] text-[#200e4f] shadow-sm ml-auto w-auto relative z-10 text-right flex flex-col items-end">
                  <p className="text-left font-medium text-black">Wow</p>
                  <div className="text-right text-[9.5px] text-slate-500 mt-0.5 -mb-0.5 flex items-center">15:46 <span className="inline-block ml-0.5"><svg className="w-3 h-3 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7M5 13l4 4L19 7" /></svg></span></div>
                </div>

                <div className="bg-[#DCF8C6] pt-1.5 pb-1 px-3 rounded-xl rounded-tr-none text-[12px] text-[#200e4f] shadow-sm ml-auto w-auto relative z-10 text-right flex flex-col items-end">
                  <p className="text-left font-medium text-black">Congratulations</p>
                  <div className="text-right text-[9.5px] text-slate-500 mt-0.5 -mb-0.5 flex items-center">15:46 <span className="inline-block ml-0.5"><svg className="w-3 h-3 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7M5 13l4 4L19 7" /></svg></span></div>
                </div>

                <div className="bg-white pt-2 pb-1.5 px-3 rounded-xl rounded-tl-none text-[12px] text-[#200e4f] shadow-sm mr-auto w-auto relative z-10 mt-2 flex flex-col items-end">
                  <p className="w-full text-left">Thanks ma'am for everything</p>
                  <div className="text-right text-[10px] text-slate-400 mt-0.5 -mb-0.5 flex items-center">15:47 <span className="inline-block ml-0.5"><svg className="w-3 h-3 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7M5 13l4 4L19 7" /></svg></span></div>
                </div>

                <div className="bg-[#DCF8C6] pt-2 pb-1.5 px-3 rounded-xl rounded-tr-none text-[12px] text-[#200e4f] shadow-sm ml-auto w-auto relative z-10 text-right flex flex-col items-end">
                  <p className="text-left font-medium text-black">It's your hard work work n dedication</p>
                  <div className="text-right text-[10px] text-slate-500 mt-0.5 -mb-0.5 flex items-center">15:47 <span className="inline-block ml-0.5"><svg className="w-3 h-3 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7M5 13l4 4L19 7" /></svg></span></div>
                </div>

              </div>
            </div>

            {/* Email Widget: Matthias */}
            <div className="absolute bottom-[2%] left-[4%] w-[270px] bg-white rounded-[16px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] p-4 transform -rotate-[8deg] hover:-translate-y-2 transition-transform duration-300 z-30 border border-slate-100 dark:bg-slate-800 relative">

              {/* Mail top header */}
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100 text-gray-500">
                <svg className="w-5 h-5 ml-1 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                <div className="flex gap-4 mr-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </div>
              </div>

              {/* Red Email icon flying out */}
              <div className="absolute -top-4 -left-6 w-14 h-14 bg-[#D32F2F] rounded-full border-[3px] border-white flex items-center justify-center shadow-lg z-40">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
              </div>

              <div className="text-[13px] text-[#200e4f] dark:text-gray-200 mt-2 space-y-2.5 leading-relaxed font-medium px-2">
                <p>Hallo liebe Frau Swati,</p>
                <p>Ich sitze im Hotel mit Chandler, der im Huawei<br />sehr gut deutsch spricht!</p>
                <p>Er sagt, dass Sie eine gute Lehrerin sind.</p>
                <div className="pt-2">Viele Grüße<br />Matthias Duwenbeck</div>

                {/* Signature scribble */}
                <div className="pt-3 pb-2 opacity-60">
                  <svg width="60" height="20" viewBox="0 0 100 30" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M 0 28 Q 15 5 25 20 T 40 10 T 60 25 T 80 5 T 95 20" /></svg>
                </div>
              </div>
            </div>

            {/* Quote Card Box: Aishwarya */}
            <div className="absolute bottom-[3%] right-[3%] w-[330px] bg-white rounded-[16px] shadow-[0_20px_40px_-5px_rgba(0,0,0,0.2)] p-7 transform rotate-2 hover:-translate-y-2 transition-transform duration-300 z-30 border border-gray-50 relative">

              <div className="text-[70px] text-amber-400 leading-[0] font-sans font-black mb-8 mt-6">"</div>

              <p className="text-[14px] font-medium text-slate-700 leading-relaxed mb-6 px-1">
                Your classes not only helped me clear my exam but also gave me the confidence to speak German in real life. The way you explain makes everything so easy!
              </p>

              <div className="flex items-center justify-between border-t border-gray-100 pt-4 px-1">
                <p className="text-[12px] text-[#200e4f] font-bold tracking-tight">- Aishwarya, B1 Batch</p>
                <svg className="w-8 h-8 text-black fill-none stroke-[1.5]" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.173 11.666l-8.625 8.625a1.2 1.2 0 01-1.696 0L2.227 11.666C1.196 10.635 1.196 8.964 2.227 7.933c1.031-1.031 2.702-1.031 3.733 0l4.414 4.414a.6.6 0 00.849 0l4.587-4.587c1.03-1.03 2.701-1.03 3.732 0 1.031 1.031 1.031 2.702 0 3.733z" fill="transparent" stroke="currentColor"></path><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.969 9.969 0 006.75-2.625C20.669 16.456 22 13.91 22 11c0-5.523-4.477-10-10-10S2 5.477 2 11c0 2.91 1.331 5.456 3.25 7.375"></path><path d="M12 21.5c4 4 8-1 5-7-2-4-7 4-5 7" fill="none" /></svg>
                {/* Clean, simplified sketchy heart */}
                <div className="absolute bottom-5 right-6 text-black opacity-80">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    <path d="M12 21.23c-1.5 1-4-2-2-5"></path>
                  </svg>
                </div>
              </div>
            </div>

          </div>

          {/* Mobile Fallback Grid (Stacked view) */}
          <div className="lg:hidden max-w-md mx-auto space-y-8 px-4 mt-12 relative z-10">
            <GlassCard className="p-6 border border-slate-200/80">
              <div className="text-5xl text-amber-500 leading-[0] font-serif mb-4 mt-2">"</div>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-relaxed italic mb-4">Your classes not only helped me clear my exam but also gave me the confidence to speak German in real life. The way you explain makes everything so easy!</p>
              <p className="text-[11px] text-slate-500 font-extrabold uppercase tracking-wide">- Aishwarya, B1 Batch</p>
            </GlassCard>

            <GlassCard className="p-6 border border-red-100 bg-[#FFDED8] dark:bg-[#FFEAEA]/10">
              <h4 className="font-serif text-2xl text-[#4863A0] dark:text-white mb-3 font-bold" style={{ fontFamily: "'Caveat', cursive, serif" }}>Liebe Swati,</h4>
              <p className="font-serif text-[18px] text-[#4863A0] dark:text-slate-300 leading-relaxed mb-4" style={{ fontFamily: "'Caveat', cursive, serif" }}>Herzlich Willkommen in Deutschland! Endlich ist es soweit und du bist hier. Ich freue mich sehr, dass du dich für einen Freiwilligendienst entschieden hast...</p>
              <p className="font-serif text-right text-xl text-[#4863A0] dark:text-white font-bold" style={{ fontFamily: "'Caveat', cursive, serif" }}>Deine Jasmin &hearts;</p>
            </GlassCard>

            <GlassCard className="p-0 border border-slate-200/80 overflow-hidden">
              <div className="bg-[#075E54] text-white px-4 py-3 font-bold text-sm">Ruchir (WhatsApp)</div>
              <div className="p-5 bg-[#E5DDD5] dark:bg-slate-900/50 space-y-3">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg text-xs leading-relaxed text-[#200e4f] dark:text-slate-300 shadow-sm mr-auto border-l-4 border-amber-400">
                  Hello mam, Ruchir here from A1 batch. This is to let you know that we really appreciate and admire your way of teaching , and the effort that you put in designing the methodology 👏🏻👏🏻👏🏻
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-0 border border-slate-200/80 overflow-hidden bg-white">
              <div className="bg-[#D32F2F] text-white px-4 py-3 font-bold text-sm flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                Matthias Duwenbeck
              </div>
              <div className="p-5 text-sm text-[#200e4f] bg-white">
                <p className="mb-2 font-medium">Hallo liebe Frau Swati,</p>
                <p>Ich sitze im Hotel mit Chandler, der im Huawei sehr gut deutsch spricht!</p>
                <p>Er sagt, dass Sie eine gute Lehrerin sind.</p>
                <p className="pt-2 text-slate-500">Viele Grüße<br />Matthias</p>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Heritage Section */}
        <div className="glass-card rounded-4xl p-8 sm:p-12 border border-slate-200/80 dark:border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-amber-500 uppercase">German Educational Standards</span>
            <h2 className="text-3xl font-extrabold font-heading text-[#200e4f] dark:text-white">
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

        {/* About Page FAQ Section */}
        <section className="py-20 relative">
          <SectionTitle
            badge="Frequently Asked Questions"
            title="Got Questions? We Have"
            highlightedText="Clear Answers"
            subtitle="Find quick information regarding our operations, success rates, and the support we provide."
          />

          <div className="space-y-4 max-w-4xl mx-auto">
            {/* FAQ Item 1 */}
            <GlassCard className="p-6 border border-slate-200/80 dark:border-slate-800">
              <h4 className="font-bold text-base text-[#200e4f] dark:text-white flex items-center gap-2 mb-2 font-heading">
                <HelpCircle className="w-5 h-5 text-amber-500 shrink-0" />
                How long has GLS been operating?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-7">
                German Language Studio was founded in 2013 by Director Swati and has spent over 14 years training students and professionals for successful careers in Germany.
              </p>
            </GlassCard>

            {/* FAQ Item 2 */}
            <GlassCard className="p-6 border border-slate-200/80 dark:border-slate-800">
              <h4 className="font-bold text-base text-[#200e4f] dark:text-white flex items-center gap-2 mb-2 font-heading">
                <HelpCircle className="w-5 h-5 text-amber-500 shrink-0" />
                Is GLS a certified/recognized institute?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-7">
                Yes. Our training is aligned with CEFR standards (A1–C2) and prepares students for globally recognized exams including the Goethe-Zertifikat, TestDaF, and ÖSD.
              </p>
            </GlassCard>

            {/* FAQ Item 3 */}
            <GlassCard className="p-6 border border-slate-200/80 dark:border-slate-800">
              <h4 className="font-bold text-base text-[#200e4f] dark:text-white flex items-center gap-2 mb-2 font-heading">
                <HelpCircle className="w-5 h-5 text-amber-500 shrink-0" />
                What makes GLS different from other German language institutes?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-7">
                We go beyond language classes. GLS combines rigorous exam preparation with industry-specific German training (Healthcare, IT, Engineering) and end-to-end career support — from Ausbildung and Master's guidance to job placement and German-style CV building.
              </p>
            </GlassCard>

            {/* FAQ Item 4 */}
            <GlassCard className="p-6 border border-slate-200/80 dark:border-slate-800">
              <h4 className="font-bold text-base text-[#200e4f] dark:text-white flex items-center gap-2 mb-2 font-heading">
                <HelpCircle className="w-5 h-5 text-amber-500 shrink-0" />
                Who trains the students at GLS?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-7">
                Our programs are led by experienced instructors under the direction of Swati, a German and Spanish language expert with hands-on experience as a translator, international volunteer, and researcher in Germany.
              </p>
            </GlassCard>

            {/* FAQ Item 5 */}
            <GlassCard className="p-6 border border-slate-200/80 dark:border-slate-800">
              <h4 className="font-bold text-base text-[#200e4f] dark:text-white flex items-center gap-2 mb-2 font-heading">
                <HelpCircle className="w-5 h-5 text-amber-500 shrink-0" />
                Does GLS only help with language learning, or also with careers in Germany?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-7">
                Both. Language mastery is our foundation, but our real focus is outcomes; helping students choose the right path (study, Ausbildung, or job) and supporting them all the way through visa, APS, and job placement processes.
              </p>
            </GlassCard>

            {/* FAQ Item 6 */}
            <GlassCard className="p-6 border border-slate-200/80 dark:border-slate-800">
              <h4 className="font-bold text-base text-[#200e4f] dark:text-white flex items-center gap-2 mb-2 font-heading">
                <HelpCircle className="w-5 h-5 text-amber-500 shrink-0" />
                What is GLS's success rate?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-7">
                We maintain a 90% success rate for Goethe-Zertifikat, TestDaF, and ÖSD exams, with over 10,000 alumni to date.
              </p>
            </GlassCard>
          </div>
        </section>

      </div>
      {/* 12. Final Contact CTA Banner */}
      <section className="py-20 relative px-4">
        <div
          className="max-w-[1400px] mx-auto rounded-[32px] shadow-2xl relative overflow-hidden md:min-h-[600px] flex items-center bg-[#0B0F19]"
        >
          {/* Background Image Mockup */}
          <div className="w-full relative md:absolute md:inset-0 md:z-0">
            <img
              src={img3}
              alt="Train passing"
              className="w-full h-auto object-contain block md:h-full md:object-cover"
            />
            {/* Dark gradient mapping to the right to make the white text legible */}
            <div className="absolute inset-0 bg-black/40 md:bg-transparent md:bg-gradient-to-r md:from-transparent "></div>
          </div>

          <div className="absolute inset-0 z-10 w-full px-6 flex flex-col justify-center md:flex-none md:static md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-12 md:gap-8 md:my-10">
            <div className="hidden md:block md:col-span-4 lg:col-span-5">{/* Empty spacing for the left image element */}</div>

            {/* Right column for the text content */}
            <div className="md:col-span-8 lg:col-span-7 flex flex-col justify-center space-y-6 relative">

              {/* Paper Airplane and dotted path SVG */}
              <div className="absolute -top-[70px] left-[-30px] w-full h-[100px] pointer-events-none hidden md:block">
                <svg className="w-full h-full text-white" viewBox="0 0 500 100" fill="none" preserveAspectRatio="none">
                  {/* The curved trajectory */}
                  <path d="M 0 90 Q 200 10 400 30" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" fill="transparent" strokeDashoffset="0" className="opacity-70" />
                </svg>
                {/* Airplane icon placed at the end of the line */}
                <svg className="absolute top-[18px] right-[70px] w-8 h-8 text-white transform -rotate-12 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-heading text-white leading-[1.1] tracking-tight drop-shadow-md">
                Ready to Start Your <br className="hidden lg:block" />
                <span className="italic font-medium opacity-90">German Journey?</span>
              </h2>

              <p className="text-sm md:text-base lg:text-[17px] text-gray-200 font-medium max-w-[550px] leading-relaxed drop-shadow-sm mt-3">
                Book a free counseling session and find the right path — Ausbildung, Masters, or direct job placement
              </p>

              <div className="pt-2 sm:pt-5 flex items-center gap-4">
                <Link to="/book-demo">
                  <button className="bg-white text-[#1f1a14] hover:bg-gray-100 font-bold px-8 py-3.5 rounded-xl shadow-xl transition-all hover:scale-105 active:scale-95 text-[15px] flex items-center group">
                    Book Free Consultation
                    <ArrowRight className="inline w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
