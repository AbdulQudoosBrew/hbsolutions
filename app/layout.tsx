import type { Metadata } from "next";
import { Inter } from "next/font/google";
import JsonLd from "@/components/seo/JsonLd";
import ReduxProvider from "@/components/providers/ReduxProvider";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Building Materials Supplier in Manchester | Haris Building Solutions",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Trade and retail building materials in Cheetham Hill, Manchester. Waterproof bathroom wall panels, WPC and acoustic slat panels, SPC flooring, bathrooms, kitchens and aluminium roofing. Collection and UK delivery.",
  keywords: [
    "building materials Manchester",
    "bathroom supplier Manchester",
    "waterproof wall panels Manchester",
    "PVC wall panels",
    "WPC wall panels",
    "acoustic slat panels",
    "SPC flooring Manchester",
    "aluminium roofing panels",
    "Cheetham Hill building supplies",
    "trade bathroom supplies Manchester",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  applicationName: SITE_NAME,
  category: "Building materials",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Building Materials Supplier in Manchester | Haris Building Solutions",
    description:
      "Waterproof wall panels, SPC flooring, bathrooms, kitchens and aluminium roofing from Cheetham Hill, Manchester.",
    images: [{ url: "/web-header-scaled.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Building Materials Supplier in Manchester | Haris Building Solutions",
    description:
      "Waterproof wall panels, SPC flooring, bathrooms and aluminium roofing supplied from Manchester.",
    images: ["/web-header-scaled.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "geo.region": "GB-MAN",
    "geo.placename": "Cheetham Hill, Manchester",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-white font-sans text-[#333333] antialiased">
        <JsonLd />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
