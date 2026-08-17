import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, GraduationCap, Award, Compass, Languages, Target, HeartPulse, Settings, Coffee, Wrench, Library, BookOpen, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GradientButton } from '../components/common/GradientButton';

import placement from '../img/placement-2.webp';
import placementImg from '../img/placement.webp';
import img3 from '../img/img-3.webp';

const placementFaqs = [
    {
        question: "Do you guarantee placement in Germany?",
        answer: "We don't believe in promising a job simply because you complete a German course. Opportunities depend on your qualifications, experience, German proficiency, and employer requirements. Our role is to help you understand suitable pathways, prepare your profile and connect you with relevant opportunities."
    },
    {
        question: "What German level do I need to work in Germany?",
        answer: "It depends on your profession and pathway. Different jobs, Ausbildung programmes and institutions may have different language requirements. We help you understand the requirements relevant to your chosen direction."
    },
    {
        question: "Can you help me decide between Ausbildung and a job?",
        answer: "Yes. We look at your education, experience, interests, qualifications and goals to help you understand which pathways may be suitable for your profile."
    },
    {
        question: "Do I need to know what career I want before learning German?",
        answer: "Not necessarily. That's exactly why career guidance can be useful early in your journey. Understanding your options can help you learn German with a clearer purpose."
    },
    {
        question: "Do you help with CVs and applications?",
        answer: "Yes, depending on the pathway, our support can include profile preparation, CV guidance, application support and interview preparation."
    },
    {
        question: "Can I get career guidance if I'm only at A1 or A2?",
        answer: "Absolutely. In fact, understanding your direction early can help you make better decisions about your language-learning journey."
    },
    {
        question: "Do you help healthcare professionals?",
        answer: "Yes. Healthcare is one of the pathways we support, subject to individual qualifications, recognition requirements and relevant opportunities."
    },
    {
        question: "Can I explore opportunities in Germany from India?",
        answer: "Yes. You can begin understanding your career pathway, language requirements and preparation while you're still in India."
    }
];

export const Placement: React.FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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
                        className="lg:col-span-12 xl:col-span-7 space-y-6 text-center xl:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-extrabold text-xs uppercase tracking-widest border border-amber-500/20">
                            <Briefcase className="w-4 h-4" />
                            We help you turn your German journey into a career pathway.
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-[#200e4f] dark:text-white leading-[1.15] tracking-tight">
                            Connecting Skilled Professionals With <span className="text-gradient">The Right Employers Through <span className='italic'>Fair Placements</span></span>
                        </h1>

                        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-sans font-medium leading-relaxed max-w-2xl mx-auto xl:mx-0">
                            Learning German is only the first step. We help you understand your career options, choose the right pathway, prepare your profile, and connect you with suitable employers through fair and transparent placement practices.
                        </p>

                        <div className="pt-4 flex justify-center xl:justify-start">
                            <Link to="/contact">
                                <GradientButton size="lg" icon={ArrowRight}>
                                    Find Your Career Path
                                </GradientButton>
                            </Link>
                        </div>


                    </motion.div>

                    {/* Right Hero Graphic */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="lg:col-span-12 xl:col-span-5 relative"
                    >
                        <div className="relative rounded-[40px] overflow-hidden p-2 bg-gradient-to-tr from-amber-500/20 via-orange-500/10 to-red-500/20 backdrop-blur-xl shadow-2xl border border-white/20 dark:border-slate-800">
                            <img
                                src={placement}
                                alt="Placeholder Career Graphic"
                                className="w-full h-[300px] object-cover rounded-[32px] sm:h-[400px] xl:h-[450px]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                        </div>
                    </motion.div>
                </div>

                {/* Pathway Guidance Section */}
                <section className="mt-24 mb-20 max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#200e4f] dark:text-white font-heading tracking-tight leading-tight">
                            We don't just teach you German. <br className="hidden md:block" />
                            <span className="text-amber-500">We help you figure out what you're <span className=' italic'>learning </span>it for.</span>
                        </h2>
                        <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 font-medium">
                            Before recommending a path, we look at you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12 relative">
                        {/* 1. Education */}
                        <div className="bg-white dark:bg-slate-900 rounded-[24px] p-6 shadow-xl border border-slate-100 dark:border-slate-800 hover:-translate-y-3 hover:shadow-2xl hover:border-amber-500/30 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-500 transition-all duration-300 relative z-10">
                                <GraduationCap className="w-6 h-6 text-amber-600 dark:text-amber-500 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-[#200e4f] dark:text-white mb-2 leading-tight relative z-10">Your education</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium relative z-10">What have you studied?</p>
                        </div>

                        {/* 2. Experience */}
                        <div className="bg-white dark:bg-slate-900 rounded-[24px] p-6 shadow-xl border border-slate-100 dark:border-slate-800 hover:-translate-y-3 hover:shadow-2xl hover:border-orange-500/30 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500 transition-all duration-300 relative z-10">
                                <Award className="w-6 h-6 text-orange-600 dark:text-orange-500 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-[#200e4f] dark:text-white mb-2 leading-tight relative z-10">Your experience</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium relative z-10">What can you already do?</p>
                        </div>

                        {/* 3. Interests */}
                        <div className="bg-white dark:bg-slate-900 rounded-[24px] p-6 shadow-xl border border-slate-100 dark:border-slate-800 hover:-translate-y-3 hover:shadow-2xl hover:border-red-500/30 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="w-12 h-12 bg-red-100 dark:bg-red-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-500 transition-all duration-300 relative z-10">
                                <Compass className="w-6 h-6 text-red-600 dark:text-red-500 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-[#200e4f] dark:text-white mb-2 leading-tight relative z-10">Your interests</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium relative z-10">What kind of work do you see yourself doing?</p>
                        </div>

                        {/* 4. German Level */}
                        <div className="bg-white dark:bg-slate-900 rounded-[24px] p-6 shadow-xl border border-slate-100 dark:border-slate-800 hover:-translate-y-3 hover:shadow-2xl hover:border-emerald-500/30 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500 transition-all duration-300 relative z-10">
                                <Languages className="w-6 h-6 text-emerald-600 dark:text-emerald-500 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-[#200e4f] dark:text-white mb-2 leading-tight relative z-10">Your German level</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium relative z-10">Where are you starting from?</p>
                        </div>

                        {/* 5. Goals */}
                        <div className="bg-white dark:bg-slate-900 rounded-[24px] p-6 shadow-xl border border-slate-100 dark:border-slate-800 hover:-translate-y-3 hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300 relative z-10">
                                <Target className="w-6 h-6 text-blue-600 dark:text-blue-500 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-[#200e4f] dark:text-white mb-2 leading-tight relative z-10">Your goals</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium relative z-10">What does your future in Germany look like?</p>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-center max-w-3xl mx-auto mt-6"
                    >
                        <div className="inline-block p-[3px] rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 shadow-xl hover:shadow-orange-500/40 hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                            <div className="bg-white dark:bg-[#11131a] px-8 py-5 rounded-[14px] group-hover:bg-white/95 dark:group-hover:bg-[#11131a]/90 transition-colors duration-300">
                                <p className="text-lg sm:text-xl font-bold text-[#200e4f] dark:text-white font-heading">
                                    From there, we help you understand your options and build a realistic pathway forward.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Placement Infographic Section */}
                <section className="mt-8 mb-20 max-w-[1400px] w-full mx-auto relative z-10 px-4 md:px-8 flex justify-center">
                    <img
                        src={placementImg}
                        alt="The GLS Career Journey"
                        className="w-full max-w-6xl rounded-[32px] shadow-2xl border border-slate-100 dark:border-slate-800 object-contain"
                    />
                </section>

                {/* What We Actually Help With Section */}
                <section className="mt-24 mb-20 max-w-7xl mx-auto z-10 relative px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#200e4f] dark:text-white font-heading tracking-tight leading-tight">
                            What We Actually <span className="italic text-amber-500">Help With</span>
                        </h2>
                        <div className="flex items-center justify-center gap-4 mt-6">
                            <div className="h-[1px] w-12 bg-amber-500/50"></div>
                            <p className="text-lg sm:text-xl text-[#200e4f] dark:text-slate-300 font-bold tracking-wide">
                                More than a language certificate.
                            </p>
                            <div className="h-[1px] w-12 bg-amber-500/50"></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {/* 01 */}
                        <div className="bg-white dark:bg-slate-900 rounded-[32px] p-8 shadow-xl border border-slate-100 dark:border-slate-800 hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-500/20 dark:to-orange-500/20 flex items-center justify-center text-amber-600 dark:text-amber-500 font-black text-xl shadow-sm border border-amber-200 dark:border-amber-500/30">
                                    01
                                </span>
                                <h3 className=" sm:text-2xl font-black text-[#200e4f] dark:text-white leading-tight">
                                    Career Direction
                                </h3>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                Understand which pathways could make sense for your background and goals.
                            </p>
                        </div>

                        {/* 02 */}
                        <div className="bg-white dark:bg-slate-900 rounded-[32px] p-8 shadow-xl border border-slate-100 dark:border-slate-800 hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-500/20 dark:to-orange-500/20 flex items-center justify-center text-amber-600 dark:text-amber-500 font-black text-xl shadow-sm border border-amber-200 dark:border-amber-500/30">
                                    02
                                </span>
                                <h3 className="text-xl sm:text-2xl font-black text-[#200e4f] dark:text-white leading-tight">
                                    Profile Assessment
                                </h3>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                Identify your strengths, gaps and the requirements of your chosen pathway.
                            </p>
                        </div>

                        {/* 03 */}
                        <div className="bg-white dark:bg-slate-900 rounded-[32px] p-8 shadow-xl border border-slate-100 dark:border-slate-800 hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-500/20 dark:to-orange-500/20 flex items-center justify-center text-amber-600 dark:text-amber-500 font-black text-xl shadow-sm border border-amber-200 dark:border-amber-500/30">
                                    03
                                </span>
                                <h3 className="text-xl sm:text-2xl font-black text-[#200e4f] dark:text-white leading-tight">
                                    German for Your Career
                                </h3>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                Build language skills that are relevant to your academic or professional goals.
                            </p>
                        </div>

                        {/* 04 */}
                        <div className="bg-white dark:bg-slate-900 rounded-[32px] p-8 shadow-xl border border-slate-100 dark:border-slate-800 hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-500/20 dark:to-orange-500/20 flex items-center justify-center text-amber-600 dark:text-amber-500 font-black text-xl shadow-sm border border-amber-200 dark:border-amber-500/30">
                                    04
                                </span>
                                <h3 className="text-xl sm:text-2xl font-black text-[#200e4f] dark:text-white leading-tight">
                                    Application Support
                                </h3>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                Prepare the documents and applications needed to move forward.
                            </p>
                        </div>

                        {/* 05 */}
                        <div className="bg-white dark:bg-slate-900 rounded-[32px] p-8 shadow-xl border border-slate-100 dark:border-slate-800 hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-500/20 dark:to-orange-500/20 flex items-center justify-center text-amber-600 dark:text-amber-500 font-black text-xl shadow-sm border border-amber-200 dark:border-amber-500/30">
                                    05
                                </span>
                                <h3 className="text-xl sm:text-2xl font-black text-[#200e4f] dark:text-white leading-tight">
                                    Interview Preparation
                                </h3>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                Build confidence communicating in professional situations.
                            </p>
                        </div>

                        {/* 06 */}
                        <div className="bg-white dark:bg-slate-900 rounded-[32px] p-8 shadow-xl border border-slate-100 dark:border-slate-800 hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-500/20 dark:to-orange-500/20 flex items-center justify-center text-amber-600 dark:text-amber-500 font-black text-xl shadow-sm border border-amber-200 dark:border-amber-500/30">
                                    06
                                </span>
                                <h3 className="text-xl sm:text-2xl font-black text-[#200e4f] dark:text-white leading-tight">
                                    Opportunity Support
                                </h3>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                Explore relevant jobs, Ausbildung and other career opportunities.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="mt-32 max-w-4xl mx-auto px-4 relative z-10 w-full">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#200e4f] dark:text-white font-heading tracking-tight leading-tight uppercase">
                            Frequently Asked <span className="text-amber-500">Questions</span>
                        </h2>
                        <div className="flex items-center justify-center gap-4 mt-6">
                            <div className="h-[1px] w-12 bg-amber-500/50"></div>
                            <p className="text-lg sm:text-xl text-[#200e4f] dark:text-slate-300 font-bold tracking-wide">
                                Got questions? We've got answers.
                            </p>
                            <div className="h-[1px] w-12 bg-amber-500/50"></div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {placementFaqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`bg-white dark:bg-slate-900 border ${openFaqIndex === index ? 'border-amber-500 ring-4 ring-amber-500/10' : 'border-slate-200 dark:border-slate-800'} rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer`}
                            >
                                <button
                                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                    className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex justify-between items-center bg-transparent focus:outline-none"
                                    aria-expanded={openFaqIndex === index}
                                >
                                    <h3 className="text-[17px] sm:text-lg font-bold text-[#200e4f] dark:text-white pr-4 leading-tight">
                                        {faq.question}
                                    </h3>
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180 bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-500' : 'text-slate-500'}`}>
                                        <ChevronDown className="w-5 h-5" />
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                                        <p className="text-[15px] sm:text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
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
                            <div className="absolute inset-0 bg-black/40 md:bg-transparent md:bg-gradient-to-r md:from-transparent "></div>
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
                                    <Link to="/contact">
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
        </div>
    );
};

