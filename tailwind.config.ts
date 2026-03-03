import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#080c1a",
        gold: "#d5b67a",
        amber: "#f2c77f",
        violetMist: "#6f4bb8",
      },
      boxShadow: {
        aura: "0 0 0 1px rgba(213,182,122,0.2), 0 0 42px rgba(111,75,184,0.2)",
      },
      fontFamily: {
        serifDisplay: ["Cinzel", "serif"],
        body: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
