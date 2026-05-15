import { ContactForm, ContentSection, PageHero } from "@/components/sections/inner-page-sections";
import { contactInfo } from "@/lib/data";

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
      <ContentSection title="WhatsApp & Socials">
        <div className="glass rounded-3xl p-6">
          <p className="text-zinc-700 dark:text-zinc-300">Email: {contactInfo.email}</p>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">Instagram: {contactInfo.instagram}</p>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">Facebook: {contactInfo.facebook}</p>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">YouTube: {contactInfo.youtube}</p>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">TikTok: {contactInfo.tiktok}</p>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">Availability Calendar UI: Coming soon with live booking slots.</p>
        </div>
      </ContentSection>
    </>
  );
}
