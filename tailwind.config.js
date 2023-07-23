/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
      // fontFamily: {
      //   "Hoss": [hoss - round, sans - serif],
      // },
      width: {
        sidebar: "30%",
      },
    },
  },
  plugins: [],
};
