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
        ink: "#191919",
        paper: "#FBF8F1",
        sun: "#F4C430",
        "sun-soft": "#FFF3C4",
        mist: "#F1EFE8",
        stone: "#787774",
        line: "#E8E5DC",
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 2px rgba(25, 25, 25, 0.04), 0 8px 24px rgba(25, 25, 25, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
