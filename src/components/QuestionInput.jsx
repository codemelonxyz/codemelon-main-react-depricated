import React, { useRef, useEffect, forwardRef } from 'react';

export const QuestionInput = forwardRef(({ 
  theme,
  question, 
  type, 
  placeholder, 
  value, 
  onChange,
  required,
  error // Added error prop
}, ref) => {
  const textareaRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (type === 'textarea' && textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value, type]);

  return (
    <div ref={ref} className={`flex-1 flex flex-col justify-center px-8 w-[95%] md:w-[70%] mx-auto mt-[-150px] ${theme === "dark" ? "text-white" : "text-black"}`}>
      <div className="flex justify-between items-center">
        <h2 className={`text-xl font-semibold ${theme === "dark" ? "text-slate-300" :  "text-gray-900"}`}>
          {question}
        </h2>
        <span className={`text-sm ${required ? 'text-required-text' : 'text-optional-text'}`}>
          {required ? 'Required' : 'Optional'}
        </span>
      </div>
      
      {type === 'textarea' ? (
        <textarea
          ref={textareaRef}
          className={`w-full p-4 text-lg bg-transparent border-b-2 ${error ? 'border-red-500' : 'border-gray-300'} focus:border-blue-600 focus:outline-none transition-all duration-200 min-h-[120px]`}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ overflow: 'hidden' }} // Prevent scrollbar
        />
      ) : (
        <input
          ref={inputRef}
          type={type}
          className={`w-full p-4 text-lg bg-transparent border-b-2 ${error ? 'border-red-500' : 'border-gray-300'} focus:border-blue-600 focus:outline-none transition-all duration-200`}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      {/* Display error message */}
      {error && (
        <span className="text-red-500 text-sm mt-1">{error}</span>
      )}
    </div>
  );
});