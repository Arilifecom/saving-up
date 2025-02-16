/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      zen: ['"Zen Maru Gothic"', "sans-serif"],
    },
    screens: {
      md: { min: "768px" },
    },
    extend: {
      backgroundImage: {
        "wave-shape-xs": "url('/img/bg-wave-shape-xs.svg')",
        "wave-shape-xl": "url('/img/bg-wave-shape-xl.svg')",
      },
      colors: {
        bg_pink: "#FFEAE3",
        headline: "#33272a",
        textColor: "#594a4e",
        blue: "#121481",
        primary: "#ffc6c7",
        light: "#ffffff",
      },
    },
  },
  plugins: [],
};
