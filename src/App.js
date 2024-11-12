import './index.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Development from './pages/Development';
import Home from './pages/Homepage';
import { ThemeProvider } from './ThemeContext';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import ContactUs from './pages/ContactUs';
import AnimatedStartingPage from './pages/AnimatedStartingPage';


const SITE_NAME = "CodeMelon";

function App() {
  // Initialize theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  // Update theme and persist to localStorage
  const handleSetTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AnimatedStartingPage siteName={SITE_NAME} />} />
          <Route path="/home" element={<Home siteName={SITE_NAME} theme={theme} setTheme={handleSetTheme} />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Development theme={theme} setTheme={handleSetTheme} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
