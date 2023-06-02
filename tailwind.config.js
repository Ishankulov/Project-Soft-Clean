/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      white: "#fff",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      "light-green": "#20FF87",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      serif: ["Montserrat", "sans-serif", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/Фон 1.png')",
        "hero-line": "url('/src/assets/line.png')",
        "underLine": "url('/src/assets/underLine.png')",
        "kuhnya": "url('/src/assets/kuhnya.png')",
        
      },
      boxShadow: {
        '3xl': '0px 0px 20px rgba(29, 31, 33, 0.12)',
      }
    },
    plugins: [],
  },
};
