/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4fa',
          100: '#dce6f2',
          200: '#b9cde3',
          300: '#8aabd0',
          400: '#5a87ba',
          500: '#3a68a1',
          600: '#2b5184',
          700: '#23416b',
          800: '#1a3252',
          900: '#122140',
          950: '#0b1f3a',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
