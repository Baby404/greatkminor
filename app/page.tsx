import {
  AboutPreview,
  FeaturedMusic,
  GalleryPreview,
  HomeHero,
  ServicesPreview,
  TestimonialsNewsletter
} from "@/components/sections/home-sections";
import { RecentVideos } from "@/components/sections/recent-videos";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <FeaturedMusic />
      <ServicesPreview />
      <RecentVideos />
      <AboutPreview />
      <GalleryPreview />
      <TestimonialsNewsletter />
    </>
  );
}
