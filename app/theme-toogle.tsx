"use client";
import { useTheme } from "next-themes";
import { IoMoon, IoSunny } from "react-icons/io5";

export function ThemeToogle() {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <IoSunny className="absolute h-10 w-10 rotate-0 scale-100 dark:rotate-90 dark:scale-0" />
      <IoMoon className="absolute h-10 w-10 rotate-00 scale-0 dark:rotate-0 dark:scale-100" />
    </button>
  );
}
