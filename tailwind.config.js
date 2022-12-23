/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./modules/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        full: "0px 20px 40px 0px rgba(0, 0, 0, 0.05), inset 0px -10px 20px 0px rgba(0, 0, 0, 0.05), 0px 10px 20px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
}
