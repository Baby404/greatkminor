import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingSocial } from "@/components/layout/floating-social";
import { PageTransition } from "@/components/motion/page-transition";

export const metadata: Metadata = {
  metadataBase: new URL("https://greatkminor.com"),
  title: {
    default: "Great Kminor | Gospel Guitarist & Recording Artist",
    template: "%s | Great Kminor"
  },
  description:
    "Official website of Great Kminor — professional guitarist, worship leader, and recording artist. Explore music, performances, services, and booking.",
  keywords: [
    "Great Kminor",
    "Nigerian gospel guitarist",
    "worship leader",
    "gospel recording artist",
    "Afro-contemporary gospel"
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Great Kminor",
    title: "Great Kminor | Gospel Guitarist & Recording Artist",
    description: "Music, live performances, guitar mentorship, and bookings from Great Kminor."
  },
  twitter: {
    card: "summary_large_image",
    title: "Great Kminor | Gospel Guitarist & Recording Artist",
    description: "Music, live performances, guitar mentorship, and bookings from Great Kminor."
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" }
  ]
};

const themeScript = `
  (function () {
    try {
      var saved = localStorage.getItem('theme');
      var useDark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', useDark);
    } catch (_) {}
  })();
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen text-zinc-900 antialiased dark:text-zinc-100">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navbar />
        <FloatingSocial />
        <PageTransition>
          <main id="main-content">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
