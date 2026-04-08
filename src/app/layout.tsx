import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmergencyBanner from "@/components/EmergencyBanner";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Emergency and Family Dental | Union City NJ Dentist",
    template: "%s | Emergency and Family Dental",
  },
  description:
    "Top-rated emergency and family dentistry in Union City, NJ. Dr. Yillian Leal and Dr. Luis Santana provide expert dental care including cleanings, implants, veneers, and orthodontics. Se habla Espanol. Call (201) 620-3920.",
  keywords: [
    "dentist Union City NJ",
    "emergency dentist",
    "family dentist",
    "dental implants",
    "veneers",
    "orthodontics",
    "teeth whitening",
    "dental cleanings",
    "Union City dentist",
    "Spanish speaking dentist",
  ],
  openGraph: {
    title: "Emergency and Family Dental | Union City NJ",
    description:
      "Where Relief Meets Family Care. Top-rated dental practice with 5-star reviews. Emergency & family dentistry by Dr. Yillian Leal and Dr. Luis Santana.",
    type: "website",
    locale: "en_US",
    url: "https://emergencyandfamilydental.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-inter)]">
        <EmergencyBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
