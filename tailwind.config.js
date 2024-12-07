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
        animate: '0 0 0px 0px #3788e5cc',
      },
      backgroundImage: {
        linear: 'linear-gradient(to right, #FBC926, #FF8A00)',
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
      },
      animation: {
        zoom: 'zoom 1.3s ease-in-out infinite',
      },
      keyframes: {
        zoom: {
          '0%': {
            transform: 'translate(-50%, -50%) scale(.9)',
          },
          '70%': {
            transform: 'translate(-50%, -50%) scale(1)',
            boxShadow: '0 0 0 15px transparent',
          },
          '100%': {
            transform: 'translate(-50%, -50%) scale(.9)',
            boxShadow: '0 0 0 0 transparent',
          },
        },
      },
    },
  },
  plugins: [],
};
