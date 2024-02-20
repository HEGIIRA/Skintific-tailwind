/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    container: {
      padding: {
        DEFAULT: '15px'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1330px',
    },
    extend: {
      colors:{
        primary: '#242a2b',
        secondary: '#808080',
        tertiary: '#fdd6d0',
        accent: {
          DEFAULT:'#31b7df',
          secondary: '#2fc7f5',
          tertiary: '#ff553b'
        },
        grey:'#e8f0f1',
      },
      fontFamily: {
        primary: 'poppins',
      },
      boxShadow: {
        custom1: '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
        custom2: '0px 2px 30px 0px rgba(8, 73, 81, 0.06)',
      },
      backgroundImage: {
        home: 'url(../../asset/bg-1.jpg)',
        quotes: 'url(../../asset/bg-2.jpeg)',
        login: 'url(../../asset/login-bg.png)',
      }
    },
  },
  plugins: [],
}

