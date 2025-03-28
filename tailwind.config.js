/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#FFD700', // Yellow from logo
          dark: '#E6C200',
        },
        'secondary': {
          DEFAULT: '#008000', // Green from logo
          dark: '#006400',
        },
        'accent': {
          DEFAULT: '#FF0000', // Red from logo
          dark: '#CC0000',
        }
      },
      keyframes: {
        'logo-pulse-1': {
          '0%': { transform: 'scale(0.95)', opacity: '0.9' },
          '100%': { transform: 'scale(1.5)', opacity: '0' }
        },
        'logo-pulse-2': {
          '0%': { transform: 'scale(0.95)', opacity: '0.9' },
          '33%': { transform: 'scale(1.5)', opacity: '0' }
        },
        'logo-pulse-3': {
          '0%': { transform: 'scale(0.95)', opacity: '0.9' },
          '66%': { transform: 'scale(1.5)', opacity: '0' }
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        'logo-pulse-1': 'logo-pulse-1 1s ease-out forwards',
        'logo-pulse-2': 'logo-pulse-2 1s ease-out forwards',
        'logo-pulse-3': 'logo-pulse-3 1s ease-out forwards',
        'spin-slow': 'spin-slow 20s linear infinite'
      }
    },
  },
  plugins: [],
};