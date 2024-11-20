import React from 'react';
import { motion } from 'framer-motion';
// import { ThemeConfig } from './theme';

export function QuestionInput({ question, value, onChange, theme }) {
  const baseInputClass = `w-full p-4 rounded-lg transition-colors ${theme.input.base}`;

  switch (question.type) {
    case 'text':
    case 'textarea': {
      const Component = question.type === 'textarea' ? 'textarea' : 'input';
      return (
        <Component
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={question.placeholder}
          minLength={question.minLength}
          maxLength={question.maxLength}
          className={`${baseInputClass} ${theme.input.text}`}
          rows={question.type === 'textarea' ? 4 : undefined}
        />
      );
    }

    case 'number':
      return (
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          min={question.min}
          max={question.max}
          placeholder={question.placeholder}
          className={`${baseInputClass} ${theme.input.text}`}
        />
      );

    case 'radio':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {question.options.map((option) => (
            <motion.button
              key={option}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onChange(option)}
              className={`${baseInputClass} text-left ${
                value === option ? theme.option.selected : theme.option.default
              }`}
            >
              {option}
            </motion.button>
          ))}
        </div>
      );

    case 'checkbox':
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {question.options.map((option) => (
            <motion.button
              key={option}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const currentValues = (value) || [];
                const newValues = currentValues.includes(option)
                  ? currentValues.filter((v) => v !== option)
                  : [...currentValues, option];
                onChange(newValues);
              }}
              className={`${baseInputClass} text-left ${
                (value)?.includes(option)
                  ? theme.option.selected
                  : theme.option.default
              }`}
            >
              {option}
            </motion.button>
          ))}
        </div>
      );

    case 'select':
      return (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${baseInputClass} ${theme.input.select}`}
        >
          <option value="">Select an option</option>
          {question.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );

      case 'date':
      return (
        <input
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          min={question.min}
          max={question.max}
          placeholder={question.placeholder}
          className={`${baseInputClass} ${theme.input.text}`}
        />
      );

      case 'time':
      return (
        <input
          type="time"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          min={question.min}
          max={question.max}
          placeholder={question.placeholder}
          className={`${baseInputClass} ${theme.input.text}`}
        />
      );

      case 'email':
      return (
        <input
          type="email"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={question.placeholder}
          className={`${baseInputClass} ${theme.input.text}`}
        />
      );

    default:
      return null;
  }
}
