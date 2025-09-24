/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'warm-white': '#FEFCF8',
        'indigo-dye': '#1F3B4D',
        'gold': '#C9A227',
        'earth-green': '#556B2F',
        'sand-beige': '#E0D2B4',
        'terracotta': '#A66D4F',
        'deep-soil': '#3D2B1F',
      },
      fontFamily: {
        'sans': ['Work Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
