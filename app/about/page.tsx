import { ContentSection, GenericGrid, PageHero } from "@/components/sections/inner-page-sections";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="What You Like to Know — My Biography"
        subtitle="Born Ayokunle Moses Okundare in Ogun State, Nigeria, Great Kminor began his musical journey at the age of fifteen and has grown into a versatile guitarist, recording artist, and live performer."
      />
      <ContentSection title="Biography">
        <div className="glass rounded-3xl p-6 md:p-8">
          <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-base">
            Born Ayokunle Moses Okundare in Ogun State, Nigeria, Great Kminor embarked on his musical journey at the young age
            of fifteen. His passion for music led him to enroll in a one-year basic course in Guitar and Music Theory at the MAC
            AYLIT (Music Art and Creativity As You Like It) Institute.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-base">
            During this formative year, he honed his skills and developed a remarkable proficiency with the guitar, enabling him
            to play virtually every genre of music. As his reputation grew, Great Kminor received recommendations to collaborate
            with several notable artists such as Emma OhMyGod, Laolu Gbenjo, BBO, Yetunde Are, Haruna Ishola, Dare Another
            Level, Gbenga Akinfenwa, and Dr. Evang Bola Are.
          </p>
        </div>
      </ContentSection>
      <ContentSection title="Biography Timeline">
        <GenericGrid
          items={[
            { title: "Early Foundations", text: "Started guitar journey in church fellowships, developing a spiritually anchored style." },
            { title: "National Platforms", text: "Served as worship guitarist across major Nigerian gospel events and live recordings." },
            { title: "Recording Era", text: "Released spirit-filled originals blending Afro-contemporary textures with excellence." }
          ]}
        />
      </ContentSection>
      <ContentSection title="Mission, Collaborations & Achievements">
        <GenericGrid
          items={[
            { title: "Mission", text: "To reveal Christ through guitar artistry and worship leadership." },
            { title: "Collaborations", text: "Worked with worship teams, choirs, and gospel producers across Nigeria." },
            { title: "Achievements", text: "Featured performances, mentorship impact, and growing digital reach." }
          ]}
        />
      </ContentSection>
    </>
  );
}
