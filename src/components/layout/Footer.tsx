import React from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  Send,
  Award,
  ShieldCheck,
  Heart,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-800/80 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Newsletter Callout Banner */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 mb-16 bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/40 border border-amber-500/30 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 max-w-xl text-center lg:text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              German Learning Newsletter
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Get Weekly German Vocab & Visa Hacks
            </h3>
            <p className="text-sm text-slate-400">
              Join 18,000+ students receiving curated Goethe exam tips, vocabulary drills, and German career updates.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="px-5 py-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 w-full sm:w-80"
              required
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-orange-500/20 hover:brightness-110 flex items-center justify-center gap-2 transition-transform active:scale-95"
            >
              <span>Subscribe</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* 4 Column Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800/80">
          
          {/* Column 1: Brand Info (2 cols width on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-red-600 flex items-center justify-center text-white font-heading font-extrabold text-xl shadow-lg shadow-orange-500/30">
                D
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-xl text-white tracking-tight">
                  DeutschKraft <span className="text-amber-500 text-xs px-1.5 py-0.5 rounded bg-amber-500/10">INSTITUTE</span>
                </span>
                <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
                  German Language & Career Academy
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              DeutschKraft Institute is a premier German language center specializing in CEFR A1 to C2 certification, Goethe-Zertifikat preparation, tuition-free German university admissions, and Ausbildung programs.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Youtube, href: '#' },
                { icon: Facebook, href: '#' },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-500/50 flex items-center justify-center transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Courses */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              German Courses
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link to="/courses/a1" className="hover:text-amber-400 transition-colors">A1 Beginner German</Link></li>
              <li><Link to="/courses/a2" className="hover:text-amber-400 transition-colors">A2 Elementary German</Link></li>
              <li><Link to="/courses/b1" className="hover:text-amber-400 transition-colors">B1 Intermediate (Goethe)</Link></li>
              <li><Link to="/courses/b2" className="hover:text-amber-400 transition-colors">B2 Upper Intermediate</Link></li>
              <li><Link to="/courses/c1" className="hover:text-amber-400 transition-colors">C1 Advanced (TestDaF)</Link></li>
              <li><Link to="/courses/c2" className="hover:text-amber-400 transition-colors">C2 Native Mastery</Link></li>
            </ul>
          </div>

          {/* Column 3: Pathways & Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Career Pathways
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link to="/study-in-germany" className="hover:text-amber-400 transition-colors">Study in Germany Guide</Link></li>
              <li><Link to="/ausbildung" className="hover:text-amber-400 transition-colors">Ausbildung Programs</Link></li>
              <li><Link to="/trainers" className="hover:text-amber-400 transition-colors">Meet Our Trainers</Link></li>
              <li><Link to="/testimonials" className="hover:text-amber-400 transition-colors">Student Reviews</Link></li>
              <li><Link to="/gallery" className="hover:text-amber-400 transition-colors">Institute Gallery</Link></li>
              <li><Link to="/faq" className="hover:text-amber-400 transition-colors">FAQs & Exam Info</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Contact & Campus
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>Leopoldstraße 48, 80802 München, Bayern, Germany</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>+49 89 2345 6789 / +91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>admissions@deutschkraft-institute.de</span>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-lg text-xs font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> Goethe Aligned Pedagogy
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 DeutschKraft Institute. All rights reserved. Original Education UI Template.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-300">Impressum</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
