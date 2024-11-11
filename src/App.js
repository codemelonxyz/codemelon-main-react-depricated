import './index.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Development from './pages/Development';
import Home from './pages/Homepage';
import { ThemeProvider } from './ThemeContext';

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
          <Route path="/" element={<Home theme={ theme } setTheme={ handleSetTheme } />} />
          <Route path="*" element={<Development theme={theme} setTheme={handleSetTheme} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
