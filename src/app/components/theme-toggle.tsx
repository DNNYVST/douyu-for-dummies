"use client";

import { useState, useEffect } from "react";
import { Button } from "./core/button";
import Moon from "./icons/moon";
import Sun from "./icons/sun";
import { setThemeCookie } from "../lib/cookies";

type ThemeToggleProps = {
  initialTheme?: string | undefined;
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

const getNewTheme = (theme: string | undefined) =>
  theme === "dark" ? "light" : "dark";

const ThemeToggle = ({ initialTheme }: ThemeToggleProps) => {
  const [theme, setTheme] = useState<string | undefined>(initialTheme);

  useEffect(() => {
    if (!initialTheme) {
      setTheme(getDefaultTheme());
      setThemeCookie(getDefaultTheme());
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = getNewTheme(theme);
    setTheme((theme) => getNewTheme(theme));
    setThemeCookie(newTheme);
    document?.querySelector("body")?.classList.remove(theme as string);
    document?.querySelector("body")?.classList.add(newTheme);
  };

  return (
    <Button variant="icon" onClick={toggleTheme} className="transition-none">
      {theme === "dark" ? <Moon /> : <Sun />}
    </Button>
  );
};

export default ThemeToggle;
