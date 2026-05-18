import Link from "next/link";
import { GkLogo } from "@/components/brand/gk-logo";
import { socialLinks } from "@/lib/data";

const siteLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/music", label: "Music" },
  { href: "/videos", label: "Videos" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/guitar-institute", label: "Guitar Institute" },
  { href: "/gk-band", label: "GK Band" },
  { href: "/contact", label: "Contact" }
];

function PlatformIcon({ label }: { label: string }) {
  const cls = "h-4 w-4";

  switch (label) {
    case "Facebook":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cls}>
          <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V5c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.5V11H7v3h2.9v8h3.6z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden className={cls}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "YouTube":
    case "YouTube Music":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cls}>
          <path d="M23 12s0-3.3-.4-4.9c-.2-.9-.9-1.6-1.8-1.8C19.2 5 12 5 12 5s-7.2 0-8.8.3c-.9.2-1.6.9-1.8 1.8C1 8.7 1 12 1 12s0 3.3.4 4.9c.2.9.9 1.6 1.8 1.8C4.8 19 12 19 12 19s7.2 0 8.8-.3c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.9.4-4.9zM9.5 15.5v-7l6 3.5-6 3.5z" />
        </svg>
      );
    case "TikTok":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cls}>
          <path d="M14.5 3c.5 1.8 1.6 3.1 3.5 3.8v2.8c-1.4 0-2.6-.4-3.7-1.1v6.2a5.7 5.7 0 1 1-4.9-5.6v2.9a2.8 2.8 0 1 0 2 2.7V3h3.1z" />
        </svg>
      );
    case "Spotify":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cls}>
          <path d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.5 10.5 0 0 0 12 1.5zm4.8 15.1a.9.9 0 0 1-1.2.3 9.3 9.3 0 0 0-9.5-.6.9.9 0 1 1-.8-1.5 11 11 0 0 1 11.2.7.9.9 0 0 1 .3 1.1zm1.2-2.7a1.1 1.1 0 0 1-1.5.4 11.5 11.5 0 0 0-11.6-.7 1.1 1.1 0 1 1-1-2 13.8 13.8 0 0 1 13.8.8 1.1 1.1 0 0 1 .3 1.5zm.2-2.8a13.9 13.9 0 0 0-14-.8 1.3 1.3 0 1 1-1.2-2.3 16.4 16.4 0 0 1 16.5 1 1.3 1.3 0 0 1-1.3 2.1z" />
        </svg>
      );
    case "Apple Music":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cls}>
          <path d="M16 4v10.6a2.9 2.9 0 1 1-1.6-2.6V6.1L8.2 7.4v8.1a2.9 2.9 0 1 1-1.6-2.6V6.1L16 4z" />
        </svg>
      );
    case "Boomplay":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cls}>
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-2.2 5.8 7.2 4.2-7.2 4.2z" />
        </svg>
      );
    case "Deezer":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cls}>
          <path d="M3 16h3v3H3zm4 0h3v3H7zm4 0h3v3h-3zm4-4h3v7h-3zm4-3h3v10h-3zM3 12h3v3H3zm4-2h3v5H7zm4-2h3v7h-3z" />
        </svg>
      );
    case "Amazon Music":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cls}>
          <path d="M6.8 14.7h2.5l.8-2.4h3.8l.8 2.4h2.6L13.6 5h-2.8l-4 9.7zm4-4.4 1.2-3.4 1.1 3.4h-2.3zM4.2 18.2c4.2 2.5 11.3 2.7 16.1.4.4-.2.8.3.4.6-4.9 3.6-12.7 3.8-17 .7-.4-.3 0-1 .5-.7z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={cls}>
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}

function compactLabel(label: string) {
  switch (label) {
    case "YouTube Music":
      return "YT Music";
    case "Apple Music":
      return "Apple";
    case "Amazon Music":
      return "Amazon";
    default:
      return label;
  }
}

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white/95 backdrop-blur dark:border-zinc-800 dark:bg-black/95">
      <div className="mx-auto grid w-[94%] max-w-7xl gap-8 py-10 lg:grid-cols-[1fr_auto] lg:items-start">
        <div>
          <GkLogo size="sm" plain showWordmark={false} className="w-fit" />
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Gospel Guitarist • Worship Leader • Recording Artist
          </p>

          <div className="mt-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">Explore All Pages</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {siteLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="accent-chip inline-flex rounded-full px-3 py-1.5 text-xs font-medium text-zinc-700 transition hover:-translate-y-0.5 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-500">
            © {new Date().getFullYear()} Great Kminor. All rights reserved.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-3">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 px-2.5 py-1.5 text-xs text-zinc-700 transition hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-zinc-50 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:bg-zinc-900 dark:hover:text-white sm:px-3 sm:py-2 sm:text-sm"
            >
              <PlatformIcon label={social.label} />
              <span className="truncate">{compactLabel(social.label)}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
