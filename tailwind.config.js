/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        darkBlue: "#060D27",
        grayColor: "#7E7E7E",
        lightGray: "#7E7E7E",
        tulip: "#77C485",
        body: "#FFFFFFD6",
      },
      width: {
        sidebar: "25%",
        aside: "15%",
      },
      gridTemplateColumns: {
        sidebar: "300px auto", //for sidebar layout
      },
      gridTemplateRows: {
        header: "64px auto", //for the navbar layout
      },
    },
  },
  plugins: [],
};
