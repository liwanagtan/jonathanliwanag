module.exports = {
  mode: 'jit', // ⚠ Make sure to have this
  purge: ["./src/**/*.svelte"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        fontFamily: {
            sans: ['Visby Round CF Extra', 'sans-serif'],
        },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
