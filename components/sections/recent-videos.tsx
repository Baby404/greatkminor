type YouTubeVideo = {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  published: string;
};

export const revalidate = 300;

const CHANNEL_ID = "UCllLCN3xAUW8F8xBHX858Uw";

function extractTag(text: string, tag: string) {
  const match = text.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return match?.[1]?.trim() ?? "";
}

function decodeXml(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

async function getLatestVideos(): Promise<YouTubeVideo[]> {
  try {
    const res = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`, {
      next: { revalidate: 900 }
    });

    if (!res.ok) {
      return [];
    }

    const xml = await res.text();
    const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].slice(0, 6);

    return entries.map((entry) => {
      const block = entry[1];
      const videoId = extractTag(block, "yt:videoId");
      const title = decodeXml(extractTag(block, "title"));
      const published = extractTag(block, "published");
      const url = `https://www.youtube.com/watch?v=${videoId}`;

      return {
        id: videoId,
        title,
        url,
        thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        published
      };
    }).sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime());
  } catch {
    return [];
  }
}

export async function RecentVideos() {
  const videos = await getLatestVideos();
  const featuredVideo = videos[0];

  return (
    <section className="mx-auto w-[94%] max-w-7xl py-20">
      <div className="mb-8 md:mb-12">
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">Recent Videos</p>
        <h2 className="font-display text-3xl text-zinc-900 dark:text-zinc-100 md:text-5xl">Unusual Praise Medley Live</h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          {featuredVideo ? (
            <a
              href={featuredVideo.url}
              target="_blank"
              rel="noreferrer"
              className="glass group block overflow-hidden rounded-3xl"
            >
              <img src={featuredVideo.thumbnail} alt={featuredVideo.title} className="aspect-video w-full object-cover" loading="lazy" />
              <div className="p-4">
                <p className="text-sm font-medium text-zinc-800 dark:text-zinc-100">{featuredVideo.title}</p>
              </div>
            </a>
          ) : (
            <a
              href="https://youtube.com/@great_kminor?si=tjUpiKL_VZTm_vpH"
              target="_blank"
              rel="noreferrer"
              className="glass block overflow-hidden rounded-3xl"
            >
              <div className="flex aspect-video items-center justify-center bg-zinc-100 text-center dark:bg-zinc-900">
                <p className="px-6 text-sm text-zinc-600 dark:text-zinc-300">Watch on YouTube: Great Kminor Official Channel</p>
              </div>
            </a>
          )}
        </div>

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
            <a
              href="/videos"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold tracking-wide text-zinc-900 transition-all duration-300 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-transparent dark:text-zinc-100 dark:hover:bg-zinc-900"
            >
              More Videos
            </a>
            <a
              href="https://youtube.com/@great_kminor?si=tjUpiKL_VZTm_vpH"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold tracking-wide text-zinc-900 transition-all duration-300 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-transparent dark:text-zinc-100 dark:hover:bg-zinc-900"
            >
              Visit YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

