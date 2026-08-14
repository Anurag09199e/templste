import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Award, Globe, HelpCircle, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/common/SectionTitle';
import { GlassCard } from '../components/common/GlassCard';
import goetheImg from '../img/goethe.webp';
import img3 from '../img/img-3.webp';
import goethPrepImg from '../img/goeth-2.webp';

const GOETHE_FAQS = [
    {
        id: 'q1',
        question: 'Do I need to speak German to start?',
        answer: 'No. Most learners start at A1 with zero prior knowledge. GLS builds you up level by level.'
    },
    {
        id: 'q2',
        question: 'What level do I need for university in Germany?',
        answer: 'Most universities require B2 or higher for direct admission.'
    },
    {
        id: 'q3',
        question: 'What level do I need for Ausbildung or vocational training?',
        answer: 'Most Ausbildung programs require at least B1, though some sectors like healthcare may ask for B2. GLS can guide you toward the right level for your chosen path.'
    },
    {
        id: 'q4',
        question: 'How long does it take to reach B1?',
        answer: 'This depends on your starting point and study pace, but most learners take a structured path across several months of consistent classes to go from A1 to B1.'
    },
    {
        id: 'q5',
        question: 'Where do I take the exam?',
        answer: 'Goethe exams are held at official Goethe-Institut centers across major Indian cities. GLS helps you choose the right center and registration window.'
    },
    {
        id: 'q6',
        question: 'Is the Goethe certificate accepted everywhere in Germany?',
        answer: 'Yes. It is recognised by universities, employers, and the German government as valid proof of language proficiency.'
    }
];

export const GoetheExam: React.FC = () => {
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
                            Everything You Need to Know About the <span className="text-gradient">Goethe Exam</span>
                        </h1>

                        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-sans font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            The Goethe exam is the most recognised proof of German language ability, accepted by universities, employers, and embassies worldwide. Whether you are applying to study, work, or train in Germany, this is where your journey starts.
                        </p>

                        <div className="pt-4 flex justify-center lg:justify-start">
                            <Link to="/courses">
                                <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:brightness-110 text-white font-extrabold px-8 py-4 rounded-xl shadow-xl transition-all hover:-translate-y-1 active:translate-y-0 text-[15px] flex items-center justify-center gap-2">
                                    Check Your German Level <ArrowRight className="w-5 h-5" />
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
                                alt="Goethe Exam Preparation"
                                className="w-full h-auto object-cover rounded-[32px] md:h-[450px]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                        </div>
                    </motion.div>
                </div>

                {/* What Is the Goethe Exam Section */}
                <section className="mt-24 mb-12 max-w-4xl mx-auto text-center sm:text-left">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#200e4f] dark:text-white mb-6 font-heading text-center">
                        What Is the Goethe Exam
                    </h2>
                    <div className="space-y-6 text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed bg-[#f5f0e6]/50 dark:bg-slate-900/40 p-8 rounded-[32px] border border-slate-200/60 dark:border-slate-800/60 shadow-lg">
                        <p>
                            The Goethe exam is an internationally recognised German language test developed by the Goethe-Institut, Germany's own language and cultural organisation. It measures your ability to read, write, listen, and speak German across six levels, from complete beginner to near-native fluency.
                        </p>
                        <p>
                            German universities, major employers, and the German government all accept Goethe certificates as valid proof of language ability, which is why it matters far beyond the classroom.
                        </p>
                    </div>
                </section>

                {/* Why Goethe Exam Section - Quick Info */}
                <section className="mt-20 mb-20 text-center max-w-4xl mx-auto">
                    <SectionTitle
                        title="Why take the Goethe Exam?"
                        subtitle="The Goethe-Zertifikat is the official and most trusted qualification of German proficiency."
                    />
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <GlassCard className="p-6 border border-slate-200 dark:border-slate-800 text-left hover:-translate-y-1 transition-transform">
                            <ShieldCheck className="w-8 h-8 text-emerald-500 mb-4" />
                            <h4 className="text-xl font-bold text-[#200e4f] dark:text-white mb-2">Visa & Immigration</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Required by the German embassy for student, family reunion, and Ausbildung visas.</p>
                        </GlassCard>
                        <GlassCard className="p-6 border border-slate-200 dark:border-slate-800 text-left hover:-translate-y-1 transition-transform">
                            <Award className="w-8 h-8 text-amber-500 mb-4" />
                            <h4 className="text-xl font-bold text-[#200e4f] dark:text-white mb-2">University Admission</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Recognised by all German higher education institutions.</p>
                        </GlassCard>
                        <GlassCard className="p-6 border border-slate-200 dark:border-slate-800 text-left hover:-translate-y-1 transition-transform">
                            <CheckCircle2 className="w-8 h-8 text-blue-500 mb-4" />
                            <h4 className="text-xl font-bold text-[#200e4f] dark:text-white mb-2">Career Growth</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">The gold standard for employers across Germany, Austria, and Switzerland.</p>
                        </GlassCard>
                    </div>
                </section>

                {/* Why the Goethe Exam Matters Section */}
                <section className="mt-24 mb-20">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center bg-white dark:bg-[#11131a] p-8 md:p-12 rounded-[32px] border border-slate-200/80 dark:border-slate-800 shadow-xl">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#200e4f] dark:text-white font-heading leading-tight">
                                Why the Goethe Exam Matters
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
                                If you're planning to study, work, or train in Germany, your German level is not just a personal milestone, it is a requirement. Universities, employers, and the German embassy all ask for proof, and the Goethe certificate is one of the most widely accepted ways to provide it.
                            </p>
                            <ul className="space-y-4 pt-2">
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-amber-100 dark:bg-amber-500/20 p-1.5 rounded-lg shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                                    </div>
                                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium">Studying at a German university usually requires B2 or higher.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-emerald-100 dark:bg-emerald-500/20 p-1.5 rounded-lg shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-500" />
                                    </div>
                                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium">Work and training pathways in Germany often require B1 as a starting point.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-blue-100 dark:bg-blue-500/20 p-1.5 rounded-lg shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-500" />
                                    </div>
                                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium">Visa applications frequently ask for language proof depending on the pathway you're on.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Understanding the Levels Section */}
                <section className="mt-24 mb-20 text-center">
                    <SectionTitle
                        title="Understanding the Levels (A1 to C2)"
                        subtitle="The Goethe exams correspond to the levels of the Common European Framework of Reference for Languages (CEFR)."
                    />

                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-6xl mx-auto">
                        <GlassCard className="p-8 border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform">
                            <div className="flex items-end gap-3 mb-4">
                                <span className="text-4xl font-extrabold text-[#200e4f] dark:text-white font-heading">A1</span>
                                <span className="text-lg font-bold text-slate-400 mb-1">— Beginner</span>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                Introduce yourself, order food, ask simple questions. A good starting point for travel or early learners.
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
                                Tell stories, write emails, and follow workplace conversations. Often the minimum level required for training and work pathways in Germany.
                            </p>
                        </GlassCard>

                        <GlassCard className="p-8 border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform">
                            <div className="flex items-end gap-3 mb-4">
                                <span className="text-4xl font-extrabold text-[#200e4f] dark:text-white font-heading">B2</span>
                                <span className="text-lg font-bold text-amber-500 mb-1">— Upper Int.</span>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                Discuss ideas, follow university lectures, and write reports. Usually the minimum requirement for German university admission.
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

                {/* What's Actually in the Exam Section */}
                <section className="mt-24 mb-24 max-w-6xl mx-auto">
                    <div className="text-center mb-12 flex flex-col items-center">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#200e4f] dark:text-white mb-4 font-heading">
                            What's Actually in the Exam
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-2xl">
                            Every Goethe exam tests four skills on the same day: Reading, Listening, Writing, and Speaking.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <GlassCard className="p-8 border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform">
                            <h4 className="text-xl font-bold text-[#200e4f] dark:text-white mb-4 flex items-center gap-2">
                                Beginner <span className="text-sm font-semibold text-slate-400 ml-auto">(A1-A2)</span>
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
                                Short texts, simple listening tasks, filling in forms, and describing a picture or talking about yourself.
                            </p>
                        </GlassCard>

                        <GlassCard className="p-8 border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform">
                            <h4 className="text-xl font-bold text-[#200e4f] dark:text-white mb-4 flex items-center gap-2">
                                Intermediate <span className="text-sm font-semibold text-slate-400 ml-auto">(B1-B2)</span>
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
                                Longer reading passages, writing emails or formal letters, and speaking tasks like planning something together with a partner.
                            </p>
                        </GlassCard>

                        <GlassCard className="p-8 border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-transform">
                            <h4 className="text-xl font-bold text-[#200e4f] dark:text-white mb-4 flex items-center gap-2">
                                Advanced <span className="text-sm font-semibold text-slate-400 ml-auto">(C1-C2)</span>
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
                                Complex articles, opinion essays, and debate style speaking tasks.
                            </p>
                        </GlassCard>
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 rounded-2xl p-6 text-center max-w-2xl mx-auto shadow-sm">
                        <p className="text-emerald-700 dark:text-emerald-400 font-extrabold text-base md:text-lg flex items-center justify-center gap-3">
                            <Award className="w-6 h-6 shrink-0" />
                            A passing score is generally 60% across all sections.
                        </p>
                    </div>
                </section>

                {/* How GLS Prepares You Section */}
                <section className="mt-24 mb-20 px-4">
                    <div className="max-w-6xl mx-auto rounded-[40px] shadow-2xl relative overflow-hidden flex items-center min-h-[500px]">

                        {/* Background Image & Overlay */}
                        <div className="absolute inset-0 z-0">
                            <img src={goethPrepImg} alt="GLS Students" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 md:via-[#0B0F19]/90 md:to-[#0B0F19]/40 backdrop-blur-[2px]"></div>
                        </div>

                        <div className="relative z-10 w-full p-8 md:p-14 flex flex-col md:flex-row gap-12 lg:gap-16 items-center">
                            <div className="flex-1 space-y-4">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#200e4f] font-heading leading-tight tracking-tight drop-shadow-md">
                                    How GLS Prepares You
                                </h2>
                                <p className="text-base sm:text-xl text-[#200e4f] font-extrabold mb-4 drop-shadow-md">
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
                                            Goethe and telc exam preparation with mock tests.
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
                                            A learning path that connects directly to what comes next, whether that's university, Ausbildung, or work in Germany.
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
                            subtitle="Everything you need to know about the Goethe exam."
                        />
                        <div className="mt-12 space-y-4">
                            {GOETHE_FAQS.map((faq) => {
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
                {/* 12. Final Contact CTA Banner */}
                <section className="py-20 relative px-4">
                    <div
                        className="max-w-[1400px] mx-auto rounded-[32px] shadow-2xl relative overflow-hidden md:min-h-[600px] flex items-center bg-[#0B0F19]"
                    >
                        {/* Background Image Mockup */}
                        <div className="w-full relative md:absolute md:inset-0 md:z-0">
                            <img
                                src={img3}
                                alt="Train passing"
                                className="w-full h-auto object-contain block md:h-full md:object-cover"
                            />
                            {/* Dark gradient mapping to the right to make the white text legible */}
                            <div className="absolute inset-0 backdrop-blur-[2px]"></div>
                        </div>

                        <div className="absolute inset-0 z-10 w-full px-6 flex flex-col justify-center md:flex-none md:static md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-12 md:gap-8 md:my-10">
                            <div className="hidden md:block md:col-span-4 lg:col-span-5">{/* Empty spacing for the left image element */}</div>

                            {/* Right column for the text content */}
                            <div className="md:col-span-8 lg:col-span-7 flex flex-col justify-center space-y-6 relative">

                                {/* Paper Airplane and dotted path SVG */}
                                <div className="absolute -top-[70px] left-[-30px] w-full h-[100px] pointer-events-none hidden md:block">
                                    <svg className="w-full h-full text-white" viewBox="0 0 500 100" fill="none" preserveAspectRatio="none">
                                        {/* The curved trajectory */}
                                        <path d="M 0 90 Q 200 10 400 30" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" fill="transparent" strokeDashoffset="0" className="opacity-70" />
                                    </svg>
                                    {/* Airplane icon placed at the end of the line */}
                                    <svg className="absolute top-[18px] right-[70px] w-8 h-8 text-white transform -rotate-12 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                                    </svg>
                                </div>

                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-heading text-white leading-[1.1] tracking-tight drop-shadow-md">
                                    Ready to Start Your <br className="hidden lg:block" />
                                    <span className="italic font-medium opacity-90">German Journey?</span>
                                </h2>

                                <p className="text-sm md:text-base lg:text-[17px] text-gray-200 font-medium max-w-[550px] leading-relaxed drop-shadow-sm mt-3">
                                    Book a free counseling session and find the right path — Ausbildung, Masters, or direct job placement
                                </p>

                                <div className="pt-2 sm:pt-5 flex items-center gap-4">
                                    <Link to="/book-demo">
                                        <button className="bg-white text-[#1f1a14] hover:bg-gray-100 font-bold px-8 py-3.5 rounded-xl shadow-xl transition-all hover:scale-105 active:scale-95 text-[15px] flex items-center group">
                                            Book Free Consultation
                                            <ArrowRight className="inline w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};
