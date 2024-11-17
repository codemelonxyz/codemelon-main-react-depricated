import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { Eye, EyeOff, Moon, Sun, UserCircle2, Mail, Lock, ArrowRight } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom'
import { BackgroundBeams } from '../components/ui/background-beams';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

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
      isDark ? 'bg-neutral-950 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      {theme === "dark" ? <BackgroundBeams /> : null }
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

          {isLogin ? (
            <LoginForm isDark={isDark} />
          ) : (
            <RegisterForm isDark={isDark} />
          )}

          <div className="text-center relative">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className={`text-sm ${
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
