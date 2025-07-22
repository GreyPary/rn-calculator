/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "JosefinSans-Regular": "JosefinSans-Regular",
        "JosefinSans-Bold": "JosefinSans-Bold",
      },
    },
  },
  plugins: [],
};
