/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        circle: "url('/img/circle.svg')",
      },
      fontFamily: {
        primary: ['"Helvetica Neue"', "sans-serif"],
        secondary: ['"Noto Sans"', "serif"],
      },
      fontWeight: {
        black: 900,
      },
      borderWidth: {
        0.5: "0.5px",
      },
      colors: {
        secondary: "#00000",
        primary: "#FAFAFA",
        highlight: "#0400E0",
        tertiary: "#EEEEEE",
        girltalkBlue: "#273AAA",
        girltalkPeach: "#FFF5EB",
        girltalkLightBlue: "#D1ECEF",
        girltalkPink: "#F7C7D9",
        giriltalkRed: "#FC4E5C",
      },

      keyframes: {},
    },
  },
  plugins: [],
};
