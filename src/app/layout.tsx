import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { LungViewerProvider } from "@/components/providers/LungViewerProvider";
import JsonLd from "@/components/layout/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://diseasespecialist.com"
  ),

  /* ── Titles ──────────────────────────────────────────────── */
  title: {
    default:
      "Lung Disease Specialists | Pulmonary & Sleep Medicine | Fort Lauderdale, FL",
    template: "%s | Lung Disease Specialists",
  },

  /* ── Description ─────────────────────────────────────────── */
  description:
    "Board-certified pulmonary and sleep medicine specialists in Fort Lauderdale, FL. Dr. David Romero Fischmann and Dr. Erick Palma treat asthma, COPD, sleep apnea, and more. On-site pulmonary function testing and sleep studies. New patients welcome.",

  /* ── Keywords ────────────────────────────────────────────── */
  keywords: [
    "pulmonary doctor Fort Lauderdale",
    "pulmonologist Fort Lauderdale FL",
    "sleep medicine Fort Lauderdale",
    "sleep study Fort Lauderdale",
    "lung specialist South Florida",
    "lung specialist Broward County",
    "pulmonary function test Fort Lauderdale",
    "COPD treatment Fort Lauderdale",
    "asthma specialist Fort Lauderdale",
    "sleep apnea doctor Fort Lauderdale",
    "Dr David Romero Fischmann",
    "Dr Erick Palma pulmonologist",
    "Lung Disease Specialists Corporation",
    "pulmonary care Fort Lauderdale",
    "respiratory specialist Florida",
    "interstitial lung disease Fort Lauderdale",
    "emphysema doctor Florida",
    "critical care medicine Fort Lauderdale",
  ],

  /* ── Canonical / alternates ──────────────────────────────── */
  alternates: {
    canonical: "/",
  },

  /* ── Open Graph ──────────────────────────────────────────── */
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://diseasespecialist.com",
    siteName: "Lung Disease Specialists",
    title:
      "Lung Disease Specialists | Pulmonary & Sleep Medicine | Fort Lauderdale, FL",
    description:
      "Board-certified pulmonary and sleep medicine specialists in Fort Lauderdale, FL. Expert care for asthma, COPD, sleep apnea, and pulmonary function testing. New patients welcome.",
    images: [
      {
        url: "/lung_logo.png",
        width: 512,
        height: 512,
        alt: "Lung Disease Specialists — Fort Lauderdale, FL",
      },
    ],
  },

  /* ── Twitter / X Card ────────────────────────────────────── */
  twitter: {
    card: "summary",
    title:
      "Lung Disease Specialists | Pulmonary & Sleep Medicine | Fort Lauderdale, FL",
    description:
      "Board-certified pulmonologists in Fort Lauderdale, FL. Expert care for asthma, COPD, sleep apnea, and more. On-site pulmonary testing. New patients welcome.",
    images: ["/lung_logo.png"],
  },

  /* ── Robots ──────────────────────────────────────────────── */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* ── Author / category ───────────────────────────────────── */
  authors: [{ name: "Lung Disease Specialists Corporation" }],
  category: "Medical Practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-neutral-900">
        {/* Skip link for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <JsonLd />
        <LungViewerProvider>
          <ScrollToTop />
          <Header />

          <main id="main-content" className="min-h-screen">
            {children}
          </main>

          <Footer />
        </LungViewerProvider>
      </body>
    </html>
  );
}
