export type MusicPlatform = "Apple Music" | "Spotify" | "Deezer" | "Audiomack" | "Amazon Music";

export type MusicRelease = {
  slug: string;
  title: string;
  featuring?: string;
  releaseDate: string;
  image: string;
  category: "Official release" | "Live session" | "Cover";
  platforms: Partial<Record<MusicPlatform, string>>;
};

export const platformProfiles = [
  { label: "Spotify", href: "https://open.spotify.com/artist/0APfsQA8C6C2MmZgcMjtOn" },
  { label: "Apple Music", href: "https://music.apple.com/ng/artist/great-kminor/1734895873" },
  { label: "Audiomack", href: "https://audiomack.com/kminor-okundare-ayokunle" },
  { label: "Deezer", href: "https://www.deezer.com/en/artist/257520252" },
  { label: "YouTube Music", href: "https://music.youtube.com/channel/UCxeVTqdQExqJnJYWdNL2qQw" },
  { label: "Amazon Music", href: "https://music.amazon.co.uk/artists/B0CXGTW9ST/great-kminor" },
  { label: "Boomplay", href: "https://www.boomplay.com/artists/23534974" }
] as const;

export const musicCatalog = ([
  {
    slug: "unusual-praise-medley-vol-5",
    title: "Unusual Praise Medley, Vol. 5.0",
    releaseDate: "2026-07-31",
    image: "/music/unusual-praise-vol-5.webp",
    category: "Official release",
    platforms: {
      Audiomack: "https://audiomack.com/kminor-okundare-ayokunle/song/unusual-praise-medley-vol-5"
    }
  },
  {
    slug: "special-christmas-carol-medley",
    title: "Special Christmas Carol Medley",
    featuring: "CodKent Choir",
    releaseDate: "2026-07-18",
    image: "/music/christmas-carol-medley.webp",
    category: "Live session",
    platforms: {
      Audiomack: "https://audiomack.com/kminor-okundare-ayokunle/song/special-christmas-carol-medley-mp3"
    }
  },
  {
    slug: "highlife-medley-tiktok-live",
    title: "Highlife Medley — TikTok Live",
    releaseDate: "2026-07-11",
    image: "/music/highlife-medley.webp",
    category: "Live session",
    platforms: {
      Audiomack: "https://audiomack.com/kminor-okundare-ayokunle/song/highlife-medley-tiktok-live"
    }
  },
  {
    slug: "hymn-fusion-vol-2",
    title: "Hymn Fusion, Vol. 2",
    releaseDate: "2026-01-13",
    image: "/music/hymn-fusion-vol-2.jpg",
    category: "Official release",
    platforms: {
      "Apple Music": "https://music.apple.com/gb/album/hymn-fusion-vol-2/1869235995?i=1869235996",
      Spotify: "https://open.spotify.com/track/329DozOzJvniXfJOpWHHkZ",
      Deezer: "https://www.deezer.com/album/897744622",
      Audiomack: "https://audiomack.com/kminor-okundare-ayokunle/song/hymn-fusion-vol-2",
      "Amazon Music": "https://music.amazon.co.uk/albums/B0GGXG7KDB"
    }
  },
  {
    slug: "unusual-praise-medley-vol-4",
    title: "Unusual Praise Medley, Vol. 4",
    featuring: "Gbenga Akinfenwa",
    releaseDate: "2025-07-22",
    image: "/music/unusual-praise-vol-4.jpg",
    category: "Official release",
    platforms: {
      "Apple Music": "https://music.apple.com/gb/album/unusual-praise-medley-vol-4-feat-gbenga-akinfenwa/1828538629?i=1828538630",
      Spotify: "https://open.spotify.com/track/0ULEzy8M1WMH7EZBCIqN86",
      Deezer: "https://www.deezer.com/album/792245011",
      Audiomack: "https://audiomack.com/kminor-okundare-ayokunle/song/688814fea5512",
      "Amazon Music": "https://music.amazon.co.uk/albums/B0FJFZPJRJ"
    }
  },
  {
    slug: "my-worship-live",
    title: "My Worship (Live) — Phil Thompson Cover",
    releaseDate: "2025-07-03",
    image: "/music/my-worship-live.jpg",
    category: "Cover",
    platforms: {
      "Apple Music": "https://music.apple.com/gb/album/my-worship-live-phil-thompson-cover-by-great-kminor/1826957230?i=1826957231",
      Spotify: "https://open.spotify.com/track/55mOVisRuVsiOK7i7vFdb0",
      Audiomack: "https://audiomack.com/kminor-okundare-ayokunle/song/my-worship-live-phil-thompson-cover-by-great-kminor",
      "Amazon Music": "https://music.amazon.co.uk/albums/B0FHKD83WT"
    }
  },
  {
    slug: "unusual-praise-medley-vol-3",
    title: "Unusual Praise Medley, Vol. 3",
    releaseDate: "2025-03-31",
    image: "/music/unusual-praise-vol-3.jpg",
    category: "Official release",
    platforms: {
      "Apple Music": "https://music.apple.com/gb/album/unusual-praise-medley-vol-3-0/1805661974?i=1805661975",
      Spotify: "https://open.spotify.com/track/1Ae4D1RQ25uzT0KQnVXd5E",
      Deezer: "https://www.deezer.com/album/735644731",
      Audiomack: "https://audiomack.com/kminor-okundare-ayokunle/song/67edad5628d06"
    }
  },
  {
    slug: "igbekele-mi",
    title: "Igbekele Mi (My Only Hope)",
    releaseDate: "2025-02-25",
    image: "/music/igbekele-mi.jpg",
    category: "Official release",
    platforms: {
      "Apple Music": "https://music.apple.com/gb/album/igbekele-mi-my-only-hope/1799027170?i=1799027171",
      Spotify: "https://open.spotify.com/track/1V12CEzJ5gpjIaiowjRCYN",
      Deezer: "https://www.deezer.com/album/718654241",
      Audiomack: "https://audiomack.com/kminor-okundare-ayokunle/song/67c1f999b8503"
    }
  },
  {
    slug: "unusual-praise-medley-vol-2",
    title: "Unusual Praise Medley, Vol. 2",
    releaseDate: "2024-10-27",
    image: "/music/unusual-praise-vol-2.jpg",
    category: "Official release",
    platforms: {
      "Apple Music": "https://music.apple.com/gb/album/unusual-praise-medley-vol-2/1776963442?i=1776963443",
      Spotify: "https://open.spotify.com/track/1tDSbMxUHbMx7W5kqkMEd9",
      Audiomack: "https://audiomack.com/kminor-okundare-ayokunle/song/unusual-praise-medley-vol-2"
    }
  },
  {
    slug: "unusual-worship-live-session",
    title: "Unusual Worship Live Session",
    featuring: "BBO",
    releaseDate: "2024-08-09",
    image: "/music/unusual-worship-live.webp",
    category: "Live session",
    platforms: {
      Audiomack: "https://audiomack.com/kminor-okundare-ayokunle/song/unusual-worship-live-session-with-great-kminor"
    }
  },
  {
    slug: "hymn-fusion",
    title: "Hymn Fusion",
    releaseDate: "2024-09-05",
    image: "/music/hymn-fusion.jpg",
    category: "Official release",
    platforms: {
      "Apple Music": "https://music.apple.com/gb/album/hymn-fusion/1767291381?i=1767291382",
      Spotify: "https://open.spotify.com/track/1DunkVaD0fncGt06KM3ovc",
      Deezer: "https://www.deezer.com/album/640187361",
      Audiomack: "https://audiomack.com/kminor-okundare-ayokunle/song/hymn-fusion"
    }
  },
  {
    slug: "ebe-supplication",
    title: "Ebe (Supplication)",
    releaseDate: "2024-09-04",
    image: "/music/ebe-supplication.jpg",
    category: "Official release",
    platforms: {
      "Apple Music": "https://music.apple.com/gb/album/ebe-supplication/1767008885?i=1767008886",
      Spotify: "https://open.spotify.com/track/45VptKAZFf3YqUoGG1zMQQ",
      Deezer: "https://www.deezer.com/album/639914131",
      Audiomack: "https://audiomack.com/kminor-okundare-ayokunle/song/ebe-supplication"
    }
  },
  {
    slug: "unusual-amapiano-praise",
    title: "Unusual Amapiano Praise",
    featuring: "The Angel Choir — COD London",
    releaseDate: "2024-04-06",
    image: "/music/unusual-amapiano-praise.jpg",
    category: "Official release",
    platforms: {
      "Apple Music": "https://music.apple.com/gb/album/unusual-amapiano-praise-feat-angel-choir-cod-kent/1740151784?i=1740151786",
      Spotify: "https://open.spotify.com/track/0744SsbF3iut1bdF27yx92",
      Deezer: "https://www.deezer.com/album/570905461",
      Audiomack: "https://audiomack.com/kminor-okundare-ayokunle/song/amapiano-praise"
    }
  },
  {
    slug: "live-worship-session",
    title: "Live Worship Session",
    featuring: "Angel Voice",
    releaseDate: "2024-04-09",
    image: "/music/city-of-david.jpg",
    category: "Live session",
    platforms: {
      "Apple Music": "https://music.apple.com/gb/album/live-worship-session/1740597616?i=1740597617",
      Audiomack: "https://audiomack.com/kminor-okundare-ayokunle/song/worship-at-city-of-david-kent-london-united-kingdom"
    }
  },
  {
    slug: "hot-praise-session",
    title: "Hot Praise Session",
    releaseDate: "2024-04-09",
    image: "/music/city-of-david.jpg",
    category: "Live session",
    platforms: {
      "Apple Music": "https://music.apple.com/gb/album/hot-praise-session/1740597616?i=1740597618",
      Audiomack: "https://audiomack.com/kminor-okundare-ayokunle/song/great-kminor-hot-praise-session-at-city-of-david-kent-united-kingdom"
    }
  },
  {
    slug: "jesu-modupe",
    title: "Jesu’Modupe",
    releaseDate: "2024-03-07",
    image: "/music/jesu-modupe.jpg",
    category: "Official release",
    platforms: {
      "Apple Music": "https://music.apple.com/gb/album/jesumodupe/1734930550?i=1734930551",
      Deezer: "https://www.deezer.com/album/557966732",
      Audiomack: "https://audiomack.com/kminor-okundare-ayokunle/song/modupe"
    }
  },
  {
    slug: "momore",
    title: "Mo’more",
    featuring: "Kenny Peters",
    releaseDate: "2023-06-16",
    image: "/music/momore.webp",
    category: "Cover",
    platforms: {
      Audiomack: "https://audiomack.com/kminor-okundare-ayokunle/song/momore-kenny-peters-guitar-cover-great-kminor"
    }
  },
  {
    slug: "sunshine",
    title: "Sunshine",
    featuring: "EmmaOMG",
    releaseDate: "2023-05-25",
    image: "/music/sunshine.webp",
    category: "Cover",
    platforms: {
      Audiomack: "https://audiomack.com/kminor-okundare-ayokunle/song/sunshine-cover-emmahomg-x-great-kminor"
    }
  },
  {
    slug: "ebenezer-guitar",
    title: "Ebenezer Guitar",
    releaseDate: "2023-05-25",
    image: "/music/ebenezer-guitar.webp",
    category: "Cover",
    platforms: {
      Audiomack: "https://audiomack.com/kminor-okundare-ayokunle/song/ebenezer-guitar-cover-great-kminor"
    }
  },
  {
    slug: "oba-ni-jesu",
    title: "Oba ni Jesu",
    featuring: "EmmaOMG",
    releaseDate: "2023-04-25",
    image: "/music/oba-ni-jesu.webp",
    category: "Cover",
    platforms: {
      Audiomack: "https://audiomack.com/kminor-okundare-ayokunle/song/oba-ni-jesu-cover"
    }
  },
  {
    slug: "zion-city-anniversary",
    title: "Zion City 11th Anniversary Thanksgiving",
    releaseDate: "2022-02-04",
    image: "/music/zion-anniversary.webp",
    category: "Live session",
    platforms: {
      Audiomack: "https://audiomack.com/kminor-okundare-ayokunle/song/zion-city-11th-year-anniversary-thanksgiving"
    }
  },
  {
    slug: "party-with-gk-band",
    title: "Party with GK Band 1",
    releaseDate: "2022-02-04",
    image: "/music/party-with-gk-band.webp",
    category: "Live session",
    platforms: {
      Audiomack: "https://audiomack.com/kminor-okundare-ayokunle/song/party-with-gk-band-1"
    }
  },
  {
    slug: "thankful",
    title: "THANKFUL (Unusual Praise Medley)",
    releaseDate: "2021-03-25",
    image: "/music/thankful.webp",
    category: "Official release",
    platforms: {
      Audiomack: "https://audiomack.com/kminor-okundare-ayokunle/song/thankful-great-kminor"
    }
  }
] satisfies MusicRelease[]).sort((a, b) => b.releaseDate.localeCompare(a.releaseDate));
