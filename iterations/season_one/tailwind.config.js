module.exports = {
  content: ["./src/**/**/*.{ts,tsx,js,jsx}"],
  darkMode: 'class', // or 'media' or 'class',
  mode: 'jit',
  theme: {
    colors: {
      dark: {
        main: "#121313",
        secondary: "#292929",
      },
      light: {
        main: "#FFFFFF",
        secondary: "#DBDBDB",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
