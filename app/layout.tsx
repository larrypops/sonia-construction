import type { Metadata } from "next";
import { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import { localBusinessJsonLd, siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: "Sonia Construction | Fabrication, vente et location de chapiteaux à Douala",
  description: siteConfig.description,
  keywords: [
    "chapiteaux Douala",
    "location chapiteaux Douala",
    "bâche Douala",
    "tentes evenementielles Cameroun",
    "fabrication chapiteaux Cameroun",
  ],
  openGraph: {
    title: "Sonia Construction | Fabrication, vente et location de chapiteaux à Douala",
    description: siteConfig.description,
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    locale: "fr_CM",
    type: "website",
    images: [
      {
        url: "/images/chapiteaux-1.JPG",
        width: 1080,
        height: 810,
        alt: "Chapiteau installé par Sonia Construction à Douala",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <div className="page-shell">
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton floating />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
