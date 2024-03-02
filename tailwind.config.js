/** @type {import('tailwindcss').Config} */
// const plugin = require('tailwindcss/plugin')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '500px',
      'md': '800px',
      'lg': '1200px',
      'xl': '1800px',
    },
    extend: {
      colors: {
        primary: {
          default: '#00E5DB',
          hover: '#00d5c8'
        },
      }
    }
  }
}

