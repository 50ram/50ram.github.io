/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "sanFrancisco": "url('/public/img/sanFrancisco.jpg')",
        "sanFranciscoDesktop": "url('/public/img/sanFranciscoDesktop.jpg')",
        "bali": "url('/public/img/bali.jpg')",
        "chicago": "url('/public/img/chicago.jpg')",
        "new_york": "url('/public/img/new_york.jpg')",
        "europe": "url('/public/img/europe.jpg')",
        "iceland": "url('/public/img/iceland.jpg')",
        "LA": "url('/public/img/LA.jpg')",
        "miami": "url('/public/img/miami.jpg')",
        "norway": "url('/public/img/norway.jpg')",
        "seattle": "url('/public/img/seattle.jpg')",
        "sydney": "url('/public/img/sydney.jpg')",
        "switzerland": "url('/public/img/switzerland.jpg')",
        "yosemite": "url('/public/img/yosemite.jpg')"
      },
      backgroundColor: theme => ({
        ...theme("colors"),
        "primary": "#CC2D4A",
        "secondary": "#8FA206",
        "terciary": "#61AEC9"
      }),
      textColor: {
        "primary": "#CC2D4A",
        "secondary": "#8FA206",
        "terciary": "#61AEC9"
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

