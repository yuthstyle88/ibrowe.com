import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
      },
      animation: {
        "fade-in": "fade-in 0.3s ease forwards",
      },
      boxShadow: {
        header: "0 0 3px rgba(117, 117, 117, .5);",
        dropDown: "0 0 0 0 #0000, 0 0 0 0 #0000, 0 8px 40px 0 rgba(0,0,0,0.20)",
      },
    },
  },
  plugins: [],
};
export default config;
