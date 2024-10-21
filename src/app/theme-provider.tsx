"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type Theme = {
  rootBackground: string;
  background: string;
  color: string;
};

const DARK_THEME: Theme = {
  rootBackground: "bg-[#0E0E10]",
  background: "bg-[#18181b]",
  color: "text-[#efeff1]",
};

const LIGHT_THEME: Theme = {
  rootBackground: "bg-[#F2F2F2]",
  background: "bg-white",
  color: "text-[#18181b]",
};

const THEMES: any = {
  dark: DARK_THEME,
  light: LIGHT_THEME,
};

const darkSchemePreferred = true;

export const ThemeContext = createContext({
  theme: darkSchemePreferred ? "dark" : "light",
  colorScheme: THEMES[darkSchemePreferred ? "dark" : "light"],
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(darkSchemePreferred ? "dark" : "light");

  const toggleTheme = () =>
    setTheme((theme) => (theme === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        colorScheme: THEMES[theme],
        toggleTheme,
      }}
    >
      <html
        lang="en"
        className={`${THEMES[theme].rootBackground} ${THEMES[theme].color}`}
      >
        {children}
      </html>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
