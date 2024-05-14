/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'averia-serif-libre': ['Averia Serif Libre', 'serif'],
        'Poppins': ['Poppins'],
      },
    },
  },
  plugins: [],
}