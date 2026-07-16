import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReduxProvider from "@/components/providers/ReduxProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Haris Building Solutions - Building Materials Supplier",
  description:
    "Haris Building Solutions supplies WPC panels, shower panels, flooring, bathrooms, kitchens, artificial grass, silicone, acoustic panels, ceiling panels, trims and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-white font-sans text-[#333333] antialiased">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
