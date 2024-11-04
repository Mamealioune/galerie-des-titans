/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        titillium: ["Titillium Web", "sans-serif"],
        montserrat : ['Montserrat', "sans-serif"],
        raleway : ['Raleway', "sans-serif"],
        josefin : ['Josefin Sans', "sans-serif"]
      },
    },
  },
  plugins: [],
};
