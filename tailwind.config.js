/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        general: {
          
          300: "#EEEEEE",
          400: "#0CC25F",
         
        },
      }
    },
  },
  plugins: [],
}

