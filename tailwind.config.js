/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors:{
        "dark":"#121212",
        "primary":"6200ee",
        "lightGray":"7b7b7b"
      },
      fontFamily:{
        body:["Poppins"]
      }
    },
  },
  plugins: [],
}

