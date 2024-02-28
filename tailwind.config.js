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
      'xl': '1400px',
    }
  },
  // plugins: [
  //   plugin(function({ addBase, theme }) {
  //     addBase({
  //       'h1': { fontSize: theme('fontSize.2xl') },
  //       'h2': { fontSize: theme('fontSize.xl') },
  //       'h3': { fontSize: theme('fontSize.lg') },
  //     })
  //   })
  // ]
}

