import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#f9f7f1] text-[#200e4f] pt-20 pb-10 border-t border-slate-200 overflow-hidden">
      {/* Background glow effects matching the yellow tinge aesthetic */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-yellow-300/25 rounded-full blur-[100px] pointer-events-none -translate-y-1/3 translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 4 Column Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-slate-200/80">

          {/* Column 1: Brand Info (2 cols width on lg) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex flex-col">
              <span className="font-heading font-black text-2xl sm:text-3xl text-[#200e4f] tracking-tight">
                German Language Studio
              </span>
              <span className="text-sm text-amber-600 font-extrabold tracking-wider uppercase mt-1">
                German Language and Career Academy
              </span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed max-w-md font-medium">
              German Language Studio is dedicated to helping students master German from A1 to C2, prepare for the Goethe-Zertifikat, and unlock pathways to tuition-free German universities and Ausbildung programs. Our expert-led courses combine practical language skills with real career guidance, so you're not just learning German; you're building a future in Germany.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-amber-500 hover:border-amber-400 shadow-sm flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-amber-500 hover:border-amber-400 shadow-sm flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Courses */}
          <div className="space-y-6 lg:pl-10">
            <h4 className="font-heading font-bold text-[#200e4f] text-base uppercase tracking-wider">
              German Courses
            </h4>
            <ul className="space-y-3 text-sm text-slate-600 font-medium tracking-wide">
              <li><Link to="/courses#A1" className="hover:text-amber-600 transition-colors">Deutsch für Anfänger – A1</Link></li>
              <li><Link to="/courses#A2" className="hover:text-amber-600 transition-colors">Deutsch für Fortgeschrittene – A2</Link></li>
              <li><Link to="/courses#B1" className="hover:text-amber-600 transition-colors">Deutsch für die Mittelstufe – B1</Link></li>
              <li><Link to="/courses#B2" className="hover:text-amber-600 transition-colors">Deutsch für die obere Mittelstufe – B2</Link></li>
              <li><Link to="/courses#C1" className="hover:text-amber-600 transition-colors">Deutsch für Fortgeschrittene – C1</Link></li>
              <li><Link to="/courses#C2" className="hover:text-amber-600 transition-colors">Deutsch auf höchstem Niveau – C2
              </Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-6">
            <h4 className="font-heading font-bold text-[#200e4f] text-base uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-slate-600 font-medium tracking-wide">
              <li><Link to="/about" className="hover:text-amber-600 transition-colors">About Us</Link></li>
              <li><Link to="/exams" className="hover:text-amber-600 transition-colors">Exams</Link></li>
              <li><Link to="/placements" className="hover:text-amber-600 transition-colors">Placements</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="space-y-6">
            <h4 className="font-heading font-bold text-[#200e4f] text-base uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3 leading-relaxed">
                <span className="text-xl">📍</span>
                <span className="font-medium mt-0.5">B 78, Basement, Gulmohar Park, New Delhi, 110049</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">✉️</span>
                <a href="mailto:director@germanlanguagestudio.com" className="font-medium hover:text-amber-600 transition-colors tracking-wide">
                  director@germanlanguagestudio.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium tracking-wide">
          <p>© {new Date().getFullYear()} German Language Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-amber-600 transition-colors">Privacy Policy</Link>
            <a href="#" className="hover:text-amber-600 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
