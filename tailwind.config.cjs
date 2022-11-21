/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#56e1ea',
        secondary: '#4981f9',
        dark: '#121212',
        dimDark: '#181818',
        blackHover: "#282828",
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimGray: 'rgba(255, 255, 255, 0.6)',
      },
      fontFamily: {
        primary: ['Rubik', 'sans-serif'],
      },
    },
    screens: {
      xg: '320px',
      xs: '480px',
      ss: '620px',
      sm: '768px',
      sd: '920px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
    boxShadow: {
      '5xl': '28px 13px 74px -21px rgba(0, 0, 0, 0.75)',
    },
    lineClamp: {
      1: '1',
      2: '2',
      4: '4',
      6: '6',
      10: '10',
      12: '12',
    },
  },
  variants: {
    extend: {
      lineClamp: ['hover'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
