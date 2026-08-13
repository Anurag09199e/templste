import React from 'react';
import { Exam } from '../../types';
import { GradientButton } from '../common/GradientButton';
import { ArrowRight, CheckCircle2, ShieldAlert, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ExamCardProps {
    exam: Exam;
}

export const ExamCard: React.FC<ExamCardProps> = ({ exam }) => {
    return (
        <div className="glass-card rounded-[32px] overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-300 dark:hover:shadow-amber-500/10 group relative border border-slate-200/80 dark:border-slate-700/50 hover:-translate-y-2">
            {/* Visual Accent Top Bar */}
            <div className="h-2 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 relative z-10" />

            {/* Exam Cover Image */}
            <div className="w-full h-[180px] sm:h-[200px] relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                    src={exam.image}
                    alt={exam.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col">
                {/* Top Tags & Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-block px-3 py-1 bg-[#200e4f] text-white text-[11px] font-black uppercase tracking-wider rounded-md">
                        {exam.tags[0]}
                    </span>
                    {exam.tags[1] && (
                        <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-500 text-[11px] font-bold uppercase tracking-wide rounded-md">
                            {exam.tags[1]}
                        </span>
                    )}
                </div>

                {/* Quick Info Bar */}
                <p className="text-[13px] font-bold text-slate-500 uppercase tracking-widest mb-3">
                    {exam.quickInfo}
                </p>

                {/* Title */}
                <h3 className="text-3xl sm:text-4xl font-black font-heading text-[#200e4f] dark:text-white mb-4 tracking-tight group-hover:text-amber-500 transition-colors">
                    {exam.title}
                </h3>

                {/* Description */}
                <p className="text-base text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-1">
                    {exam.description}
                </p>

                {/* Checklist */}
                <ul className="mb-8 space-y-3">
                    {exam.checklist.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 leading-tight">
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>

                {/* Info Box */}
                <div className="bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8 flex items-start gap-3 shadow-sm">
                    <Award className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <p className="text-[13px] font-bold text-[#200e4f] dark:text-gray-200 leading-tight">
                        {exam.infoBox}
                    </p>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                    <Link to={exam.link}>
                        <button className="w-full bg-[#f9f7f1] hover:bg-white text-[#200e4f] border-2 border-slate-200 hover:border-amber-500 font-extrabold px-6 py-4 rounded-xl transition-all shadow-sm flex items-center justify-between group-hover:shadow-md">
                            {exam.ctaText}
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 text-amber-500" />
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};
