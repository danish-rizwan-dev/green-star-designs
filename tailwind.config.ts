import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0D4F66",
          50: "#E6F0F3",
          100: "#CCE1E7",
          200: "#99C3CF",
          300: "#66A5B7",
          400: "#33879F",
          500: "#0D4F66",
          600: "#0A3F52",
          700: "#082F3D",
          800: "#051F29",
          900: "#030F14",
        },
        gold: {
          DEFAULT: "#C8A27A",
          50: "#F9F4EE",
          100: "#F3E9DD",
          200: "#E7D3BB",
          300: "#DBBD99",
          400: "#CFA778",
          500: "#C8A27A",
          600: "#A6835F",
          700: "#85644A",
          800: "#634535",
          900: "#422620",
        },
        navy: {
          DEFAULT: "#0F172A",
          50: "#1E293B",
          100: "#1E293B",
          800: "#0F172A",
          900: "#020617",
        },
        light: "#F8FAFC",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.8s ease-out forwards",
        "counter": "counter 2s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
