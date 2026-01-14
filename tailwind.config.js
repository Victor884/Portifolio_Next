/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-inter)", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('/images/hero-bg.png')",
      },
      fontFamily: {
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      colors: {
        // Paleta roxo / lilás (primary) e ciano (accent)
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        accent: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
        },
      },
      boxShadow: {
        // soft purple glow similar to previous green glow
        button: '0px 0px 68px 7px rgba(124,58,237,0.28)',
      },
    },
  },
  plugins: [],
};
