import Image from "next/image";
import { ContentSection, PageHero } from "@/components/sections/inner-page-sections";
import { Button } from "@/components/ui/button";
import { musicCatalog, platformProfiles } from "@/lib/music-catalog";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Music",
  "Explore Great Kminor's complete verified catalog with release-specific artwork and direct Apple Music, Spotify, Deezer, and Audiomack links.",
  "/music"
);

const platformStyles: Record<string, string> = {
  Spotify: "border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200",
  "Apple Music": "border-rose-300 bg-rose-50 text-rose-900 dark:border-rose-900 dark:bg-rose-950/40 dark:text-rose-200",
  Deezer: "border-violet-300 bg-violet-50 text-violet-900 dark:border-violet-900 dark:bg-violet-950/40 dark:text-violet-200",
  Audiomack: "border-orange-300 bg-orange-50 text-orange-900 dark:border-orange-900 dark:bg-orange-950/40 dark:text-orange-200",
  "Amazon Music": "border-sky-300 bg-sky-50 text-sky-900 dark:border-sky-900 dark:bg-sky-950/40 dark:text-sky-200"
};

function releaseYear(date: string) {
  return new Date(`${date}T12:00:00Z`).getUTCFullYear();
}

export default function MusicPage() {
  const latestRelease = musicCatalog[0];

  return (
    <>
      <PageHero
        title="Music Hub"
        subtitle="The complete verified Great Kminor catalog—each track matched to its own official artwork and direct streaming links."
      />

      <ContentSection title="Latest Release">
        <div className="glass grid overflow-hidden rounded-3xl md:grid-cols-[320px_1fr]">
          <div className="relative aspect-square bg-zinc-100 dark:bg-zinc-900">
            <Image
              src={latestRelease.image}
              alt={`${latestRelease.title} official artwork`}
              fill
              priority
              sizes="(min-width: 768px) 320px, 94vw"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col justify-center p-6 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600 dark:text-amber-400">
              {latestRelease.category} · {releaseYear(latestRelease.releaseDate)}
            </p>
            <h2 className="mt-3 font-display text-3xl text-zinc-900 dark:text-zinc-100 md:text-5xl">
              {latestRelease.title}
            </h2>
            {latestRelease.featuring ? (
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">Featuring {latestRelease.featuring}</p>
            ) : null}
            <div className="mt-6 flex flex-wrap gap-3">
              {Object.entries(latestRelease.platforms).map(([platform, href], index) => (
                <Button key={platform} href={href} variant={index === 0 ? "gold" : "ghost"}>
                  Listen on {platform}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Choose Your Platform">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {platformProfiles.map((platform) => (
            <a
              key={platform.label}
              href={platform.href}
              target="_blank"
              rel="noreferrer"
              className="glass rounded-2xl px-5 py-4 text-center text-sm font-semibold text-zinc-800 transition hover:-translate-y-1 hover:border-orange-400 hover:shadow-lg dark:text-zinc-100"
            >
              Open {platform.label}
            </a>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950">
          <iframe
            src="https://open.spotify.com/embed/artist/0APfsQA8C6C2MmZgcMjtOn?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Great Kminor on Spotify"
          />
        </div>
      </ContentSection>

      <ContentSection title={`Complete Catalog · ${musicCatalog.length} Tracks`}>
        <p className="-mt-7 mb-8 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          Major-platform releases and official Audiomack uploads are merged here without duplicates. A platform button only appears when a direct link for that exact track is verified.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {musicCatalog.map((release) => (
            <article key={release.slug} className="glass overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-square bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src={release.image}
                  alt={`${release.title} official artwork`}
                  fill
                  sizes="(min-width: 1024px) 31vw, (min-width: 640px) 47vw, 94vw"
                  className="object-contain"
                />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                  <span>{release.category}</span>
                  <time dateTime={release.releaseDate}>{releaseYear(release.releaseDate)}</time>
                </div>
                <h2 className="mt-3 font-display text-2xl leading-tight text-zinc-900 dark:text-zinc-100">{release.title}</h2>
                {release.featuring ? (
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Featuring {release.featuring}</p>
                ) : null}
                <div className="mt-5 flex flex-wrap gap-2" aria-label={`Listen to ${release.title}`}>
                  {Object.entries(release.platforms).map(([platform, href]) => (
                    <a
                      key={platform}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className={`rounded-full border px-3 py-2 text-xs font-semibold transition hover:-translate-y-0.5 ${platformStyles[platform] ?? "border-zinc-300 text-zinc-800 dark:border-zinc-700 dark:text-zinc-200"}`}
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Watch More Performances">
        <div className="glass rounded-3xl p-8 text-center">
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-base">
            Explore recent visual content, full live performances, and curated stage clips from Great Kminor’s official channels.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="https://youtube.com/@great_kminor">Visit YouTube</Button>
            <Button href="/contact" variant="ghost">Book a Live Performance</Button>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
