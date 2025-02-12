import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1356px",
        "4xl": "1800px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        flecha: ["FlechaM", "serif"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        dropDown: {
          "0%": { transform: "translateY(-1rem)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease forwards",
        dropDown: "dropDown 0.2s ease-in-out",
      },
      boxShadow: {
        header: "0 0 3px rgba(117, 117, 117, .5);",
        dropDown: "0 0 0 0 #0000, 0 0 0 0 #0000, 0 8px 40px 0 rgba(0,0,0,0.20)",
        inputShadow:
          "0px 4px 8px -1px rgba(0, 0, 0, 0.1), 0px 1px 0px 0px rgba(0, 0, 0, 0.05)",
        ai: "0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 1px 4px 0px rgba(0, 0, 0, 0.1)",
      },
      gridTemplateColumns: {
        layout:
          "minmax(0, calc((100% - (1280px + 4rem)) / 2)) [main-content-start] minmax(0, 1fr) [main-content-end] minmax(0, calc((100% - (1280px + 4rem)) / 2))",
      },
      fontSize: {
        "mobile-h4": [
          "1.25rem",
          { lineHeight: "1.5625rem", letterSpacing: "-0.05rem" },
        ],
        "desktop-h4": [
          "1.875rem",
          { lineHeight: "2.5rem", letterSpacing: "-0.075rem" },
        ],
        "desktop-h5": [
          "1.5rem",
          { lineHeight: "1.875rem", letterSpacing: "-.06rem" },
        ],
        "mobile-h3": [
          "1.5rem",
          { lineHeight: "2.1875rem", letterSpacing: "-0.06rem" },
        ],
        "display-mobile-h1": [
          "2.5rem",
          { lineHeight: "2.8125rem", letterSpacing: "-.05rem" },
        ],
        "display-desktop-h3": [
          "4.35rem",
          { lineHeight: "1", letterSpacing: "-.0875rem" },
        ],
        "display-desktop-h4": [
          "2.5rem",
          { lineHeight: "1", letterSpacing: "-.05rem" },
        ],
        h3: ["2.5rem", { lineHeight: "2.75rem", letterSpacing: "-.1rem" }],
        h2: ["4.375rem", { lineHeight: "5.625rem", letterSpacing: "-.175rem" }],
        "default-regular": ["14px", { lineHeight: "22px", letterSpacing: "0" }],
        "ds-h1": [
          "3.25rem",
          { lineHeight: "1.2307692307692308", letterSpacing: "0" },
        ],
        "ds-h2": ["2.25rem", { lineHeight: "45px", letterSpacing: "0" }],
        "ds-h4": ["1.5rem", { lineHeight: "1.5", letterSpacing: "0" }],
        "ds-lg": ["1.125rem", { lineHeight: "2rem", letterSpacing: "0" }],
        "ds-2xl": ["2.5rem", { lineHeight: "1.25", letterSpacing: "0" }],
        "display-hero": ["2.5rem", { lineHeight: "1.25", letterSpacing: "0" }],
        "display-h3": ["2.5rem", { lineHeight: "1.25", letterSpacing: "0" }],
      },
      textColor: {
        "light-01": "rgba(33,37,41)",
        "light-02": "rgba(73 80 87)",
        "light-03": "#868e96",
      },
    },
  },
  plugins: [],
};
export default config;
