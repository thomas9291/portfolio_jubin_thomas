import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    colors: {
      "cocoa-brown-50": "#f5f3f1",
      "cocoa-brown-100": "#e7e0da",
      "cocoa-brown-200": "#d1c3b7",
      "cocoa-brown-300": "#b69f8e",
      "cocoa-brown-400": "#a0816f",
      "cocoa-brown-500": "#927060",
      "cocoa-brown-600": "#7d5c51",
      "cocoa-brown-700": "#654843",
      "cocoa-brown-800": "#563f3d",
      "cocoa-brown-900": "#4c3837",
      "cocoa-brown-950": "#271b1b",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
