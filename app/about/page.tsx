import { ContentSection, GenericGrid, PageHero } from "@/components/sections/inner-page-sections";
import Image from "next/image";
import aboutImage1 from "@/components/brand/greatkminor (1).png";
import aboutImage2 from "@/components/brand/greatkminor (4).png";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Me"
        subtitle="Meet Great Kminor: A Journey Through Music"
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
              Great Kminor, born Ayokunle Moses Okundare, is a talented guitarist and recording music artist who embarked on his
              musical journey at the tender age of fifteen. His passion for music led him to enroll in a one-year basic course in
              Guitar and Music Theory at the MAC AYLIT (Music Art and Creativity As You Like It) Institute. By the end of this
              intensive training, he had mastered various genres of music and earned recommendations to collaborate with several
              prominent artists including Emma OhMyGod, Laolu Gbenjo, BBO, Yetunde Are, Haruna Ishola, Dare Another Level,
              Gbenga Akinfenwa, and Dr. Evang Bola Are.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-base">
              In 2013, driven by a desire to share his knowledge and skills with others, Great Kminor founded the Kminor Guitar
              Institute. Since its inception, the institute has successfully trained over 450 aspiring guitarists worldwide.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-base">
              By 2014, Great Kminor had established himself as both a live performing artist and recording musician. He developed
              a unique style that blends urban contemporary music with exceptional lead guitar techniques that enchant audiences
              globally. His dynamic performances have graced numerous live concerts and corporate events across Nigeria and the
              United Kingdom. Currently serving as the Resident Lead Guitarist at RCCG City Of David in Walderslade, Chatham
              (UK), Great Kminor has released his debut single along with several tracks available on all digital platforms; an EP
              and album are forthcoming. He has been featured on various projects that highlight his artistic prowess.
            </p>
          </div>
        </div>
      </ContentSection>
      <ContentSection title="One of the Most Versatile Guitarists in the Music Industry">
        <GenericGrid
          items={[
            {
              title: "Stage Collaborations",
              text: "Great Kminor's stage presence is formidable—he has shared stages with renowned artists such as Don Moen, Tosin Bee, Dr Bola Are, Beejay Sax, EmmaOhMyGod, and BBO among others."
            },
            {
              title: "Education",
              text: "In addition to his musical pursuits, he holds a Bachelor's Degree in Geography from Olabisi Onabanjo University (2011–2015)."
            },
            {
              title: "Leadership & Vision",
              text: "He serves as the founder and Creative Director of GK Band while leading the Praise Campaign movement since 2017—a yearly Praise Tour across towns in Nigeria."
            }
          ]}
        />
      </ContentSection>
      <ContentSection title="Legacy & Impact">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          <div className="order-2 lg:order-1">
            <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-lg">
              With numerous accolades for captivating performances and insightful interviews about his growth within the industry,
              Great Kminor continues to inspire many through his dedication to music and faith-driven endeavors.
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-lg">
              Beyond the stage, his impact is seen in the lives he has mentored, the worship teams he has strengthened, and the
              audiences he has moved through excellence in sound and spirit-led expression.
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-lg">
              Through consistent discipline, creativity, and service, Great Kminor has built a legacy that bridges artistry and
              ministry—raising a new standard for guitar performance within gospel and contemporary music spaces.
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
    </>
  );
}
