/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      fontFamily:{
        primaryRegular:["Regular"],
        primaryMedium : ["Medium"],
        primaryBold : ["Bold"],
        Raleway :["Raleway"]
      },

      keyframes: {
        blink: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
      },
      
    },
  },
  plugins: [],
}

