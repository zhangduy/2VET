/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#F9A11F',
        gray: '#344A5F',
      },
      boxShadow: {
        card: '0 4px 6px 2px rgb(0 0 0 / 10%)',
      },
      backgroundImage: {
        linear: 'linear-gradient(to right, #FBC926, #FF8A00)',
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
