import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Caveat: ["Caveat", "cursive"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        background: "#F3F4F6",
        "background-2": "#101B33",
        foreground: "#111827",
        primary: "#139EA9",
        secondary: "#1A2751",
        "text-primary": "#111827",
      },
    },
  },
  plugins: [],
};
export default config;
