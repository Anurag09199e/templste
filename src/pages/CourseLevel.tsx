import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { COURSES } from '../data/mockData';
import { Search, MapPin, ArrowLeft, Clock, Calendar, Video, Star, Users, CheckCircle2, BookOpen, GraduationCap, ArrowRight, MessageCircle, ShoppingBag, PenTool } from 'lucide-react';
import { GradientButton } from '../components/common/GradientButton';
import ctaBgImage from '../img/img-3.webp';

const iconMap = {
    MessageCircle,
    Users,
    Clock,
    ShoppingBag,
    PenTool
};

export const CourseLevel: React.FC = () => {
    const { levelId } = useParams<{ levelId: string }>();
    const navigate = useNavigate();
    const [course, setCourse] = useState(COURSES[0]);

    useEffect(() => {
        if (levelId) {
            const foundCourse = COURSES.find(c => c.level.toLowerCase() === levelId.toLowerCase());
            if (foundCourse) {
                setCourse(foundCourse);
            } else {
                navigate('/courses');
            }
        }
    }, [levelId, navigate]);

    if (!course) return null;

    return (
        <div className="pt-24 pb-20 space-y-16 font-sans bg-[#f9f7f1] dark:bg-[#0B0F19] min-h-screen">

            {/* Course Hero */}
            <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* LEFT SIDE: TEXT */}
                    <div className="lg:col-span-6 space-y-8 lg:pr-8">
                        <div className="flex items-center gap-3">
                            <span className="px-4 py-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 font-extrabold text-sm tracking-wider uppercase border border-amber-500/20 shadow-sm">
                                {course.level} Level
                            </span>
                            <span className="px-4 py-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-sm border border-emerald-500/20 flex items-center gap-1.5 shadow-sm">
                                <Star className="w-4 h-4 fill-current" /> {course.rating} ({course.enrolledStudents}+)
                            </span>
                        </div>

                        <div className="space-y-4">
                            <p className="text-xl font-bold text-amber-500 font-heading tracking-wide uppercase">
                                {course.germanTitle}
                            </p>
                            <h1 className="text-5xl lg:text-6xl font-black font-heading text-[#200e4f] dark:text-white leading-[1.15]">
                                {course.title}
                            </h1>
                        </div>

                        <p className="text-[#55536B] dark:text-slate-300 leading-relaxed text-lg font-medium">
                            {course.fullDesc}
                        </p>

                        {/* <div className="grid grid-cols-2 gap-6 py-6 border-b border-t border-slate-200/60 dark:border-slate-800/60">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-600 shadow-sm border border-blue-500/10">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Duration</p>
                                    <p className="font-extrabold text-[#200e4f] dark:text-white text-lg">{course.durationWeeks} Weeks</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-600 shadow-sm border border-amber-500/10">
                                    <Video className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Mode</p>
                                    <p className="font-extrabold text-[#200e4f] dark:text-white text-lg">{course.mode}</p>
                                </div>
                            </div>
                        </div> */}

                        <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-2">
                            <div className="mr-4">
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Course Fee</p>
                                <p className="text-3xl font-black text-[#200e4f] dark:text-white tracking-tight">{course.priceLocal}</p>
                            </div>
                            <div className="flex flex-col gap-2 shrink-0 flex-grow sm:flex-grow-0">
                                <Link to="/book-demo">
                                    <GradientButton icon={ArrowRight} className="w-full h-14 text-lg px-8">
                                        {course.ctaText || 'Book Free Demo'}
                                    </GradientButton>
                                </Link>
                                {course.trustText && (
                                    <p className="text-xs text-slate-500 font-medium flex items-center justify-center sm:justify-start gap-1.5 opacity-90 mt-1">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                        {course.trustText}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: IMAGE */}
                    <div className="lg:col-span-6 relative mt-10 lg:mt-0">
                        <div className="aspect-[4/5] lg:aspect-square w-full rounded-[40px] overflow-hidden shadow-2xl relative border-8 border-white dark:border-[#13161c] transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Floating widgets */}
                        {course.goethePrepIncluded && (
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="absolute -bottom-8 -left-4 lg:-left-12 bg-white dark:bg-slate-800 p-5 rounded-3xl shadow-xl flex items-center gap-5 border border-slate-100 dark:border-slate-700 z-10"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 border border-amber-500/20">
                                    <CheckCircle2 className="w-7 h-7" />
                                </div>
                                <div>
                                    <p className="font-black text-lg text-[#200e4f] dark:text-white tracking-tight">Goethe Exam Prep</p>
                                    <p className="text-sm font-medium text-slate-500">Included in syllabus</p>
                                </div>
                            </motion.div>
                        )}
                    </div>

                </div>
            </section>

            {course.learningFeatures && (
                <section className="py-20 bg-[#f9f7f1] dark:bg-[#0B0F19]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg">
                        <h2 className="text-4xl lg:text-5xl font-black font-heading text-[#200e4f] dark:text-white mb-4 tracking-tight">
                            Everything you will learn in this course
                        </h2>
                        <p className="text-[#55536B] dark:text-slate-300 text-lg max-w-2xl mx-auto mb-16 font-medium">
                            {course.learningFeaturesSubtitle || `Here's what the ${course.germanTitle} course covers.`}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-left ">
                            {course.learningFeatures.map((feat, idx) => {
                                const Icon = iconMap[feat.icon as keyof typeof iconMap] || CheckCircle2;
                                return (
                                    <div key={idx} className="bg-[#f5f0e6] dark:bg-[#11131a] rounded-[24px] p-6 border border-slate-200 dark:border-slate-800 shadow-xl hover:-translate-y-1 transition-transform duration-300">
                                        <div className="w-12 h-12 rounded-2xl bg-[#f9f7f1] dark:bg-slate-800 mb-6 flex items-center justify-center text-amber-500 border border-amber-500/10 shadow-sm">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h4 className="text-[#200e4f] dark:text-white font-black text-lg mb-3 leading-tight tracking-tight">
                                            {feat.title}
                                        </h4>
                                        <p className="text-slate-600 dark:text-slate-400 text-[13px] font-medium leading-relaxed">
                                            {feat.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* Course Details / Syllabus */}
            <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-[#f5f0e6] dark:bg-slate-900/60 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-lg">
                            <h3 className="text-xl font-bold font-heading text-[#200e4f] dark:text-white mb-6 flex items-center gap-3">
                                <GraduationCap className="w-6 h-6 text-amber-500" /> Who is this for?
                            </h3>
                            <p className="text-[#55536B] dark:text-slate-300 leading-relaxed font-medium">
                                {course.recommendedFor}
                            </p>
                        </div>

                        <div className="bg-[#f5f0e6] dark:bg-slate-900/60 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-lg">
                            <h3 className="text-xl font-bold font-heading text-[#200e4f] dark:text-white mb-6 flex items-center gap-3">
                                <CheckCircle2 className="w-6 h-6 text-emerald-500" /> Learning Outcomes
                            </h3>
                            <ul className="space-y-4">
                                {course.outcomes.map((outcome, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                        <span className="text-sm font-medium text-[#55536B] dark:text-slate-300 leading-relaxed">{outcome}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-8 space-y-6">
                        <h2 className="text-3xl font-black font-heading text-[#200e4f] dark:text-white mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
                            Curriculum Roadmap
                        </h2>

                        <div className="space-y-4">
                            {course.syllabusModules.map((mod, idx) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    key={idx}
                                    className="bg-[#f5f0e6] dark:bg-slate-900/60 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-md group hover:border-amber-500/30 transition-colors"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-[#f9f7f1] dark:bg-slate-800 flex items-center justify-center font-black text-xl text-amber-500 shadow-sm shrink-0 border border-slate-100 dark:border-slate-700">
                                            M{mod.moduleNumber}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-[#200e4f] dark:text-white mb-3 group-hover:text-amber-600 transition-colors">
                                                {mod.title}
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {mod.topics.map((topic, i) => (
                                                    <span key={i} className="px-3 py-1.5 bg-[#f9f7f1] dark:bg-slate-800 rounded-lg text-xs font-semibold text-[#55536B] border border-slate-100 dark:border-slate-700 shadow-sm flex items-center gap-1.5">
                                                        <BookOpen className="w-3 h-3 text-amber-500" /> {topic}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-8">
                            <Link to="/courses" className="text-amber-600 hover:text-amber-700 font-bold flex items-center gap-2">
                                <ArrowLeft className="w-4 h-4" /> Compare all levels in Course Hub
                            </Link>
                        </div>
                    </div>

                </div>
            </section>

            {course.faqs && (
                <section className="py-24 bg-[#f9f7f1] dark:bg-[#11131a] mt-12 border-t border-slate-100 dark:border-slate-800/50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-black font-heading text-[#200e4f] dark:text-white mb-4">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-slate-500 font-medium">
                                Everything you need to know about the {course.germanTitle} course.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {course.faqs.map((faq, idx) => (
                                <div key={idx} className="bg-[#f5f0e6] dark:bg-slate-900 rounded-[20px] p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800">
                                    <h4 className="font-bold text-lg text-[#200e4f] dark:text-white flex items-start gap-4 mb-3 leading-tight tracking-tight">
                                        <div className="w-7 h-7 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/20">
                                            <span className="text-[13px] font-black">Q</span>
                                        </div>
                                        {faq.question}
                                    </h4>
                                    <p className="text-[#55536B] dark:text-slate-400 leading-relaxed pl-11 font-medium text-[15px]">
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            )}
            <section className="py-20 relative px-4">
                <div
                    className="max-w-[1400px] mx-auto rounded-[32px] shadow-2xl relative overflow-hidden min-h-[600px] flex items-center"
                >
                    {/* Background Image Mockup */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={ctaBgImage}
                            alt="Train passing"
                            className="w-full h-full object-cover"
                        />
                        {/* Dark gradient mapping to the right to make the white text legible */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent "></div>
                    </div>

                    <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-12 gap-8 my-10">
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

                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading text-white leading-[1.1] tracking-tight drop-shadow-md">
                                Ready to Start Your <br className="hidden lg:block" />
                                <span className="italic font-medium opacity-90">German Journey?</span>
                            </h2>

                            <p className="text-sm md:text-base lg:text-[17px] text-gray-200 font-medium max-w-[550px] leading-relaxed drop-shadow-sm mt-3">
                                Book a free counseling session and find the right path — Ausbildung, Masters, or direct job placement
                            </p>

                            <div className="pt-5 flex items-center gap-4">
                                <Link to="/book-demo">
                                    <GradientButton size="lg" icon={ArrowRight}>
                                        Book Free Consultation
                                    </GradientButton>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};
