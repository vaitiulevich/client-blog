/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sen: ['Sen', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        opasityBG: '#c0c0c012',
        borderColor: '#6D6E76',
        yellow: '#FFD050',
        yellowHover: '#ffdf89',
        yellowOpasity: '#FBF6EA',
        darkBG: '#232536',
        lightBG: '#FFFFFF',
        dark: '#232536',
        light: '#FFFFFF',
        grey: '#6D6E76',
        purpure: '#592EA9',
        lavanderBG: '#F4F0F8',
      },
    },
  },
  plugins: [],
};
