/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  safelist: [
    'animate-slide-up',
    'animate-slide-down',
    'animate-modal-slide-up',
    'animate-modal-slide-down',
    'animate-slide-in-left',
    'animate-slide-in-right',
    'animate-drop-down',
    'animate-slide-out-up',
    'animate-slide-out-down',
    'animate-slide-in-up',
    'animate-slide-in-down',
    'animate-slide-out-down',
    'animate-slide-out-up',
    'animate-rotate',
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#AC8968',
        },
        dark: {
          primary: '#0000FF',
        },
        'required-text': '#FF0000',
        'optional-text': '#6B7280',
      },
      keyframes: {
        'fall-letter': {
          '0%': { transform: 'translateY(-100vh)', opacity: '0' },
          '60%': { transform: 'translateY(20px)', opacity: '0.6' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'join-letters': {
          '0%': { transform: 'translateX(var(--offset))', opacity: '1' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        'drop-down': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-50%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(50%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'modal-slide-down': {
          '0%': { transform: 'translateY(-10%)', opacity: '0' },
          '100%': { transform: 'translateY(150%)', opacity: '1' }, // Increased distance
        },
        'modal-slide-up': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-150%)', opacity: '0' }, // Increased distance
        },
        'slide-up': {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(-350%)', opacity: 0 }, // Increased distance
        },
        'slide-down': {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(350%)', opacity: 0 }, // Increased distance
        },
        'slide-in-up': {
          '0%': { transform: 'translateY(350%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }, // Adjusted start position
        },
        'slide-out-up': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-350%)', opacity: '0' }, // Increased distance
        },
        'slide-in-down': {
          '0%': { transform: 'translateY(-350%)', opacity: '0' }, // Increased distance
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-out-down': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(350%)', opacity: '0' }, // Increased distance
        },
        'rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'drop-down': 'drop-down 1s ease-out forwards',
        'slide-in-left': 'slide-in-left 1s ease-out forwards',
        'slide-in-right': 'slide-in-right 1s ease-out forwards',
        'modal-slide-down': 'modal-slide-down 0.7s ease-out forwards',
        'modal-slide-up': 'modal-slide-up 0.7s ease-out forwards',
        'slide-up': 'slide-up 0.5s ease-out forwards',
        'slide-down': 'slide-down 0.5s ease-out forwards',
        'slide-in-up': 'slide-in-up 0.5s ease-out forwards',
        'slide-out-up': 'slide-out-up 0.5s ease-out forwards',
        'slide-in-down': 'slide-in-down 0.5s ease-out forwards',
        'slide-out-down': 'slide-out-down 0.5s ease-out forwards',
        'rotate': 'rotate 10s linear infinite',
        'fall-letter': 'fall-letter 1s forwards',
        'join-letters': 'join-letters 0.5s forwards'
      },
    },
  },
  plugins: [],
}