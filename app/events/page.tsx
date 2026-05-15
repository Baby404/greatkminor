import { ContentSection, GalleryMasonry, GenericGrid, PageHero } from "@/components/sections/inner-page-sections";
import { Button } from "@/components/ui/button";

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Upcoming Ministrations & Concerts"
        subtitle="Join Great Kminor live across worship nights, conferences, and curated faith events."
      />
      <ContentSection title="Upcoming Events">
        <GenericGrid
          items={[
            { title: "Lagos Worship Encounter", text: "Jun 15, 2026 • Eko Worship Arena" },
            { title: "Abuja Fire Night", text: "Jul 02, 2026 • Faith Convention Hall" },
            { title: "Port Harcourt Praise", text: "Aug 10, 2026 • Rivers Praise Centre" }
          ]}
        />
        <div className="mt-6">
          <Button href="/contact">Booking CTA</Button>
        </div>
      </ContentSection>
      <ContentSection title="Past Events Gallery">
        <GalleryMasonry />
      </ContentSection>
    </>
  );
}
