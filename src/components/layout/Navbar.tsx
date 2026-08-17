import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import glsLogo from '../../img/gls-logo.webp';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      name: 'About',
      path: '/about',
      hasDropdown: false,
    },
    {
      name: 'Exams',
      path: '/exams',
      hasDropdown: true,
      subItems: [
        { name: 'Goethe Exams', path: '/exams/goethe' },
        { name: 'TELC Exams', path: '/exams/telc' },
        { name: 'ÖSD Exams', path: '/exams/osd' },
      ],
    },
    {
      name: 'Ausbildung',
      path: '/ausbildung',
      hasDropdown: false,
    },
    {
      name: 'Courses',
      path: '/courses',
      hasDropdown: true,
      subItems: [
        { name: 'Deutsch für Anfänger – A1', path: '/courses/a1' },
        { name: 'Deutsch für Fortgeschrittene – A2', path: '/courses/a2' },
        { name: 'Deutsch für die Mittelstufe – B1', path: '/courses/b1' },
        { name: 'Deutsch für die obere Mittelstufe – B2', path: '/courses/b2' },
        { name: 'Deutsch für Fortgeschrittene – C1', path: '/courses/c1' },
        { name: 'Deutsch auf höchstem Niveau – C2', path: '/courses/c2' },
      ],
    },
    {
      name: 'Placements',
      path: '/placements',
      hasDropdown: false,
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'pt-4' : 'pt-6'}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Navbar Row */}
        <div className={`flex items-center justify-between transition-all duration-500 rounded-full ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-xl border border-slate-200/50 dark:border-slate-800/50 px-4 py-2.5' : 'px-2 py-0'}`}>

          {/* Left: Brand Logo */}
          <Link to="/" className="flex items-center group z-50">
            <div className={`flex items-center gap-2 transition-all duration-300 ${isScrolled ? 'h-10' : 'h-14'}`}>
              <img src={glsLogo} alt="GLS" className="h-full w-auto object-contain" />
              {!isScrolled && (
                <span className="font-extrabold text-xl lg:text-2xl text-[#200e4f] dark:text-white hidden sm:block tracking-tight font-heading ml-1"></span>
              )}
            </div>
          </Link>

          {/* Center: Beige Pill Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 bg-[#f9f7f1] py-3.5 px-8 rounded-full shadow-lg border border-slate-200/60 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || location.pathname.startsWith(link.path + '/');
              const isOpen = activeDropdown === link.name;

              if (link.hasDropdown && link.subItems) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={link.path}
                      onClick={() => { if (window.innerWidth < 1024) setActiveDropdown(isOpen ? null : link.name); }}
                      className={`text-[13.5px] font-medium transition-all flex items-center gap-1.5 ${isActive || isOpen ? 'text-[#200e4f] font-bold' : 'text-slate-600 hover:text-[#200e4f]'}`}
                    >
                      {link.name}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#200e4f]' : 'text-slate-400'}`} />
                    </Link>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+16px)] w-56 pt-2"
                        >
                          {/* Arrow pointing up */}
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-[12px] border-transparent border-b-[#f9f7f1]"></div>

                          {/* Dropdown Container */}
                          <div className="bg-[#f9f7f1] rounded-3xl p-2.5 shadow-xl border border-slate-200/60 flex flex-col gap-1">
                            {link.subItems.map((sub) => (
                              <Link
                                key={sub.name}
                                to={sub.path}
                                onClick={() => setActiveDropdown(null)}
                                className="px-4 py-2.5 rounded-2xl text-[13px] font-medium text-slate-600 hover:text-[#200e4f] hover:bg-slate-200/50 transition-colors"
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
                  className={`text-[13.5px] font-medium transition-colors ${isActive ? 'text-[#200e4f] font-bold' : 'text-slate-600 hover:text-[#200e4f]'}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right: Contact Us Button & Controls */}
          <div className="flex items-center gap-3 z-50">

            <Link
              to="/contact"
              className="hidden sm:flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-[#BD181E] to-[#e8b44b] hover:brightness-110 text-white rounded-full shadow-md shadow-orange-500/20 transition-all font-semibold text-[13px] tracking-wide border border-[#e8b44b]/50"
            >
              Contact Us
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[#200e4f] dark:text-white shadow-sm hover:bg-slate-50 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Out Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-4 right-4 mt-4 bg-white dark:bg-[#11131a] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="p-4 space-y-1">
              {navLinks.map((link) => {
                const isMobileExpanded = activeDropdown === link.name;
                return (
                  <div key={link.name}>
                    <div className="flex items-center justify-between px-5 py-4 rounded-2xl font-bold text-sm text-[#200e4f] dark:text-white hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                      <Link
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex-grow flex items-center"
                      >
                        {link.name}
                      </Link>
                      {link.hasDropdown && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveDropdown(isMobileExpanded ? null : link.name);
                          }}
                          className="p-1 -mr-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500"
                        >
                          <ChevronDown className={`w-5 h-5 transition-transform ${isMobileExpanded ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>
                    {link.hasDropdown && isMobileExpanded && (
                      <div className="pl-6 pr-4 pb-2 space-y-1 border-l-2 border-slate-100 dark:border-slate-800 ml-4 mb-2 mt-1">
                        <Link
                          to={link.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2.5 px-3 rounded-xl text-[13px] font-bold text-amber-600 dark:text-amber-500 hover:bg-slate-50 dark:hover:bg-white/5"
                        >
                          View All {link.name}
                        </Link>
                        {link.subItems?.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2.5 px-3 rounded-xl text-[13px] font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="pt-6 mt-4 pb-2 border-t border-slate-100 dark:border-slate-800/50 flex flex-col gap-4 px-2">
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:brightness-110 text-white rounded-2xl text-center font-extrabold shadow-lg shadow-orange-500/25 transition-all outline-none"
                >
                  Contact Us
                </Link>

                <div className="flex justify-between items-center px-4 py-2 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
                  <span className="text-xs font-bold text-slate-500">Appearance</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};
