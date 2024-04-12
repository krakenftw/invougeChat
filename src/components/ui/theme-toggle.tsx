"use client";
import React from "react";
import { Button } from "./button";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  function handleThemeToggle() {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  return (
    <div>
      <Button
        className="bg-transparent rounded-full h-12 p-0 w-12"
        variant={"outline"}
        onClick={handleThemeToggle}
      >
        {theme == "dark" ? <SunIcon /> : <MoonIcon />}
      </Button>
    </div>
  );
}

export default ThemeToggle;
