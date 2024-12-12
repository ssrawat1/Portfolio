/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/script.js"],
  theme: {
    extend: {
      transitionTimingFunction: {
        jump: "cubic-bezier(0.68, -0.55, 0.27, 1.55);",
        transition:
          " top 0.25s cubic-bezier(0.68, -0.55, 0.265, 1.55),opacity 0.25s cubic-bezier(0.68, -0.55, 0.265, 1.55);",
      },

      screens: {
        media1060: "1060px",
        media910: "910px",
        media750: "750px",
        media625: "625px",
        media1150: "1150px",
        media855: "855px",
        media500: "500px",
        media400: "400px",
      },
    },
  },
  plugins: [],
};
