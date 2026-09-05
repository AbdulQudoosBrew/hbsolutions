import type { Metadata } from "next";
import CategoryPageView from "@/components/category/CategoryPageView";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { getFeaturedProducts } from "@/lib/featuredProducts";
import { COMPANY } from "@/lib/constants/siteData";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: `Featured Products - ${COMPANY.name}`,
  description:
    "Featured products from Haris Building Solutions, selected for current projects and ranges.",
};

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
            collections: items.map((item) => ({
              id: item.id,
              label: item.title,
              image: item.image,
              href: `/featured-products/${item.id}`,
            })),
          }}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
