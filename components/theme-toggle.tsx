"use client";

import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="theme-toggle" className="flex items-center gap-1">
        {resolvedTheme === "dark" ? <Moon size={14} /> : <Sun size={14} />}
      </Label>
      <Switch
        id="theme-toggle"
        checked={resolvedTheme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
    </div>
  );
}
