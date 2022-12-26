/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        Black: "#010800",
        "seal-brown": "#6B3419",
        russet: "#824B18",
        gold: "#B17715",
        "maximim-green-yellow": "#C8E747",
        "dark-moss-green": "#365208",
        "lincoln-green": "#224208",
        fontFamily: {
          mono: ["ui-monospace", "SFMono-Regular"],
          heading: ["Poppins"],
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
