import React from 'react';
import { Hero } from '../components/home/Hero';
import { StatCounter } from '../components/home/StatCounter';
import { WhyUs } from '../components/home/WhyUs';
import { Roadmap } from '../components/home/Roadmap';
import { CefrCards } from '../components/home/CefrCards';
import { UpcomingBatches } from '../components/home/UpcomingBatches';
import { SectionTitle } from '../components/common/SectionTitle';
import { GlassCard } from '../components/common/GlassCard';
import { GradientButton } from '../components/common/GradientButton';
import { LevelQuiz } from '../components/courses/LevelQuiz';
import { TESTIMONIALS, TRAINERS, GALLERY_ITEMS, BLOG_POSTS, FAQS } from '../data/mockData';
import { Star, Quote, ArrowRight, CheckCircle2, ShieldCheck, Play, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LevelBadge } from '../components/common/LevelBadge';

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

      {/* 7. Upcoming Batches */}
      <UpcomingBatches />

      {/* 8. Student Testimonials Section */}
      <section className="py-20 relative bg-slate-900/30 dark:bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Student Success Stories"
            title="Real Goethe Results from"
            highlightedText="Our Graduates"
            subtitle="Read how our alumni passed their Goethe / Telc exams with high scores and secured admissions & job visas across Germany."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((test) => (
              <GlassCard key={test.id} className="p-8 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={test.avatar}
                        alt={test.name}
                        className="w-14 h-14 rounded-2xl object-cover border-2 border-amber-500/50 shadow-md"
                      />
                      <div>
                        <h4 className="font-extrabold font-heading text-base text-slate-900 dark:text-white">
                          {test.name}
                        </h4>
                        <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold">
                          {test.role} • {test.city}
                        </p>
                      </div>
                    </div>
                    <LevelBadge level={test.courseCompleted} size="md" />
                  </div>

                  <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-extrabold text-xs rounded-xl border border-emerald-500/20">
                    <ShieldCheck className="w-4 h-4" /> {test.goetheScore}
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed mb-6">
                    "{test.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>Destination: {test.destination}</span>
                  <div className="flex text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/testimonials">
              <GradientButton variant="outline" icon={ArrowRight}>
                Read All 150+ Student Testimonials
              </GradientButton>
            </Link>
          </div>
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

      {/* 10. Gallery Preview */}
      <section className="py-20 relative bg-slate-900/20 dark:bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Campus Life & Events"
            title="Moments at DeutschKraft"
            highlightedText="Institute & Germany"
            subtitle="Explore our vibrant campus culture, Goethe exam pass celebrations, and student orientation trips in Munich."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.slice(0, 3).map((item) => (
              <div key={item.id} className="relative rounded-3xl overflow-hidden group h-64 shadow-xl border border-slate-700/40">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 bg-amber-500/80 text-white rounded-md w-fit mb-2">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-1 mt-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link to="/gallery">
              <GradientButton variant="outline" icon={ArrowRight}>
                View Full Photo & Video Gallery
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
            {FAQS.slice(0, 4).map((faq) => (
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

          <div className="mt-8 text-center">
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
        <div className="max-w-7xl mx-auto glass-card rounded-4xl p-10 sm:p-16 border-2 border-amber-500/40 shadow-2xl bg-gradient-to-r from-amber-500/20 via-orange-600/20 to-red-600/20 text-center space-y-6 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500 text-white font-extrabold text-xs uppercase tracking-widest">
              Ready to Start Learning German?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-900 dark:text-white">
              Transform Your Career with <span className="text-gradient">DeutschKraft</span> Today.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Book a 1-on-1 free trial session with our Goethe certified counselors. Learn about level placement, batch timings, and German university visa applications.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/book-demo" className="w-full sm:w-auto">
                <GradientButton size="lg" icon={ArrowRight} fullWidth>
                  Book Free Demo Session
                </GradientButton>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <GradientButton variant="outline" size="lg" fullWidth>
                  Contact Admissions Office
                </GradientButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
