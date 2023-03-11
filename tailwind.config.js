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
      width: {
        '60%': '60%',
      },
      backgroundImage: {
        'prologue': "url('../assets/head.jpg')",
        'main': "url('../assets/main.png')",
        'outline': "url('../assets/addons/buttonOutline.png')",
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '16': '4rem',
      },
      fontFamily: {
        'raleway': ['Raleway', 'Raleway']
      },
    },
  },
  plugins: [],
}