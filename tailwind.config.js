/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      primary: '#029FAE',
      white: '#FFFFFF',
      green: '#01AD5A',
      purple: '#272343',
      orange: '#F05C52',
      'gray-dark': '#9A9CAA',
      gray: '#F0F2F3',
    },
    fontSize: {
      sm: '0.75rem',
      base: '1rem',
      xl: '1.12rem',
      '2xl': '1.5rem',
      '3xl': '4.37rem',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Inter', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '98rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '1.8rem',
      },
    },
  },
};
