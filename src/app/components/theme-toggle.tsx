"use client";

import { Button } from "../components/core/styled/button";
import Moon from "./icons/moon";
import Sun from "./icons/sun";
import { useTheme } from "../theme-provider";

const ThemeToggle = () => {
  const {
    theme,
    toggleTheme,
    colorScheme: { textColor },
  } = useTheme();
  return (
    <Button $variant="icon" className={`w-min ${textColor}`} onClick={toggleTheme}>
      {theme === "dark" ? <Moon /> : <Sun />}
    </Button>
  );
};

export default ThemeToggle;
