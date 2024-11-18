/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "deep-blue": "#000347",
        slateGray: "#637381",
        royalBlue: "#0239FE",
        charcoalBlack: "#111928",
        azureBlue: "#438EFF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sourceSans: ["Source Sans 3", "sans-serif"],
      },
    },
  },
  plugins: [],
};
