const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    fontFamily: {
      heading: ['Roboto', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    // colors: {
    //   primary: {
    //     50: '',
    //     100: '',
    //     200: '',
    //     300: '',
    //     400: '',
    //     500: '',
    //     600: '',
    //     700: '',
    //     800: '',
    //     900: '',
    //   },
    //   secondary: {
    //     50: '',
    //     100: '',
    //     200: '',
    //     300: '',
    //     400: '',
    //     500: '',
    //     600: '',
    //     700: '',
    //     800: '',
    //     900: '',
    //   },
    // },
    extend: {
      // typography: (theme) => ({
      //   DEFAULT: {
      //     css: {
      //       a: {
      //         color: theme(`colors.primary.500`),
      //         textDecoration: 'none',
      //         '&hover': {
      //           color: theme(`colors.primary.400`),
      //         },
      //       },
      //     },
      //   },
      // }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
