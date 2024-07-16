/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'rgb(0,29,33)',

      },
      textColor: {
        primary: 'rgb(0,29,33)'
      },
      backgroundImage: {
        'logo': "url('./src/assets/logo.png')"
      },
      borderColor: {
        primary: 'rgb(0,29,33)'
      },
      colors: {
        primary: 'rgb(0,29,33)'
      }
    },
  },
  plugins: [],
}