import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingSocial } from "@/components/layout/floating-social";
import { PageTransition } from "@/components/motion/page-transition";

export const metadata: Metadata = {
  title: "Great Kminor | Nigerian Gospel Guitarist & Recording Artist",
  description:
    "Official website of Great Kminor — Gospel Guitarist, Worship Leader, and Recording Artist. Explore music, events, gallery, ministry, and booking.",
  keywords: [
    "Great Kminor",
    "Nigerian gospel guitarist",
    "worship leader",
    "gospel recording artist",
    "Afro-contemporary gospel"
  ]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen text-zinc-900 antialiased dark:text-zinc-100">
        <PageTransition>
          <Navbar />
          <FloatingSocial />
          <main>{children}</main>
          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}
