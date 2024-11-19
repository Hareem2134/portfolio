import { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      keyframes: {
        bounce: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-30px)' },
          '60%': { transform: 'translateY(-15px)' },
        },
        popup: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'tracking-in-expand-fwd-bottom': {
          '0%': {
            letterSpacing: '-0.5em',
            transform: 'translateZ(-700px) translateY(500px)',
            opacity: '0',
          },
          '40%': { opacity: '0.6' },
          '100%': { transform: 'translateZ(0) translateY(0)', opacity: '1' },
        },
        'text-focus-in': {
          '0%': { filter: 'blur(12px)', opacity: '0' },
          '100%': { filter: 'blur(0px)', opacity: '1' },
        },
      },
      animation: {
        bounce: 'bounce 1.5s ease',
        popup: 'popup 0.6s ease-out forwards',
        'tracking-in-expand-fwd-bottom': 'tracking-in-expand-fwd-bottom 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000)',
        'text-focus-in': 'text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530)',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.fade-hidden': {  // Renamed from .hidden to .fade-hidden
          opacity: '0',
          transform: 'scale(0.5)',
          transition: 'opacity 0.3s, transform 0.3s',
        },
      });
    }),
  ],
};

export default config;