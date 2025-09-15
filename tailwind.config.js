/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0D0D0D",
        darker: "#060606",
        light: "#F5F5F5",
        neon: "#39FF14",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "linear-gradient(rgba(13, 13, 13, 0.8), rgba(13, 13, 13, 1)), url('https://pub-cdn.sider.ai/u/U08XH5Z2NE/web-coder/684fcf5b060d7d85c7237ccd/resource/5b167c8f-930b-4a47-a60d-4ef1441a94ca.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
