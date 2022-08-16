/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#080B1C",
        dark1: "#0C1023",

        white: "#FFFFFF",
        description: "#BBBBBB",
        gray: "#BBBBBB",
        stroke: "#3C3C3C",
        stroke2: "#767676",

        blue: {
          main: "#59A5FF",
          stroke: "#59A5FF",
          text: "#61A4FF"
        },

        purple: {
          main: "#7847FF",
          stroke: "#7847FF",
          text: "#9670FF"
        },

        pink: {
          main: "#CAB8FF",
          stroke: "#CAB8FF",
          text: "#CAB8FF"
        }
      },
      keyframes: {
        flicker: {
          "0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": {
            opacity: 0.99,
            filter:
              "drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))",
          },
          "20%, 21.999%, 63%, 63.999%, 65%, 69.999%": {
            opacity: 0.4,
            filter: "none",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-700px 0", },
          "100%": { backgroundPosition: "700px 0", },
        },
      },
      animation: {
        flicker: "flicker 3s linear infinite",
        shimmer: "shimmer 1.3s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
