/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary:   '#0a0a0f',
          surface:   '#111118',
          surface2:  '#1a1a26',
        },
        accent: {
          purple: '#7c6fff',
          teal:   '#4fd1c5',
          pink:   '#f0a3ff',
        },
        text: {
          primary: '#e8e6ff',
          muted:   '#7a7899',
        },
        border: {
          glow: 'rgba(120,110,255,0.15)',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono:    ['DM Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
