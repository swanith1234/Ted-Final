/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        "pulse-glow": "pulseGlow 2s infinite ease-in-out",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 0px rgba(239, 68, 68, 0.4)",
            transform: "scale(1)",
          },
          "50%": {
            boxShadow: "0 0 20px rgba(239, 68, 68, 0.7)",
            transform: "scale(1.05)",
          },
        },
      },
    },
  },
  plugins: [],
};
