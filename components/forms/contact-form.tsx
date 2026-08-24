"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/data";

const fieldClass =
  "w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:border-zinc-700 dark:bg-black dark:text-zinc-100";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `Booking inquiry: ${form.get("service") || "Great Kminor"}`;
    const body = [
      `Name: ${form.get("name")}`,
      `Email: ${form.get("email")}`,
      `Phone: ${form.get("phone") || "Not provided"}`,
      `Service: ${form.get("service")}`,
      `Event date: ${form.get("date") || "Not specified"}`,
      `Location: ${form.get("location") || "Not specified"}`,
      `Budget: ${form.get("budget") || "Not specified"}`,
      "",
      "Message:",
      String(form.get("message") || "")
    ].join("\n");

    setSubmitted(true);
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="glass space-y-5 rounded-3xl p-6 md:p-8" onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Full name <span aria-hidden="true" className="text-orange-600">*</span>
          <input name="name" autoComplete="name" required className={fieldClass} placeholder="Your full name" />
        </label>
        <label className="space-y-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Email address <span aria-hidden="true" className="text-orange-600">*</span>
          <input name="email" type="email" autoComplete="email" required className={fieldClass} placeholder="you@example.com" />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Phone number
          <input name="phone" type="tel" autoComplete="tel" className={fieldClass} placeholder="Include country code" />
        </label>
        <label className="space-y-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Service type <span aria-hidden="true" className="text-orange-600">*</span>
          <select name="service" defaultValue="" required className={fieldClass}>
            <option value="" disabled>Select a service</option>
            <option>Live Band</option>
            <option>Corporate/Social Event</option>
            <option>Online Guitar Training</option>
            <option>Live Ministration</option>
            <option>Collaboration</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Event date
          <input name="date" type="date" className={fieldClass} />
        </label>
        <label className="space-y-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Event location
          <input name="location" autoComplete="address-level2" className={fieldClass} placeholder="City and venue" />
        </label>
      </div>

      <label className="block space-y-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
        Budget range
        <select name="budget" defaultValue="" className={fieldClass}>
          <option value="">Prefer not to say</option>
          <option>Below £500</option>
          <option>£500 - £1,000</option>
          <option>£1,000 - £2,500</option>
          <option>£2,500+</option>
        </select>
      </label>

      <label className="block space-y-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
        Tell us about your event <span aria-hidden="true" className="text-orange-600">*</span>
        <textarea name="message" required minLength={20} className={`${fieldClass} min-h-36 resize-y`} placeholder="Share the event format, audience size, schedule, and any special requests." />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit">Prepare Email Inquiry</Button>
        <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
          This opens your email app with the booking details ready to send.
        </p>
      </div>
      {submitted ? (
        <p role="status" className="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
          Your inquiry is ready in your email app. Please press Send there to complete it.
        </p>
      ) : null}
    </form>
  );
}
