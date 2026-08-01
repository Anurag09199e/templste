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
      { text: 'I am a complete beginner with zero prior knowledge.', result: 'A1' },
      { text: 'I know basic words (numbers, greetings) but struggle with full sentences.', result: 'A1' },
      { text: 'I can form simple past sentences & introduce myself with basic grammar.', result: 'A2' },
      { text: 'I can discuss daily topics fluently and express opinions.', result: 'B1' },
      { text: 'I can read complex news articles & debate abstract workplace ideas.', result: 'B2' }
    ]
  },
  {
    id: 2,
    question: 'What is your main goal for learning German?',
    options: [
      { text: 'Relocating to Germany for a Spouse Visa or Family Reunification.', result: 'A1' },
      { text: 'Applying for Dual Vocational Training (Ausbildung in Nursing/IT).', result: 'B2' },
      { text: 'Enrolling in a Tuition-Free German Public University (Bachelors/Masters).', result: 'B2' },
      { text: 'Working as a Doctor, Nurse, Engineer, or IT Professional in Germany.', result: 'B2' },
      { text: 'High-level academic research, litigation, or diplomacy.', result: 'C1' }
    ]
  }
];

export const LevelQuiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [recommendedLevel, setRecommendedLevel] = useState<CEFRLevel | null>(null);

  const handleSelect = (resultLevel: CEFRLevel) => {
    setSelectedOption(resultLevel);
  };

  const handleNext = () => {
    if (!selectedOption) return;

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
    } else {
      setRecommendedLevel(selectedOption as CEFRLevel);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setSelectedOption(null);
    setRecommendedLevel(null);
  };

  return (
    <GlassCard className="p-8 sm:p-10 border border-amber-500/30 max-w-3xl mx-auto shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
            Find Your Ideal German Course Level
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Take our 30-second interactive CEFR recommendation test.
          </p>
        </div>
      </div>

      {!recommendedLevel ? (
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

          <h4 className="text-lg font-bold text-slate-900 dark:text-white font-heading">
            {QUESTIONS[currentStep].question}
          </h4>

          <div className="space-y-3">
            {QUESTIONS[currentStep].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(opt.result as CEFRLevel)}
                className={`w-full text-left p-4 rounded-2xl border transition-all text-sm font-medium flex items-center justify-between ${
                  selectedOption === opt.result
                    ? 'border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold shadow-md'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-800 dark:text-slate-200'
                }`}
              >
                <span>{opt.text}</span>
                {selectedOption === opt.result && <CheckCircle2 className="w-5 h-5 text-amber-500" />}
              </button>
            ))}
          </div>

          <div className="flex justify-end pt-2">
            <GradientButton
              onClick={handleNext}
              disabled={!selectedOption}
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
          <h4 className="text-4xl font-extrabold font-heading text-slate-900 dark:text-white">
            We recommend starting with <span className="text-gradient">CEFR {recommendedLevel}</span>
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
            Based on your responses, our Goethe certified curriculum for level {recommendedLevel} will give you the exact training required for your visa and academic aspirations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to={`/courses/${recommendedLevel.toLowerCase()}`}>
              <GradientButton size="lg" icon={ArrowRight}>
                Explore CEFR {recommendedLevel} Course
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
