/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zelvora: {
          bg: "#021B23",
          section: "#041F2A",
          contrast: "#000F14",
          primary: "#00E6D0",
          primaryMid: "#00C2B8",
          primaryDeep: "#009FA6",
          text: "#FFFFFF",
          secondary: "#A0BEC5",
        },
      },
      boxShadow: {
        glow: "0 0 45px rgba(0, 230, 208, 0.18)",
      },
      backgroundImage: {
        'grid-neon': 'radial-gradient(circle at top left, rgba(0,230,208,0.16), transparent 32%), radial-gradient(circle at bottom right, rgba(0,194,184,0.12), transparent 24%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
