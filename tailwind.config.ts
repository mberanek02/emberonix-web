import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0A0A0A',
          elevated: '#111111',
          card: '#151515',
          subtle: '#1A1A1A',
        },
        accent: {
          DEFAULT: '#E07A5F',
          hover: '#E8917D',
          muted: 'rgba(224, 122, 95, 0.12)',
        },
        hairline: {
          DEFAULT: 'rgba(255, 255, 255, 0.06)',
          strong: 'rgba(255, 255, 255, 0.12)',
        },
        text: {
          primary: '#EDEDED',
          secondary: '#888888',
          muted: '#555555',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '5rem', letterSpacing: '-0.02em' }],
        'display-sm': ['3.5rem', { lineHeight: '4rem', letterSpacing: '-0.02em' }],
        'h1': ['2.5rem', { lineHeight: '3rem', letterSpacing: '-0.01em' }],
        'h2': ['2rem', { lineHeight: '2.5rem', letterSpacing: '-0.01em' }],
        'h3': ['1.5rem', { lineHeight: '2rem' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'body': ['1rem', { lineHeight: '1.5rem' }],
        'small': ['0.875rem', { lineHeight: '1.25rem' }],
        'caption': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.05em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      maxWidth: {
        'container': '1280px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
