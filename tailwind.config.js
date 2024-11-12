/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#FFC0CB', // Pink
        },
        dark: {
          primary: '#0000FF', // Blue
        },
      },
      keyframes: {
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
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'modal-slide-up': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-10%)', opacity: '0' },
        },
      },
      animation: {
        'drop-down': 'drop-down 1s ease-out forwards',
        'slide-in-left': 'slide-in-left 1s ease-out forwards',
        'slide-in-right': 'slide-in-right 1s ease-out forwards',
        'modal-slide-down': 'modal-slide-down 0.7s ease-out forwards',
        'modal-slide-up': 'modal-slide-up 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
}