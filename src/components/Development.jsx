
import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { BackgroundBeams } from '../components/ui/background-beams';

function Development() {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div
      style={{ width: "100vw", height: "100vh", fontFamily: "'Sour Gummy', sans-serif" }}
      className={`flex justify-center items-center text-black flex-col ${theme === 'dark' ? 'bg-neutral-950 text-white' : 'bg-white text-black'}`}
    >
      {/* ...existing code... */}
    </div>
  );
}

export default Development;