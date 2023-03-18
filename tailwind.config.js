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
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    borderWidth: {
      '0': '0.5px',
    },
    extend: {
      width: {
        '60%': '60%',
      },
      backgroundImage: {
        'blur': "url('../assets/addons/blur.svg')",
        'prologue': "url('../assets/heads.png')",
        'whole': "url('../assets/Whole.jpg')",
        'mdwhole': "url('../assets/WholeMd.jpg')",
        'main': "url('../assets/main.png')",
        'cards': "url('../assets/cards.jpg')",
        'pickle': "url('../assets/pickle.jpg')",
        'footer': "url('../assets/footer.jpg')",
        'outline': "url('../assets/addons/buttonOutline.png')",
        'butOut': "url('../assets/addons/butOut.png')",
        'block1': "url('../assets/blocks/block1.png')",
        'block2': "url('../assets/blocks/block2.png')",
        'block3': "url('../assets/blocks/block3.png')",
        'block4': "url('../assets/blocks/block4.png')",
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
      boxShadow: {
        '3xl': '0px 0px 50px 30px rgba(103, 195, 7, 0.5)',
      }
    },
  },
  plugins: [],
}