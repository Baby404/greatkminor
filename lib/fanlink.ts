export type TrackLink = {
  slug: string;
  title: string;
  fanlink: string;
};

export type PlatformLink = {
  platform: string;
  url: string;
};

export type TrackData = {
  title: string;
  image: string | null;
  platforms: PlatformLink[];
};

export const TRACKS: TrackLink[] = [
  { slug: "ebe-supplication", title: "Ebe (Supplication)", fanlink: "https://greatkminor.fanlink.tv/Ebe" },
  { slug: "hymn-fusion", title: "Hymn Fusion", fanlink: "https://greatkminor.fanlink.tv/hymnfusion" },
  { slug: "amapiano-praise", title: "Amapiano Praise", fanlink: "https://greatkminor.fanlink.tv/unusualamapianopraise" },
  { slug: "thankful", title: "Thankful", fanlink: "https://greatkminor.fanlink.tv/thankfulrefix" },
  { slug: "jesu-modupe", title: "Jesu’Modupe", fanlink: "https://greatkminor.fanlink.tv/JesuModupe" },
  { slug: "unusual-praise-medley-vol-2", title: "Unusual Praise Medley, Vol 2", fanlink: "https://greatkminor.fanlink.tv/JesuModupe" },
  { slug: "unusual-praise-medley-vol-3", title: "Unusual Praise Medley Vol 3", fanlink: "https://greatkminor.fanlink.tv/JesuModupe" },
  { slug: "igbekelemi", title: "Igbekelemi (My Only Hope)", fanlink: "https://greatkminor.fanlink.tv/JesuModupe" },
  { slug: "my-worship-live", title: "My Worship Live", fanlink: "https://greatkminor.fanlink.tv/JesuModupe" },
  { slug: "unusual-praise-vol-4", title: "Unusual Praise Vol 4 ft Gbenga Akinfenwa", fanlink: "https://greatkminor.fanlink.tv/JesuModupe" }
];

export async function getPlatformLinks(fanlinkUrl: string): Promise<PlatformLink[]> {
  const res = await fetch(fanlinkUrl, { next: { revalidate: 3600 } });
  if (!res.ok) return [];

  const html = await res.text();
  const match = html.match(/window\.preloadLink\s*=\s*(\{[\s\S]*?\});/);
  if (!match) return [];

  try {
    const preload = JSON.parse(match[1]) as { services?: Array<{ service_name?: string; url?: string }> };
    const services = preload.services ?? [];

    return services
      .filter((s) => !!s.url)
      .map((s) => ({
        platform: (s.service_name ?? "platform").replace(/-/g, " "),
        url: s.url as string
      }))
      .filter((s, i, arr) => arr.findIndex((x) => x.platform === s.platform) === i);
  } catch {
    return [];
  }
}

export async function getTrackData(fanlinkUrl: string): Promise<TrackData> {
  const res = await fetch(fanlinkUrl, { next: { revalidate: 3600 } });
  if (!res.ok) return { title: "Track", image: null, platforms: [] };

  const html = await res.text();
  const match = html.match(/window\.preloadLink\s*=\s*(\{[\s\S]*?\});/);
  if (!match) return { title: "Track", image: null, platforms: [] };

  try {
    const preload = JSON.parse(match[1]) as {
      title?: string;
      image_url?: string;
      metadata_image_url?: string;
      services?: Array<{ service_name?: string; url?: string }>;
    };

    const services = preload.services ?? [];
    const platforms = services
      .filter((s) => !!s.url)
      .map((s) => ({
        platform: (s.service_name ?? "platform").replace(/-/g, " "),
        url: s.url as string
      }))
      .filter((s, i, arr) => arr.findIndex((x) => x.platform === s.platform) === i);

    return {
      title: preload.title ?? "Track",
      image: preload.image_url ?? preload.metadata_image_url ?? null,
      platforms
    };
  } catch {
    return { title: "Track", image: null, platforms: [] };
  }
}

