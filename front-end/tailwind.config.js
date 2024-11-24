/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        primary: "linear-gradient(to right, #eecda3, #ef629f)",
      },
    },
  },
  plugins: [require("daisyui")],
};
