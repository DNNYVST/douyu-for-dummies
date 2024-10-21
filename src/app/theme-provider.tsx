"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type Theme = {
  background: string;
  color: string;
};

const DARK_THEME: Theme = {
  background: "bg-[#18181b]",
  color: "color-[#efeff1]",
};

const LIGHT_THEME: Theme = {
  background: "bg-[#d9d9d9]",
  color: "color-[#18181b]",
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
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
