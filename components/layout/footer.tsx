import { ThemeToggle } from "@/components/providers/theme-toggle";

export function Footer() {
  return (
    <footer className="flex items-center justify-between py-8 text-sm text-muted-foreground">
      <p>&copy; {new Date().getFullYear()} Brian Forstat</p>
      <ThemeToggle />
    </footer>
  );
}
