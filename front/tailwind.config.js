/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: '#FF4747',
        purple: '#9345E1',
        gray: '#838383',
      },
      boxShadow: {
        custom: '0 0 5px 0 rgba(0,0,0,0.25)',
      },
      fontSize: {
        '5xl': '2.1875rem',
        '4xl': '2rem',
        '3xl': '1.625rem',
        '2xl': '1.375rem',
        xl: '1.25rem',
        lg: '1.125rem',
        base: '1rem',
        sm: '.875rem',
      },
      fontFamily: {
        serif: 'Abril Fatface',
      },
    },
  },
  plugins: [],
};
