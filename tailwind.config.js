/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // softened neutral background with a warm, parchment tone
        'warm-white': '#F6F0E8',
        // desaturated charcoal-blue to feel grounded and serious
        'indigo-dye': '#223138',
        // muted ochre for subtle, professional accenting
        'gold': '#B08A2B',
        // deeper moss green for a nature-forward tone
        'earth-green': '#3F4F2E',
        // darker sand beige to harmonize with deeper browns
        'sand-beige': '#CBB899',
        // significantly darkened terracotta for a richer clay tone
        'terracotta': '#7A4A33',
        // substantially deeper soil brown for gravity and contrast
        'deep-soil': '#1E130D',
        // darker brown for rich, warm backgrounds
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
