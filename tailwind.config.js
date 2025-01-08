/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        darkGray: '#333333',
      },
      backgroundImage: {
        HeroImg :  "url('/src/Component/Assets/HeroImg.webp')",
        HeroImg_1024 :  "url('/src/Component/Assets/HeroImg_1024.webp')",
        HeroImg_768 :  "url('/src/Component/Assets/HeroImg_768.webp')",
        HeroImg_320 :  "url('/src/Component/Assets/HeroImg_320.webp')",

      },
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(300px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-300px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideLeft: 'slideLeft 1s ease-out',
        slideRight: 'slideRight 1s ease-out',
      },
    },
  },
  plugins: [],
}

