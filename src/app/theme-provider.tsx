"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  Fragment,
} from "react";
import { setThemeCookie } from "./lib/cookies";

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
  if (typeof window !== "undefined") {
    if (window?.matchMedia?.("(prefers-color-scheme:dark)")?.matches) {
      return "dark";
    }
    if (window?.matchMedia?.("(prefers-color-scheme:light)")?.matches) {
      return "light";
    }
  }
  return "dark";
};

export const ThemeContext = createContext({
  theme: getDefaultTheme(),
  colorScheme: THEMES[getDefaultTheme()],
  toggleTheme: () => {},
});

export const ThemeProvider = ({
  children,
  initialTheme,
}: {
  children: ReactNode;
  initialTheme: string | undefined;
}) => {
  const [theme, setTheme] = useState(initialTheme || "dark");

  useEffect(() => {
    if (!initialTheme) {
      setTheme(getDefaultTheme());
      setThemeCookie(getDefaultTheme());
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // setThemeCookie(newTheme);
    // console.log(document.querySelector("body"));
    // document?.querySelector("body")?.classList.add("dark");

  };

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        colorScheme: THEMES[theme],
        toggleTheme,
      }}
    >
      <div
        className={`${THEMES[theme].rootBackground} ${THEMES[theme].textColor} transition-colors ease-in-out duration-200`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
