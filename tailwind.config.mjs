/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        circle: "url('/img/circle.svg')",
      },
      fontFamily: {
        primary: ['"Helvetica Neue"', "sans-serif"],
        secondary: ['"Noto Sans"', "serif"],
      },
      borderWidth: {
        0.5: "0.5px",
      },
      colors: {
        primary: "#101010",
        secondary: "#FAFAFA",
        highlight: "#0400E0",
        tertiary: "#EEEEEE",
      },
      animation: {
        "scroll-left": "scroll-left 15s linear infinite",
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
