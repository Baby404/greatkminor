"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GkLogo } from "@/components/brand/gk-logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-4 flex w-[94%] max-w-7xl items-center justify-between rounded-2xl border border-zinc-200 bg-white px-4 py-3 md:px-6 dark:border-zinc-800 dark:bg-black">
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
            className="rounded-full border border-zinc-900 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-900"
          >
            Book Now
          </Link>
        </div>
      </nav>
    </header>
  );
}
