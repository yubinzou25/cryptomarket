/** @type {import('tailwindcss').Config} */
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
  plugins: [],
}

