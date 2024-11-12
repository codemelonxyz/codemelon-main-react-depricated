import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

function Development() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <div
      style={{ width: "100vw", height: "100vh", fontFamily: "'Sour Gummy', sans-serif" }}
      className="bg-white flex justify-center items-center text-black flex-col"
    >
      <img src={theme === "dark" ? "/assets/nobackgroundlogo.png" : "/assets/nobackgroundlogo.png"} alt="Logo" className="w-96" />
      <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">CodeMelon</p>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">We are working the best to make it reality</p>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Check back again for updates</p>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default Development;