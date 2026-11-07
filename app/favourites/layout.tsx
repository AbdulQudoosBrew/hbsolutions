import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants/siteData";

export const metadata: Metadata = {
  title: `Favourites - ${COMPANY.name}`,
  description: "Products you have saved as favourites.",
};

export default function FavouritesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
