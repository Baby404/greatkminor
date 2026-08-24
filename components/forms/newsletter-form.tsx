"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/data";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") || "");
    setSubmitted(true);
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent("Newsletter subscription")}&body=${encodeURIComponent(`Please add ${email} to the Great Kminor music and events mailing list.`)}`;
  }

  return (
    <form className="mt-3" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="newsletter-email">Email address</label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Enter your email"
          className="w-full rounded-full border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:border-zinc-700 dark:bg-black dark:text-zinc-100"
        />
        <Button type="submit">Subscribe</Button>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
        Opens your email app to confirm the subscription. No spam.
      </p>
      {submitted ? <p role="status" className="mt-2 text-sm text-emerald-700 dark:text-emerald-400">Subscription email prepared—press Send in your email app.</p> : null}
    </form>
  );
}
