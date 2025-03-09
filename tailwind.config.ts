import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        primary: "#24262b",
        "primary-gray": "#5e626f",
        "primary-green": "#0D775E",
        "red-gray": "#444444",
        "white-100": "#F3F3F3",
      },
    },
  },
  plugins: [],
} satisfies Config;
