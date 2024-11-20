import React from 'react';

export function FormInput({
  label,
  type,
  icon,
  value,
  onChange,
  disabled,
  isDark,
  endAdornment
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
          {icon}
        </div>
        <input
          type={type}
          className={`w-full pl-10 ${endAdornment ? 'pr-12' : 'pr-4'} py-2 rounded-lg border ${
            isDark 
              ? 'bg-gray-700 border-gray-600 focus:border-blue-500' 
              : 'bg-gray-50 border-gray-300 focus:border-blue-500'
          } focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 outline-none transition-colors`}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        {endAdornment}
      </div>
    </div>
  );
}