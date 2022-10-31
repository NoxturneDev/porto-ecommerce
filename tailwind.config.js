/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': '#A18A68',
        'basic': {
          100: '#EFEFEF',
          200: '#D8D8D8',
          300: '#707070'
        },
        'error': '#D82700'
      }
    },
    fontFamily: {
      'dm-sans' : ['DM Sans', 'sans-serif']
    }
  },
  plugins: [],
}