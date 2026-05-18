import { ContentSection, PageHero } from "@/components/sections/inner-page-sections";

const services = [
  {
    title: "Live Band",
    text: "Professional live band performance for concerts, worship programs, weddings, and special events."
  },
  {
    title: "Corporate/Social Event",
    text: "Premium guitar-led music experiences tailored for corporate functions, private gatherings, and social celebrations."
  },
  {
    title: "Online Guitar Training",
    text: "Structured virtual guitar coaching for beginners and intermediate players with practical technique and musicality focus."
  },
  {
    title: "Live Ministration",
    text: "Spirit-led live ministrations for churches, conferences, and worship encounters with depth and excellence."
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
            </article>
          ))}
        </div>
      </ContentSection>
    </>
  );
}

