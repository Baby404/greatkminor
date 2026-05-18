import { ContentSection, GenericGrid, PageHero } from "@/components/sections/inner-page-sections";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import aboutImage1 from "@/components/brand/IMG_5415.JPG.jpeg";
import aboutImage2 from "@/components/brand/greatkminor (4).png";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Great Kminor"
        subtitle="Professional guitarist, recording artist, and live performer building memorable experiences across concerts, social events, and cultural stages."
      />
      <ContentSection title="Biography">
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="glass overflow-hidden rounded-3xl lg:col-span-2">
            <Image
              src={aboutImage1}
              alt="Great Kminor performing on stage"
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="glass rounded-3xl p-6 md:p-8 lg:col-span-3">
            <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-base">
              Great Kminor is a genre-defining professional guitarist, recording artist, and live performer whose work bridges
              culture, creativity, and contemporary sound. Blending soul, jazz, Afro-fusion, and modern acoustic expression, he has
              developed a distinctive urban contemporary style that resonates across international audiences and diverse performance
              spaces.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-base">
              Certified with a Diploma in Guitar and Music Theory from the MAC-AYLIT Institute, Nigeria, Great Kminor combines
              strong technical mastery with emotive interpretation. His performance career spans high-profile social events,
              international conferences, concerts, cultural festivals, and curated artistic showcases across multiple countries.
              Known for his dynamic phrasing and genre versatility, he delivers performances that are both technically refined and
              emotionally engaging.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-base">
              Now based in the United Kingdom, Great Kminor operates within one of the world’s most structured creative industries,
              where he continues to expand his artistic footprint through live performances, cultural collaborations, and
              cross-border creative projects. His exposure to the UK’s professional arts ecosystem has strengthened his approach to
              artistic development, creative entrepreneurship, and long-term industry sustainability.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-base">
              Great Kminor has established a reputation for moving seamlessly between performance environments, from concert stages
              and art festivals to luxury weddings and exclusive private events. His ability to adapt his sound while maintaining a
              clear artistic identity has positioned him as a sought-after live instrumentalist capable of connecting with
              multicultural audiences.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-base">
              Beyond performance, he is deeply committed to mentorship and creative development. Through structured teaching and
              masterclass sessions, he has influenced and trained emerging guitarists across Europe, North America, and the Middle
              East, including Germany, Italy, Canada, Dubai, and the United States. His work contributes to the growth of
              contemporary guitar performance and cross-cultural music exchange on a global scale.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-base">
              With notable record releases and collaborative projects, Great Kminor continues to evolve as both a performing artist
              and creative visionary. His music reinterprets classics, introduces original compositions, and presents instrumental
              storytelling in a way that feels modern yet rooted. A student of sound and curator of immersive musical experiences,
              he approaches every stage with intentionality and artistic precision.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-base">
              Great Kminor believes music should transcend entertainment and connect cultures, create atmosphere, and leave lasting
              impact.
            </p>
          </div>
        </div>
      </ContentSection>
      <ContentSection title="One of the Most Versatile Guitarists in the Music Industry">
        <GenericGrid
          items={[
            {
              title: "Stage Collaborations",
              text: "Great Kminor has built a strong cross-genre performance reputation, collaborating with artists and creatives across worship, contemporary, and mainstream live-event spaces."
            },
            {
              title: "Training & Mentorship",
              text: "Through structured coaching and masterclass sessions, he has trained and influenced emerging guitarists across Europe, North America, and the Middle East."
            },
            {
              title: "Leadership & Vision",
              text: "He continues to expand his global creative footprint through live performances, cultural collaborations, and cross-border artistic projects with a focus on excellence and sustainability."
            }
          ]}
        />
      </ContentSection>
      <ContentSection title="Legacy & Impact">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          <div className="order-2 lg:order-1">
            <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-lg">
              Great Kminor continues to inspire audiences through excellence, versatility, and intentional artistry that connects
              with people across cultures and event spaces.
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-lg">
              Beyond the stage, his impact is seen in the lives he has mentored, the creatives he has developed, and the communities
              he has served through innovative and emotionally resonant performance.
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-lg">
              His philosophy is simple yet powerful: music should transcend entertainment, shape atmosphere, and leave lasting
              impact.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="glass relative ml-auto aspect-[3/4] w-full max-w-[320px] overflow-hidden rounded-3xl">
            <Image
              src={aboutImage2}
              alt="Great Kminor portrait"
              fill
              quality={100}
              sizes="(min-width: 1024px) 20vw, (min-width: 768px) 45vw, 94vw"
              className="h-full w-full object-cover object-center"
            />
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Work With Great Kminor">
        <div className="glass rounded-3xl p-8 text-center">
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-base">
            Looking for a refined live guitar experience, a culturally rich stage performance, or premium musical direction for your event?
            Let’s create a set that fits your audience and atmosphere.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/services">View Services</Button>
            <Button href="/contact" variant="ghost">Start Booking</Button>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
