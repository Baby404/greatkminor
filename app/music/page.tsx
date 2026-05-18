import { ContentSection } from "@/components/sections/inner-page-sections";
import { Button } from "@/components/ui/button";
import { TRACKS, getTrackData } from "@/lib/fanlink";

export default function MusicPage() {
  const spotifyArtistUrl = "https://open.spotify.com/artist/0APfsQA8C6C2MmZgcMjtOn";
  const appleMusicArtistUrl = "https://music.apple.com/ng/artist/great-kminor/1734895873";
  const deezerArtistUrl = "https://www.deezer.com/en/artist/257520252";
  const youtubeMusicArtistUrl = "https://music.youtube.com/channel/UCxeVTqdQExqJnJYWdNL2qQw?si=E_DKBtbsdPzWD8HP";
  const amazonMusicArtistUrl = "https://music.amazon.co.uk/artists/B0CXGTW9ST/great-kminor";
  const tracksPromise = Promise.all(TRACKS.map(async (track) => ({ ...track, data: await getTrackData(track.fanlink) })));

  return tracksPromise.then((tracks) => (
    <>
      <ContentSection title="Featured Release">
        <div className="glass rounded-3xl p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">New Release</p>
          <h3 className="mt-3 font-display text-3xl text-zinc-900 dark:text-zinc-100">Sound of Revival (Live)</h3>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">Listen on Spotify, Apple Music, and YouTube.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href={spotifyArtistUrl}>Spotify</Button>
            <Button href={appleMusicArtistUrl} variant="ghost">Apple Music</Button>
            <Button href={youtubeMusicArtistUrl} variant="ghost">YouTube Music</Button>
          </div>
          <div className="mt-3 flex flex-wrap gap-3">
            <Button href={deezerArtistUrl} variant="ghost">Deezer</Button>
            <Button href={amazonMusicArtistUrl} variant="ghost">Amazon Music</Button>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
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
        </div>
      </ContentSection>
      <ContentSection title="Releases">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track) => {
            const spotify = track.data.platforms.find((p) => p.platform.toLowerCase() === "spotify");
            const apple = track.data.platforms.find((p) => p.platform.toLowerCase().includes("apple"));
            const youtube = track.data.platforms.find((p) => p.platform.toLowerCase().includes("youtube"));

            return (
              <article key={track.slug} className="glass overflow-hidden rounded-2xl">
                {track.data.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={track.data.image} alt={track.data.title} className="aspect-square w-full object-cover" loading="lazy" />
                ) : null}
                <div className="p-5">
                  <h3 className="font-display text-2xl text-zinc-900 dark:text-zinc-100">{track.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Choose your preferred platform to stream.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {spotify ? <Button href={spotify.url}>Spotify</Button> : null}
                    {apple ? <Button href={apple.url} variant="ghost">Apple Music</Button> : null}
                    {youtube ? <Button href={youtube.url} variant="ghost">YouTube</Button> : null}
                    {!spotify && !apple && !youtube ? <Button href={track.fanlink}>Stream</Button> : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </ContentSection>
    </>
  ));
}
