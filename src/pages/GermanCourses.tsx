import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SectionTitle } from '../components/common/SectionTitle';

const COURSES = [
  {
    id: "A1",
    level: "A1",
    title: "Beginner",
    desc: "An introduction and the first taste of the German language. This Level is for beginners and in this level, no previous knowledge of the language is required. By the end of this course, you will be able to cope with the most common everyday situations by asking and answering simple questions and to understand people when they speak to you about the situations covered.",
    plans: [
      { course: "A1", type: "Weekdays", courseDuration: "50 Days", classDuration: "90 Mins (Mon-Friday)", mode: "Offline", fee: "24,990" },
      { course: "A1", type: "Weekdays", courseDuration: "50 Days", classDuration: "90 Mins (Mon-Friday)", mode: "Online", fee: "19,990" },
      { course: "A1", type: "Weekend", courseDuration: "90 Days", classDuration: "150 Mins (Sat-Sun)", mode: "Offline", fee: "24,990" },
      { course: "A1", type: "Weekend", courseDuration: "90 Days", classDuration: "150 Mins (Sat-Sun)", mode: "Online", fee: "19,990" },
    ]
  },
  {
    id: "A2",
    level: "A2",
    title: "Elementary",
    desc: "By the end of this course, you will have expanded the range of situations which you are able to handle in German and you will have begun to learn some basic grammar points. You will be understanding more of what people say and will be confident enough to respond appropriately.",
    plans: [
      { course: "A2", type: "Weekdays", courseDuration: "55 Days", classDuration: "90 Mins (Mon-Friday)", mode: "Offline", fee: "24,990" },
      { course: "A2", type: "Weekdays", courseDuration: "55 Days", classDuration: "90 Mins (Mon-Friday)", mode: "Online", fee: "19,990" },
      { course: "A2", type: "Weekend", courseDuration: "90 Days", classDuration: "150 Mins (Sat-Sun)", mode: "Offline", fee: "24,990" },
      { course: "A2", type: "Weekend", courseDuration: "90 Days", classDuration: "150 Mins (Sat-Sun)", mode: "Online", fee: "19,990" },
    ]
  },
  {
    id: "B1",
    level: "B1",
    title: "Intermediate",
    desc: "By the end of this level, you will be able to say more about your professional and social life and you will be able to use the phone and write simple messages. You will also have a reasonable feel for the main patterns of the language.",
    plans: [
      { course: "B1", type: "Weekdays", courseDuration: "80 Days", classDuration: "90 Mins (Mon-Friday)", mode: "Offline", fee: "24,990" },
      { course: "B1", type: "Weekdays", courseDuration: "80 Days", classDuration: "90 Mins (Mon-Friday)", mode: "Online", fee: "23,990" },
      { course: "B1", type: "Weekend", courseDuration: "105 Days", classDuration: "150 Mins (Sat-Sun)", mode: "Offline", fee: "24,990" },
      { course: "B1", type: "Weekend", courseDuration: "105 Days", classDuration: "150 Mins (Sat-Sun)", mode: "Online", fee: "23,990" },
    ]
  },
  {
    id: "B2",
    level: "B2",
    title: "Upper Intermediate",
    desc: "By the end of this level, one can understand complex text. They can express views on a variety of topics and converse with the native speakers too. You will be able to talk about travel and a range of outdoor leisure activities. Generally, you will be handling most everyday situations.",
    plans: [
      { course: "B2.1", type: "Weekdays", courseDuration: "80 Days", classDuration: "90 Mins (Mon-Friday)", mode: "Offline", fee: "23,990" },
      { course: "B2.2", type: "Weekdays", courseDuration: "80 Days", classDuration: "90 Mins (Mon-Friday)", mode: "Offline", fee: "23,990" },
    ]
  },
  {
    id: "C1",
    level: "C1",
    title: "Advanced",
    desc: "By the end of this level, you will be able to refer to future and past events and describe some of these in sequence. Your range of vocabulary will have increased to include some areas outside the everyday.",
    plans: [
      { course: "C1.1", type: "Weekdays", courseDuration: "80 Days", classDuration: "90 Mins (Mon-Friday)", mode: "Offline", fee: "24,990" },
    ]
  },
  {
    id: "C2",
    level: "C2",
    title: "Mastery",
    desc: "By the end of this course, you will have mastered the basics of the language, both grammar and vocabulary. You will have learned enough either to go to a German-speaking country or can join any MNC which look for German Experts.",
    plans: [
      { course: "C2.1", type: "Weekdays", courseDuration: "80 Days", classDuration: "90 Mins (Mon-Friday)", mode: "Offline", fee: "24,990" },
    ]
  }
];

export const GermanCourses: React.FC = () => {
  const { hash } = useLocation();

  // Scroll to hash on mount or when hash changes via Navbar
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <div
      className="relative min-h-screen pb-32 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80")', backgroundColor: '#a2a2a2ff' }}
    >
      {/* Opacity Overlay */}
      <div className="absolute inset-0 bg-[#e4ebf1]/85 dark:bg-[#0B0F19]/90 z-0 pointer-events-none"></div>

      {/* Content Wrapper */}
      <div className="relative z-10">

        {/* Premium Page Hero */}
        <div className="relative pt-40 pb-28 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950 border-b border-amber-500/20">
          {/* Glow Effects */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none translate-x-1/4 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/4 translate-y-1/2" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 font-extrabold text-xs uppercase tracking-widest mb-6">
              Goethe & TELC Curriculum
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-white mb-6 tracking-tight max-w-4xl leading-tight">
              Our German Language <span className="text-amber-500">Courses</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Become a master in the German Language with our structured, expert-led training. From A1 beginners to C2 mastery, find the exact curriculum pathway you need to confidently study, work, and thrive in Germany.
            </p>
          </div>
        </div>

        {/* Courses List Layout */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 pt-16 flex flex-col gap-24">

          {COURSES.map((course) => (
            <div
              key={course.id}
              id={course.id}
              className="scroll-mt-40 relative md:ml-12 lg:ml-16"
            >
              {/* The Floating Level Circle Tracker */}
              <div className="absolute -top-10 -left-6 md:-left-16 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#fa9632] flex items-center justify-center font-black text-4xl sm:text-5xl text-black z-30 shadow-xl shadow-orange-500/20">
                {course.level}
              </div>

              {/* Main Course Content Card */}
              <div className="bg-[#f5f0e6] dark:bg-slate-900 rounded-[2.5rem] rounded-tl-[4rem] px-6 py-12 sm:p-12 md:p-16 shadow-2xl shadow-slate-300/50 dark:shadow-none border border-slate-100 dark:border-slate-800 relative z-20 overflow-hidden">
                <div className="md:ml-20 mb-10">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                    {course.desc}
                  </p>
                </div>

                {/* Plans Table */}
                <div className="overflow-hidden rounded-xl border-2 border-slate-700/80 dark:border-slate-600 shadow-md">
                  <div className="overflow-x-auto">
                    <table className="w-full text-center border-collapse min-w-[700px]">
                      <thead>
                        <tr className="bg-[#fa9632] text-slate-900 font-bold text-sm sm:text-base">
                          <th className="py-4 px-4 border-r-2 border-b-2 border-slate-700/80">Course</th>
                          <th className="py-4 px-4 border-r-2 border-b-2 border-slate-700/80">Type</th>
                          <th className="py-4 px-4 border-r-2 border-b-2 border-slate-700/80">Course Duration</th>
                          <th className="py-4 px-4 border-r-2 border-b-2 border-slate-700/80">Class Duration</th>
                          <th className="py-4 px-4 border-r-2 border-b-2 border-slate-700/80">Mode</th>
                          <th className="py-4 px-4 border-b-2 border-slate-700/80">Fee (INR)</th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-800 dark:text-slate-200 text-sm font-medium">
                        {course.plans.map((p, i) => (
                          <tr key={i} className={`border-b-2 border-slate-700/80 last:border-b-0 ${i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-[#ffeacc] dark:bg-[#32231b]'}`}>
                            <td className="py-4 px-2 sm:px-4 border-r-2 border-slate-700/80">{p.course}</td>
                            <td className="py-4 px-2 sm:px-4 border-r-2 border-slate-700/80">{p.type}</td>
                            <td className="py-4 px-2 sm:px-4 border-r-2 border-slate-700/80">{p.courseDuration}</td>
                            <td className="py-4 px-2 sm:px-4 border-r-2 border-slate-700/80">{p.classDuration}</td>
                            <td className="py-4 px-2 sm:px-4 border-r-2 border-slate-700/80">{p.mode}</td>
                            <td className="py-4 px-2 sm:px-4">{p.fee}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
