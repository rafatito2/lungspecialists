import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lungdiseasespecialists.com"),
  title: {
    default: "Lung Disease Specialists | Pulmonary & Sleep Medicine | Fort Lauderdale, FL",
    template: "%s | Lung Disease Specialists",
  },
  description:
    "Board-certified pulmonary and sleep medicine specialists in Fort Lauderdale, FL. Dr. David Romero Fischmann and Dr. Eric Palma provide expert care for lung conditions, sleep disorders, and pulmonary function testing.",
  keywords: [
    "pulmonary doctor Fort Lauderdale",
    "sleep medicine Fort Lauderdale",
    "lung specialist Florida",
    "pulmonary function test",
    "sleep study Fort Lauderdale",
    "Dr David Romero Fischmann",
    "Dr Eric Palma",
    "Lung Disease Specialists",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Lung Disease Specialists Corporation",
  },
  robots: {
    index: true,
    follow: true,
  },
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

        <ScrollToTop />
        <Header />

        <main id="main-content" className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
