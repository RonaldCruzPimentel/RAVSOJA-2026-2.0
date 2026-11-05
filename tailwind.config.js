/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      fontFamily: {
        philosopher: ["Philosopher", "serif"],
        ttfors: ["TT Fors", "sans-serif"],
      },
    },
  },

  plugins: [],
}