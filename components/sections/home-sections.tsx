"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroImage1 from "@/components/brand/IMG_5416.JPG.jpeg";
import heroImage2 from "@/components/brand/IMG_5415.JPG.jpeg";
import aboutImage from "@/components/brand/hero.png";
import galleryImage1 from "@/components/brand/greatkminor aa.jpg";
import galleryImage2 from "@/components/brand/greatkminor aaa.jpeg";
import galleryImage3 from "@/components/brand/greatkminor sw.jpeg";
import galleryImage4 from "@/components/brand/greatkminor (13).jpg";
import galleryImage5 from "@/components/brand/greatkminor (14).jpg";
import galleryImage6 from "@/components/brand/greatkminor (15).jpg";
import { Button } from "@/components/ui/button";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeUp, stagger } from "@/lib/motion";
import { musicCatalog } from "@/lib/music-catalog";
import reviewsData from "@/gmb-reviews-api.json";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-28 lg:min-h-[92vh]">
      <div className="mx-auto w-[94%] max-w-7xl lg:hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative h-[78vh] min-h-[560px] w-full overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950"
        >
          <Image src={heroImage1} alt="Great Kminor portrait" fill priority quality={100} sizes="94vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          <div className="absolute -right-4 top-6 h-40 w-28 overflow-hidden rounded-2xl border-2 border-white/70 shadow-2xl md:h-52 md:w-36">
            <Image src={heroImage2} alt="Great Kminor alternate portrait" fill quality={100} sizes="160px" className="object-cover" />
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/90 to-transparent p-5 dark:from-black dark:via-black/90">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="mb-2 text-[10px] uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
                Urban Contemporary Guitar Experience
              </motion.p>
              <motion.h1 variants={fadeUp} className="font-script text-6xl leading-[0.88] text-zinc-900 dark:text-zinc-100">
                Great <span className="text-gradient">Kminor</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Professional Guitarist • Recording Artist • Live Performer
              </motion.p>
              <motion.div variants={fadeUp} className="mt-5 flex flex-wrap gap-2">
                <Button href="/music">Listen Now</Button>
                <Button href="/contact" variant="ghost">
                  Book Great Kminor
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-xl rounded-2xl border border-zinc-200 bg-white p-4 text-sm leading-relaxed text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
          >
          Great Kminor is a genre-defining professional guitarist, recording artist, and live performer blending soul, jazz,
          Afro-fusion, and modern acoustic expression. From concert stages and international conferences to weddings, private
          events, and cultural festivals, his sound creates immersive, emotionally engaging experiences.
        </motion.p>
      </div>

      <div className="mx-auto hidden w-[94%] max-w-7xl items-stretch gap-10 lg:grid lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="relative flex h-full flex-col justify-center rounded-[2rem] border border-zinc-200/80 bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80 lg:p-10"
        >
          <div className="pointer-events-none absolute -left-2 top-8 h-16 w-1 rounded-full bg-gradient-to-b from-amber-400 via-orange-500 to-pink-500" />

          <motion.p variants={fadeUp} className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
            Urban Contemporary Guitar Experience
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-script text-6xl leading-[0.9] text-zinc-900 dark:text-zinc-100 md:text-7xl lg:text-8xl">
            Great <span className="text-gradient">Kminor</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-sm font-medium uppercase tracking-[0.16em] text-zinc-600 dark:text-zinc-400 md:text-base">
            Professional Guitarist • Recording Artist • Live Performer
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl rounded-2xl border border-zinc-200/80 bg-white/90 p-5 text-base leading-relaxed text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950/90 dark:text-zinc-300"
          >
            Great Kminor is a genre-defining professional guitarist, recording artist, and live performer blending soul, jazz,
            Afro-fusion, and modern acoustic expression. From concert stages and international conferences to weddings, private
            events, and cultural festivals, his sound creates immersive, emotionally engaging experiences.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <Button href="/music">Listen Now</Button>
            <Button href="/contact" variant="ghost">
              Book Great Kminor
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative h-[420px] w-full md:h-[560px] lg:h-[760px]"
        >
          <div className="absolute inset-0 overflow-hidden rounded-[2.25rem] border border-zinc-200 bg-zinc-100 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              src={heroImage1}
              alt="Great Kminor portrait"
              fill
              priority
              quality={100}
              sizes="(min-width: 1024px) 52vw, 94vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          </div>

          <div className="absolute -bottom-8 -left-8 hidden h-48 w-36 rotate-[-8deg] overflow-hidden rounded-2xl border-4 border-white shadow-2xl md:block">
            <Image src={heroImage2} alt="Great Kminor live performance" fill quality={100} sizes="220px" className="object-cover" />
          </div>

          <div className="absolute right-6 top-6 hidden rounded-full border border-white/80 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-700 backdrop-blur md:block">
            Live • Events • Concerts
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function FeaturedMusic() {
  const featuredTracks = musicCatalog
    .filter((release) => release.category === "Official release")
    .slice(0, 3)
    .map((release) => ({
      ...release,
      link: Object.values(release.platforms)[0] as string,
      platformNames: Object.keys(release.platforms).join(", ")
    }));

  return (
    <section className="mx-auto w-[94%] max-w-7xl py-20">
      <SectionHeading
        eyebrow="Featured Music"
        title="Anointed Sounds, Crafted with Excellence"
        action={<Button href="/music" variant="ghost">Open Music Page</Button>}
      />
      <div className="mb-8 overflow-hidden rounded-3xl border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950">
        <iframe
          src="https://open.spotify.com/embed/artist/0APfsQA8C6C2MmZgcMjtOn?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Great Kminor Spotify Player"
        />
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {featuredTracks.map((track) => (
          <article key={track.title} className="glass overflow-hidden rounded-2xl transition hover:-translate-y-1">
            <Image src={track.image} alt={`${track.title} official artwork`} width={600} height={600} className="aspect-square w-full bg-zinc-100 object-contain dark:bg-zinc-900" />
            <div className="p-5">
              <p className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">{track.category}</p>
              <h3 className="mt-2 font-display text-2xl text-zinc-900 dark:text-zinc-100">{track.title}</h3>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">Direct links available for: {track.platformNames}.</p>
              <Button href={track.link} className="mt-5">
              Stream
              </Button>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button href="/music" variant="ghost">View All Releases</Button>
      </div>
    </section>
  );
}

export function ServicesPreview() {
  const services = [
    {
      title: "Live Band",
      icon: "🎸",
      description:
        "A complete live music experience for concerts, weddings, receptions, and premium celebrations with professional stage coordination and rich instrumentation."
    },
    {
      title: "Corporate/Social Event",
      icon: "🎤",
      description:
        "Refined guitar-led live sets tailored for corporate dinners, conferences, networking events, birthdays, and private gatherings with the right ambience."
    },
    {
      title: "Online Guitar Training",
      icon: "🎼",
      description:
        "Structured one-on-one and group coaching covering technique, tone development, improvisation, and performance confidence for beginner to advanced players."
    },
    {
      title: "Live Ministration",
      icon: "🙏",
      description:
        "Spirit-filled instrumental worship sessions for church programs, worship nights, conferences, and faith-based events with musical excellence and sensitivity."
    }
  ];

  return (
    <section className="mx-auto w-[94%] max-w-7xl py-20">
      <SectionHeading
        eyebrow="My Services"
        title="Professional Music Services"
        subtitle="Book Great Kminor for live performances, training, and premium event experiences."
        action={<Button href="/services" variant="ghost">View Services Page</Button>}
      />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <article key={service.title} className="glass rounded-2xl p-5">
            <span className="accent-chip inline-flex h-10 w-10 items-center justify-center rounded-full text-lg" aria-hidden="true">
              {service.icon}
            </span>
            <h3 className="font-display text-2xl text-zinc-900 dark:text-zinc-100">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function AboutPreview() {
  return (
    <section className="mx-auto grid w-[94%] max-w-7xl gap-8 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="order-2 lg:order-1">
        <SectionHeading
          eyebrow="My Biography"
          title="From Ogun State to Global Stages"
          subtitle="Born Ayokunle Moses Okundare in Ogun State, Nigeria, Great Kminor embarked on his musical journey at the age of fifteen. He completed a one-year basic course in Guitar and Music Theory at the MAC AYLIT (Music Art and Creativity As You Like It) Institute, where he sharpened his artistry and built the versatility to perform virtually every genre of music."
        />
        <p className="mb-5 max-w-2xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          As his reputation grew, Great Kminor received recommendations to collaborate with notable artists including Emma
          OhMyGod, Laolu Gbenjo, BBO, Yetunde Are, Haruna Ishola, Dare Another Level, Gbenga Akinfenwa, and Dr. Evang Bola Are.
        </p>
        <Button href="/about">Read Full Story</Button>
      </div>
      <div className="order-1 lg:order-2">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
        <Image
          src={aboutImage}
          alt="Great Kminor on stage"
          fill
          quality={100}
          sizes="(min-width: 1024px) 34vw, (min-width: 768px) 60vw, 94vw"
          className="object-cover object-center"
        />
        </div>
      </div>
    </section>
  );
}

export function GalleryPreview() {
  return (
    <section className="mx-auto w-[94%] max-w-7xl py-20">
      <SectionHeading eyebrow="Visual Journey" title="Performance & Studio Moments" action={<Button href="/gallery" variant="ghost">View Full Gallery</Button>} />
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        {[galleryImage1, galleryImage2, galleryImage3, galleryImage4, galleryImage5, galleryImage6].map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`Great Kminor performance gallery preview ${i + 1}`}
            width={700}
            height={500}
            quality={100}
            sizes="(min-width: 1024px) 15vw, (min-width: 768px) 30vw, 94vw"
            className="h-64 w-full rounded-2xl object-cover"
          />
        ))}
      </div>
    </section>
  );
}

export function TestimonialsNewsletter() {
  const reviews = (reviewsData.reviews || []).filter((review) => Boolean(review.text)).slice(0, 3);
  const totalRatings = reviewsData.place?.user_ratings_total ?? reviewsData.reviewCount ?? reviews.length;
  const averageRating = reviewsData.place?.rating ?? 5;

  return (
    <section className="mx-auto w-[94%] max-w-7xl py-20">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass rounded-3xl p-6">
          <SectionHeading
            eyebrow="Google Reviews"
            title={`Rated ${averageRating}/5 on Google (${totalRatings} total ratings)`}
          />

          <div className="space-y-4">
            {reviews.map((review, index) => (
              <article key={`${review.author_name}-${index}`} className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
                <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  “{review.text}”
                </p>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">— {review.author_name || "Google User"}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">{review.rating ? `${review.rating}/5` : "5/5"}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-4">
            <Button href={reviewsData.place?.google_maps_url || "https://maps.google.com"} variant="ghost">
              View all on Google
            </Button>
          </div>
        </div>
        <div className="glass rounded-3xl p-6">
          <SectionHeading eyebrow="Newsletter" title="Get Music & Event Updates" />
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
