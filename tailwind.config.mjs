/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tree green - primary color
        primary: {
          50: '#f0f9f0',
          100: '#d4ead4',
          200: '#a8d5a8',
          300: '#7dbe7d',
          400: '#5ca85c',
          500: '#4a8b4a',
          600: '#3d733d',
          700: '#305a30',
          800: '#244224',
          900: '#1a2e1a',
        },
        // Bright green for willing actions
        willing: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        // Tree bark brown
        bark: {
          50: '#faf7f5',
          100: '#f0e9e3',
          200: '#e0d1c1',
          300: '#c8aa8c',
          400: '#a68762',
          500: '#8b6f47',
          600: '#725a3a',
          700: '#5c4730',
          800: '#483625',
          900: '#362819',
        },
        // Additional tree theme color
        tree: {
          50: '#f0f9f0',
          100: '#d4ead4',
          200: '#a8d5a8',
          300: '#7dbe7d',
          400: '#5ca85c',
          500: '#4a8b4a',
          600: '#3d733d',
          700: '#305a30',
          800: '#244224',
          900: '#1a2e1a',
        },
      },
    },
  },
  plugins: [],
}