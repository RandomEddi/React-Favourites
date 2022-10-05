/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'MaxXl': {'max': '1280px'},
        'MaxLg': {'max': '1024px'},
        'MaxSm': {'max': '700px'},
        'Max670px': {'max': "670px"},
        'Max470px': {'max': '470px'},
        'Max370px': {'max': "370px"},
        'Height840px': {'raw': '(max-height: 840px)'},
        'Height630px': {'raw': '(max-height: 630px)'}
      },
    },
  },
  plugins: [],
}
