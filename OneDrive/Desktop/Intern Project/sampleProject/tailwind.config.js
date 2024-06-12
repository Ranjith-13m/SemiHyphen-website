/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue': 'rgba(110,254,232,255)',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#5BC0BE',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'black': '#040807',
        'zink':"#909090",
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        train:['Train one',"serif"]
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(18,35,35,255)', 
      },
  },
  plugins: [],
}
}

