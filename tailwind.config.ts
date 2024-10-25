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
      colors: {
        "text-base": "hsl(var(--color-text-base))",
        "background-primary": "hsl(var(--color-background-primary))",
        "background-secondary": "hsl(var(--color-background-secondary))",
        "text-primary": "hsl(var(--color-text-primary))",
        "button-primary": "hsl(var(--color-button-primary))",
        "button-destructive": "hsl(var(--color-button-destructive))",
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
