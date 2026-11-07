import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Basket",
  description: "Your Available on Delivery basket.",
  robots: { index: false, follow: false },
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
