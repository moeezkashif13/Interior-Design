/** @type {import('tailwindcss').Config} */


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


      borderColor: {
          'primary' :"#3a3a3a",
          "secondary" : "#545454"
      },

      borderRadius:{
        rounded: '20px'
      },

 
      padding:{
        'mobilePadding' : '16px',
        'anothermobile' : '32px',
        'tablet' : '40px',
        'desktopPadding' : '24px'
      },

      colors : {
        'primary' : "#FFF8F1",
        'secondary' : "#DAD4CE",
        "third" : "#ABABAB",
        "fourth" : "#CCC7C1",
        "fifth" : "#1D1D1D"
        
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
