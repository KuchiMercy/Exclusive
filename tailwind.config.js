/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  'node_modules/flowbite-react/lib/esm/**/*.js',],
  theme: {
    extend: {
      backgroundImage:{
        'ps5': 'url(./src/assets/ps5.png)',
        'attractive': 'url(./src/assets/attractive.png)',
        'speaker': 'url(./src/assets/speaker.png)',
        'perfume': 'url(./src/assets/perfume.png)'
      }
    },
  },
  plugins: [require('flowbite/plugin'),],
}

