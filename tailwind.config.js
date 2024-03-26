/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      colors: {
        "stc-light-blue": "#EDF8FC",
        "stc-blue": "#00629B",
        "stc-blue-02": "#E7F4F9",
        "stc-gray-01": "#EFEFEF",
        "stc-gray-02": "#C4C4C4",
        "stc-orange-01": "#FFD6B0",
        "stc-orange-02": "#FF8200",
        "stc-white": "#FFFFFF"
      }
    },
  },
  plugins: [],
}

