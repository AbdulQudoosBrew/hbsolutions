import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants/siteData";

export const metadata: Metadata = {
  title: `Basket - ${COMPANY.name}`,
  description: "Your Available on Delivery basket.",
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
