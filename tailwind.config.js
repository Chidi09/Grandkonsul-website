/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        grand: {
          green: '#004d40', // Deep Emerald from logo
          gold: '#c5a059',  // Metallic Gold
          dark: '#0a0a0a',  // Darker black for better OLED contrast
          light: '#f8f9fa', // Off-white for backgrounds
          muted: '#8c8c8c',  // Grey for secondary text
          gray: '#1f1f1f'   // For dark mode cards
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

