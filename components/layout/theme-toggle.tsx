"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = saved ? saved === "dark" : prefersDark;

    document.documentElement.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={mounted ? (isDark ? "Switch to light mode" : "Switch to dark mode") : "Toggle theme"}
      className="rounded-full border border-zinc-300 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-widest text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-black dark:text-zinc-100 dark:hover:bg-zinc-900"
    >
      <span aria-hidden className="text-base leading-none">
        {mounted ? (isDark ? "☀️" : "🌙") : "◐"}
      </span>
    </button>
  );
}
