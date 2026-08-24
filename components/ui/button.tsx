import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "gold" | "ghost";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export function Button({ href, children, variant = "gold", className = "", type = "button", disabled = false }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:focus-visible:ring-offset-black";
  const style =
    variant === "gold"
      ? "bg-black text-white hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-[0_8px_24px_rgba(234,88,12,0.25)] dark:bg-white dark:text-black dark:hover:bg-zinc-200"
      : "border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-transparent dark:text-zinc-100 dark:hover:bg-zinc-900";

  if (href) {
    const isExternal = href.startsWith("http://") || href.startsWith("https://");

    return (
      <Link
        href={href}
        className={`${base} ${style} ${className}`}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return <button type={type} disabled={disabled} className={`${base} ${style} ${className}`}>{children}</button>;
}
