"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "@/components/brand/hero.png";
import aboutImage from "@/components/brand/greatkminor (19).jpg";
import galleryImage1 from "@/components/brand/greatkminor (1).jpg";
import galleryImage2 from "@/components/brand/greatkminor (2).jpg";
import galleryImage3 from "@/components/brand/greatkminor (3).jpg";
import galleryImage4 from "@/components/brand/greatkminor (13).jpg";
import galleryImage5 from "@/components/brand/greatkminor (14).jpg";
import galleryImage6 from "@/components/brand/greatkminor (15).jpg";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { events } from "@/lib/data";
import { fadeUp, stagger } from "@/lib/motion";

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
          <Image src={heroImage} alt="Great Kminor portrait" fill priority quality={100} sizes="94vw" className="object-contain object-bottom" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/90 to-transparent p-5 dark:from-black dark:via-black/90">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="mb-2 text-[10px] uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
                Afro-Contemporary Gospel Sound
              </motion.p>
              <motion.h1 variants={fadeUp} className="font-script text-6xl leading-[0.88] text-zinc-900 dark:text-zinc-100">
                Great <span className="text-gradient">Kminor</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Gospel Guitarist • Worship Leader • Recording Artist
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
          Great Kminor is a multi-genre professional guitarist, recording artist, and live performer blending gospel, soul,
          Afro-fusion, and acoustic soundscapes. From worship stages to weddings, art festivals to cultural events, his music
          creates powerful, heartfelt experiences that resonate across audiences.
        </motion.p>
      </div>

      <div className="mx-auto hidden w-[94%] max-w-7xl items-center gap-10 lg:grid lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger}>
          <motion.p variants={fadeUp} className="mb-4 text-xs uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
            Afro-Contemporary Gospel Sound
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-script text-7xl leading-[0.86] text-zinc-900 dark:text-zinc-100 md:text-8xl lg:text-[9rem]">
            Great <span className="text-gradient">Kminor</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base text-zinc-600 dark:text-zinc-400 md:text-lg">
            Gospel Guitarist • Worship Leader • Recording Artist
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl rounded-2xl border border-zinc-200 bg-white p-4 text-base leading-relaxed text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
          >
            Great Kminor is a multi-genre professional guitarist, recording artist, and live performer blending gospel, soul,
            Afro-fusion, and acoustic soundscapes. From worship stages to weddings, art festivals to cultural events, his music
            creates powerful, heartfelt experiences that resonate across audiences.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
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
          <Image
            src={heroImage}
            alt="Great Kminor portrait"
            fill
            priority
            quality={100}
            sizes="(min-width: 1024px) 52vw, 94vw"
            className="object-contain object-bottom"
          />
        </motion.div>
      </div>
    </section>
  );
}

export function FeaturedMusic() {
  const featuredTracks = [
    {
      title: "Ebe (Supplication)",
      cover: "https://i.scdn.co/image/ab67616d0000b273a41f1f26503b95aa4265540c",
      link: "https://greatkminor.fanlink.tv/Ebe"
    },
    {
      title: "Hymn Fusion",
      cover: "https://ar.toneden.io/74933461/8df9248e-dc60-4110-99fc-7c1a33fbb7c8",
      link: "https://greatkminor.fanlink.tv/hymnfusion"
    },
    {
      title: "Amapiano Praise",
      cover: "https://i.scdn.co/image/ab67616d0000b273d5755767f2c9156302ef919c",
      link: "https://greatkminor.fanlink.tv/unusualamapianopraise"
    }
  ];

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
            <Image src={track.cover} alt={track.title} width={600} height={600} className="aspect-square w-full object-cover" />
            <div className="p-5">
              <p className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Single</p>
              <h3 className="mt-2 font-display text-2xl text-zinc-900 dark:text-zinc-100">{track.title}</h3>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">Available on Spotify, Apple Music, YouTube Music, Deezer, and Amazon Music.</p>
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

export function RecentVideos() {
  return (
    <section className="mx-auto w-[94%] max-w-7xl py-20">
      <SectionHeading eyebrow="Recent Videos" title="Unusual Praise Medley Live" />
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <a
          href="https://youtube.com/@great_kminor?si=tjUpiKL_VZTm_vpH"
          target="_blank"
          rel="noreferrer"
          className="group glass block overflow-hidden rounded-3xl"
        >
          <div className="flex aspect-video items-center justify-center bg-zinc-100 text-center dark:bg-zinc-900">
            <p className="px-6 text-sm text-zinc-600 dark:text-zinc-300">
              Watch on YouTube: Great Kminor Official Channel
            </p>
          </div>
        </a>

        <div className="glass rounded-3xl p-6">
          <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            Experience how Great Kminor is ministering through his exceptional guitar artistry—an experience you won’t want to
            miss, Stay Blessed!
          </p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            In the vibrant world of music, Great Kminor stands out as a minstrel who defies conventional boundaries. His unique
            approach to playing the guitar is not just unusual; it’s groundbreaking.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="https://youtube.com/@great_kminor?si=tjUpiKL_VZTm_vpH">Watch Video</Button>
            <Button href="https://www.youtube.com/@great_kminor" variant="ghost">
              More Videos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function UpcomingEventsPreview() {
  return (
    <section className="mx-auto w-[94%] max-w-7xl py-20">
      <SectionHeading eyebrow="Upcoming Events" title="Ministrations & Concerts" action={<Button href="/events" variant="ghost">View All</Button>} />
      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.date + event.city} className="glass flex flex-wrap items-center justify-between gap-4 rounded-2xl p-5">
            <p className="font-semibold text-zinc-900 dark:text-zinc-100">{event.date}</p>
            <p className="text-zinc-700 dark:text-zinc-300">{event.city}</p>
            <p className="text-zinc-500 dark:text-zinc-400">{event.venue}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AboutPreview() {
  return (
    <section className="mx-auto grid w-[94%] max-w-7xl gap-8 py-20 lg:grid-cols-2 lg:items-center">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">What you like to know</p>
        <SectionHeading
          eyebrow="My Biography"
          title="From Ogun State to Notable Stages"
          subtitle="Born Ayokunle Moses Okundare in Ogun State, Nigeria, Great Kminor embarked on his musical journey at the age of fifteen. He completed a one-year basic course in Guitar and Music Theory at the MAC AYLIT (Music Art and Creativity As You Like It) Institute, where he sharpened his artistry and built the versatility to perform virtually every genre of music."
        />
        <p className="mb-5 max-w-2xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          As his reputation grew, Great Kminor received recommendations to collaborate with notable artists including Emma
          OhMyGod, Laolu Gbenjo, BBO, Yetunde Are, Haruna Ishola, Dare Another Level, Gbenga Akinfenwa, and Dr. Evang Bola Are.
        </p>
        <Button href="/about">Read Full Story</Button>
      </div>
      <div className="relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800">
        <Image
          src={aboutImage}
          alt="Great Kminor on stage"
          width={1000}
          height={700}
          quality={100}
          unoptimized
          sizes="(min-width: 1024px) 47vw, 94vw"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}

export function GalleryPreview() {
  return (
    <section className="mx-auto w-[94%] max-w-7xl py-20">
      <SectionHeading eyebrow="Visual Journey" title="Performance & Studio Moments" action={<Button href="/gallery" variant="ghost">Open Gallery</Button>} />
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        {[galleryImage1, galleryImage2, galleryImage3, galleryImage4, galleryImage5, galleryImage6].map((src, i) => (
          <Image
            key={i}
            src={src}
            alt="Great Kminor gallery preview"
            width={700}
            height={500}
            quality={100}
            unoptimized
            sizes="(min-width: 1024px) 15vw, (min-width: 768px) 30vw, 94vw"
            className="h-64 w-full rounded-2xl object-cover"
          />
        ))}
      </div>
    </section>
  );
}

export function TestimonialsNewsletter() {
  return (
    <section className="mx-auto w-[94%] max-w-7xl py-20">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass rounded-3xl p-6">
          <SectionHeading eyebrow="Testimonials" title="Trusted by Churches, Events & Brands" />
          <p className="text-zinc-700 dark:text-zinc-300">
            “Great Kminor brought precision, excellence, and tangible spiritual depth to our conference.”
          </p>
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">— Worship Director, Lagos</p>
        </div>
        <div className="glass rounded-3xl p-6">
          <SectionHeading eyebrow="Newsletter" title="Get Music & Event Updates" />
          <form className="mt-3 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none ring-zinc-400 placeholder:text-zinc-500 focus:ring dark:border-zinc-700 dark:bg-black dark:text-zinc-100"
            />
            <Button>Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  );
}
