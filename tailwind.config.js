/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FBB017",
        secondary: "#5E50A1",
        header: "#1F2A36",
        text: "#46505C",
        pale: "#9EA0A5",
        placeholder: "#E2E5ED",
      },
    },
  },
  plugins: [require("daisyui")],
};
