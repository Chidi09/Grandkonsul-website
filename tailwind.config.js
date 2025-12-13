/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grand: {
          green: '#004d40', // Deep Emerald from logo
          gold: '#c5a059',  // Metallic Gold
          dark: '#1a1a1a',  // Rich Black for text
          light: '#f8f9fa', // Off-white for backgrounds
          muted: '#8c8c8c'  // Grey for secondary text
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'], // Elegant headings
        sans: ['Lato', 'sans-serif'],         // Clean body text
      }
    },
  },
  plugins: [],
}

