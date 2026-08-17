import React from 'react';
import { motion } from 'framer-motion';
import {
    Compass, BookOpen, UserCheck, Award, Briefcase, FileCheck, Plane, Users,
    HeartPulse, GraduationCap, Cpu, Coffee, Wrench, BookHeart, Star, ShieldCheck, HeartHandshake
} from 'lucide-react';
import glsLogo from '../../img/gls-logo.webp';

const timelineData = [
    { num: "01", icon: Compass, title: "Career Counselling", desc: "Understand your strengths, goals and align with the best career opportunities." },
    { num: "02", icon: BookOpen, title: "Learn German", desc: "Structured German training with experienced faculty for every level." },
    { num: "03", icon: UserCheck, title: "Germany Ready", desc: "Cultural orientation, professional communication and CV building." },
    { num: "04", icon: Award, title: "Certification", desc: "Prepare for and achieve recognised exams (Goethe, TELC, etc.)." },
    { num: "05", icon: Briefcase, title: "Find Opportunity", desc: "Access job listings, network with employers, and discover roles." },
    { num: "06", icon: FileCheck, title: "Visa Support", desc: "End-to-end support for job seeker visas, and documentation." },
    { num: "07", icon: Plane, title: "Welcome To Germany", desc: "Smooth travel planning and arrival assistance to help you settle." },
    { num: "08", icon: Users, title: "Career & Post-Arrival", desc: "Accommodation support, job placement assistance, and mentoring." },
];

export const CareerJourneyInfographic: React.FC = () => {
    return (
        <div className="w-full bg-[#fdfbf7] rounded-[40px] shadow-2xl relative overflow-hidden border border-slate-200">
            {/* Header Section */}
            <div className="pt-12 px-6 text-center relative z-10 mb-8 max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-5xl lg:text-[54px] font-black text-[#1b305b] font-heading uppercase tracking-tighter mb-4 leading-none">
                    Your Dream. Your Career. <span className="text-amber-500">Your Germany.</span>
                </h2>
                <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 mt-6">
                    <div className="h-[2px] w-8 sm:w-24 bg-amber-500/60 rounded-full"></div>
                    <p className="text-xs sm:text-[15px] font-bold text-slate-700 uppercase tracking-widest px-2">So, where can German take you? One journey. Many pathways. GLS by your side.</p>
                    <div className="h-[2px] w-8 sm:w-24 bg-amber-500/60 rounded-full"></div>
                </div>

                <h3 className="text-3xl md:text-[46px] text-[#1b305b] font-bold font-serif italic mb-6 leading-tight">
                    From Your First German Word <br className="hidden md:block" />
                    <span className="text-amber-500">to Your Career in Germany.</span>
                </h3>
                <div className="inline-flex items-center justify-center mt-2 bg-[#1b305b] text-white px-10 py-3 rounded-full font-bold uppercase tracking-[0.2em] text-sm shadow-xl hover:scale-105 transition-transform cursor-default">
                    The GLS Career Journey
                </div>
            </div>

            {/* Timeline Area (Horizontal Scroller) */}
            <div className="relative mb-24 w-full overflow-x-auto pb-10 pt-4 hide-scrollbar px-6 md:px-12">
                {/* Connecting Line Desktop */}
                <div className="absolute left-[70px] right-[70px] h-[4px] bg-[#1b305b]/20 z-0 hidden lg:block" style={{ top: '65px' }}></div>

                <div className="flex flex-nowrap lg:justify-between items-start gap-8 lg:gap-0 min-w-max lg:min-w-0">
                    {timelineData.map((step, index) => (
                        <motion.div
                            key={step.num}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative flex flex-col items-center w-[12%] min-w-[150px] text-center shrink-0 z-10 group"
                        >
                            <div className="w-[84px] h-[84px] rounded-full bg-[#1b305b] border-[5px] border-white text-white flex items-center justify-center shadow-xl relative mb-5 z-20 group-hover:bg-amber-500 group-hover:scale-110 transition-all duration-300">
                                <div className="absolute -top-3 w-7 h-7 bg-[#1b305b] group-hover:bg-amber-600 transition-colors text-white text-[11px] font-black rounded-full border-[3px] border-white flex items-center justify-center shadow-md">
                                    {step.num}
                                </div>
                                <step.icon className="w-9 h-9" />
                            </div>
                            <h4 className="text-[14px] md:text-[15px] font-black leading-tight text-[#200e4f] uppercase tracking-tight mb-3 h-10 flex items-center justify-center">{step.title}</h4>
                            <p className="text-[12px] leading-snug text-slate-600 font-semibold px-2">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Sub-header */}
            <div className="text-center mb-10 relative z-10 px-6">
                <h3 className="text-2xl md:text-[34px] font-black text-[#1b305b] tracking-tight">
                    There isn't one German dream. <span className="text-amber-500">There are many.</span>
                </h3>
            </div>

            {/* Sectors Grid Solid Background Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 relative z-10 px-6 md:px-12">
                {[
                    { icon: HeartPulse, color: "bg-[#0d7e83]", title: "Healthcare", desc: "Build a career in one of Germany's most in-demand sectors.", tags: "Nursing • Healthcare • Caregiving" },
                    { icon: GraduationCap, color: "bg-[#d69123]", title: "Ausbildung", desc: "Learn, work and build professional experience through Germany's vocational training system.", tags: "Training • Practical Experience • Career Pathway" },
                    { icon: Cpu, color: "bg-[#ef7300]", title: "Engineering & Technology", desc: "Explore opportunities across Germany's technical and technology-driven industries.", tags: "Engineering • IT • Technical Roles" },
                    { icon: Coffee, color: "bg-[#6d4d84]", title: "Hospitality", desc: "Turn your language skills into opportunities across Germany's hospitality and tourism sector.", tags: "Hotels • Restaurants • Tourism" },
                    { icon: Wrench, color: "bg-[#1b305b]", title: "Skilled Trades", desc: "Build a future through practical skills and technical professions.", tags: "Technicians • Mechanics • Skilled Professions" },
                    { icon: BookHeart, color: "bg-[#1e8b61]", title: "Higher Education", desc: "Explore study pathways that can lead to long-term career opportunities in Germany.", tags: "University • Specialised Study • Career Development" }
                ].map((sector, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        key={sector.title}
                        className={`${sector.color} text-white rounded-[24px] p-8 shadow-2xl flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-300 relative overflow-hidden group`}
                    >
                        <div className="absolute -right-4 -top-4 opacity-10 transform group-hover:scale-125 transition-transform duration-500">
                            <sector.icon className="w-48 h-48" />
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
                                    <sector.icon className="w-8 h-8" />
                                </div>
                                <h4 className="text-2xl font-black tracking-wide font-heading leading-tight max-w-[200px]">{sector.title}</h4>
                            </div>
                            <p className="text-[15px] font-medium opacity-90 leading-relaxed mb-8">{sector.desc}</p>
                            <div className="mt-auto px-5 py-3 bg-white/10 border border-white/20 rounded-xl text-[13px] font-bold text-center shadow-inner tracking-wide backdrop-blur-sm">
                                {sector.tags}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Footer Stats & Brand */}
            <div className="bg-[#f0ece1] pt-10 pb-10 px-8 flex flex-col xl:flex-row items-center justify-between gap-8 border-t-2 border-amber-500/20 w-full relative z-10">
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-14">
                    <div className="flex items-center gap-4 text-[#1b305b]">
                        <div className="w-14 h-14 rounded-full border-2 border-[#1b305b] bg-white flex items-center justify-center shadow-lg">
                            <Star className="w-6 h-6 text-[#1b305b] fill-[#1b305b]" />
                        </div>
                        <div>
                            <p className="text-xl md:text-2xl font-black leading-tight">12+ YEARS</p>
                            <p className="text-[11px] md:text-xs font-bold opacity-80 uppercase tracking-widest mt-0.5">OF EXCELLENCE</p>
                        </div>
                    </div>
                    <div className="hidden md:block w-[2px] h-10 bg-[#1b305b]/20"></div>
                    <div className="flex items-center gap-4 text-[#1b305b]">
                        <div className="w-14 h-14 rounded-full border-2 border-[#1b305b] bg-white flex items-center justify-center shadow-lg">
                            <Users className="w-6 h-6 text-[#1b305b] fill-[#1b305b]" />
                        </div>
                        <div>
                            <p className="text-xl md:text-2xl font-black leading-tight">10,000+</p>
                            <p className="text-[11px] md:text-xs font-bold opacity-80 uppercase tracking-widest mt-0.5">SUCCESSFUL ALUMNI</p>
                        </div>
                    </div>
                    <div className="hidden lg:block w-[2px] h-10 bg-[#1b305b]/20"></div>
                    <div className="flex items-center gap-4 text-[#1b305b]">
                        <div className="w-14 h-14 rounded-full border-2 border-[#1b305b] bg-white flex items-center justify-center shadow-lg">
                            <ShieldCheck className="w-6 h-6 text-[#1b305b] fill-[#1b305b]" />
                        </div>
                        <div>
                            <p className="text-xl md:text-2xl font-black leading-tight">90%</p>
                            <p className="text-[11px] md:text-xs font-bold opacity-80 uppercase tracking-widest mt-0.5">SUCCESS RATE</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-4 xl:pt-0">
                    <div className="flex items-center gap-3">
                        <p className="text-[28px] md:text-[32px] font-serif italic text-amber-600 font-bold whitespace-nowrap drop-shadow-sm">We prepare you for YOUR German career.</p>
                        <HeartHandshake className="w-10 h-10 text-amber-500 opacity-60 hidden sm:block" />
                    </div>
                    <img src={glsLogo} alt="GLS" className="h-12 md:h-14 w-auto object-contain" />
                </div>
            </div>
        </div>
    );
};
