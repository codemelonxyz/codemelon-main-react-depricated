import React from 'react';

export function ProgressIndicator({ currentStep, totalSteps }) {
  return (
    <div className="flex justify-between items-center text-sm text-gray-500 px-8 py-4 border-t border-gray-100">
      <span>Question {currentStep + 1} of {totalSteps}</span>
      <span>{Math.round(((currentStep + 1) / totalSteps) * 100)}% completed</span>
    </div>
  );
}