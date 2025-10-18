/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Core System Colors */
        background: 'var(--color-background)', /* white */
        foreground: 'var(--color-foreground)', /* slate-900 */
        border: 'var(--color-border)', /* slate-200 */
        input: 'var(--color-input)', /* white */
        ring: 'var(--color-ring)', /* blue-500 */
        
        /* Card & Surface Colors */
        card: {
          DEFAULT: 'var(--color-card)', /* white */
          foreground: 'var(--color-card-foreground)' /* slate-900 */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* white */
          foreground: 'var(--color-popover-foreground)' /* slate-900 */
        },
        surface: 'var(--color-surface)', /* slate-50 */
        
        /* Muted Colors */
        muted: {
          DEFAULT: 'var(--color-muted)', /* slate-100 */
          foreground: 'var(--color-muted-foreground)' /* slate-500 */
        },
        
        /* Brand Colors */
        primary: {
          DEFAULT: 'var(--color-primary)', /* slate-800 */
          foreground: 'var(--color-primary-foreground)' /* white */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* blue-500 */
          foreground: 'var(--color-secondary-foreground)' /* white */
        },
        
        /* Accent & Interactive */
        accent: {
          DEFAULT: 'var(--color-accent)', /* cyan-500 */
          foreground: 'var(--color-accent-foreground)' /* white */
        },
        
        /* Status Colors */
        success: {
          DEFAULT: 'var(--color-success)', /* emerald-500 */
          foreground: 'var(--color-success-foreground)' /* white */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* amber-500 */
          foreground: 'var(--color-warning-foreground)' /* white */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* red-500 */
          foreground: 'var(--color-error-foreground)' /* white */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* red-500 */
          foreground: 'var(--color-destructive-foreground)' /* white */
        },
        
        /* Brand Specific Colors */
        'brand-primary': 'var(--color-brand-primary)', /* blue-600 */
        'brand-secondary': 'var(--color-brand-secondary)', /* slate-800 */
        'conversion-accent': 'var(--color-conversion-accent)', /* amber-500 */
        'trust-builder': 'var(--color-trust-builder)', /* emerald-500 */
        'background-canvas': 'var(--color-background-canvas)', /* slate-900 */
        'text-hierarchy-primary': 'var(--color-text-hierarchy-primary)', /* slate-50 */
        'text-hierarchy-secondary': 'var(--color-text-hierarchy-secondary)', /* slate-400 */
        'call-to-action': 'var(--color-call-to-action)', /* red-600 */
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'jetbrains-mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      spacing: {
        'golden-xs': 'var(--spacing-xs)', /* 8px */
        'golden-sm': 'var(--spacing-sm)', /* 13px */
        'golden-md': 'var(--spacing-md)', /* 21px */
        'golden-lg': 'var(--spacing-lg)', /* 34px */
        'golden-xl': 'var(--spacing-xl)', /* 55px */
      },
      borderRadius: {
        'lg': '12px',
        'md': '8px',
        'sm': '6px',
        'xs': '4px',
      },
      boxShadow: {
        'subtle': 'var(--shadow-subtle)',
        'glassmorphic': 'var(--shadow-glassmorphic)',
        'elevation': 'var(--shadow-elevation)',
        'glow-primary': '0 0 20px rgba(37, 99, 235, 0.6)',
        'glow-accent': '0 0 20px rgba(6, 182, 212, 0.6)',
        'glow-conversion': '0 0 20px rgba(245, 158, 11, 0.6)',
      },
      backdropBlur: {
        'glass': '20px',
        'glass-mobile': '10px',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'blur-in': 'blur-in 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        'spin-slow': 'spin 3s linear infinite',
      },
      transitionDuration: {
        'fast': '200ms',
        'normal': '300ms',
        'slow': '2500ms',
      },
      transitionTimingFunction: {
        'brand': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      zIndex: {
        'header': '50',
        'sidebar': '40',
        'modal': '100',
        'tooltip': '110',
      },
      screens: {
        'xs': '475px',
      },
      aspectRatio: {
        'golden': '1.618',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}
