// Navbar.jsx
import React, { useState, useEffect, useRef, useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const modalRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  const navClass =
    theme === 'dark' ? 'bg-neutral-950 text-white' : 'bg-white text-black';
  const modalClass =
    theme === 'dark' ? 'bg-neutral-950 text-white' : 'bg-white text-black';

  const handleMenuToggle = () => {
    if (isOpen) {
      setClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setClosing(false);
      }, 700); // Duration matches the closing animation
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        if (isOpen) {
          handleMenuToggle();
        }
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav
      style={{ fontFamily: "'Sour Gummy', sans-serif" }}
      className={`flex items-center h-24 px-4 ${navClass} relative`}
    >
      {/* Mobile menu button */}
      <div className="flex md:hidden">
        <button onClick={handleMenuToggle} className="focus:outline-none" ref={buttonRef}>
          <FaBars size={24} />
        </button>
      </div>

      {/* Brand name */}
      <div className="flex-1 text-center md:text-left">
        <h1
          className={`text-3xl font-bold md:animate-slide-in-left animate-drop-down cursor-pointer`}
          onClick={() => navigate('/')}
        >
          Codemelon
        </h1>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-4 items-center">
        <button className="animate-slide-in-right" style={{ animationDelay: '0.1s' }}>
          Home
        </button>
        <button className="animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
          About Us
        </button>
        <button className="animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
          Something
        </button>
        {/* Privacy policy and cookie policy button */}
        {/*  */}
        {/* <button className="animate-slide-in-right" style={{ animationDelay: '0.4s' }} onClick={() => navigate('/privacy')}>
          Privacy Policy
        </button>
        <button className="animate-slide-in-right" style={{ animationDelay: '0.5s' }} onClick={() => navigate('/cookies')}>
          Cookie Policy
        </button> */}
        {/* Login Button */}
        
        <button
          className={`animate-slide-in-right px-4 py-2 rounded ${
            theme === 'dark'
              ? 'bg-gray-700 hover:bg-gray-600'
              : 'bg-slate-300 hover:bg-gray-600 hover:text-white' // Reverted to original colors
          }`}
          style={{ animationDelay: '0.5s' }}
          onClick={() => navigate('/login')}
        >
          Log In
        </button>
        {/* Signup Button */}
        <button
          className={`animate-slide-in-right px-4 py-2 rounded ${
            theme === 'dark'
              ? 'bg-blue-600 hover:bg-blue-500 text-white'
              : 'bg-blue-600 hover:bg-blue-500 text-white' // Reverted to original colors
          }`}
          style={{ animationDelay: '0.6s' }}
          onClick={() => navigate('/auth/signup')}
        >
          Sign Up
        </button>

        {/*  */}
        {/* Button of dark and light in the navbar */}
        {/*  */}

        {/* <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="ml-4"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button> */}

      </div>

      {/* Mobile menu */}
      {(isOpen || closing) && (
        <div
          ref={modalRef}
          className={`absolute top-[-220px] left-0 w-full shadow-md md:hidden ${modalClass} ${
            closing ? 'animate-modal-slide-up' : 'animate-modal-slide-down'
          }`}
          style={{ zIndex: '50' }} // Ensure modal is above other elements
        >
          <button
            className="block w-full text-left px-4 py-2 hover:bg-opacity-75"
            onClick={() => navigate('/')}
          >
            Home
          </button>
          <button
            className="block w-full text-left px-4 py-2 hover:bg-opacity-75"
            onClick={() => navigate('/about')}
          >
            About Us
          </button>
          <button
            className="block w-full text-left px-4 py-2 hover:bg-opacity-75"
            onClick={() => navigate('/something')}
          >
            Something
          </button>
          {/* Login Button */}
          <button
            className={`animate-slide-in-right ml-4 px-4 py-2 rounded ${
              theme === 'dark'
                ? 'bg-gray-700 hover:bg-gray-600'
                : 'bg-slate-300 hover:bg-gray-600 hover:text-white' // Reverted to original colors
            }`}
            style={{ animationDelay: '0.5s' }}
            onClick={() => navigate('/login')}
          >
            Log In
          </button>
          {/* Signup Button */}
          <button
            className={`animate-slide-in-right ml-2 px-4 py-2 rounded ${
              theme === 'dark'
                ? 'bg-blue-600 hover:bg-blue-500 text-white'
                : 'bg-blue-600 hover:bg-blue-500 text-white' // Reverted to original colors
            }`}
            style={{ animationDelay: '0.6s' }}
            onClick={() => navigate('/auth/signup')}
          >
            Sign Up
          </button>
          {/* Theme Toggle Button */}
          <button
            className="block w-full text-left px-4 py-2 mt-2 items-center rounded focus:outline-none"
            onClick={() => {
              setTheme(theme === 'light' ? 'dark' : 'light');
            }}
          >
            {theme === 'light' ? (
              <>
                🌙 Dark Mode
              </>
            ) : (
              <>
                ☀️ Light Mode
              </>
            )}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
