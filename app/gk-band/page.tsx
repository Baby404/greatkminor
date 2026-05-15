import { ContentSection, GenericGrid, PageHero } from "@/components/sections/inner-page-sections";

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
            { title: "Live Reels", text: "Performance highlights and musical direction showcases." }
          ]}
        />
      </ContentSection>
    </>
  );
}
