import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./animation/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f1f1f1",
        secondry: "#212121"
      },
    },
    fontFamily: {
      FoundersGrotesk: ["FoundersGrotesk", "sans-serif"],
      NeueMontreal: ["NeueMontreal", "sans-serif"],
    }
  },
  plugins: [],
};
export default config;
