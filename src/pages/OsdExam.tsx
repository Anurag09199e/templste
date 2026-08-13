import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Award, Globe, CheckCircle2, HelpCircle, ChevronDown, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import goetheImg from '../img/goethe.png';
import img3 from '../img/img-3.png';
import osdPrepImg from '../img/goeth-2.jpg';
import { SectionTitle } from '../components/common/SectionTitle';
import { GlassCard } from '../components/common/GlassCard';

const OSD_FAQS = [
    {
        id: 'q1',
        question: 'Do I need to speak German to start?',
        answer: 'No. Most learners start at A1 with zero prior knowledge. GLS builds you up level by level.'
    },
    {
        id: 'q2',
        question: 'Is ÖSD better than Goethe or telc?',
        answer: "Not better, different. All three test the same CEFR levels and are widely accepted. ÖSD is the strongest choice specifically if Austria is part of your plan."
    },
    {
        id: 'q3',
        question: 'Is ÖSD accepted in Germany?',
        answer: 'Yes. ÖSD certificates are recognised by many universities and institutions in Germany, alongside Switzerland and South Tyrol.'
    },
    {
        id: 'q4',
        question: 'What level do I need for Ausbildung or vocational training?',
        answer: 'Most Ausbildung programs require at least B1. GLS can guide you on which certificate, Goethe, telc, or ÖSD, best fits your specific program.'
    },
    {
        id: 'q5',
        question: 'How long does it take to reach B1?',
        answer: 'This depends on your starting point and study pace, but most learners take a structured path across several months of consistent classes to go from A1 to B1.'
    },
    {
        id: 'q6',
        question: 'Where do I take the ÖSD exam?',
        answer: 'ÖSD exams are held through authorised centers across India. GLS helps you find the right center and registration window.'
    }
];

export const OsdExam: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<string | null>(null);

    return (
        <div className="pt-32 pb-20 space-y-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-20">
                    {/* Left Hero Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 space-y-6 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-extrabold text-xs uppercase tracking-widest border border-amber-500/20">
                            <Award className="w-4 h-4" />
                            GERMAN LANGUAGE CERTIFICATION
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold italic text-[#200e4f] dark:text-white leading-[1.15] tracking-tight">
                            Everything You Need to Know About the <span className="text-gradient">ÖSD Exam</span>
                        </h1>

                        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-sans font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            ÖSD is Austria's official German language certification, recognised across Austria, Germany, and Switzerland. If Austria is part of your plan, or you simply want a flexible, widely accepted exam, this is where your German journey starts.
                        </p>

                        <div className="pt-4 flex justify-center lg:justify-start">
                            <Link to="/courses">
                                <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:brightness-110 text-white font-extrabold px-8 py-4 rounded-xl shadow-xl transition-all hover:-translate-y-1 active:translate-y-0 text-[15px] flex items-center justify-center gap-2">
                                    Start Your ÖSD A1 Journey <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                        </div>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                            <div className="flex items-center gap-1.5 bg-[#f5f0e6] dark:bg-slate-900/60 px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-800">
                                <Globe className="w-4 h-4 text-amber-500" /> Globally Accepted
                            </div>
                            <div className="flex items-center gap-1.5 bg-[#f5f0e6] dark:bg-slate-900/60 px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-800">
                                <ShieldCheck className="w-4 h-4 text-emerald-500" /> Life-long Validity
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Hero Graphic */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative rounded-[40px] overflow-hidden p-2 bg-gradient-to-tr from-amber-500/20 via-orange-500/10 to-red-500/20 backdrop-blur-xl shadow-2xl border border-white/20 dark:border-slate-800">
                            <img
                                src={goetheImg}
                                alt="ÖSD Exam Preparation"
                                className="w-full h-auto object-cover rounded-[32px] md:h-[450px]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                        </div>
                    </motion.div>
                </div>

                {/* What Is the ÖSD Exam Section */}
                <section className="mt-24 mb-12 max-w-4xl mx-auto text-center sm:text-left">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#200e4f] dark:text-white mb-6 font-heading text-center">
                        What Is the ÖSD Exam
                    </h2>
                    <div className="space-y-6 text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed bg-[#f5f0e6]/50 dark:bg-slate-900/40 p-8 rounded-[32px] border border-slate-200/60 dark:border-slate-800/60 shadow-lg">
                        <p>
                            ÖSD, short for <strong>Österreichisches Sprachdiplom Deutsch</strong>, is Austria's official German language certification, approved by the Austrian Federal Ministry for Foreign Affairs, Education, Science, and Cultural Affairs. It tests German across the same CEFR levels as Goethe and telc, from A1 to C2, and is fully recognised throughout Austria for study, work, and visa purposes.
                        </p>
                        <p>
                            While it originates in Austria, ÖSD certificates are also accepted by universities and institutions in Germany, Switzerland, and South Tyrol, making it a strong option even if Germany, not Austria, is your main destination.
                        </p>
                    </div>
                </section>

                {/* Understanding the Levels Section */}
                <section className="mt-24 mb-20 text-center">
                    <SectionTitle
                        title="Understanding the Levels (A1 to C2)"
                        subtitle="The ÖSD exams correspond strictly to the levels of the Common European Framework of Reference for Languages (CEFR)."
                    />

                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-6xl mx-auto">
                        <GlassCard className="p-8 border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform">
                            <div className="flex items-end gap-3 mb-4">
                                <span className="text-4xl font-extrabold text-[#200e4f] dark:text-white font-heading">A1</span>
                                <span className="text-lg font-bold text-slate-400 mb-1">— Beginner</span>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                Introduce yourself, order food, ask simple questions. A good starting point for early learners.
                            </p>
                        </GlassCard>

                        <GlassCard className="p-8 border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform">
                            <div className="flex items-end gap-3 mb-4">
                                <span className="text-4xl font-extrabold text-[#200e4f] dark:text-white font-heading">A2</span>
                                <span className="text-lg font-bold text-slate-400 mb-1">— Basic</span>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                Talk about family, shopping, and daily routines. You can follow and join simple conversations.
                            </p>
                        </GlassCard>

                        <GlassCard className="p-8 border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform">
                            <div className="flex items-end gap-3 mb-4">
                                <span className="text-4xl font-extrabold text-[#200e4f] dark:text-white font-heading">B1</span>
                                <span className="text-lg font-bold text-slate-400 mb-1">— Intermediate</span>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                Tell stories, write emails, and follow workplace conversations. Often the minimum level required for training and work pathways.
                            </p>
                        </GlassCard>

                        <GlassCard className="p-8 border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform">
                            <div className="flex items-end gap-3 mb-4">
                                <span className="text-4xl font-extrabold text-[#200e4f] dark:text-white font-heading">B2</span>
                                <span className="text-lg font-bold text-amber-500 mb-1">— Upper Int.</span>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                Discuss ideas, follow professional conversations, and write structured reports. Commonly required for university and employer applications.
                            </p>
                        </GlassCard>

                        <GlassCard className="p-8 border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform">
                            <div className="flex items-end gap-3 mb-4">
                                <span className="text-4xl font-extrabold text-[#200e4f] dark:text-white font-heading">C1</span>
                                <span className="text-lg font-bold text-emerald-500 mb-1">— Advanced</span>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                Speak fluently, understand films, and write detailed essays. Valued for competitive job roles.
                            </p>
                        </GlassCard>

                        <GlassCard className="p-8 border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform">
                            <div className="flex items-end gap-3 mb-4">
                                <span className="text-4xl font-extrabold text-[#200e4f] dark:text-white font-heading">C2</span>
                                <span className="text-lg font-bold text-orange-500 mb-1">— Proficient</span>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                Understand everything from jokes to complex news and literature, close to native fluency.
                            </p>
                        </GlassCard>
                    </div>
                </section>

                {/* ÖSD vs Goethe vs telc Section */}
                <section className="mt-24 mb-20 max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <SectionTitle
                            title="ÖSD vs Goethe vs telc, What's the Difference"
                            subtitle="All three exams test the same CEFR levels and are widely accepted across German-speaking countries, so the right one usually comes down to your destination and preferences."
                        />
                    </div>
                    <GlassCard className="p-8 md:p-12 border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 shadow-xl relative z-10">
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 shrink-0 bg-[#200e4f] dark:bg-amber-500/10 p-1.5 rounded-full">
                                    <Check className="w-5 h-5 text-white dark:text-amber-500" />
                                </div>
                                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-semibold leading-relaxed">
                                    ÖSD is the strongest choice if Austria is part of your plan, alongside being accepted in Germany and Switzerland.
                                </p>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 shrink-0 bg-[#200e4f] dark:bg-amber-500/10 p-1.5 rounded-full">
                                    <Check className="w-5 h-5 text-white dark:text-amber-500" />
                                </div>
                                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-semibold leading-relaxed">
                                    ÖSD is known for offering more flexible test dates compared to Goethe and telc.
                                </p>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-1 shrink-0 bg-[#200e4f] dark:bg-amber-500/10 p-1.5 rounded-full">
                                    <Check className="w-5 h-5 text-white dark:text-amber-500" />
                                </div>
                                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 font-semibold leading-relaxed">
                                    All three require a pass in each section, typically 60 percent, with no compensating a weak section with a strong one.
                                </p>
                            </li>
                        </ul>
                        <div className="mt-8 p-4 bg-amber-50 text-amber-900 dark:bg-amber-900/20 dark:text-amber-200 rounded-2xl text-sm font-semibold text-center border border-amber-200 dark:border-amber-900/50">
                            <strong>Note:</strong> If your visa, employer, or institution specifically asks for one certificate over another, that requirement should always come first.
                        </div>
                    </GlassCard>
                </section>

                {/* Why the ÖSD Exam Matters Section */}
                <section className="mt-24 mb-20">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center bg-white dark:bg-[#11131a] p-8 md:p-12 rounded-[32px] border border-slate-200/80 dark:border-slate-800 shadow-xl">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#200e4f] dark:text-white font-heading leading-tight">
                                Why the ÖSD Exam Matters
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
                                If you're planning to study, work, or train in a German-speaking country, your language level needs to be certified, and ÖSD is one of the most respected ways to do it, especially if Austria is anywhere in your plans.
                            </p>
                            <ul className="space-y-4 pt-2">
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-amber-100 dark:bg-amber-500/20 p-1.5 rounded-lg shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                                    </div>
                                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium">Fully recognised across Austria for study, work, and visa applications.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-emerald-100 dark:bg-emerald-500/20 p-1.5 rounded-lg shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-500" />
                                    </div>
                                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium">Accepted by universities and employers in Germany, Switzerland, and South Tyrol.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-blue-100 dark:bg-blue-500/20 p-1.5 rounded-lg shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-500" />
                                    </div>
                                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium">A reliable option when you want flexibility in exam scheduling.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* What's Actually in the Exam Section */}
                <section className="mt-24 mb-24 max-w-6xl mx-auto">
                    <div className="text-center mb-12 flex flex-col items-center">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#200e4f] dark:text-white mb-4 font-heading">
                            What's Actually in the Exam
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-2xl">
                            Every ÖSD exam tests four skills, Reading, Listening, Writing, and Speaking, following the same CEFR structure as other major German exams.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <GlassCard className="p-8 border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform">
                            <h4 className="text-xl font-bold text-[#200e4f] dark:text-white mb-4 flex items-center gap-2">
                                Beginner <span className="text-sm font-semibold text-slate-400 ml-auto">(A1-A2)</span>
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
                                Short texts, simple listening tasks, filling in forms, and short spoken exchanges.
                            </p>
                        </GlassCard>

                        <GlassCard className="p-8 border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform">
                            <h4 className="text-xl font-bold text-[#200e4f] dark:text-white mb-4 flex items-center gap-2">
                                Intermediate <span className="text-sm font-semibold text-slate-400 ml-auto">(B1-B2)</span>
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
                                Longer reading passages, writing structured letters or reports, and paired or individual speaking tasks.
                            </p>
                        </GlassCard>

                        <GlassCard className="p-8 border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform">
                            <h4 className="text-xl font-bold text-[#200e4f] dark:text-white mb-4 flex items-center gap-2">
                                Advanced <span className="text-sm font-semibold text-slate-400 ml-auto">(C1-C2)</span>
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
                                Complex articles, opinion essays, and extended spoken discussion.
                            </p>
                        </GlassCard>
                    </div>
                </section>

                {/* How GLS Prepares You Section */}
                <section className="mt-24 mb-20 px-4">
                    <div className="max-w-6xl mx-auto rounded-[40px] shadow-2xl relative overflow-hidden flex items-center min-h-[500px]">

                        {/* Background Image & Overlay */}
                        <div className="absolute inset-0 z-0">
                            <img src={osdPrepImg} alt="GLS Students" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 md:via-[#0B0F19]/90 md:to-[#0B0F19]/40 backdrop-blur-[2px]"></div>
                        </div>

                        <div className="relative z-10 w-full p-8 md:p-14 flex flex-col md:flex-row gap-12 lg:gap-16 items-center">
                            <div className="flex-1 space-y-4">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#200e4f] font-heading leading-tight tracking-tight drop-shadow-md bg-white/20 p-2 rounded backdrop-blur-sm">
                                    How GLS Prepares You
                                </h2>
                                <p className="text-base sm:text-xl text-[#200e4f] font-extrabold mb-4 drop-shadow-md bg-white/20 p-2 rounded backdrop-blur-sm">
                                    You don't need to already speak German to start this journey.
                                </p>
                            </div>

                            <div className="flex-[1.5] w-full">
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4 p-5 bg-white/70 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl hover:bg-white/90 transition-colors">
                                        <div className="mt-0.5 shrink-0">
                                            <CheckCircle2 className="w-6 h-6 text-amber-600" />
                                        </div>
                                        <p className="text-sm sm:text-base text-[#200e4f] font-bold leading-relaxed">
                                            Structured classes from A1 through B1, built around real conversations, not just grammar drills.
                                        </p>
                                    </li>

                                    <li className="flex items-start gap-4 p-5 bg-white/70 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl hover:bg-white/90 transition-colors">
                                        <div className="mt-0.5 shrink-0">
                                            <CheckCircle2 className="w-6 h-6 text-amber-600" />
                                        </div>
                                        <p className="text-sm sm:text-base text-[#200e4f] font-bold leading-relaxed">
                                            ÖSD exam preparation with mock tests and format-specific practice.
                                        </p>
                                    </li>

                                    <li className="flex items-start gap-4 p-5 bg-white/70 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl hover:bg-white/90 transition-colors">
                                        <div className="mt-0.5 shrink-0">
                                            <CheckCircle2 className="w-6 h-6 text-amber-600" />
                                        </div>
                                        <p className="text-sm sm:text-base text-[#200e4f] font-bold leading-relaxed">
                                            Guided registration support so you don't miss deadlines or pick the wrong exam center.
                                        </p>
                                    </li>

                                    <li className="flex items-start gap-4 p-5 bg-white/70 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl hover:bg-white/90 transition-colors">
                                        <div className="mt-0.5 shrink-0">
                                            <CheckCircle2 className="w-6 h-6 text-amber-600" />
                                        </div>
                                        <p className="text-sm sm:text-base text-[#200e4f] font-bold leading-relaxed">
                                            A learning path that connects directly to what comes next, whether that's study, Ausbildung, or work in Austria or Germany.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="mt-24 mb-20 relative z-10 px-4">
                    <div className="max-w-4xl mx-auto">
                        <SectionTitle
                            title="Frequently Asked Questions"
                            subtitle="Everything you need to know about the ÖSD exam."
                        />
                        <div className="mt-12 space-y-4">
                            {OSD_FAQS.map((faq) => {
                                const isOpen = openFaq === faq.id;
                                return (
                                    <GlassCard key={faq.id} className="p-0 overflow-hidden border border-slate-200/80 dark:border-slate-800 transition-all duration-300 shadow-sm">
                                        <button
                                            onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                                            className="w-full text-left p-6 flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                                        >
                                            <h4 className="font-bold text-base md:text-lg text-[#200e4f] dark:text-white flex items-start gap-3 font-heading pr-8">
                                                <HelpCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                                                {faq.question}
                                            </h4>
                                            <ChevronDown className={`w-5 h-5 text-amber-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                                        </button>
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                >
                                                    <div className="p-6 pt-0 pl-14 text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                                        {faq.answer}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </GlassCard>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Final CTA Banner */}
                <section className="py-20 relative px-4 text-center">
                    <div
                        className="max-w-[1400px] mx-auto rounded-[32px] shadow-2xl relative overflow-hidden md:min-h-[500px] flex items-center justify-center bg-[#0B0F19]"
                    >
                        {/* Background Image Mockup */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src={img3}
                                alt="GLS Academy"
                                className="w-full h-full object-cover opacity-60"
                            />
                            <div className="absolute inset-0 backdrop-blur-[2px]"></div>
                        </div>

                        <div className="relative z-10 w-full px-6 flex flex-col justify-center items-center text-center grid-cols-1 md:my-10 space-y-6">

                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-[1.1] tracking-tight drop-shadow-md">
                                Your ÖSD Certificate <br className="hidden lg:block" />
                                <span className="italic font-medium opacity-90 text-amber-400">Starts With One Class</span>
                            </h2>

                            <p className="text-sm md:text-base lg:text-lg text-gray-200 font-medium max-w-[650px] leading-relaxed drop-shadow-sm mt-3">
                                From A1 to your exam day, GLS builds your German around what the ÖSD exam actually tests, wherever your path leads.
                            </p>

                            <div className="pt-2 sm:pt-5 flex items-center justify-center gap-4">
                                <Link to="/book-demo">
                                    <button className="bg-[#f5f0e6] text-[#200e4f] hover:bg-[#e8dec7] font-bold px-8 py-3.5 rounded-xl shadow-xl transition-all hover:scale-105 active:scale-95 text-[15px] flex items-center group">
                                        Book Your ÖSD Level Assessment
                                        <ArrowRight className="inline w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};
