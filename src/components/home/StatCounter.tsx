import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Users, Globe } from 'lucide-react';
import { STATS } from '../../data/mockData';

const ICON_MAP = {
  Award: Award,
  GraduationCap: GraduationCap,
  Users: Users,
  Globe: Globe,
};

export const StatCounter: React.FC = () => {
  return (
    <section className="py-12 relative z-20 -mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-amber-500/30 shadow-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/95 to-slate-900/90 backdrop-blur-2xl grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => {
            const IconComponent = ICON_MAP[stat.icon as keyof typeof ICON_MAP] || Award;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="text-center space-y-2 border-r last:border-r-0 border-slate-800/80 pr-4"
              >
                <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-600 text-white flex items-center justify-center shadow-lg shadow-orange-500/30 mb-3">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                  {stat.value}{stat.suffix}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-400">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
