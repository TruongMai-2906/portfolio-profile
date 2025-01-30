import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "var(--color-white)",
        dark: "var(--color-dark)",
        orange1: "var(--color-orange1)",
        orange2: "var(--color-orange2)",
        orange3: "var(--color-orange3)",
        orange4: "var(--color-orange4)",
        orange5: "var(--color-orange5)",
        orange6: "var(--color-orange6)",
        orange7: "var(--color-orange7)",
        orange8: "var(--color-orange8)",
        orange9: "var(--color-orange9)",
        orange10: "var(--color-orange10)",
      },
      fontFamily: {
        primary: ["var(--font-titillium-web)"],
      },
      backgroundColor: {
        white: "var(--color-white)",
        dark: "var(--color-dark)",
        orange1: "var(--color-orange1)",
        orange2: "var(--color-orange2)",
        orange3: "var(--color-orange3)",
        orange4: "var(--color-orange4)",
        orange5: "var(--color-orange5)",
        orange6: "var(--color-orange6)",
        orange7: "var(--color-orange7)",
        orange8: "var(--color-orange8)",
        orange9: "var(--color-orange9)",
        orange10: "var(--color-orange10)",
      },
      padding: {
        x: "calc(50% - var(--container-w) / 2)",
      },
      letterSpacing: {
        custom: "0.3em",
      },
    },
  },
  plugins: [],
} satisfies Config;
