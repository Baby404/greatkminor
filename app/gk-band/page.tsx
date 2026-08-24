import { ContentSection, GenericGrid, PageHero } from "@/components/sections/inner-page-sections";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("GK Band", "Discover GK Band's premium live-performance options for corporate events, weddings, concerts, and worship experiences.", "/gk-band");

export default function GkBandPage() {
  return (
    <>
      <PageHero
        title="GK Band — Premium Live Performance Unit"
        subtitle="Corporate, wedding, concert, and worship experiences powered by excellence, precision, and atmosphere."
      />
      <ContentSection title="Band Members Showcase">
        <GenericGrid
          items={[
            { title: "Lead Guitar", text: "Great Kminor — Worship lead, creative direction, signature melodic style." },
            { title: "Rhythm Section", text: "Bass and drums team delivering tight groove and modern gospel dynamics." },
            { title: "Keys & Vocals", text: "Rich harmonic support, choir integration, and immersive live textures." }
          ]}
        />
      </ContentSection>
      <ContentSection title="Event Packages & Services">
        <GenericGrid
          items={[
            { title: "Corporate Experiences", text: "Elegant curated live sets for premium corporate events." },
            { title: "Wedding Performances", text: "Beautiful custom worship and live band moments for couples." },
            { title: "Concerts & Worship", text: "Full-energy concert sets and musically sensitive worship experiences for churches, festivals, and special gatherings." }
          ]}
        />
      </ContentSection>
      <ContentSection title="Book GK Band">
        <div className="glass rounded-3xl p-8 text-center">
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-base">
            Share your date, venue, audience size, and preferred performance style to receive a tailored band setup and proposal.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/contact">Request Availability</Button>
            <Button href="/services" variant="ghost">Explore Services</Button>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
