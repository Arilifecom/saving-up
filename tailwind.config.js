/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "JIT",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        pink: "#faeee7",
      },
      fontFamily: {
        arial: ["Arial"],
      },
    },
  },
  plugins: [],
};
