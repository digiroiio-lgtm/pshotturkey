import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import { CurrencyProvider } from "@/lib/CurrencyContext";

export const metadata: Metadata = {
  title: {
    default: "PShotTurkey | P-Shot PRP Treatment for ED in Turkey",
    template: "%s | PShotTurkey",
  },
  description:
    "World-class P-Shot (PRP) treatment for erectile dysfunction in Turkey. Starting from £240. Free consultation available.",
  metadataBase: new URL("https://pshotturkey.com"),
  openGraph: {
    type: "website",
    siteName: "PShotTurkey",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        <CurrencyProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <CookieBanner />
        </CurrencyProvider>
      </body>
    </html>
  );
}
