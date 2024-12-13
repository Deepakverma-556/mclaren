/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#0046AD',
        gray: '#525252',
        darkBlue:'#023da0'
      },
      fontFamily: {
        notoSans:['Noto Sans', 'sans-serif'],
      },
      backgroundImage: {
        hero:"url('/public/assets/images/webp/hero-bg.webp')"
      },
      screens: {
        lg: '1025px',
        md:'770px'
      }
    },
  },
  plugins: [],
}