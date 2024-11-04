"use client";

import { Button } from "./core/button";
import Moon from "./icons/moon";
import Sun from "./icons/sun";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <span className="hidden dark:block">
        <Moon />
      </span>
      <span className="dark:hidden">
        <Sun />
      </span>
    </Button>
  );
};

export default ThemeToggle;
