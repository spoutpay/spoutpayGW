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
    },
  },
  plugins: [],
};
