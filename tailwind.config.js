/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      kaisei: ["Kaisei Opti", "serif"],
    },
    backgroundImage: {
      ticket: "url('../public/ticket/ticketLayout.png')",
    },
  },
  plugins: [require("daisyui")],
};
