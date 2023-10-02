/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'white': '#ffffff',
          'color1': '#232323',
          'color2': '#1F1F1F',
          'color3': '#F16B4E',
          'color4': '#484848',
      },
      fontSize: {
          sm: '0.8rem',
          base: '1rem',
          xl: '1.25rem',
          '1rem': '1rem',
          '2rem': '2rem',
          '3rem': '3rem',
          '4rem': '4rem',
          '5rem': '5rem',
          '6rem': '6rem',
          '7rem': '7rem',
          '8rem': '8rem',
          '9rem': '9rem',
          '10rem': '10rem',
          'f05rem': '0.5rem',
          'f15rem': '1.5rem',
          'f25rem': '2.5rem',
          'f35rem': '3.5rem',
          'f45rem': '4.5rem',
          'f55rem': '5.5rem',
      },
      height: {
          '128': '32rem',
      },
      boxShadow: {
          'h3': '0 0px 0px 200px rgba(0, 0, 0, 0.3)',
      }
    }
  },
  plugins: [],
}

