import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  badge?: string;
  title: string | React.ReactNode;
  highlightedText?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  title,
  highlightedText,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col mb-12 ${alignClass} ${className}`}
    >
      {badge && (
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 text-xs font-extrabold uppercase tracking-widest text-amber-600 dark:text-amber-400 bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/30 rounded-full backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#200e4f] dark:text-white leading-tight">
        {title}{' '}
        {highlightedText && (
          <span className="text-gradient">{highlightedText}</span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
