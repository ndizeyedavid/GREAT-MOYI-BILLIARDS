/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Absolute colors
        white: '#fff',
        black: '#000',
        
        // Primary (Yellow shades)
        primary: {
          65: "#FF8D4C",
          70: "#FF9E66",
          75: "#FFAE80",
          80: "#FFBE99",
          90: "#FFDECC",
          95: "#FFEFE5",
          97: "#FFF5F0",
          99: "#FFFCFA",
        },
        
        // Background (Dark shades)
        darktheme: {
          8: '#141414',
          10: '#1A1A1A',
          15: '#262626',
          20: '#333333',
          25: '#404040',
          30: '#4D4D4D',
          35: '#595959',
          40: '#666666',
        },
        
        // Text (Grey shades)
        text: {
          10: "#191919",
          15: "#262626",
          20: "#333333",
          30: "#4C4C4D",
          35: "#59595A",
          40: "#656567",
          60: "#98989A",
          70: "#B3B3B3",
        },
      },
    },
  },
  plugins: [],
} 