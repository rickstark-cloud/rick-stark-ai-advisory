import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B2A4A",
          70: "#5A6580",
        },
        emerald: {
          DEFAULT: "#1E8A5B",
          light: "#8FCBB0",
        },
        slate: {
          900: "#3C3F45",
          600: "#6E7178",
          400: "#A6A9AE",
          200: "#D2D4D7",
          100: "#E8E9EB",
          50: "#F4F5F6",
        },
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-lato)", "sans-serif"],
        signature: ["var(--font-cormorant)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
