/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderWidth: {
      '0': '0.5px',
    },
    extend: {
      backgroundImage: {
        'prologue': "url('../assets/head.jpg')",
      },
      fontFamily: {
        'reeni': ['Reenie Beanie', 'sans-serif']
      },
    },
  },
  plugins: [],
}