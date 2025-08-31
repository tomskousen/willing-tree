/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Keep original colors as fallback
        primary: {
          50: '#f0f9f0',
          100: '#d4ead4',
          200: '#a8d5a8',
          300: '#7dbe7d',
          400: '#5ca85c',
          500: '#4a8b4a', // Main tree green (was blue)
          600: '#3d733d',
          700: '#305a30',
          800: '#244224',
          900: '#1a2e1a',
        },
        // Renamed willing to match tree theme
        willing: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e', // Bright green for willing actions
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        // New tree-themed colors
        tree: {
          50: '#f0f9f0',
          100: '#d4ead4',
          200: '#a8d5a8',
          300: '#7dbe7d',
          400: '#5ca85c',
          500: '#4a8b4a', // Main tree green
          600: '#3d733d',
          700: '#305a30',
          800: '#244224',
          900: '#1a2e1a',
        },
        bark: {
          50: '#faf7f5',
          100: '#f0e9e3',
          200: '#e0d1c1',
          300: '#c8aa8c',
          400: '#a68762',
          500: '#8b6f47', // Main bark brown
          600: '#725a3a',
          700: '#5c4730',
          800: '#483625',
          900: '#362819',
        },
        stone: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280', // Main stone grey
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontSize: {
        // Larger default sizes for better readability
        'xs': ['0.875rem', { lineHeight: '1.25rem' }],  // was 0.75rem
        'sm': ['1rem', { lineHeight: '1.5rem' }],       // was 0.875rem
        'base': ['1.125rem', { lineHeight: '1.75rem' }], // was 1rem
        'lg': ['1.25rem', { lineHeight: '1.75rem' }],   // was 1.125rem
        'xl': ['1.375rem', { lineHeight: '2rem' }],     // was 1.25rem
        '2xl': ['1.625rem', { lineHeight: '2.25rem' }], // was 1.5rem
        '3xl': ['2rem', { lineHeight: '2.5rem' }],      // was 1.875rem
        '4xl': ['2.5rem', { lineHeight: '3rem' }],      // was 2.25rem
        '5xl': ['3rem', { lineHeight: '3.5rem' }],      // was 3rem
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}