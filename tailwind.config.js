/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          950: "#100913",
          900: "#17101c",
          800: "#241326",
          700: "#33203a",
        },
        rose: {
          soft: "#f4a6b8",
          DEFAULT: "#e78fa3",
          deep: "#c9647f",
        },
        gold: {
          soft: "#f0d8bd",
          DEFAULT: "#e2b07a",
          deep: "#c98a4f",
        },
        cream: "#f7ece6",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
      },
      keyframes: {
        floatUp: {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "0.9" },
          "90%": { opacity: "0.9" },
          "100%": { transform: "translateY(-115vh) rotate(360deg)", opacity: "0" },
        },
        drift: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(40px)" },
          "100%": { transform: "translateX(0)" },
        },
        pulseHeart: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.85" },
          "50%": { transform: "scale(1.12)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        drift: "drift 14s ease-in-out infinite",
        pulseHeart: "pulseHeart 2.6s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        gradientShift: "gradientShift 18s ease infinite",
      },
    },
  },
  plugins: [],
};
