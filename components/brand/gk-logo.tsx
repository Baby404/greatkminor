import Link from "next/link";
import Image from "next/image";
import gkLogo from "./gk.png";

type GkLogoProps = {
  href?: string;
  size?: "sm" | "md";
  showWordmark?: boolean;
  className?: string;
  plain?: boolean;
};

export function GkLogo({ href = "/", size = "md", showWordmark = true, className = "", plain = false }: GkLogoProps) {
  const box = size === "sm" ? "h-10 w-10" : "h-12 w-12";
  const text = size === "sm" ? "text-base" : "text-lg";
  const plainSize = size === "sm" ? "h-9 w-[130px]" : "h-10 w-[150px]";

  return (
    <Link href={href} className={`group inline-flex items-center gap-3 ${className}`} aria-label="Great Kminor home">
      {plain ? (
        <span className={`relative ${plainSize} rounded-md bg-transparent px-1 dark:bg-white`}>
          <Image src={gkLogo} alt="Great Kminor logo" fill sizes="150px" className="object-contain" priority />
        </span>
      ) : (
        <span className={`relative ${box} overflow-hidden rounded-xl border border-gold-300/45 bg-black/60 shadow-glow`}>
          <Image
            src={gkLogo}
            alt="Great Kminor logo"
            fill
            sizes="48px"
            className="object-contain p-1.5"
            priority
          />
        </span>
      )}

      {showWordmark ? (
        <span className={`font-display ${text} leading-none text-gradient transition group-hover:opacity-95`}>
          Great Kminor
        </span>
      ) : null}
    </Link>
  );
}
