import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, CheckCircle2, ArrowRight, GraduationCap, Briefcase, Globe, Info, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GradientButton } from '../components/common/GradientButton';
import goetheImg from '../img/goethe.webp';
import telcImg from '../img/about-2.webp';
import osdImg from '../img/about-3.webp';
import img3 from '../img/img-3.webp';

const exams = [
    {
        id: 'goethe',
        type: 'Goethe',
        image: goetheImg,
        tag: 'GOETHE Most Widely Recognised',
        quickInfo: 'Levels A1 to C2 · Accepted Worldwide',
        title: 'Goethe Exam',
        description: 'The most globally recognised German certification, accepted by universities, employers, and the German government for study, work, and visa applications.',
        checklist: [
            'Required by most German universities at B2 or higher',
            'Accepted for skilled worker and Ausbildung visas from B1'
        ],
        infoBox: 'Accepted For: University Admission, Work Visas, Ausbildung',
        ctaText: 'Learn About Goethe',
        ctaLink: '/exams/goethe',
        theme: 'amber',
        icon: Globe
    },
    {
        id: 'telc',
        type: 'telc',
        image: telcImg,
        tag: 'TELC Best Value',
        quickInfo: 'Levels A1 to C2 · Accepted Across Germany',
        title: 'telc Exam',
        description: 'A widely accepted German certification, generally more affordable than Goethe, with a dedicated healthcare track for nursing and care roles.',
        checklist: [
            'Recognised by German employers and institutions',
            'Includes a specialised Pflege certificate for healthcare pathways'
        ],
        infoBox: 'Accepted For: Work Visas, Ausbildung, Healthcare Roles',
        ctaText: 'Learn About telc',
        ctaLink: '/exams/telc',
        theme: 'teal',
        icon: Briefcase
    },
    {
        id: 'osd',
        type: 'ÖSD',
        image: osdImg,
        tag: 'ÖSD Best for Austria',
        quickInfo: 'Levels A1 to C2 · Accepted in Austria, Germany & Switzerland',
        title: 'ÖSD Exam',
        description: 'Austria\'s official German certification, also accepted across Germany and Switzerland, known for flexible exam scheduling.',
        checklist: [
            'The strongest choice if Austria is part of your plan',
            'Recognised for study, work, and visa purposes'
        ],
        infoBox: 'Accepted For: Austrian Study & Work, German University Admission',
        ctaText: 'Learn About ÖSD',
        ctaLink: '/exams/osd',
        theme: 'red',
        icon: GraduationCap
    }
];

const examFaqs = [
    {
        question: "1. Which German language exams are accepted for Germany?",
        answer: "The Goethe, telc and ÖSD exams are all internationally recognised German proficiency exams. However, which certificate you need can depend on your university, employer, visa category, Ausbildung or other specific requirement."
    },
    {
        question: "2. What is the difference between Goethe, telc and ÖSD?",
        answer: "All three assess German proficiency, but they differ in exam format, structure, locations, scoring and specific use cases. The right choice depends on what you are applying for and which certificate your institution or authority accepts."
    },
    {
        question: "3. Which German exam should I take: Goethe, telc or ÖSD?",
        answer: "There is no single best exam for everyone. Your choice should be based on your goal, required level, destination, application requirements and exam availability. GLS counsellors can help you identify the most suitable option."
    },
    {
        question: "4. What German levels can I take exams for?",
        answer: "German proficiency is generally measured from A1 to C2 under the Common European Framework of Reference for Languages (CEFR). Different exams and exam providers offer different levels, so check the specific exam requirements for your goal."
    },
    {
        question: "5. What German level do I need to study or work in Germany?",
        answer: "It depends on your pathway. Some programmes may require B1 or B2, while university programmes, professional recognition or certain regulated professions may require B2, C1 or higher. Always check the exact requirement of your institution or programme."
    },
    {
        question: "6. Can I take a German exam without taking a German course?",
        answer: "Yes. You can generally register for a proficiency exam without completing a course with the exam provider. However, exam preparation can significantly help you understand the format, improve your skills and practise under exam conditions."
    },
    {
        question: "7. How should I prepare for a German proficiency exam?",
        answer: "Preparation should cover all relevant skills: reading, listening, writing and speaking. You should also become familiar with the specific exam format, question types, timing and assessment criteria of your chosen exam."
    },
    {
        question: "8. Are Goethe, telc and ÖSD exams difficult?",
        answer: "The difficulty depends on your current German proficiency and the level you are attempting. Knowing German alone isn't enough. Understanding the exam format and practising the required skills can make a significant difference."
    },
    {
        question: "9. How long does it take to reach B1 or B2 German?",
        answer: "There is no fixed timeline because it depends on your starting level, learning pace, previous exposure to German and how consistently you practise. A structured course combined with regular practice can help you progress more efficiently."
    },
    {
        question: "10. Can I retake a German language exam if I don't pass?",
        answer: "Yes, you can generally retake an exam, although retake rules and waiting periods can vary depending on the exam provider and examination centre. It is important to check the specific rules before registering again."
    },
    {
        question: "11. How long is a German language certificate valid?",
        answer: "Many German language certificates do not have a general expiry date. However, a university, employer, embassy, immigration authority or other organisation may require a certificate obtained within a particular period. Always check the requirements of the organisation you are applying to."
    },
    {
        question: "12. Can GLS help me choose and prepare for my German exam?",
        answer: "Yes. GLS can help you understand the differences between Goethe, telc and ÖSD, identify the appropriate level for your goals and prepare you for the exam through structured German language and exam preparation."
    },
    {
        question: "13. Where can I take Goethe, telc or ÖSD exams?",
        answer: "Exam availability depends on the exam provider and authorised examination centres. Before booking, make sure the centre is authorised for the specific exam and level you need."
    },
    {
        question: "14. Do I need a German certificate for a German visa?",
        answer: "It depends on the type of visa and your specific purpose for travelling to Germany. Language requirements can vary for study, work, Ausbildung, family reunification and other visa categories."
    }
];

export const ExamHub: React.FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
    const [selectedFilter, setSelectedFilter] = useState<string>('All Exams');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const filters = ['All Exams', 'Goethe', 'telc', 'ÖSD'];

    const filteredExams = exams.filter(exam => {
        const matchesFilter = selectedFilter === 'All Exams' || exam.type === selectedFilter;
        const matchesSearch = exam.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            exam.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const getThemeColors = (theme: string) => {
        switch (theme) {
            case 'amber': return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
            case 'teal': return 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20';
            case 'red': return 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20';
            default: return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
        }
    };

    return (
        <div className="pt-32 pb-20 space-y-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#200e4f] dark:text-white font-heading tracking-tight leading-tight">
                        German Exams We Prepare You For
                        <span className="text-amber-500 italic font-secondary font-light block mt-3"> (Goethe, telc & ÖSD) </span>
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto pt-2">
                        Choose the right certification for your goal, university, work, or Ausbildung, with structured preparation across every major German exam, from A1 to C2.
                    </p>
                </div>

                {/* Filter and Search Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-[24px] shadow-xl border border-slate-100 dark:border-slate-800 mb-12">

                    {/* Filters */}
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">
                        <div className="hidden sm:flex items-center gap-2 mr-2 text-slate-400">
                            <Filter className="w-5 h-5" />
                        </div>
                        {filters.map(filter => (
                            <button
                                key={filter}
                                onClick={() => setSelectedFilter(filter)}
                                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${selectedFilter === filter
                                    ? 'bg-[#200e4f] text-white shadow-md'
                                    : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-[#200e4f]'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-72 lg:w-96 shrink-0">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-slate-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search by exam name or purpose..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-sm font-medium text-[#200e4f] dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-amber-500 transition-shadow outline-none"
                        />
                    </div>
                </div>

                {/* Exam Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredExams.map((exam, index) => (
                            <motion.div
                                key={exam.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="bg-white dark:bg-slate-900 rounded-[32px] overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 group"
                            >
                                {/* Top colored accent line */}
                                <div className={`h-2 w-full bg-gradient-to-r ${exam.theme === 'amber' ? 'from-amber-400 to-orange-500' : exam.theme === 'teal' ? 'from-teal-400 to-emerald-500' : 'from-red-400 to-rose-500'}`}></div>

                                {/* Image Header */}
                                <div className="h-48 w-full overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10 transition-opacity duration-300"></div>
                                    <img
                                        src={exam.image}
                                        alt={exam.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                    {/* Tag overlay on image */}
                                    <div className="absolute bottom-4 left-6 z-20">
                                        <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-wider shadow-lg backdrop-blur-md bg-white/95 dark:bg-slate-900/95 ${exam.theme === 'amber' ? 'text-amber-600 border border-amber-500/20' :
                                            exam.theme === 'teal' ? 'text-teal-600 border border-teal-500/20' :
                                                'text-red-600 border border-red-500/20'
                                            }`}>
                                            <exam.icon className="w-3.5 h-3.5" />
                                            {exam.tag.split(' ').map((word, i) => i === 0 ? <span key={i}>{word}</span> : <span key={i} className="opacity-80">{word}</span>).reduce((prev, curr) => [prev, ' ', curr] as any)}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                                    {/* Quick Info */}
                                    <div className="mb-4">
                                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
                                            {exam.quickInfo}
                                        </p>
                                    </div>

                                    {/* Title & Description */}
                                    <h3 className="text-2xl sm:text-3xl font-black text-[#200e4f] dark:text-white mb-4 font-heading transition-colors">
                                        {exam.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-6">
                                        {exam.description}
                                    </p>

                                    {/* Checklist */}
                                    <div className="space-y-3 mb-8">
                                        {exam.checklist.map((item, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${exam.theme === 'amber' ? 'text-amber-500' : exam.theme === 'teal' ? 'text-teal-500' : 'text-red-500'}`} />
                                                <span className="text-sm font-bold text-slate-700 dark:text-slate-300 leading-snug">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-auto space-y-6">
                                        {/* Info Box */}
                                        <div className={`p-4 rounded-xl flex items-start gap-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800`}>
                                            <Info className="w-5 h-5 text-[#200e4f] dark:text-slate-400 shrink-0 mt-0.5" />
                                            <div>
                                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Accepted For</span>
                                                <p className="text-xs sm:text-sm font-bold text-[#200e4f] dark:text-white leading-tight">
                                                    {exam.infoBox.replace('Accepted For: ', '')}
                                                </p>
                                            </div>
                                        </div>

                                        {/* CTA Button */}
                                        <div className="pt-2">
                                            <Link to={exam.ctaLink} className="block">
                                                <GradientButton icon={ArrowRight} fullWidth>
                                                    {exam.ctaText}
                                                </GradientButton>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredExams.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-xl text-slate-500 font-medium">No exams found matching your criteria.</p>
                        <button
                            onClick={() => {
                                setSelectedFilter('All Exams');
                                setSearchQuery('');
                            }}
                            className="mt-4 text-amber-500 font-bold hover:underline"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}

                {/* FAQ Section */}
                <section className="mt-32 max-w-4xl mx-auto relative z-10 w-full">
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
                        {examFaqs.map((faq, index) => (
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
                                        {faq.question.replace(/^\d+\.\s*/, '')}
                                    </h3>
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180 bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-500' : 'text-slate-500'}`}>
                                        <ChevronDown className="w-5 h-5" />
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
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

                {/* Final CTA Section */}
                <section className="py-20 relative px-4 text-center">
                    <div
                        className="max-w-[1400px] mx-auto rounded-[32px] shadow-2xl relative overflow-hidden min-h-[450px] md:min-h-[500px] flex items-center justify-center bg-[#0B0F19]"
                    >
                        {/* Background Image Mockup */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src={img3}
                                alt="GLS Academy"
                                className="w-full h-full object-cover opacity-60"
                            />
                            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
                        </div>

                        <div className="relative z-10 w-full px-6 py-12 flex flex-col justify-center items-center text-center grid-cols-1 md:my-10 space-y-6">

                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-heading text-white leading-[1.1] tracking-tight drop-shadow-md">
                                Goethe, telc or ÖSD. <br className="hidden lg:block" />
                                <span className="italic font-medium opacity-90 text-amber-400">Not Sure Which One to Take?</span>
                            </h2>

                            <p className="text-sm md:text-base lg:text-lg text-gray-200 font-medium max-w-[650px] leading-relaxed drop-shadow-sm mt-3">
                                Every exam has its own format, requirements and purpose. Let our experts help you choose the right exam and preparation plan for your Germany journey.
                            </p>

                            <div className="pt-2 sm:pt-5 flex items-center justify-center gap-4">
                                <Link to="/contact">
                                    <button className="font-bold px-8 py-3.5 rounded-xl transition-all hover:scale-105 active:scale-95 text-[15px] flex items-center group bg-gradient-to-r from-[#BD181E] to-[#e8b44b] text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:brightness-110 border border-[#e8b44b]/30">
                                        Find the Right Exam
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
