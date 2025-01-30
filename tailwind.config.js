/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
      },
      fontFamily: {
        sans: ['Nofex', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glitch': 'glitch 0.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};