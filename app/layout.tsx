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
  title: "Giavani Bathrooms - Luxury Bathroom Products",
  description:
    "Giavani bathrooms is one of the UK's largest distributors of luxury bathroom products. Sanitaryware, Taps, Showers, Baths and more.",
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
