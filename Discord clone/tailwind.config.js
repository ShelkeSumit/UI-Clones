/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      extend: {
        colors:{
          lightBlue : "#404EED"
        },
        fontFamily: {
          'ggsans': ['ggsans-normal'],
          
        },
        spacing: {
          '30' : '120px'
        }
      },
    },
  },
  plugins: [],
}