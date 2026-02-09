/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  safelist: [
    // Ensure all grey color variants are generated for dynamic classes
    {
      pattern: /bg-grey-(50|100|200|300|400|500|600|700|800|900|950)/,
    },
    {
      pattern: /border-grey-(50|100|200|300|400|500|600|700|800|900|950)/,
    },
    {
      pattern: /text-grey-(50|100|200|300|400|500|600|700|800|900|950)/,
    },
  ],
  theme: {
    // Geist UI Breakpoints
    screens: {
      'xs': '0px',
      'sm': '650px',
      'md': '900px',
      'lg': '1280px',
      'xl': '1920px',
    },
    extend: {
      // Greyscale palette
      colors: {
        grey: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eaeaea',
          300: '#d4d4d4',
          400: '#999999',
          500: '#888888',
          600: '#666666',
          700: '#444444',
          800: '#333333',
          900: '#111111',
          950: '#000000',
        },
      },
      // Geist UI Typography
      fontSize: {
        // Geist type scale
        'xs': ['0.75rem', { lineHeight: '1.5' }],        // 12px
        'sm': ['0.875rem', { lineHeight: '1.5' }],      // 14px
        'base': ['1rem', { lineHeight: '1.625' }],      // 16px
        'lg': ['1.125rem', { lineHeight: '1.625' }],    // 18px
        'xl': ['1.25rem', { lineHeight: '1.5' }],       // 20px - h4
        '2xl': ['1.5rem', { lineHeight: '1.5' }],       // 24px - h3
        '3xl': ['2.25rem', { lineHeight: '1.35' }],     // 36px - h2
        '4xl': ['3rem', { lineHeight: '1.25' }],        // 48px - h1
      },
      fontFamily: {
        sans: ['Geist', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'sans-serif'],
        mono: ['Geist Mono', 'Menlo', 'Monaco', 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      letterSpacing: {
        'tighter': '-0.02em',   // h1, h2, h3, h4
        'tight': '-0.01em',     // h5
        'normal': '-0.005625em', // body
        'wide': '0.05em',
        'wider': '0.1em',
      },
      // Geist UI uses 16pt base, spacing in multiples
      spacing: {
        'pt': '1pt',
        '0.5': '0.125rem',  // 2px
        '1': '0.25rem',     // 4px
        '1.5': '0.375rem',  // 6px
        '2': '0.5rem',      // 8px
        '2.5': '0.625rem',  // 10px
        '3': '0.75rem',     // 12px
        '4': '1rem',        // 16px - base
        '5': '1.25rem',     // 20px
        '6': '1.5rem',      // 24px
        '8': '2rem',        // 32px
        '10': '2.5rem',     // 40px
        '12': '3rem',       // 48px
        '16': '4rem',       // 64px
        '20': '5rem',       // 80px
        '24': '6rem',       // 96px
      },
      // 24-column grid
      gridTemplateColumns: {
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      borderRadius: {
        'pill': '9999px',
      },
      maxWidth: {
        'content': '782pt',  // Geist UI content width
      },
    },
  },
  plugins: [],
}
