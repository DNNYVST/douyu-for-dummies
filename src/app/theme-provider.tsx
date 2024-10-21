"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type Theme = {
  rootBackground: string;
  background: string;
  textColor: string;
};

const DARK_THEME: Theme = {
  rootBackground: "bg-[#0E0E10]",
  background: "bg-[#18181b]",
  textColor: "text-[#efeff1]",
};

const LIGHT_THEME: Theme = {
  rootBackground: "bg-[#F2F2F2]",
  background: "bg-white",
  textColor: "text-[#18181b]",
};

const THEMES: any = {
  dark: DARK_THEME,
  light: LIGHT_THEME,
};

const getDefaultTheme = () => {
  if (localStorage.theme) {
    return localStorage.theme;
  }
  if (window?.matchMedia?.("(prefers-color-scheme:dark)")?.matches) {
    return "dark";
  }
  if (window?.matchMedia?.("(prefers-color-scheme:light)")?.matches) {
    return "light";
  }
  return "dark";
};

export const ThemeContext = createContext({
  theme: getDefaultTheme(),
  colorScheme: THEMES[getDefaultTheme()],
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(getDefaultTheme());

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.theme = newTheme;
  };

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
        className={`${THEMES[theme].rootBackground} ${THEMES[theme].textColor} transition-colors ease-in-out duration-200`}
      >
        {children}
      </html>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
