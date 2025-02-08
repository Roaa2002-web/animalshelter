/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'], // Include all Next.js page files and components
  darkMode: 'class', // or 'media' or 'false'
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};