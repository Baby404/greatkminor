import { ContentSection, PageHero } from "@/components/sections/inner-page-sections";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Live Band",
    text: "Professional live band performance for concerts, worship programs, weddings, and special events.",
    details: [
      "Full live set curation tailored to your audience",
      "Stage-ready team with rehearsed transitions and flow",
      "Flexible setup for small, medium, and large venues"
    ]
  },
  {
    title: "Corporate/Social Event",
    text: "Premium guitar-led music experiences tailored for corporate functions, private gatherings, and social celebrations.",
    details: [
      "Ambient, classy, and engaging live music atmosphere",
      "Custom song direction for brand tone or event theme",
      "Ideal for dinners, networking sessions, launches, and receptions"
    ]
  },
  {
    title: "Online Guitar Training",
    text: "Structured virtual guitar coaching for beginners and intermediate players with practical technique and musicality focus.",
    details: [
      "One-on-one and group classes with progressive modules",
      "Technique, rhythm, ear training, improvisation, and tone control",
      "Performance assignments with clear growth milestones"
    ]
  },
  {
    title: "Live Ministration",
    text: "Spirit-led live ministrations for churches, conferences, and worship encounters with depth and excellence.",
    details: [
      "Prayerful preparation and musically sensitive delivery",
      "Strong flow for worship nights, conventions, and conferences",
      "Balanced sound approach for both intimate and large gatherings"
    ]
  }
];

const bookingSteps = [
  {
    title: "Share Event Details",
    text: "Send your date, location, audience type, and preferred service so the right setup can be planned."
  },
  {
    title: "Receive a Tailored Plan",
    text: "Get a custom performance/training proposal including scope, flow, and technical requirements."
  },
  {
    title: "Confirm & Prepare",
    text: "Once confirmed, preparation starts immediately to ensure a polished, memorable delivery."
  }
];

const faqs = [
  {
    q: "Do you perform outside church events?",
    a: "Yes. Services cover social events, private celebrations, corporate engagements, conferences, and concerts in addition to ministry events."
  },
  {
    q: "Can the setlist be customized?",
    a: "Yes. Performances can be tailored to your audience mood, theme, and preferred style while maintaining artistic quality."
  },
  {
    q: "Do you travel for bookings?",
    a: "Yes. Travel-based bookings are available depending on schedule and logistics."
  }
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="My Services"
        subtitle="Professional music services for live events, ministry, training, and premium performance experiences."
      />

      <ContentSection title="Available Services">
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="glass rounded-2xl p-6">
              <h3 className="font-display text-2xl text-zinc-900 dark:text-zinc-100">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-base">{service.text}</p>
              <ul className="mt-4 space-y-2">
                {service.details.map((item) => (
                  <li key={item} className="text-sm text-zinc-600 dark:text-zinc-400">
                    • {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="How Booking Works">
        <div className="grid gap-5 md:grid-cols-3">
          {bookingSteps.map((step, index) => (
            <article key={step.title} className="glass rounded-2xl p-6">
              <p className="accent-chip inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-700 dark:text-zinc-300">
                Step {index + 1}
              </p>
              <h3 className="mt-3 font-display text-2xl text-zinc-900 dark:text-zinc-100">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{step.text}</p>
            </article>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Frequently Asked Questions">
        <div className="space-y-4">
          {faqs.map((faq) => (
            <article key={faq.q} className="glass rounded-2xl p-6">
              <h3 className="font-display text-2xl text-zinc-900 dark:text-zinc-100">{faq.q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-base">{faq.a}</p>
            </article>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Ready to Book?">
        <div className="glass rounded-3xl p-8 text-center">
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-base">
            From corporate experiences and private celebrations to live ministry and guitar mentorship, every booking is handled with professionalism,
            musical excellence, and intentional audience connection.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/contact">Book Now</Button>
            <Button href="/music" variant="ghost">Listen First</Button>
          </div>
        </div>
      </ContentSection>
    </>
  );
}

