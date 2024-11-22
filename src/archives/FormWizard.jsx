import React, { useState, useRef, useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { NavigationButtons } from './NavigationButtons';
import { QuestionInput } from './QuestionInput';
import { ProgressIndicator } from './ProgressIndicator';
import { ProgressBar } from './ProgressBar';
import { Send } from 'lucide-react';

export function FormWizard({ questions, onSubmit, navFooter }) {
  const { theme } = useContext(ThemeContext); // Access theme
  const [currentStep, setCurrentStep] = useState(0);
  const [previousStep, setPreviousStep] = useState(null); // New state variable
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [direction, setDirection] = useState('');
  const [errors, setErrors] = useState({}); // Added errors state
  const [touched, setTouched] = useState(false); // Added touched state
  const questionRef = useRef(null); // Reference to the current question input

  const handleNext = () => {
    const currentQuestion = questions[currentStep];
    if (currentQuestion.required && !answers[currentQuestion.id]) {
      // Set error for the current step
      setErrors(prev => ({ ...prev, [currentStep]: 'This field is required.' }));
      
      // Scroll to the current question only if user has attempted to navigate
      if (touched && questionRef.current) {
        questionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    
    // Clear error for the current step
    setErrors(prev => ({ ...prev, [currentStep]: null }));
    
    if (currentStep < questions.length - 1) {
      setDirection('slide-up');
      setPreviousStep(currentStep); // Set previous step
      setCurrentStep(prev => prev + 1);
    }
    setTouched(true); // Mark as touched when user attempts to navigate
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setDirection('slide-down');
      setPreviousStep(currentStep); // Set previous step
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let hasError = false;
    let newErrors = {};

    questions.forEach((question, index) => {
      if (question.required && !answers[question.id]) {
        newErrors[index] = 'This field is required.';
        hasError = true;
      }
    });

    if (hasError) {
      setErrors(newErrors);
      setTouched(true);
      // Scroll to the first error
      if (questionRef.current) {
        questionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    setSubmitted(true);
    onSubmit(answers);
  };

  const handleInputChange = (value) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentStep].id]: value,
    }));
    // Clear the error for the current step if any
    if (errors[currentStep]) {
      setErrors(prev => ({ ...prev, [currentStep]: null }));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent default Enter key behavior
      handleNext();
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col min-h-screen">
        {/* Optional Navbar */}
        <main className="flex-grow flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
            <p className="text-gray-600">
              We've received your response and will get back to you soon.
            </p>
          </div>
        </main>
        {/* Optional Footer */}
      </div>
    );
  }

  return (
    <div
      className={`min-w-full shadow-sm relative flex flex-col ${!navFooter ? 'h-[calc(100vh)]' : 'h-[calc(90vh)]'} ${
        theme === 'dark' ? 'bg-neutral-950 text-white' : 'bg-white text-black'
      }`} // Updated classes based on theme
      onKeyDown={handleKeyDown} // Added onKeyDown handler
    >
      <NavigationButtons
        currentStep={currentStep}
        totalSteps={questions.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onSubmit={handleFormSubmit}
      />
      
      <div className="relative flex-1 flex flex-col justify-center px-8 w-[95%] md:w-[70%] mx-auto">
        {/* Outgoing Question */}
        {previousStep !== null && (
          <div
            className={`absolute w-full ${
              direction === 'slide-up' ? 'animate-slide-out-up' : 'animate-slide-out-down'
            }`}
            onAnimationEnd={() => setPreviousStep(null)} 
          >
            <QuestionInput
              theme={theme} // Pass theme to QuestionInput
              question={questions[previousStep].question}
              type={questions[previousStep].type}
              placeholder={questions[previousStep].placeholder}
              value={answers[questions[previousStep].id] || ''}
              onChange={handleInputChange}
              navFooter={navFooter} 
            />
          </div>
        )}
        
        {/* Incoming Question */}
        <div
          className={`transition-opacity duration-500 ${navFooter ? "" : "mt-[200px]"} ${
            direction === 'slide-up'
              ? 'animate-slide-in-up'
              : direction === 'slide-down'
              ? 'animate-slide-in-down'
              : ''
          } ${
            theme === 'dark' ? 'bg-neutral-850 text-white' : 'bg-gray-100 text-black'
          }`} 
        >
          <QuestionInput
            theme={theme} 
            ref={questionRef}
            question={questions[currentStep].question}
            type={questions[currentStep].type}
            placeholder={questions[currentStep].placeholder}
            value={answers[questions[currentStep].id] || ''}
            onChange={handleInputChange}
            required={questions[currentStep].required}
            error={errors[currentStep]}
          />
        </div>
      </div>
      
      {/* Add ProgressBar here */}
      <ProgressBar
        currentStep={currentStep}
        totalSteps={questions.length}
      />
      
      <ProgressIndicator
        currentStep={currentStep}
        totalSteps={questions.length}
      />
    </div>
  );
}
