/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary Background Colors
        primary: {
          'dark-brown': '#2C1810',    // Primary dark background
          'dark-blue': '#223138',     // Primary dark blue background (indigo-dye)
          'light': '#F6F0E8',         // Light background (warm-white)
          'contrast': '#CBB899',      // Light contrast background (sand-beige)
        },
        
        // Text Colors - optimized for readability
        text: {
          'on-dark': '#FFFFFF',           // Pure white text on dark backgrounds for maximum contrast
          'on-light': '#1E130D',          // Dark text on light backgrounds (deep-soil)
          'on-dark-muted': '#CBB899',     // Muted text on dark backgrounds
          'on-light-muted': '#7A4A33',    // Muted text on light backgrounds (terracotta)
          'accent': '#B08A2B',            // Accent text color (gold)
          'on-gold': '#2C1810',           // Dark text on gold/interactive-primary backgrounds
        },
        
        // Interactive Elements
        interactive: {
          'primary': '#B08A2B',       // Primary buttons/links (gold)
          'primary-hover': '#8A6B22', // Darker gold for hover
          'secondary': '#223138',     // Secondary buttons (dark-blue)
          'secondary-hover': '#1A272C', // Darker blue for hover
        },
        
        // Legacy color names (for backward compatibility)
        'warm-white': '#F6F0E8',
        'indigo-dye': '#223138',
        'gold': '#B08A2B',
        'earth-green': '#3F4F2E',
        'sand-beige': '#CBB899',
        'terracotta': '#7A4A33',
        'deep-soil': '#1E130D',
        'dark-brown': '#2C1810',
      },
      fontFamily: {
        'sans': ['Jost', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        'heading': ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
