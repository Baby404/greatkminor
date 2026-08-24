import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Great Kminor",
    short_name: "Great Kminor",
    description: "Official website of Great Kminor — professional guitarist, worship leader, and recording artist.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000"
  };
}
