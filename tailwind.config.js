/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "main-red": "#d6407a",
      "dark-text": "#000000",
      "blue-text": "#2D2E43",
      "back-blur": "rgba(0,0,0,0.5)",
    },
    fontFamily: {
      Gilroy: ["Gilroy", "sans-serif"],
    },
    backgroundImage: {
      horizontalLine:
        "linear-gradient(89.77deg,#fc85b3 .14%,rgba(206,50,110,0) 99.74%)",
      addressline: "linear-gradient(#FFFFFF, #d6407a, #FFFFFF)",
      footerLine:
        "linear-gradient(89.77deg,rgba(206,50,110,0) .14%,#fc85b3 53.06%,rgba(206,50,110,0) 99.74%)",
    },
    extend: {},
  },
  plugins: [],
};
