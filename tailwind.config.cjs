/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#282c34',
        secondary: '#20232a',
        tertiary: '#ab42fd',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimBlack: '#222',
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
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
    boxShadow: {
      '5xl': '28px 13px 74px -21px rgba(0, 0, 0, 0.75)',
    },
    lineClamp: {
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
