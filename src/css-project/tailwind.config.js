module.exports = {
  mode: 'jit',
  purge: ['./views/**/*.ejs'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customBlue: {
          DEFAULT: '#2d6eb4', 
          dark: '#002a65', 
        },
        customYellow: '#ffb422',
        customGreen: '#0e6053',
        customRed: '#992309',
        customGrey: {
          DEFAULT: '#dadada',
          dark: '#bfc2d8'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

