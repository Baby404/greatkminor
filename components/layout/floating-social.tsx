import Link from "next/link";
import { socialLinks } from "@/lib/data";

export function FloatingSocial() {
  return (
    <aside className="fixed bottom-6 right-4 z-40 hidden lg:block">
      <div className="group relative">
        <div className="glass inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 transition hover:scale-105 dark:border-zinc-700 dark:text-zinc-200">
          <span aria-hidden className="text-sm">↗</span>
        </div>

        <div className="pointer-events-none absolute bottom-14 right-0 w-64 translate-y-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
          <div className="glass rounded-2xl p-3">
            <p className="mb-2 px-1 text-[10px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">Platforms</p>
            <div className="grid grid-cols-2 gap-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="rounded-lg border border-zinc-200 px-2 py-2 text-center text-[11px] text-zinc-700 transition hover:-translate-y-0.5 hover:bg-zinc-100 hover:text-black dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-white"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
