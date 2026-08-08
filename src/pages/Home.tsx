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

      {/* 9. Trainer Cards Preview */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Native German Pedagogy"
            title="Learn from Senior"
            highlightedText="Goethe Certified Trainers"
            subtitle="Our faculty comprises native German speakers and Goethe-certified master instructors with years of academic excellence."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRAINERS.map((trainer) => (
              <GlassCard key={trainer.id} className="text-center p-6 border border-slate-200/80 dark:border-slate-800">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <img
                    src={trainer.avatar}
                    alt={trainer.name}
                    className="w-full h-full object-cover rounded-2xl border-2 border-amber-500/40 shadow-lg"
                  />
                  {trainer.nativeSpeaker && (
                    <span className="absolute -bottom-2 -right-2 px-2 py-0.5 bg-amber-500 text-white font-extrabold text-[10px] rounded-md shadow">
                      NATIVE
                    </span>
                  )}
                </div>

                <h4 className="font-extrabold font-heading text-lg text-slate-900 dark:text-white">
                  {trainer.name}
                </h4>
                <p className="text-xs font-bold text-amber-600 dark:text-amber-400 mb-2">
                  {trainer.title}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">
                  {trainer.bio}
                </p>

                <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                  <span>{trainer.experienceYears} Yrs Exp</span>
                  <span className="text-amber-500">{trainer.studentsTaught}+ Students</span>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/trainers">
              <GradientButton variant="secondary" icon={ArrowRight}>
                View All Instructors & Bios
              </GradientButton>
            </Link>
          </div>
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
                <h4 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2 mb-2 font-heading">
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
          className="max-w-7xl mx-auto rounded-[32px] p-10 sm:p-16 shadow-2xl text-center space-y-6 relative overflow-hidden"
          style={{ background: 'linear-gradient(90deg, rgba(32, 14, 79, 1) 0%, rgba(189, 24, 30, 1) 29%, rgba(232, 180, 75, 1) 52%)' }}
        >
          {/* Subtle noise/texture layout if needed, but linear gradient handles the base */}
          <div className="max-w-3xl mx-auto space-y-5 relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500 text-white font-extrabold text-[11px] uppercase tracking-widest shadow-lg">
              YOUR PATH TO GERMANY, SIMPLIFIED
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white leading-tight">
              Transform Your Future with GLS Today.
            </h2>
            <p className="text-sm sm:text-base text-white/90 font-medium">
              Book a free 1-on-1 session with our Goethe-certified counsellors. No more piecing it together on your own; get clarity on your course level, your pathway, and your next step, all in one conversation.
            </p>
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/book-demo" className="w-full sm:w-auto">
                <GradientButton size="lg" icon={ArrowRight} fullWidth>
                  Book Your Free Consultation
                </GradientButton>
              </Link>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
