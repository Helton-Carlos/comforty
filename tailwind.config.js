/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      primary: '#029FAE',
      white: '#FFFFFF',
      green: '#01AD5A',
      dark: '#272343',
      orange: '#F05C52',
      'gray-dark': '#9A9CAA',
      gray: '#F0F2F3',
    },
    extend: {
      backgroundImage: {
        banner: "url('assets/imagem/banner-1.png')",
      },
    },
    fontSize: {
      sm: '0.7rem',
      base: '0.9rem',
      xl: '1.9rem',
      '2xl': '2.81rem',
      '3xl': '4.37rem',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      spacing: {
        '8xl': '98rem',
        '9xl': '128rem',
      },
      letterSpacing: {
        tighter: '-0.05em;',
      },
      borderRadius: {
        '4xl': '1.8rem',
      },
    },
  },
};
