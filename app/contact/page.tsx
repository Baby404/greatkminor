import { ContactForm, ContentSection, PageHero } from "@/components/sections/inner-page-sections";
import { Button } from "@/components/ui/button";

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

      <ContentSection title="Before You Submit">
        <div className="glass rounded-3xl p-8 text-center">
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-base">
            Want to review service packages and performance style first? Explore the service options or listen to releases, then return here with your preferred booking direction.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/services">View Services</Button>
            <Button href="/music" variant="ghost">Listen to Music</Button>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
