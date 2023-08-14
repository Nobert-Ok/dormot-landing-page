/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'primary': '#01524F',
      'primary-2': '#FEDC6C',
      'secondary': '#ED702D',
      'pale-yellow': '#FFF8E2',
      'green': '#01524F',
      'black': '#000000',
      'black2': '#151515',
      'bermuda': '#78dcca',
    },
    fontFamily: {
      DM: ['DM Sans', 'sans-serif'],
    },
    extend: {
      textUnderlineOffset: {
        10: '10px',
      }
    },
  },
  plugins: [],
}