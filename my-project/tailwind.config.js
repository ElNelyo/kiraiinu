/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "purple-low":"#D4CDF6",
        "purple-medium":"#9282D5",
        "purple-hard":"#625791",
        "purple-extra-hard": "#2E2949"
      }
    },
  },
  plugins: [],
}
