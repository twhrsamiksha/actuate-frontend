/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        burgundy: "#800020",
        gold: "#D4AF37",
        dark: "#1A1A1A",
        light: "#F9F9F9",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // or match your Figma font
      },
    },
  },
  plugins: [],
}
