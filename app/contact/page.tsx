import { ContentSection, PageHero } from "@/components/sections/inner-page-sections";
import { ContactForm } from "@/components/forms/contact-form";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Contact & Booking", "Contact Great Kminor's team for concerts, events, collaborations, ministrations, and training inquiries.", "/contact");

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

          <div className="mt-8 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            <p>
              Phone: <a href={`tel:${contactInfo.phone}`} className="underline">{contactInfo.phone}</a>
            </p>
            <p>
              Email: <a href={`mailto:${contactInfo.email}`} className="underline">{contactInfo.email}</a>
            </p>
            <p>
              Address: <a href={contactInfo.mapsLink} target="_blank" rel="noreferrer" className="underline">{contactInfo.address}</a>
            </p>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
