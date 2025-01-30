/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        luxury: ['Luxurius Script', 'sans-serif'],
        roca: ['Roca', 'sans-serif'],
        tt: ['Old Standard TT', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#FCF9F3',
          100: '#F8F0E2',
          200: '#F0DFC2',
          300: '#E7CC9D',
          400: '#DCB674',
          500: '#D09C43',
          600: '#C89132',
          700: '#BC882F',
          800: '#AF7F2C',
          900: '#9F7328',
          950: '#936A25',
          DEFAULT: '#D09C43',
        },
        secondary: {
          50: '#F9EFDC',
          100: '#F4DEB9',
          200: '#E8BB6E',
          300: '#DD9A27',
          400: '#9A6B18',
          500: '#52390D',
          600: '#4B340C',
          700: '#422E0A',
          800: '#392809',
          900: '#352508',
          950: '#302108',
          DEFAULT: '#52390D',
        },
      },
    },
  },
  plugins: [],
}
