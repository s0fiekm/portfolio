/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        circle: "url('/img/circle.svg')",
      },
      fontFamily: {
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
        customBlue: "#0E2EEE",
        tertiary: "#EEEEEE",
        girltalk: "#E7E5E3",
      },
      animation: {
        "scroll-left": "scroll-left 6s linear infinite",
        "scroll-left-slow": "scroll-left 20s linear infinite",
      },

      translate: {
        20: "20px",
      },

      transitionDuration: {
        700: "700ms",
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
