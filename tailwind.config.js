module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderColor: theme => ({
      ...theme('colors'),
      'green-light': "#78e08f"
    }),
    
    
    screens: {
      '2xl': {'max': '1535px'},
      

      'xl': {'max': '1279px'},
      

      'lg': {'max': '1023px'},
      
      '2md': {'max': '960px'},

      'md': {'max': '767px'},
      


      'sm': {'max': '639px'},
      
      'xs': {'max': "430px"},
    },
    extend: {
      gridTemplateColumns: {
        '300px-1': '300px 1fr',
      },
      gridTemplateRows: {
        '1-2': '2fr 3fr',
        '300-1': '300px 1fr'
      },
      minWidth:{
   
        '100px': '100px',
        '93px': '93px'
      },
      minHeight: {
        '360': '360px'
      },
      maxHeight: {
        '300': '300px'
      },
      maxWidth: {
        '200': '200px'
      },
      zIndex: {
        '2000': "2000"
      },
      backgroundColor: {
        'gray-transparent': '#4444445c',
      },
      transitionDuration: {
        '400': '400ms'
        
       },
       flex: {
         "2": 2
       }
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
      
    }
  },
  plugins: [],
}
