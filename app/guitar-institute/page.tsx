import { ContactForm, ContentSection, GenericGrid, PageHero } from "@/components/sections/inner-page-sections";

export default function GuitarInstitutePage() {
  return (
    <>
      <PageHero
        title="Great Kminor Guitar Institute"
        subtitle="Premium guitar mentorship for worship musicians — technique, tone, creativity, and ministry formation."
      />
      <ContentSection title="Courses">
        <GenericGrid
          items={[
            { title: "Beginner Guitar Foundations", text: "Chords, timing, worship progressions, and confidence-building routines." },
            { title: "Worship Lead Guitar Mastery", text: "Ambient textures, melodic phrasing, and prophetic responsiveness." },
            { title: "Recording & Stage Excellence", text: "Tone shaping, live rigs, and session-ready professionalism." }
          ]}
        />
      </ContentSection>
      <ContentSection title="Registration Form">
        <ContactForm />
      </ContentSection>
    </>
  );
}
