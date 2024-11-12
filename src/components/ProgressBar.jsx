import React from 'react';

export function ProgressBar({ currentStep, totalSteps }) {
  return (
    <div className="w-full h-1 bg-gray-200 rounded-t-xl overflow-hidden">
      <div 
        className="h-full bg-blue-600 transition-all duration-300"
        style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
      />
    </div>
  );
}