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
      'xs': '350px',
      'i14': '350px',
      'i11': '375px',
      'mob': '380px',
      'i12': '390px',
      'i14': '393px',
      'xr': '414px',
      's': '495px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '2k': '1920px',
    },
    borderWidth: {
      '0': '0.5px',
    },
    extend: {
      width: {
        '60%': '60%',
      },
      backgroundImage: {
        'oneOne': "url('../assets/quest/1.1/1.1.png')",
        'twoOne': "url('../assets/quest/1.1/2.1.png')",
        'twoThree': "url('../assets/quest/1.1/2.3.png')",
        'threeFour': "url('../assets/quest/1.1/3.4.png')",
        'threeFive': "url('../assets/quest/1.1/3.5.jpg')",
        'threeSix': "url('../assets/quest/1.1/3.6.png')",
        'fiveOne': "url('../assets/quest/1.1/5.1.png')",
        'start': "url('../assets/quest/start.jpg')",
        'blur': "url('../assets/addons/blur.svg')",
        'prologue': "url('../assets/heads.png')",
        'whole': "url('../assets/Whole.jpg')",
        'mdwhole': "url('../assets/WholeMd.jpg')",
        'smBg': "url('../assets/smBg.jpg')",
        'qBg': "url('../assets/quest/qBg.png')",
        'qBgSM': "url('../assets/quest/qBgSM.png')",
        'qBgXL': "url('../assets/quest/qBgXL.png')",
        'quest': "url('../assets/socico/quest.png')",
        'main': "url('../assets/main.png')",
        'cards': "url('../assets/cards.jpg')",
        'pickle': "url('../assets/pickle.jpg')",
        'footer': "url('../assets/footer.jpg')",
        'outline': "url('../assets/addons/buttonOutline.png')",
        'blur': "url('../assets/addons/blur.png')",
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