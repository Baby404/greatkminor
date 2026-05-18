import { ContactForm, ContentSection, PageHero } from "@/components/sections/inner-page-sections";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact & Booking"
        subtitle="For ministrations, concerts, collaborations, and premium event bookings, connect with Great Kminor’s team."
      />
      <ContentSection title="Booking Inquiry Form">
        <ContactForm />
      </ContentSection>
    </>
  );
}
