/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "sm": "480px",
      },
      spacing:{
        "big": "48rem",
      },
      fontFamily:{
        dm: ['DM Mono', 'monospace'],
        nunito: ['Nunito', 'sans-serif',],
      },  
    },
    
  plugins: [],
  }
}


