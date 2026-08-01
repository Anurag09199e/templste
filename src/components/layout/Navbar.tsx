import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Sun,
  Moon,
  Menu,
  X,
  BookOpen,
  GraduationCap,
  Award,
  BookMarked,
  Sparkles,
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { MegaMenu } from './MegaMenu';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    {
      name: 'About Us',
      path: '/about',
      hasDropdown: true,
      subItems: [
        { name: 'About Institute', path: '/about' },
        { name: 'Faculty & Trainers', path: '/trainers' },
        { name: 'Student Reviews', path: '/testimonials' },
        { name: 'Photo Gallery', path: '/gallery' },
        { name: 'FAQs', path: '/faq' },
      ],
    },
    {
      name: 'Courses',
      path: '/courses',
      hasMegaMenu: true,
      hasDropdown: true,
    },
    {
      name: 'ÖSD Exam',
      path: '/courses',
      hasDropdown: false,
    },
    {
      name: 'Ausbildung',
      path: '/ausbildung',
      hasDropdown: true,
      subItems: [
        { name: 'Ausbildung Overview', path: '/ausbildung' },
        { name: 'Nursing & Healthcare', path: '/ausbildung' },
        { name: 'IT & Technical', path: '/ausbildung' },
        { name: 'Hospitality & Business', path: '/ausbildung' },
      ],
    },
    {
      name: 'Study In Germany',
      path: '/study-in-germany',
      hasDropdown: true,
      subItems: [
        { name: 'University Admissions', path: '/study-in-germany' },
        { name: 'Public Universities Guide', path: '/study-in-germany' },
        { name: 'APS & Visa Support', path: '/study-in-germany' },
      ],
    },
    {
      name: 'Blogs',
      path: '/blog',
      hasDropdown: true,
      subItems: [
        { name: 'Latest Posts', path: '/blog' },
        { name: 'German Learning Tips', path: '/blog' },
        { name: 'Germany Career Guides', path: '/blog' },
      ],
    },
    {
      name: 'Contact',
      path: '/contact',
      hasDropdown: false,
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0B6653] text-white shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        
        {/* Brand Logo - Match Screenshot Style */}
        <Link to="/" className="flex items-center gap-3.5 group">
          <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <BookOpen className="w-6 h-6 text-[#0B6653]" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-2xl tracking-tight text-white leading-tight">
              Krislingua
            </span>
            <span className="text-[9px] sm:text-[10px] font-extrabold text-white/90 tracking-widest uppercase -mt-0.5">
              THE GERMAN LANGUAGE INSTITUTE
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const isOpen = activeDropdown === link.name;

            if (link.hasMegaMenu) {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={`px-3 py-2 text-sm font-semibold rounded-lg flex items-center gap-1 transition-all ${
                      isActive || isOpen
                        ? 'bg-white/15 text-white font-bold'
                        : 'text-white/95 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </Link>

                  <AnimatePresence>
                    {isOpen && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-screen max-w-5xl">
                        <MegaMenu onClose={() => setActiveDropdown(null)} />
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            if (link.hasDropdown && link.subItems) {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => setActiveDropdown(isOpen ? null : link.name)}
                    className={`px-3 py-2 text-sm font-semibold rounded-lg flex items-center gap-1 transition-all ${
                      isActive || isOpen
                        ? 'bg-white/15 text-white font-bold'
                        : 'text-white/95 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full pt-2 w-52"
                      >
                        <div className="bg-white dark:bg-slate-900 rounded-2xl p-2 shadow-2xl border border-slate-100 dark:border-slate-800 text-slate-800 dark:text-slate-100">
                          {link.subItems.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              onClick={() => setActiveDropdown(null)}
                              className="block px-4 py-2.5 rounded-xl text-xs font-semibold hover:bg-emerald-500/10 hover:text-[#0B6653] dark:hover:text-emerald-400 transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all ${
                  isActive
                    ? 'bg-white/15 text-white font-bold'
                    : 'text-white/95 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Hamburger Controls */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-white/10 text-white"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-white/10 text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Slide-Out Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#095243] border-t border-white/10 px-4 pt-3 pb-6 space-y-2"
          >
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  className="flex items-center justify-between px-4 py-3 rounded-xl font-bold text-sm text-white hover:bg-white/10 transition-colors"
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};
