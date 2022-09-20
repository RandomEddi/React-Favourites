/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        '470px': {'max': '470px'},
        'Max670px': {'max': "670px"},
        'Max370px': {'max': "370px"},
        'MaxXl': {'max': '1280px'},
        'MaxLg': {'max': '1024px'},
        'MaxSm': {'max': '700px'},
      },
    },
  },
  plugins: [],
}
