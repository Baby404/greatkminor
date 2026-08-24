import { ContentSection, GalleryMasonry, PageHero } from "@/components/sections/inner-page-sections";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Gallery", "Explore Great Kminor performance, studio, rehearsal, and live-event photography.", "/gallery");

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Performance, Studio & Visual Highlights"
        subtitle="A premium visual archive of ministrations, rehearsals, live sets, and worship moments."
      />
      <ContentSection title="Masonry Gallery">
        <GalleryMasonry />
      </ContentSection>
      <ContentSection title="Bring This Sound to Your Event">
        <div className="glass rounded-3xl p-8 text-center">
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-base">
            Planning a concert, celebration, corporate event, or worship gathering? Share the details with the team.
          </p>
          <Button href="/contact" className="mt-6">Start a Booking</Button>
        </div>
      </ContentSection>
    </>
  );
}
