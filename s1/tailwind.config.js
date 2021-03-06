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
        tertiary: "#F0F5F9",
      },
      accent: {
        main: "#3246FF",
        inverse: "#FFFFFF",
        secondaryLight: "#D7E2FF",
        secondaryDark: "#141621",
        tertiaryLight: "#ECF3FF",
        tertiaryDark: "#171A28",
      },
      pink: "#A67CFF",
      purple: "#4E75FF",
      blue: "#52B6FF",
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
