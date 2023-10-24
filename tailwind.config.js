/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "./index.html"],
  theme: {
    fontFamily: {
      spartan: ["League Spartan", "sans-serif"],
    },
    extend: {
      colors: {
        // background
        lightGrayishCyan: " hsl(180, 52%, 96%)",
        // (Filter Tablets)
        lightGrayishCyan2: "hsl(180, 31%, 95%)",
        darkGrayishCyan: "hsl(180, 8%, 52%)",
        veryDarkGrayishCyan: "hsl(180, 14%, 20%)",
        desaturatedDarkCyan: "hsl(180, 29%, 50%)",
      },

      backgroundImage: {
        "header-desktop": "url('/images/bg-header-desktop.svg')",
        "header-mobile": "url('/images/bg-header-mobile.svg')",
      },
    },
  },
  plugins: [],
};
