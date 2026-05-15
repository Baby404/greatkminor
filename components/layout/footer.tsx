import Link from "next/link";
import { GkLogo } from "@/components/brand/gk-logo";
import { socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto flex w-[94%] max-w-7xl flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <GkLogo size="sm" plain showWordmark={false} className="w-fit" />
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Gospel Guitarist • Worship Leader • Recording Artist</p>
        </div>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((social) => (
            <Link key={social.label} href={social.href} className="text-sm text-zinc-600 transition hover:text-black dark:text-zinc-400 dark:hover:text-white">
              {social.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
