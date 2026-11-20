/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          500: '#15803d',
          700: '#14532d',
          800: '#0f3f22',
          900: '#0a2e19',
          950: '#051b0e',
        },
        gold: {
          50: '#fdfbf7',
          100: '#f9f3e5',
          200: '#f2e5c6',
          300: '#e5cfa0',
          400: '#d5b36c',
          500: '#c59b43',
          600: '#b08432',
          700: '#92672a',
          800: '#775227',
          900: '#644425',
        },
        academic: {
          slate: '#1E293B',
          muted: '#64748B',
          light: '#F8FAFC',
          border: '#E2E8F0',
          card: '#FFFFFF',
          paper: '#FAF8F5'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        arabic: ['"Amiri"', '"Traditional Arabic"', 'serif'],
        reader: ['"Merriweather"', 'Georgia', 'serif']
      }
    },
  },
  plugins: [],
}