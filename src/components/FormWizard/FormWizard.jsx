import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Activity } from 'lucide-react';
import { QuestionInput } from './From/QuestionInput';
import { themes } from './From/theme';

export function FormWizard({
  questions,
  logo = <Activity />,
  title = 'Form Wizard',
  subtitle = 'Please answer the following questions.',
  onSubmit,
  theme = 'light'
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (value) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentStep].name]: value
    }));
  };

  const progress = ((currentStep + 1) / questions.length) * 100;
  const activeTheme = themes[theme];

  const handleSubmit = () => {
    onSubmit(answers);
  };

  return (
    <div className={`min-h-screen ${activeTheme.background} flex items-center justify-center p-4`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`${activeTheme.card} rounded-2xl shadow-xl max-w-2xl w-full p-8`}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-8 h-8 ${activeTheme.accent}`}>
            {logo}
          </div>
          <h1 className={`text-2xl font-bold ${activeTheme.text}`}>{title}</h1>
        </div>

        <p className={`${activeTheme.subtext} mb-8`}>
          {subtitle}
        </p>

        <div className="relative mb-8">
          <div className={`h-2 ${activeTheme.progress.bg} rounded-full`}>
            <motion.div
              className={`h-full ${activeTheme.progress.fill} rounded-full`}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <span className={`absolute right-0 top-4 text-sm ${activeTheme.subtext}`}>
            {currentStep + 1} of {questions.length}
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className={`text-xl font-semibold ${activeTheme.text} mb-6`}>
              {questions[currentStep].text}
            </h2>

            <div className="mb-8">
              <QuestionInput
                question={questions[currentStep]}
                value={answers[questions[currentStep].name] || ''}
                onChange={handleAnswer}
                theme={activeTheme}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between">
          <button
            onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-colors ${
              currentStep === 0
                ? activeTheme.button.disabled
                : activeTheme.button.secondary
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          {currentStep === questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg ${activeTheme.button.primary}`}
            >
              Submit
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => setCurrentStep(prev => prev + 1)}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg ${activeTheme.button.primary}`}
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
