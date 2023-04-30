/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')



module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', 
  ],
  theme: {
    extend: {

screens:{
  'anothermobile' : '480px',
},

      fontFamily: {
        sans: ['var(--font-epilogue)', ...fontFamily.sans],
      },

      borderColor: {
          'primary' :"#3a3a3a",
          "secondary" : "#545454"
      },

      borderRadius:{
        rounded: '20px'
      },

 
      padding:{
        'mobilePadding' : '16px',
        'anothermobile' : '22px',
        'tablet' : '40px',
        'desktopPadding' : '20px'
      },

      colors : {
        'primary' : "#FFF8F1",
        'secondary' : "#DAD4CE",
        "third" : "#ABABAB",
        "fourth" : "#CCC7C1"
        
      },


      
        backgroundColor:{

          'primary' : '#1D1D1D',
          'secondary' : '#FFF8F1',
          'third' : "#DAD4CE",
          "fourth" : "#545454"

        }
      
    },
  },
  plugins: [],
}
