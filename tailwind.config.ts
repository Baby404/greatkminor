import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#070707",
        surface: "#101010",
        gold: {
          100: "#f8edd2",
          300: "#d9bc74",
          500: "#b98a2f",
          700: "#8b6827"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"]
      },
      boxShadow: {
        glow: "0 0 80px rgba(185,138,47,0.25)",
        glass: "0 8px 30px rgba(0,0,0,0.35)"
      },
      backgroundImage: {
        "gold-radial": "radial-gradient(circle at top, rgba(185,138,47,0.24), transparent 55%)"
      }
    }
  },
  plugins: []
};

export default config;
