module.exports = {
  mode: 'jit',
  purge: ['./public/index.html', './src/**/*.svelte'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#121212',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
