/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        darkGray: '#14100d',
      },
      backgroundImage: {
        HeroImg :  "url('/src/Component/Assets/HeroImg.webp')",
        HeroImg_1024 :  "url('/src/Component/Assets/HeroImg_1024.webp')",
        HeroImg_768 :  "url('/src/Component/Assets/HeroImg_768.webp')",
        HeroImg_320 :  "url('/src/Component/Assets/HeroImg_320.webp')",

        AboutBG :  "url('/src/Component/Assets/About/AboutBG.webp')",
        AboutBG_1024 :  "url('/src/Component/Assets/About/AboutBG_1024.webp')",
        AboutBG_768 :  "url('/src/Component/Assets/About/AboutBG_768.webp')",

        ContactBG: "url('/src/Component/Assets/Contact/contact.webp')",
        ContactBG_1024: "url('/src/Component/Assets/Contact/contact_1024.webp')",
        ContactBG_768: "url('/src/Component/Assets/Contact/contact_768.webp')",

        Main :  "url('/src/Component/Assets/Menu/main.webp')",
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
  plugins: [require("tailwind-scrollbar-hide"),
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          /* Hide scrollbar for WebKit-based browsers */
          '-webkit-overflow-scrolling': 'touch',
          'scrollbar-width': 'none', // Firefox
          '&::-webkit-scrollbar': {
            display: 'none', // Chrome, Safari
          },
        },
      });
    },
  ],
}

