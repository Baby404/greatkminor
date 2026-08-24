import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[75vh] w-[94%] max-w-3xl flex-col items-center justify-center pt-28 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">404 · Page not found</p>
      <h1 className="mt-4 font-display text-4xl text-zinc-900 dark:text-zinc-100 md:text-6xl">This page missed the set.</h1>
      <p className="mt-4 max-w-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
        The page may have moved, but the music and booking information are still available from the home page.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Button href="/">Back Home</Button>
        <Button href="/contact" variant="ghost">Contact the Team</Button>
      </div>
    </section>
  );
}
