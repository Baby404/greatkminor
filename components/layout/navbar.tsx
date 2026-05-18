"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { GkLogo } from "@/components/brand/gk-logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-4 w-[94%] max-w-7xl rounded-2xl border border-zinc-200 bg-white px-4 py-3 md:px-6 dark:border-zinc-800 dark:bg-black">
        <div className="flex items-center justify-between">
          <GkLogo size="sm" plain showWordmark={false} className="mr-2" />

          <ul className="hidden items-center gap-5 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm transition ${pathname === link.href ? "text-black dark:text-white" : "text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white"}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/contact"
              className="hidden rounded-full border border-zinc-900 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-900 sm:inline-flex"
            >
              Book Now
            </Link>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-800 transition hover:bg-zinc-100 lg:hidden dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900"
            >
              <span className="text-lg leading-none">{menuOpen ? "×" : "☰"}</span>
            </button>
          </div>
        </div>

        <div className={`overflow-hidden transition-all duration-300 lg:hidden ${menuOpen ? "mt-4 max-h-[70vh]" : "max-h-0"}`}>
          <ul className="space-y-1 rounded-xl border border-zinc-200 p-2 dark:border-zinc-800">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className={`block rounded-lg px-3 py-2 text-sm transition ${pathname === link.href ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100" : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li className="pt-1 sm:hidden">
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block rounded-lg bg-zinc-900 px-3 py-2 text-center text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
