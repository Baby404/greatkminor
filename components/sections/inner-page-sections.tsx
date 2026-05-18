import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import galleryImage1 from "@/components/brand/greatkminor (4).jpg";
import galleryImage2 from "@/components/brand/greatkminor (5).jpg";
import galleryImage3 from "@/components/brand/greatkminor (6).jpg";
import galleryImage4 from "@/components/brand/greatkminor (7).jpg";
import galleryImage5 from "@/components/brand/greatkminor (8).jpg";
import galleryImage6 from "@/components/brand/greatkminor (9).jpg";
import galleryImage7 from "@/components/brand/greatkminor (10).jpg";
import galleryImage8 from "@/components/brand/greatkminor (12).jpg";
import galleryImage9 from "@/components/brand/greatkminor (11).jpg";
import galleryImage10 from "@/components/brand/greatkminor (13).jpg";
import galleryImage11 from "@/components/brand/greatkminor (14).jpg";
import galleryImage12 from "@/components/brand/greatkminor (15).jpg";
import galleryImage13 from "@/components/brand/greatkminor (16).jpg";
import galleryImage14 from "@/components/brand/greatkminor (17).jpg";
import galleryImage15 from "@/components/brand/greatkminor (18).jpg";
import galleryImage16 from "@/components/brand/greatkminor (19).jpg";
import galleryImage17 from "@/components/brand/greatkminor (20).jpg";
import galleryImage18 from "@/components/brand/greatkminor (21).jpg";

export function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="pt-36">
      <div className="mx-auto w-[94%] max-w-7xl pb-14">
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">Great Kminor</p>
        <h1 className="mt-3 font-display text-4xl text-zinc-900 dark:text-zinc-100 md:text-6xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-400">{subtitle}</p>
      </div>
    </section>
  );
}

export function GenericGrid({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="glass rounded-2xl p-5">
          <h3 className="font-display text-2xl text-zinc-900 dark:text-zinc-100">{item.title}</h3>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{item.text}</p>
        </article>
      ))}
    </div>
  );
}

export function ContactForm() {
  return (
    <form className="glass space-y-4 rounded-3xl p-6">
      <input className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none ring-zinc-400 focus:ring dark:border-zinc-700 dark:bg-black dark:text-zinc-100" placeholder="Full Name" />
      <input className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none ring-zinc-400 focus:ring dark:border-zinc-700 dark:bg-black dark:text-zinc-100" placeholder="Email Address" />
      <textarea className="h-32 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none ring-zinc-400 focus:ring dark:border-zinc-700 dark:bg-black dark:text-zinc-100" placeholder="Message" />
      <Button>Send Inquiry</Button>
    </form>
  );
}

export function GalleryMasonry() {
  const images = [
    galleryImage1,
    galleryImage2,
    galleryImage3,
    galleryImage4,
    galleryImage5,
    galleryImage6,
    galleryImage7,
    galleryImage8,
    galleryImage9,
    galleryImage10,
    galleryImage11,
    galleryImage12,
    galleryImage13,
    galleryImage14,
    galleryImage15,
    galleryImage16,
    galleryImage17,
    galleryImage18
  ];
  return (
    <div className="masonry">
      {images.map((src, idx) => {
        const fullSrc = typeof src === "string" ? src : src.src;

        return (
          <a
            className="masonry-item block"
            key={`${fullSrc}-${idx}`}
            href={fullSrc}
            target="_blank"
            rel="noreferrer"
            aria-label="Open gallery image"
          >
            <Image
              src={src}
              alt="Great Kminor gallery"
              width={700}
              height={900}
              quality={100}
              sizes="(min-width: 1280px) 23vw, (min-width: 768px) 31vw, 94vw"
              className="h-auto w-full rounded-2xl transition-transform duration-300 hover:scale-[1.01]"
            />
          </a>
        );
      })}
    </div>
  );
}

export function ContentSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto w-[94%] max-w-7xl py-16">
      <SectionHeading title={title} />
      {children}
    </section>
  );
}
