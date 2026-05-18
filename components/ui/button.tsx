import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "gold" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "gold", className = "" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300";
  const style =
    variant === "gold"
      ? "bg-black text-white hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-[0_8px_24px_rgba(234,88,12,0.25)] dark:bg-white dark:text-black dark:hover:bg-zinc-200"
      : "border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-transparent dark:text-zinc-100 dark:hover:bg-zinc-900";

  if (href) {
    return (
      <Link href={href} className={`${base} ${style} ${className}`}>
        {children}
      </Link>
    );
  }

  return <button className={`${base} ${style} ${className}`}>{children}</button>;
}
