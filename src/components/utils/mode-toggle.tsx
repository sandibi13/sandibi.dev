"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="size-11 rounded-xl"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Moon className="size-4 absolute transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      <Sun className="size-4 transition-all rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
    </Button>
  );
};
