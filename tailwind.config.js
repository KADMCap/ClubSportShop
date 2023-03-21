const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    fontSize: {
      sm: "0.75rem",
      base: "1rem",
      md: "1.25rem",
      lg: "1.5rem",
      xl: " 2rem",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        russo: ["var(--font-russo)", ...fontFamily.sans],
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        "gray-9": "#999999",
        "gray-5": "#555555",
        "gray-d": "#DDDDDD",
        blue: "17ABDB",
        darkblue: "0072AF",
        primaryLight: "#FFFFFF",
        secondaryLight: "#F3F3F3",
        primaryDark: "1A263E",
        secondaryDark: "#000000",
      },
    },
  },
  plugins: [],
};
