// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "hsl(230, 12%, 8%)",
        "bg-glass": "rgba(255,255,255,0.07)",
        primary: "hsl(200, 80%, 55%)",
        "primary-light": "hsl(200, 80%, 65%)",
        text: "#f0f0f0",
        subtext: "#c0c0c0"
      },
      borderRadius: { DEFAULT: "12px" },
      boxShadow: { glass: "0 8px 32px rgba(0,0,0,0.6)" }
    }
  },
  plugins: []
};
