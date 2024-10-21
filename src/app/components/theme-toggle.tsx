"use client";

import { Button } from "../components/core/styled/button";
import { useTheme } from "../theme-provider";

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();
  return (
    <Button className="w-min" onClick={toggleTheme}>
      toggle theme
    </Button>
  );
};

export default ThemeToggle;
