"use client";

import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="theme-toggle" className="flex items-center gap-1">
        {theme === "dark" ? <Moon size={14} /> : <Sun size={14} />}
        {theme === "dark" ? "Dark" : "Light"}
      </Label>
      <Switch
        id="theme-toggle"
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
    </div>
  );
}
