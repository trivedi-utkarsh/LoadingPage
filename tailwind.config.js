/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "", 
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        pageBg: "#080311"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        }
      },
      animation: {
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};
