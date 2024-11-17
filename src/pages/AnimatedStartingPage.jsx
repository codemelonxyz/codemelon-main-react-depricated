import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';
import { BackgroundBeams } from '../components/ui/background-beams';

function AnimatedStartingPage({ siteName }) {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const letters = siteName.split('');
  const [visibleLetters, setVisibleLetters] = useState([]);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const addLetter = (index) => {
      if (index < letters.length) {
        setVisibleLetters(prev => [...prev, index]);
        setTimeout(() => addLetter(index + 1), 200);
      }
    };
    
    addLetter(0);
  }, [letters.length]);

  useEffect(() => {
    if (animationComplete) {
      const timer = setTimeout(() => {
        navigate('/home');
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [animationComplete, navigate]);

  return (
    <div
      style={{ width: "100vw", height: "100vh", fontFamily: "'Sour Gummy', sans-serif" }}
      className={`flex justify-center items-center text-black flex-col ${
        theme === 'dark' ? 'bg-neutral-950 text-white' : 'bg-white text-black'
      }`}
    >
      <img src="/assets/nobackgroundlogo.png" alt="Logo" className="w-96 animate-rotate" />
      <div className="flex items-center justify-center h-24">
        {letters.map((letter, index) => (
          visibleLetters.includes(index) && (
            <span
              key={index}
              className={`text-6xl font-bold ${
                !animationComplete ? 'animate-fall-letter' : 'animate-join-letters'
              }`}
              style={{
                '--offset': `${(index - letters.length / 2) * 50}px`,
                animationDelay: animationComplete ? `${(letters.length - index) * 0.1}s` : '0s'
              }}
              onAnimationEnd={(e) => {
                if (!animationComplete && index === letters.length - 1) {
                  setAnimationComplete(true);
                }
              }}
            >
              {letter}
            </span>
          )
        ))}
      </div>
      {theme === 'dark' ? <BackgroundBeams /> : null}
    </div>
  );
}

export default AnimatedStartingPage;
