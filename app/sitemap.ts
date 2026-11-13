import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = ["", "/about", "/music", "/videos", "/services", "/gallery", "/guitar-institute", "/gk-band", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://greatkminor.com${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/videos" || route === "/music" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
