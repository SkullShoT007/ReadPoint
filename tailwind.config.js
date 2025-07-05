 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js}"],
   darkMode : 'class',
   theme: {
     extend: {
      colors: {
        customBlack: "#3a3a3a",
        customWhite: "#ffffff",
        customBackground: "#232428",
        customCard: "#1A1A1D"
      }
     },
   },
   plugins: [],
 }