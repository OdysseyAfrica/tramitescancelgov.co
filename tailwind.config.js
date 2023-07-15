/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'black': '#000000',
        'gray': '#E5E4E2',
        'lightgray': '#F4F4F4',
        'dark': '#535353',
        'button': '#594FC4',
        'buttonhover': '#39f',
        'error': '#ff3333',
      },
      fontSize : {
        'xs': '10px',
        'ms': '12px',
        'sm': '18px',
        's': '20px',
        'm': '24px',
        'ml': '30px',
        'mxl': '35px',
        'l': '40px',
        'xl': '50px',
      },
      fontFamily : {
        'Lato': 'Lato, sans-serif'
      }
    },
  },
  plugins: [],
}
