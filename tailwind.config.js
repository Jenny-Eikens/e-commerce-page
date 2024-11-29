/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "hsl(26, 100%, 55%)",
        "pale-orange": "hsl(25, 100%, 94%)",
        "v-dark-blue": "hsl(220, 13%, 13%)",
        "dark-gray-blue": "hsl(219, 9%, 45%)",
        "gray-blue": "hsl(220, 14%, 75%)",
        "light-gray-blue": "hsl(223, 64%, 98%)",
        white: "hsl(0, 0%, 100%)",
        black: "hsl(0, 0%, 0%)" /* bg-opacity 75% for lightbox background */,
      },
    },
  },
  plugins: [],
};
