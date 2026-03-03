import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        aura: "0 0 0 1px rgba(196,120,74,0.2), 0 0 42px rgba(139,154,123,0.15)",
      },
      fontFamily: {
        serifDisplay: ["Great Vibes", "cursive"],
        body: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
