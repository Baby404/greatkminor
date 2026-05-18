/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "i.scdn.co"
      },
      {
        protocol: "https",
        hostname: "ar.toneden.io"
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com"
      }
    ]
  }
};

export default nextConfig;
