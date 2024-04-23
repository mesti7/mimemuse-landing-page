/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        'blueColor': '#2a68ff',
        'greyIsh': '#f1f4f8',
        'cardShadow': '#252b36',
        'textColor': '#252b36',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

