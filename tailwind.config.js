/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      rotate: {
        '30': '30deg',
        '60': '60deg',
      },
      fontFamily:{
        primaryRegular:["Regular"],
        primaryMedium : ["Medium"],
        primaryBold : ["Bold"],
        Raleway :["Raleway"]
      },

      keyframes: {
        "blink": {
          '0%': { opacity: '1' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        "blink": 'blink 1s step-start infinite',
      },

      keyframes:{
        "slide":{
          from : { transform : "translateX(0)" },
          to : { transform :"translateX(-100%)" }


        }
      },
      animation: {
        "move": 'move 0.6s ease-in-out forwards',
      },
      keyframes: {
        "move": {
          '0%': { opacity: '0', zIndex: '1' },
          '50%': { opacity: '1', zIndex: '5' },
          '100%': { opacity: '1', zIndex: '5' },
        },
      },

      animation :{
        "slide" :'slide 30s linear infinite'
      },
      transitionDuration: {
        '500': '500ms', 
      },
      transitionTimingFunction: {
        'ease': 'ease', 
      },
      /* Add to your CSS or Tailwind config */
      willchangetransform :{
        'will-change': "transform"
      }



      
    },
  },
  plugins: [
    require('tailwindcss-3d')({ legacy: true }),
  ],
}

