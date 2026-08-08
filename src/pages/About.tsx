import React from 'react';
import { SectionTitle } from '../components/common/SectionTitle';
import { GlassCard } from '../components/common/GlassCard';
import { GradientButton } from '../components/common/GradientButton';
import { Award, ShieldCheck, HeartHandshake, Globe, CheckCircle2, ArrowRight, Building2, Star, Users, GraduationCap, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TRAINERS } from '../data/mockData';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Hero Header */}
        <div className="relative text-center max-w-5xl mx-auto pt-10 pb-20 mb-10 overflow-visible">
          {/* Recreated 3D Folded Curtain Background */}
          <div className="absolute inset-0 pointer-events-none -z-10 w-[100vw] left-1/2 -translate-x-1/2 h-[130%] -top-[10%] bg-[#faf9f6] dark:bg-slate-950 overflow-hidden">

            {/* Abstract Faint Color Blobs */}
            <div className="absolute -top-[5%] left-[5%] w-[500px] h-[500px] bg-amber-400/25 rounded-full blur-[130px] mix-blend-multiply dark:mix-blend-lighten"></div>
            <div className="absolute top-[20%] right-[0%] w-[700px] h-[700px] bg-red-400/15 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-lighten"></div>
            <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-[#6452ff]/15 rounded-full blur-[140px] mix-blend-multiply dark:mix-blend-lighten"></div>

            {/* 3D Vertical Columns overlay (shadows on edges) */}
            <div className="absolute inset-0 flex w-full h-full">
              {Array.from({ length: 14 }).map((_, i) => (
                <div key={i} className="flex-1 h-full border-r border-amber-900/[0.05] bg-gradient-to-r from-white/60 via-transparent to-amber-900/[0.05] dark:border-white/[0.04] dark:from-transparent dark:to-white/[0.03]"></div>
              ))}
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-slate-800 shadow-sm md:shadow-md border border-slate-100 dark:border-slate-700 mb-10 relative z-10 transition-all hover:shadow-lg">
            <div className="w-2 h-2 bg-amber-400 rounded-[1px]"></div>
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em]">Our Story</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] font-extrabold font-heading text-slate-900 dark:text-white leading-[1.05] mb-8 tracking-tight relative z-10">
            14 Years of Building <br className="hidden md:block" /> Careers <span className="text-[#6452ff] dark:text-[#887aff]">That Matter</span>
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
              <p className="text-3xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight mb-2">14+</p>
              <p className="text-[13px] font-semibold tracking-wide text-slate-500 dark:text-slate-400 uppercase">Years of Excellence</p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center px-4 pt-6 md:pt-0">
              <div className="w-12 h-12 flex items-center justify-center rounded-[14px] bg-gradient-to-br from-amber-400 to-orange-500 shadow-[0_4_20px_rgba(249,115,22,0.3)] mb-5">
                <Users className="w-6 h-6 text-white" />
              </div>
              <p className="text-3xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight mb-2">10,000+</p>
              <p className="text-[13px] font-semibold tracking-wide text-slate-500 dark:text-slate-400 uppercase">Alumni</p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center px-4 pt-6 md:pt-0">
              <div className="w-12 h-12 flex items-center justify-center rounded-[14px] bg-gradient-to-br from-amber-400 to-orange-500 shadow-[0_4_20px_rgba(249,115,22,0.3)] mb-5">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <p className="text-3xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight mb-2">90%</p>
              <p className="text-[13px] font-semibold tracking-wide text-slate-500 dark:text-slate-400 uppercase">Success Rate</p>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center text-center px-4 pt-6 md:pt-0">
              <div className="w-12 h-12 flex items-center justify-center rounded-[14px] bg-gradient-to-br from-amber-400 to-orange-500 shadow-[0_4_20px_rgba(249,115,22,0.3)] mb-5">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <p className="text-3xl font-extrabold text-slate-900 dark:text-white font-heading tracking-tight mb-2">95%</p>
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
                <img src="src/img/about-1.png" alt="Swati - Founder" className="w-full h-full object-cover" />
              </div>

              {/* Image 2 (Right/Top) */}
              <div className="absolute right-4 top-4 w-[60%] h-[320px] rounded-[32px] overflow-hidden shadow-xl z-0">
                <img src="src/img/about-2.png" alt="GLS Office" className="w-full h-full object-cover" />
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-16 right-8 z-20 bg-white dark:bg-slate-800 rounded-full py-2.5 px-5 shadow-2xl flex items-center gap-3 border border-slate-100 dark:border-slate-700">
                <div className="flex -space-x-3">
                  <div className="w-9 h-9 rounded-full border-2 border-white dark:border-slate-800 overflow-hidden"><img src="https://i.pravatar.cc/100?img=1" alt="avatar" /></div>
                  <div className="w-9 h-9 rounded-full border-2 border-white dark:border-slate-800 overflow-hidden"><img src="https://i.pravatar.cc/100?img=2" alt="avatar" /></div>
                  <div className="w-9 h-9 rounded-full border-2 border-white dark:border-slate-800 overflow-hidden"><img src="https://i.pravatar.cc/100?img=3" alt="avatar" /></div>
                </div>
                <div>
                  <p className="text-[13px] font-extrabold text-slate-900 dark:text-white leading-tight">10,000+</p>
                  <p className="text-[10px] text-slate-500 font-medium">Alumni</p>
                </div>
              </div>

              {/* Decorative vertical lines / audio wave abstraction */}
              <div className="absolute left-[10%] top-[30%] flex items-end gap-1 h-6 opacity-30 z-20">
                <div className="w-0.5 h-full bg-slate-800 dark:bg-white rounded-full"></div>
                <div className="w-0.5 h-[60%] bg-slate-800 dark:bg-white rounded-full"></div>
                <div className="w-0.5 h-[80%] bg-slate-800 dark:bg-white rounded-full"></div>
                <div className="w-0.5 h-[40%] bg-slate-800 dark:bg-white rounded-full"></div>
                <div className="w-0.5 h-full bg-slate-800 dark:bg-white rounded-full"></div>
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="space-y-6 md:pl-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50">
                <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Founder Story</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-medium font-heading text-slate-900 dark:text-white leading-[1.1] tracking-tight">
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
        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <GlassCard className="p-8 sm:p-10 border border-amber-500/30">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-bold mb-6">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-3">
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
            <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-3">
              Our Mission
            </h3>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              We deliver rigorous CEFR-aligned instruction (A1 to C2) with a focus on industry-specific German for Healthcare, IT, and Engineering. Backed by 14 years of experience and a 90% exam success rate, we guide every student from language mastery to real career outcomes — through Ausbildung, Masters, or direct job placement in Germany.
            </p>
          </GlassCard>
        </div>

        {/* Student Wall of Love Collage Section */}
        <div className="py-24 mb-10 overflow-hidden relative">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 relative z-10 px-4">
            <div className="flex items-center justify-center gap-4">
              <div className="w-10 h-[2px] bg-red-600"></div>
              <span className="text-[11px] font-bold text-red-600 uppercase tracking-widest">WHAT OUR STUDENTS SAY</span>
              <div className="w-10 h-[2px] bg-amber-400"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-heading text-slate-900 dark:text-white leading-[1.05] tracking-tight">
              Kind Words. <br className="hidden md:block" /> <span className="text-red-600">Real Impact.</span>
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 max-w-md mx-auto font-medium">
              Messages of appreciation from our amazing students who found their confidence in German.
            </p>
          </div>

          {/* Desktop Collage Display */}
          <div className="hidden lg:block relative max-w-[1100px] mx-auto h-[700px] w-full">
            {/* WhatsApp Card 1: Ruchir */}
            <div className="absolute top-[5%] left-[0%] w-[320px] bg-[#E5DDD5] rounded-[24px] shadow-2xl overflow-hidden transform -rotate-6 hover:rotate-0 transition-transform duration-300 z-20 border-4 border-white dark:border-slate-800">
              <div className="bg-[#075E54] text-white px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-300 overflow-hidden shrink-0">
                  <img src="https://i.pravatar.cc/100?img=11" className="w-full h-full object-cover" alt="Ruchir" />
                </div>
                <div className="leading-tight">
                  <p className="font-bold text-[13px]">Ruchir</p>
                  <p className="text-[10px] text-white/80">online</p>
                </div>
                <div className="ml-auto inline-flex gap-3 text-white/80">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" /></svg>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 4.02 2 6.5s4.48 4.5 10 4.5 10-2.02 10-4.5S17.52 2 12 2zM2 15c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5V11.5c-2.08 1.96-5.69 3.25-10 3.25S4.08 13.46 2 11.5V15zm0-4.25c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5V8.5c-2.08 1.96-5.69 3.25-10 3.25S4.08 10.46 2 8.5v2.25z" /></svg>
                </div>
              </div>
              <div className="p-4 space-y-3 relative h-[250px]">
                <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
                <div className="bg-[#FFF3C2] text-slate-600 text-[9px] px-3 py-1.5 rounded-md shadow-sm text-center mx-auto w-3/4 relative z-10">
                  Messages to this chat and calls are now secured with end-to-end encryption.
                </div>
                <div className="bg-white pt-2 pb-3 px-3 rounded-lg rounded-tl-none text-[12px] text-slate-800 shadow-sm mr-auto w-[90%] relative z-10 mt-3 border-t-[3px] border-amber-400">
                  Hello mam, Ruchir here from A1 batch. This is to let you know that we really appreciate and admire your way of teaching , and the effort that you put in designing the methodology 👏👏
                  <span className="block text-right text-[9px] text-slate-500 mt-1 opacity-70">13:39</span>
                </div>
                <div className="bg-[#DCF8C6] pt-2 pb-3 px-3 rounded-lg rounded-tr-none text-[12px] text-slate-800 shadow-sm ml-auto w-[70%] relative z-10 text-right">
                  🤩 I'm flattered thanks!
                  <span className="block text-right text-[9px] text-slate-500 mt-1 opacity-70">18:42</span>
                </div>
              </div>
            </div>

            {/* Pink Handwritten Letter: Jasmin */}
            <div className="absolute top-[0%] left-[34%] w-[380px] bg-[#fdefed] rounded-sm shadow-2xl p-8 transform rotate-3 hover:rotate-1 transition-transform duration-300 z-10 border border-red-50 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-red-600 shadow-[0_5px_15px_rgba(220,38,38,0.5)] z-30 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white/50 rounded-full shadow-inner"></div>
              </div>
              <div className="absolute top-4 right-4 text-yellow-400">
                <svg className="w-10 h-10 transform rotate-12 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
              </div>
              <h4 className="font-serif text-3xl text-slate-800 mb-6 font-bold" style={{ fontFamily: "'Caveat', cursive, serif" }}>Liebe Swati,</h4>
              <p className="font-serif text-[18px] text-slate-700 leading-relaxed" style={{ fontFamily: "'Caveat', cursive, serif" }}>
                Herzlich Willkommen in Deutschland! Endlich ist es soweit und du bist hier. Ich freue mich sehr, dass du dich für einen Freiwilligendienst entschieden hast!<br /><br />
                Genieß die wundervollen Landschaften in Deutschland. Entdecke unser tolles Brot, schlender an einem warmen Sommerabend durch die Altstadt und fahr am Wochenende ans Meer.<br /><br />
                Ich wünsche dir viel Glück und eine tolle Zeit!
              </p>
              <p className="font-serif text-right mt-6 text-2xl text-slate-800 font-bold" style={{ fontFamily: "'Caveat', cursive, serif" }}>Deine Jasmin <span className="text-red-500">&hearts;</span></p>

              <div className="absolute -bottom-6 -left-6 text-red-600">
                <svg className="w-14 h-14 transform -rotate-12 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
              </div>
            </div>

            {/* WhatsApp Results Form */}
            <div className="absolute top-[10%] right-[0%] w-[270px] bg-[#E5DDD5] rounded-[24px] shadow-2xl overflow-hidden transform rotate-6 hover:rotate-3 transition-transform duration-300 z-20 border-4 border-white dark:border-slate-800">
              <div className="p-4 space-y-3 relative h-[380px]">
                <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
                <div className="flex justify-center relative z-10 pt-2">
                  <div className="bg-white/80 backdrop-blur-sm text-slate-600 text-[10px] px-3 py-1 rounded-lg shadow-sm font-medium">Sun, 5 Dec</div>
                </div>
                <div className="bg-white pt-2 pb-3 px-3 rounded-lg rounded-tl-none text-[12px] leading-relaxed text-slate-800 shadow-sm mr-auto w-[90%] mt-2 relative z-10">
                  Ich habe meine A2 Prüfung am Freitag und ich möchte Sprechen üben. Deshalb brauche ich ein Prüfungspartner.
                  <span className="block text-right text-[9px] text-slate-500 mt-1 opacity-70">17:53</span>
                </div>
                <div className="absolute top-2 left-[-10px] w-12 h-12 bg-green-500 rounded-full border-[3px] border-white text-white flex items-center justify-center shadow-lg -translate-x-12 translate-y-12">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.76.46 3.43 1.3 4.95L2 22l5.31-1.39c1.47.78 3.14 1.2 4.73 1.2 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.46 14.18c-.23.63-1.3 1.19-1.8 1.25-.49.06-1.12.2-3.15-.65-2.45-1.03-4.04-3.55-4.16-3.71-.12-.16-1-1.33-1-2.54s.64-1.8.87-2.05c.23-.25.5-.31.67-.31.17 0 .34 0 .49.01.17.01.4-.07.63.48.24.57.81 1.97.88 2.13.08.16.12.35.02.55-.1.2-.16.32-.32.51-.16.19-.34.42-.48.55-.16.16-.33.34-.14.67.19.33.85 1.41 1.83 2.29 1.26 1.14 2.3 1.49 2.63 1.65.33.16.53.14.73-.08.2-.23.86-1 .1 1.25 1.34 1.47 1.22.42.16.48-.65zm.36-.18" /></svg>
                </div>

                <div className="flex justify-center relative z-10 pt-4">
                  <div className="bg-white/80 backdrop-blur-sm text-slate-600 text-[10px] px-3 py-1 rounded-lg shadow-sm font-medium">Yesterday</div>
                </div>
                <div className="bg-white pt-2 pb-3 px-3 rounded-lg rounded-tl-none text-[12px] leading-[1.6] text-slate-800 shadow-sm mr-auto w-[85%] mt-2 relative z-10">
                  Ma'am my B1 results:-<br />Hören : 90<br />Lesen : 99<br />Schreiben : 99<br />Sprechen : 94
                  <span className="block text-right text-[9px] text-slate-500 mt-1 opacity-70">15:45</span>
                </div>
                <div className="bg-[#DCF8C6] px-3 py-2 text-right rounded-lg rounded-tr-none text-[12px] text-slate-800 shadow-sm ml-auto w-[45%] relative z-10">
                  Wow 🎉
                  <span className="block text-[9px] text-slate-500 mt-0.5 opacity-70">15:46</span>
                </div>
                <div className="bg-[#DCF8C6] px-3 py-2 text-right rounded-lg rounded-tr-none text-[12px] text-slate-800 shadow-sm ml-auto w-[75%] relative z-10">
                  Congratulations 🥳
                  <span className="block text-[9px] text-slate-500 mt-0.5 opacity-70">15:46</span>
                </div>
              </div>
            </div>

            {/* White Quote Card Box: Aishwarya */}
            <div className="absolute bottom-[0%] right-[10%] w-[340px] bg-white rounded-xl shadow-2xl p-7 transform rotate-1 hover:rotate-3 transition-transform duration-300 z-30 border border-slate-100 dark:bg-slate-800 dark:border-slate-700">
              <div className="absolute -top-3 left-6 bg-yellow-400 w-8 h-8 rounded-sm transform rotate-[15deg] shadow-md z-40">
                <div className="w-2 h-4 bg-yellow-600/50 absolute bottom-1 right-1 transform -rotate-45"></div>
              </div>
              <div className="text-[60px] text-amber-500 leading-[0.3] font-serif mb-6 mt-4">"</div>
              <p className="text-[14px] font-medium text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                Your classes not only helped me clear my exam but also gave me the confidence to speak German in real life. The way you explain makes everything so easy!
              </p>
              <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-700 pt-4">
                <p className="text-[11px] text-slate-600 dark:text-slate-400 font-extrabold uppercase tracking-widest">- Aishwarya, B1 Batch</p>
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </div>
            </div>

            {/* Little Email Snapshot Widget */}
            <div className="absolute bottom-[5%] left-[10%] w-[250px] bg-white rounded-[16px] shadow-xl p-5 transform -rotate-3 hover:translate-y-[-5px] transition-transform duration-300 z-30 border border-slate-100 dark:bg-slate-800 dark:border-slate-700">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-red-600 rounded-full border-2 border-white dark:border-slate-800 flex items-center justify-center shadow-lg">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h5 className="text-[11px] font-bold text-slate-800 dark:text-white mb-2">Hallo liebe Frau Swati,</h5>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                Ich sitze im Hotel mit Chandler, der im Huawei sehr gut deutsch spricht! Er sagt, dass Sie eine gute Lehrerin sind.
              </p>
              <p className="text-[11px] text-slate-500 italic">Viele Grüße, <br />Matthias</p>
            </div>

          </div>

          {/* Mobile Fallback Grid (Stacked view) */}
          <div className="lg:hidden max-w-md mx-auto space-y-8 px-4 mt-12 relative z-10">
            <GlassCard className="p-6 border border-slate-200/80">
              <div className="text-4xl text-amber-500 leading-none font-serif mb-2">"</div>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-relaxed italic mb-4">Your classes not only helped me clear my exam but also gave me the confidence to speak German in real life. The way you explain makes everything so easy!</p>
              <p className="text-[11px] text-slate-500 font-extrabold uppercase tracking-wide">- Aishwarya, B1 Batch</p>
            </GlassCard>

            <GlassCard className="p-6 border border-slate-200/80 bg-[#fdefed] dark:bg-[#FFEAEA]/10">
              <h4 className="font-serif text-xl text-slate-800 dark:text-white mb-3 font-bold">Liebe Swati,</h4>
              <p className="font-serif text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed mb-4 ">Herzlich Willkommen in Deutschland! Endlich ist es soweit und du bist hier. Ich freue mich sehr, dass du dich für einen Freiwilligendienst entschieden hast...</p>
              <p className="font-serif text-right text-base text-slate-800 dark:text-white font-bold">Deine Jasmin &hearts;</p>
            </GlassCard>

            <GlassCard className="p-0 border border-slate-200/80 overflow-hidden">
              <div className="bg-[#075E54] text-white px-4 py-3 font-bold text-sm">Ruchir (WhatsApp)</div>
              <div className="p-5 bg-slate-50 dark:bg-slate-900/50 space-y-3">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg text-xs leading-relaxed text-slate-800 dark:text-slate-300 shadow-sm mr-auto w-[90%] border-l-4 border-amber-400">
                  Hello mam, Ruchir here from A1 batch. This is to let you know that we really appreciate and admire your way of teaching... 👏👏
                </div>
              </div>
            </GlassCard>
          </div>
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
