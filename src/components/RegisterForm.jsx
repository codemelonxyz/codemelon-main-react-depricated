import React, { useState } from 'react';
import { UserCircle2, Eye, EyeOff, ArrowRight, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FormInput } from './FormInput';

export default function RegisterForm({ isDark }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setAuthToken } = useAuth();

  const validateForm = () => {
    if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('All fields are required');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) return;

    setIsLoading(true);
    const url = `https://api.codemelon.xyz/api/v1/auth/signup`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'SERVER_KEY': process.env.REACT_APP_MAIN_SERVER_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      navigate('/auth');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to register. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 relative">
      {error && (
        <div className={`p-4 rounded-lg flex items-start space-x-2 ${
          isDark ? 'bg-red-900/50 text-red-200' : 'bg-red-50 text-red-800'
        }`}>
          <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
          <span className="text-sm">{error}</span>
        </div>
      )}

      <div className="space-y-4">
        <FormInput
          label="Username"
          type="text"
          icon={<UserCircle2 size={20} />}
          value={formData.username}
          onChange={(e) => setFormData({...formData, username: e.target.value})}
          disabled={isLoading}
          isDark={isDark}
        />

        <FormInput
          label="Email"
          type="email"
          icon={<UserCircle2 size={20} />}
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          disabled={isLoading}
          isDark={isDark}
        />

        <FormInput
          label="Password"
          type={showPassword ? 'text' : 'password'}
          icon={<UserCircle2 size={20} />}
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          disabled={isLoading}
          isDark={isDark}
          endAdornment={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              disabled={isLoading}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <EyeOff size={20} className="text-gray-400 hover:text-gray-600" />
              ) : (
                <Eye size={20} className="text-gray-400 hover:text-gray-600" />
              )}
            </button>
          }
        />

        <FormInput
          label="Confirm Password"
          type={showPassword ? 'text' : 'password'}
          icon={<UserCircle2 size={20} />}
          value={formData.confirmPassword}
          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
          disabled={isLoading}
          isDark={isDark}
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-2 px-4 rounded-lg flex items-center justify-center space-x-2 font-medium transition-colors ${
          isLoading
            ? 'bg-blue-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50'
        } text-white`}
      >
        <span>{isLoading ? 'Creating account...' : 'Create account'}</span>
        {!isLoading && <ArrowRight size={20} />}
        {isLoading && (
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
      </button>
    </form>
  );
}
