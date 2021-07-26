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
      

      'md': {'max': '767px'},
      

      'sm': {'max': '639px'},
      
      'xs': {'max': "430px"},
    },
    extend: {},
  },
  variants: {
    extend: {
     
    },
  },
  plugins: [],
}
