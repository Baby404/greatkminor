import {
  AboutPreview,
  FeaturedMusic,
  GalleryPreview,
  HomeHero,
  TestimonialsNewsletter,
  UpcomingEventsPreview
} from "@/components/sections/home-sections";
import { RecentVideos } from "@/components/sections/recent-videos";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <FeaturedMusic />
      <RecentVideos />
      <UpcomingEventsPreview />
      <AboutPreview />
      <GalleryPreview />
      <TestimonialsNewsletter />
    </>
  );
}
