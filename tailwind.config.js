const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
        primaryGray: "#999999",
        darkGray: "#555555",
        lightGray: "#DDDDDD",
        primaryBlue: "#17ABDB",
        darkBlue: "#0072AF",
        primaryLight: "#FFFFFF",
        secondaryLight: "#F3F3F3",
        primaryDark: "#1A263E",
        secondaryDark: "#000000",
        lightGreen: "#CFF630",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
