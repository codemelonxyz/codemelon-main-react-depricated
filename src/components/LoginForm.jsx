import React, { useState } from "react";
import { UserCircle2, Lock, Eye, EyeOff, ArrowRight, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { FormInput } from "./FormInput";

function LoginForm({ isDark }) {
  const [formData, setFormData] = useState({
    identity: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const [error, setError] = useState(''); // Add error state
  const navigate = useNavigate();
  const { setAuthToken } = useAuth();

  const validateForm = () => {
    if (!formData.identity || !formData.password) {
      setError('Both fields are required');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) return;

    setIsLoading(true);
    const url = `https://api.codemelon.xyz/api/v1/auth/login`;

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
        throw new Error(data.error || 'Login failed');
      }

      setAuthToken({
        token: data.token,
        type: data.token_type,
        expiresIn: data.token_expires_in,
      });

      navigate('/home');
    } catch (error) {
      setError(error.message || 'Failed to login. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 relative">
      {error && (
        <div
          className={`p-4 rounded-lg flex items-start space-x-2 ${
            isDark ? 'bg-red-900/50 text-red-200' : 'bg-red-50 text-red-800'
          }`}
        >
          <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
          <span className="text-sm">{error}</span>
        </div>
      )}

      <div className="space-y-4">
        <FormInput
          label="Username or Email"
          type="text"
          icon={<UserCircle2 size={20} />}
          value={formData.identity}
          onChange={(e) =>
            setFormData({ ...formData, identity: e.target.value })
          }
          disabled={isLoading}
          isDark={isDark}
        />

        <FormInput
          label="Password"
          type={showPassword ? 'text' : 'password'}
          icon={<Lock size={20} />}
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
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
                <EyeOff className="text-gray-400 hover:text-gray-600" />
              ) : (
                <Eye className="text-gray-400 hover:text-gray-600" />
              )}
            </button>
          }
        />
      </div>

      <div className="flex items-center justify-end">
        <button
          type="button"
          className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400"
        >
          Forgot password?
        </button>
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
        <span>{isLoading ? 'Signing in...' : 'Sign in'}</span>
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

export default LoginForm;
