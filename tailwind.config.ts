import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) =>
      addUtilities({
        ".hide-scrollbar": {
          /* IE, Edge*/
          "-ms-overflow-style": "none",
          /* Firefox */
          "scrollbar-width": "none",
          /* Chrome, Safari, Opera */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      })
    ),
  ],
};
export default config;
