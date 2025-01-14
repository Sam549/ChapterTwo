/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F4E2CC',
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}