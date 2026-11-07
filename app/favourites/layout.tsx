import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favourites",
  description: "Products you have saved as favourites.",
  robots: { index: false, follow: false },
};

export default function FavouritesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
