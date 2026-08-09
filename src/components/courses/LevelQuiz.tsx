import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, CheckCircle2, ArrowRight, RefreshCw, Sparkles } from 'lucide-react';
import { GlassCard } from '../common/GlassCard';
import { GradientButton } from '../common/GradientButton';
import { CEFRLevel } from '../../types';
import { Link } from 'react-router-dom';

const QUESTIONS = [
  {
    id: 1,
    question: 'What is your current level of experience with the German language?',
    options: [
      { text: 'I am a complete beginner with zero prior knowledge.', value: 'A1' },
      { text: 'I know basic words (numbers, greetings) but struggle with full sentences.', value: 'A2' },
      { text: 'I can form simple past sentences & introduce myself with basic grammar.', value: 'B1' },
      { text: 'I can discuss daily topics fluently and express opinions.', value: 'B2' },
      { text: 'I can read complex news articles & debate abstract workplace ideas.', value: 'C1' }
    ]
  },
  {
    id: 2,
    question: 'What is your main goal for learning German?',
    options: [
      { text: 'Enrolling in a German Public University (Bachelors/Masters).', value: 'courses' },
      { text: 'Applying for Dual Vocational Training (Ausbildung).', value: 'ausbildung' },
      { text: 'Working as a Professional in Germany (Job Placement).', value: 'placements' },
      { text: 'Preparing for official Zertifikat examinations.', value: 'exams' },
      { text: 'I am not sure yet, I just want to understand my options.', value: 'contact' }
    ]
  }
];

export const LevelQuiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  // Track the current step's active selection before moving on
  const [tempSelection, setTempSelection] = useState<string | null>(null);

  const [isComplete, setIsComplete] = useState(false);

  const handleSelect = (val: string) => {
    setTempSelection(val);
  };

  const handleNext = () => {
    if (!tempSelection) return;

    if (currentStep === 0) {
      setSelectedLevel(tempSelection);
      setCurrentStep(1);
      setTempSelection(null);
    } else {
      setSelectedGoal(tempSelection);
      setIsComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setSelectedLevel(null);
    setSelectedGoal(null);
    setTempSelection(null);
    setIsComplete(false);
  };

  const getRecommendation = () => {
    if (!selectedLevel || !selectedGoal) return null;

    const level = selectedLevel;

    switch (selectedGoal) {
      case 'courses':
        return {
          headline: `We recommend starting with CEFR ${level}`,
          subtext: `Based on your responses, our Goethe-certified ${level} curriculum will build the fluency German universities require — alongside guidance on shortlisting, applications, and visa prep.`,
          btnText: `Explore ${level} Courses`,
          btnLink: `/courses/${level.toLowerCase()}`
        };
      case 'ausbildung':
        return {
          headline: `We recommend starting with CEFR ${level}`,
          subtext: `Based on your responses, our ${level} curriculum builds the German you'll need — then we guide you through Ausbildung program matching and employer placement.`,
          btnText: `Explore Ausbildung`,
          btnLink: `/ausbildung`
        };
      case 'placements':
        return {
          headline: `We recommend starting with CEFR ${level}`,
          subtext: `Based on your responses, our ${level} curriculum gets your German workplace-ready — then we help connect your qualifications to real job opportunities in Germany.`,
          btnText: `Explore Placements`,
          btnLink: `/placements`
        };
      case 'exams':
        return {
          headline: `We recommend starting with CEFR ${level}`,
          subtext: `Based on your responses, our Goethe, TELC & ÖSD-certified ${level} training will get you exam-ready with focused mock tests and speaking practice.`,
          btnText: `Explore Exams`,
          btnLink: `/exams`
        };
      case 'contact':
      default:
        return {
          headline: `Let's find your right starting point — CEFR ${level}`,
          subtext: `Based on your responses, we recommend starting at ${level} German. Not sure which direction from there? Our team will help you find whether university, Ausbildung, or career is right for you.`,
          btnText: `Book a Free Consultation`,
          btnLink: `/contact-us`
        };
    }
  };

  const rec = getRecommendation();

  return (
    <GlassCard className="p-8 sm:p-10 border border-amber-500/30 max-w-3xl mx-auto shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold font-heading text-[#200e4f] dark:text-white">
            Find Your Ideal German Course Level
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Take our 30-second interactive CEFR recommendation test.
          </p>
        </div>
      </div>

      {!isComplete ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400">
            <span>Question {currentStep + 1} of {QUESTIONS.length}</span>
            <span>{Math.round(((currentStep + 1) / QUESTIONS.length) * 100)}% Complete</span>
          </div>

          <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300"
              style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
            />
          </div>

          <h4 className="text-lg font-bold text-[#200e4f] dark:text-white font-heading">
            {QUESTIONS[currentStep].question}
          </h4>

          <div className="space-y-3">
            {QUESTIONS[currentStep].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(opt.value)}
                className={`w-full text-left p-4 rounded-2xl border transition-all text-sm font-medium flex items-center justify-between ${tempSelection === opt.value
                    ? 'border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold shadow-md'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-[#200e4f] dark:text-slate-200'
                  }`}
              >
                <span>{opt.text}</span>
                {tempSelection === opt.value && <CheckCircle2 className="w-5 h-5 text-amber-500" />}
              </button>
            ))}
          </div>

          <div className="flex justify-end pt-2">
            <GradientButton
              onClick={handleNext}
              disabled={!tempSelection}
              icon={ArrowRight}
            >
              {currentStep === QUESTIONS.length - 1 ? 'Show Recommendation' : 'Next Question'}
            </GradientButton>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-6 space-y-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/15 text-amber-500 border border-amber-500/30 text-xs font-extrabold uppercase">
            Recommended Starting Point
          </span>
          <h4 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#200e4f] dark:text-white leading-tight">
            {rec?.headline.split('CEFR')[0]} <span className="text-gradient">CEFR {selectedLevel}</span>
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
            {rec?.subtext}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to={rec?.btnLink || "#"}>
              <GradientButton size="lg" icon={ArrowRight}>
                {rec?.btnText}
              </GradientButton>
            </Link>
            <button
              onClick={resetQuiz}
              className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-amber-500 p-3"
            >
              <RefreshCw className="w-4 h-4" /> Retake Test
            </button>
          </div>
        </motion.div>
      )}
    </GlassCard>
  );
};
