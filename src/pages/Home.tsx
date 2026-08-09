import React from 'react';
import { Hero } from '../components/home/Hero';
import { StatCounter } from '../components/home/StatCounter';
import { WhyUs } from '../components/home/WhyUs';
import { Roadmap } from '../components/home/Roadmap';
import { CefrCards } from '../components/home/CefrCards';
import { SectionTitle } from '../components/common/SectionTitle';
import { GlassCard } from '../components/common/GlassCard';
import { GradientButton } from '../components/common/GradientButton';
import { LevelQuiz } from '../components/courses/LevelQuiz';
import { TESTIMONIALS, TRAINERS, GALLERY_ITEMS, BLOG_POSTS, FAQS } from '../data/mockData';
import { Star, Quote, ArrowRight, CheckCircle2, ShieldCheck, Play, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LevelBadge } from '../components/common/LevelBadge';
import { TestimonialMarquee } from '../components/home/TestimonialMarquee';
import student1 from '../img/student-1.png';
import student2 from '../img/student-2.png';
import student3 from '../img/student-3.png';
import student4 from '../img/student-4.png';
import student5 from '../img/student-5.png';
import homePageImg from '../img/home page.png';
import img3 from '../img/img-3.png';

export const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* 1. Fullscreen Hero Banner */}
      <Hero />

      {/* 2. Stat Counter Bar */}
      <StatCounter />

      {/* 3. Popular Courses Preview */}
      <CefrCards />

      {/* 4. Why Choose Us */}
      <WhyUs />

      {/* 5. Level Recommendation Quiz */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <LevelQuiz />
        </div>
      </section>

      {/* 6. Learning Roadmap */}
      <Roadmap />

      {/* 8. Student Testimonials Section */}
      <section className="py-20 relative bg-[#f9f7f1] dark:bg-[#0B0F19] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <SectionTitle
            badge="Student Success Stories"
            title="Real Goethe Results from"
            highlightedText="Our Graduates"
            subtitle="Read how our alumni passed their Goethe / Telc exams with high scores and secured admissions & job visas across Germany."
          />
        </div>

        {/* New Scrolling Marquee Section */}
        <TestimonialMarquee />

        <div className="mt-8 text-center relative z-20">
          <Link to="/testimonials">
            <GradientButton variant="outline" icon={ArrowRight}>
              Read All 150+ Student Testimonials
            </GradientButton>
          </Link>
        </div>
      </section>



      {/* 11. FAQ Accordion Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Frequently Asked Questions"
            title="Got Questions? We Have"
            highlightedText="Clear Answers"
            subtitle="Find quick information regarding Goethe exam recognition, tuition-free universities, and course schedules."
          />

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <GlassCard key={faq.id} className="p-6 border border-slate-200/80 dark:border-slate-800">
                <h4 className="font-bold text-base text-[#200e4f] dark:text-white flex items-center gap-2 mb-2 font-heading">
                  <HelpCircle className="w-5 h-5 text-amber-500 shrink-0" />
                  {faq.question}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </GlassCard>
            ))}
          </div>

          <div className="mt-8 text-center ">
            <Link to="/faq">
              <GradientButton variant="secondary" icon={ArrowRight}>
                View All FAQs & Search Answers
              </GradientButton>
            </Link>
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
  );
};
