import React, { useContext } from 'react';
import Sidebar from './components/Sidebar.jsx';
import MainContent from './components/MainContent.jsx';
import { BackgroundBeams } from '../../components/ui/background-beams.jsx';
import { ThemeContext } from '../../ThemeContext.js';

const WatermelonAi = () => {
  const { theme } = useContext(ThemeContext);
  return (
      <div className="h-[100vh] w-[100vw]">
        <div className="bg-neutral-950 h-full overflow-hidden shadow-2xl flex flex-col sm:flex-row">
          <Sidebar />
          <MainContent />
        </div>
        {theme === "dark" && <BackgroundBeams />}
      </div>
  );
};

export default WatermelonAi;
