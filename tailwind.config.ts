import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tierra: "#FAFAFA",
        terracota: "#C4784A",
        arena: "#3F3F46",
        crema: "#27272A",
        sage: "#8B9A7B",
        marron: "#E4E4E7",
        caoba: "#D4D4D8",
      },
      boxShadow: {
        aura: "0 0 0 1px rgba(196,120,74,0.2), 0 0 42px rgba(139,154,123,0.15)",
        warm: "0 8px 30px rgba(196,120,74,0.25)",
        card: "0 4px 24px rgba(26,18,9,0.4)",
      },
      fontFamily: {
        serifDisplay: ["Playfair Display", "serif"],
        body: ["Nunito Sans", "sans-serif"],
        script: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
} satisfies Config;
