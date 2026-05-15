import { ContentSection, GalleryMasonry, PageHero } from "@/components/sections/inner-page-sections";

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
    </>
  );
}
