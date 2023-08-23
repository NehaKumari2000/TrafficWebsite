/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {  
    extend: {
      fontFamily : {
        sans : ['Google sans', 'sans-serif']
      },
      colors: {
        gray: {
          300 : '#B5B9BE',
          400 : '#707983',
          800 : '#1D2B3B',
          900 : '#112031'
        },
        teal : {
          200: '#D4ECDD',
          300 : 'DBE1B9'
        }
      }
    },
  },
  plugins: [],
}

