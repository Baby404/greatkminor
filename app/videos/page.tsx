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

    if (!res.ok) return [];

    const xml = await res.text();
    const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].slice(0, 24);

    return entries.map((entry) => {
      const block = entry[1];
      const videoId = extractTag(block, "yt:videoId");
      const title = decodeXml(extractTag(block, "title"));
      const published = extractTag(block, "published");
      return {
        id: videoId,
        title,
        url: `https://www.youtube.com/watch?v=${videoId}`,
        thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        published
      };
    }).sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime());
  } catch {
    return [];
  }
}

export default async function VideosPage() {
  const videos = await getLatestVideos();

  return (
    <section className="mx-auto w-[94%] max-w-7xl pt-36 pb-20">
      <p className="mb-2 text-xs uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">Great Kminor</p>
      <h1 className="font-display text-4xl text-zinc-900 dark:text-zinc-100 md:text-6xl">Videos</h1>
      <p className="mt-4 max-w-3xl text-zinc-600 dark:text-zinc-400">
        Watch past uploads and new releases from the official channel.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <a
            key={video.id}
            href={video.url}
            target="_blank"
            rel="noreferrer"
            className="glass block overflow-hidden rounded-2xl"
          >
            <img src={video.thumbnail} alt={video.title} className="aspect-video w-full object-cover" loading="lazy" />
            <div className="p-3">
              <p className="line-clamp-2 text-sm font-medium text-zinc-800 dark:text-zinc-100">{video.title}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

