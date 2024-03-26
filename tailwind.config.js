/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      colors: {
        "stc-blue": "#00629B",
        "stc-gray-01": "#EFEFEF",
        "stc-gray-02": "#C4C4C4",
        "stc-orange": "#FFD6B0",
        "stc-white": "#FFFFFF"
      }
    },
  },
  plugins: [],
}

