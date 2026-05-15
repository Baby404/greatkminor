import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  action?: ReactNode;
};

export function SectionHeading({ eyebrow, title, subtitle, action }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow ? <p className="mb-2 text-xs uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">{eyebrow}</p> : null}
        <h2 className="font-display text-3xl text-zinc-900 dark:text-zinc-100 md:text-5xl">{title}</h2>
        {subtitle ? <p className="mt-3 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400 md:text-base">{subtitle}</p> : null}
      </div>
      {action}
    </div>
  );
}
