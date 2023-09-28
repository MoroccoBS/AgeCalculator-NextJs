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
        Purple: "var(--Purple)",
        LightRed: "var(--Light-red)",
        White: "avr(--White)",
        OffWhite: "var(--Off-white)",
        LightGrey: "var(--Light-grey)",
        SmokeyGrey: "var(--Smokey-grey)",
        OffBlack: "var(--Off-black)",
      },
    },
  },
  plugins: [],
};
export default config;
