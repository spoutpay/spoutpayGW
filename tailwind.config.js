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
        "dark-blue": "#060D27",
        "gray-color": "#7E7E7E",
        "light-gray": "#7E7E7E",
        tulip: "#77C485",
        body: "#FFFFFFD6",
        "input-focus": "#74B8FF",
      },
      width: {
        sidebar: "25%",
        aside: "15%",
      },
      gridTemplateColumns: {
        sidebar: "250px auto", //for sidebar layout
      },
      gridTemplateRows: {
        header: "64px auto", //for the navbar layout
      },
    },
  },
  plugins: [],
};
