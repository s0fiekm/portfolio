/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,astro}", "./public/**/*.html"],
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
      },
      animation: {
        "scroll-left": "scroll-left 5s linear infinite",
      },

      translate: {
        20: "20px",
      },
      opacity: {
        0: "0",
        100: "1",
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
