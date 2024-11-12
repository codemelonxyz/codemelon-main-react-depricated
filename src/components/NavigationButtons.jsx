import React from 'react';
import { Send, ArrowRight, ArrowLeft } from 'lucide-react';

export function NavigationButtons({ 
  currentStep, 
  totalSteps, 
  onPrevious, 
  onNext, 
  onSubmit 
}) {
  return (
    <div className="flex justify-between items-center py-4 px-8 border-b border-gray-100">
      <button
        type="button"
        onClick={onPrevious}
        className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 ${
          currentStep === 0
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-gray-600' // Reverted to original color
        }`}
        disabled={currentStep === 0}
      >
        <ArrowLeft className="w-4 h-4" />
        Previous
      </button>

      {currentStep === totalSteps - 1 ? (
        <button
          type="button"
          onClick={onSubmit}
          className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all duration-200" // Reverted to original colors
        >
          Submit
          <Send className="w-4 h-4" />
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all duration-200" // Reverted to original colors
        >
          Next
          <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}