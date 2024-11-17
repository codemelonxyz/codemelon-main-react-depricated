import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { Eye, EyeOff, Moon, Sun, UserCircle2, Mail, Lock, ArrowRight } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom'

function AuthPage() {
    const { theme, setTheme } = useContext(ThemeContext);
    const [isDark, setIsDark] = useState(theme != 'dark' ? false : true);
    const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const paramValue = searchParams.get('q');
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
    
    useEffect(() => {
        if (paramValue === 'login') {
            setIsLogin(true);
        } else if (paramValue === 'register') {
            setIsLogin(false);
        } else {
            navigate('/auth?q=login');
        }
    }, [navigate, paramValue]);

    useEffect(() => {
        setTheme(isDark ? 'dark' : 'light');
    }, [isDark, setTheme])


    useEffect(() => {
        navigate(`/auth?q=${isLogin ? 'login' : 'register'}`);
    }, [isLogin, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className={`min-h-screen w-full transition-colors duration-300 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setIsDark(!isDark)}
          className={`p-2 rounded-full ${
            isDark ? 'bg-gray-800 text-yellow-400' : 'bg-white text-gray-800'
          } shadow-lg hover:scale-110 transition-transform`}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      <div className="container mx-auto px-4 min-h-screen flex items-center justify-center">
        <div className={`w-full max-w-md p-8 rounded-2xl shadow-2xl space-y-8 ${
          isDark ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="text-center">
            <div className="mx-auto w-fit p-3 rounded-full bg-blue-100 dark:bg-blue-900">
              <UserCircle2 size={32} className="text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="mt-6 text-3xl font-bold">
              {isLogin ? 'Welcome back' : 'Create account'}
            </h2>
            <p className={`mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {isLogin ? 'Sign in to your account' : 'Start your journey with us'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {isLogin ? 'Username or Email' : 'Username'}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <UserCircle2 size={20} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                      isDark 
                        ? 'bg-gray-700 border-gray-600 focus:border-blue-500' 
                        : 'bg-gray-50 border-gray-300 focus:border-blue-500'
                    } focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 outline-none transition-colors`}
                    placeholder={isLogin ? 'Enter username or email' : 'Choose username'}
                    value={formData.username}
                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                  />
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={20} className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                        isDark 
                          ? 'bg-gray-700 border-gray-600 focus:border-blue-500' 
                          : 'bg-gray-50 border-gray-300 focus:border-blue-500'
                      } focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 outline-none transition-colors`}
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={20} className="text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className={`w-full pl-10 pr-12 py-2 rounded-lg border ${
                      isDark 
                        ? 'bg-gray-700 border-gray-600 focus:border-blue-500' 
                        : 'bg-gray-50 border-gray-300 focus:border-blue-500'
                    } focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 outline-none transition-colors`}
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff size={20} className="text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye size={20} className="text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium mb-2">Confirm Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock size={20} className="text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className={`w-full pl-10 pr-4 py-2 rounded-lg border ${
                        isDark 
                          ? 'bg-gray-700 border-gray-600 focus:border-blue-500' 
                          : 'bg-gray-50 border-gray-300 focus:border-blue-500'
                      } focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 outline-none transition-colors`}
                      placeholder="Confirm password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    />
                  </div>
                </div>
              )}
            </div>

            {isLogin && (
              <div className="flex items-center justify-end">
                <button type="button" className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400">
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-colors flex items-center justify-center space-x-2 font-medium"
            >
              <span>{isLogin ? 'Sign in' : 'Create account'}</span>
              <ArrowRight size={20} />
            </button>
          </form>

          <div className="text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className={`text-sm hover:underline ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}
            >
              {isLogin
                ? "Don't have an account? Sign up"
                : 'Already have an account? Sign in'}
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className={`w-full border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}></div>
            </div>
            {/* <div className="relative flex justify-center text-sm">
              <span className={`px-2 ${isDark ? 'bg-gray-800' : 'bg-white'} ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Or continue with
              </span>
            </div> */}
          </div>

          {/* <div className="grid grid-cols-3 gap-3">
            {['Google', 'GitHub', 'Twitter'].map((provider) => (
              <button
                key={provider}
                className={`flex items-center justify-center px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                  isDark 
                    ? 'border-gray-700 hover:bg-gray-700' 
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                {provider}
              </button>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;