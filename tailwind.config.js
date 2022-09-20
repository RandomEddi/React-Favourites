/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        '1060px': {'max':'1060px'},
        '1400px': {'max':'1400px'},
        '670px': {'max': '670px'}
      },
    },
  },
  plugins: [],
}
