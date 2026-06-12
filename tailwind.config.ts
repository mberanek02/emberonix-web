import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Obsidian / surface layers (Stitch DESIGN.md)
        bg: {
          DEFAULT: '#0A0A0A',       // background — true obsidian
          elevated: '#131313',      // surface / surface-dim
          card: '#1C1B1B',          // surface-container-low
          container: '#201F1F',     // surface-container
          'container-high': '#2A2A2A',  // surface-container-high
          subtle: '#0E0E0E',        // surface-container-lowest
          bright: '#393939',        // surface-bright
        },
        // Amber / primary
        accent: {
          DEFAULT: '#F97316',       // primary-container — the burn
          hover: '#FFB690',         // primary
          bright: '#FBBF24',         // tertiary (yellow overheat)
          muted: 'rgba(249, 115, 22, 0.10)',
          glow: 'rgba(249, 115, 22, 0.35)',
          fixed: '#FFDBCA',         // primary-fixed
          dim: '#FFB690',           // primary-fixed-dim
          'on': '#552100',          // on-primary (text on amber)
        },
        // System purple — secondary
        purple: {
          DEFAULT: '#DDB7FF',       // secondary
          container: '#6F00BE',     // secondary-container
          'on': '#490080',
          fixed: '#F0DBFF',
        },
        // Deep blue — design LOB accent (paired with amber for dual practice)
        blue: {
          DEFAULT: '#3B82F6',       // bright sapphire — on-dark legibility
          deep: '#1D4ED8',           // deeper engagement
          dim: '#1E3A8A',            // navy-ish for backgrounds
          'on': '#0B1B3E',           // text on blue chips
          muted: 'rgba(59, 130, 246, 0.10)',
          glow: 'rgba(59, 130, 246, 0.35)',
        },
        // Tertiary amber-yellow
        tertiary: {
          DEFAULT: '#F9BD22',
          container: '#C49200',
          'on': '#402D00',
        },
        // Hairlines / outlines
        hairline: {
          DEFAULT: 'rgba(167, 139, 125, 0.20)',   // outline at low alpha
          strong: 'rgba(167, 139, 125, 0.45)',
          variant: '#584237',                      // outline-variant
        },
        // Text
        text: {
          primary: '#E5E2E1',       // on-surface
          secondary: '#E0C0B1',     // on-surface-variant — warm amber-ish
          muted: '#A78B7D',         // outline (warm taupe)
          dim: '#584237',           // outline-variant
        },
        // Status
        error: {
          DEFAULT: '#FFB4AB',
          container: '#93000A',
        },
      },
      fontFamily: {
        // Command — uppercase display
        display: ['var(--font-display)', 'Bebas Neue', 'Impact', 'sans-serif'],
        // Interface — body
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        // Execution — data/labels
        mono: ['var(--font-mono)', 'JetBrains Mono', 'ui-monospace', 'monospace'],
        // Back-compat alias (some components still reference serif)
        serif: ['var(--font-display)', 'Bebas Neue', 'Impact', 'sans-serif'],
      },
      fontSize: {
        // Bebas Neue display sizes — match Stitch
        'display': ['7.5rem', { lineHeight: '6.875rem', letterSpacing: '-0.02em' }],   // 120/110
        'display-sm': ['5rem', { lineHeight: '4.625rem', letterSpacing: '-0.01em' }],   // 80/74
        'h1': ['4rem', { lineHeight: '3.75rem', letterSpacing: '0.02em' }],             // 64/60
        'h2': ['3rem', { lineHeight: '2.75rem', letterSpacing: '0.01em' }],             // 48/44
        'h3': ['2rem', { lineHeight: '2.25rem' }],                                      // 32/36
        'body-lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'body': ['1rem', { lineHeight: '1.5rem' }],
        'small': ['0.875rem', { lineHeight: '1.25rem' }],
        'mono-label': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.08em' }],
        'mono-md': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.05em' }],
        'caption': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.05em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        'gutter': '24px',
      },
      maxWidth: {
        'container': '1440px',   // Stitch container-max
      },
      borderRadius: {
        // Spatial Brutalism — sharp by default
        DEFAULT: '0px',
        none: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        chip: '2px',     // tiny exception per DESIGN.md
        full: '9999px',
      },
      boxShadow: {
        // "Amber underglow" — replaces traditional shadows
        glow: '0 0 24px 0 rgba(249, 115, 22, 0.20)',
        'glow-sm': '0 0 12px 0 rgba(249, 115, 22, 0.15)',
        'glow-strong': '0 0 32px 4px rgba(249, 115, 22, 0.35)',
        'glow-purple': '0 0 24px 0 rgba(221, 183, 255, 0.18)',
        // Blue underglow — design LOB
        'glow-blue': '0 0 24px 0 rgba(59, 130, 246, 0.22)',
        'glow-blue-strong': '0 0 32px 4px rgba(59, 130, 246, 0.40)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-amber': 'pulseAmber 2.4s ease-in-out infinite',
        'scanline': 'scanline 3s linear infinite',
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
        pulseAmber: {
          '0%, 100%': { opacity: '0.6', boxShadow: '0 0 8px 0 rgba(249,115,22,0.4)' },
          '50%': { opacity: '1', boxShadow: '0 0 16px 2px rgba(249,115,22,0.7)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      backdropBlur: {
        glass: '20px',
      },
    },
  },
  plugins: [],
};

export default config;
