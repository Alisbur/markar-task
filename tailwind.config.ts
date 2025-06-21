import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/entities/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1400px',
      '2xl': '1600px',
      '3xl': '1920px',
    },
    extend: {
      // fontSize: {
      //   base: ['1rem', { lineHeight: '1.2rem' }], // изменяем line-height для .text-base
      //   lg: ['1.125rem', { lineHeight: '1.5rem' }],
      //   sm: ['0.875rem', { lineHeight: '1.1rem' }],
      //   xl: ['1.25rem', { lineHeight: '1.6rem' }],
      //   xs: ['0.75rem', { lineHeight: '0.9rem' }],
      // },
      colors: {
        // primary: 'var(--foreground)',
        secondary: 'var(--muted-foreground)',
        // accent: 'var(--destructive)',
        purple: 'var(--purple)',
        success: 'var(--success)',
        error: 'var(--error)',
        inprogress: 'var(--in-progress)',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
        'fade-slide': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-slide-tooltip-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-slide-tooltip-out': {
          '0%': { visibility: 'visible', opacity: '1', transform: 'translateY(0px)' },
          '100%': { opacity: '0', transform: 'translateY(10px)' },
        },
        slideDown: {
          from: { height: '0px' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0px' },
        },
      },
      animation: {
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
        'popup-fade-slide': 'fade-slide 0.2s ease-out forwards',
        'tooltip-fade-slide': 'fade-slide-tooltip-in .2s ease-out forwards',
        'tooltip-fade-slide-out': 'fade-slide-tooltip-out .2s ease-out forwards',
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
      listStyleType: {
        square: 'square',
        circle: 'circle',
        decimal: 'decimal',
        decimalLeadingZero: 'decimal-leading-zero',
      },
      gridTemplateColumns: {
        'fit-4cols': '150px repeat(auto-fit, minmax(calc((100% - 0px)/4), 2fr)) 150px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
