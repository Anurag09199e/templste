import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  onClick,
}) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -6, transition: { duration: 0.25 } } : undefined}
      onClick={onClick}
      className={`glass-card rounded-3xl p-6 relative overflow-hidden transition-all duration-300 ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {/* Decorative subtle ambient highlight */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-amber-500/10 to-orange-500/0 rounded-full blur-2xl pointer-events-none" />
      {children}
    </motion.div>
  );
};
