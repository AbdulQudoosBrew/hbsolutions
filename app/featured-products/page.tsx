import type { Metadata } from "next";
import CategoryPageView from "@/components/category/CategoryPageView";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { getFeaturedProducts } from "@/lib/featuredProducts";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = buildPageMetadata({
  title: "Featured Building Materials in Manchester",
  description:
    "Featured waterproof wall panels, flooring, bathrooms and finishing products from Haris Building Solutions in Cheetham Hill, Manchester.",
  path: "/featured-products",
});

export default async function FeaturedProductsPage() {
  const items = await getFeaturedProducts();

  return (
    <>
      <Header />
      <main>
        <CategoryPageView
          category={{
            slug: "featured-products",
            title: "Featured Products",
            description:
              "A selection of featured products from Haris Building Solutions.",
            collectionHeading: "View Our Range",
            collections: [
              {
                id: "aluminium-alloy-roofing-panels",
                label: "Aluminium Alloy Roofing Panels",
                image: "/images/aliminium/2.jpeg",
                href: "/aluminium/aluminium-alloy-roofing-panels",
              },
              {
                id: "sienna-600mm-wall-hung-unit",
                label: "Sienna 600mm Wall Hung",
                image:
                  "https://giavanibathrooms.com/wp-content/uploads/2026/02/sienna-unit_600_wll_cream_full-lifestyle_01-1.jpg",
                href: "/furniture/sienna-furniture/sienna-600mm-wall-hung-unit",
              },
              ...items
                .filter(
                  (item) =>
                    item.id !== "aluminium-alloy-roofing-panels" &&
                    item.id !== "sienna-600mm-wall-hung-unit",
                )
                .map((item) => ({
                  id: item.id,
                  label: item.title,
                  image: item.image,
                  href: `/featured-products/${item.id}`,
                })),
            ],
          }}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
