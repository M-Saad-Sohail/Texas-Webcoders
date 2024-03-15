/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xmd':'920px',
        'sm': '576px',   // Custom small breakpoint
        'md': '768px',   // Custom medium breakpoint
        'lg': '992px',   // Custom large breakpoint
        'xl': '1200px',  // Custom extra-large breakpoint
        '2xl': '1440px', // Custom 2x large breakpoint
      },
    },
  },
  plugins: [],
}

