/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      phoneScreen: "640px",
      tabletScreen: "760px",
      ourBreakPoint: "955px" 
    },

    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}