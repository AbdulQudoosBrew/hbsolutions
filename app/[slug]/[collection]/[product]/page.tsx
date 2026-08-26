import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductPageView from "@/components/category/ProductPageView";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import {
  getAllProductParams,
  getCollectionPage,
  getProductPage,
} from "@/lib/constants/collectionPages";
import { getCategoryPage } from "@/lib/constants/categoryPages";
import { COMPANY } from "@/lib/constants/siteData";

type ProductRouteProps = {
  params: Promise<{ slug: string; collection: string; product: string }>;
};

export function generateStaticParams() {
  return getAllProductParams();
}

export async function generateMetadata({
  params,
}: ProductRouteProps): Promise<Metadata> {
  const { slug, collection, product } = await params;
  const page = getProductPage(slug, collection, product);

  if (!page) {
    return { title: COMPANY.name };
  }

  return {
    title: `${page.title} - ${COMPANY.name}`,
    description: page.description,
  };
}

export default async function ProductRoutePage({ params }: ProductRouteProps) {
  const { slug, collection, product } = await params;
  const page = getProductPage(slug, collection, product);
  const category = getCategoryPage(slug);
  const collectionPage = getCollectionPage(slug, collection);

  if (!page || !category || !collectionPage) {
    notFound();
  }

  const relatedProducts = collectionPage.items.filter(
    (item) => item.id !== page.slug,
  );

  return (
    <>
      <Header />
      <main>
        <ProductPageView
          product={page}
          categoryTitle={category.title}
          categoryHref={`/${category.slug}`}
          collectionTitle={collectionPage.title}
          collectionHref={`/${category.slug}/${collectionPage.slug}`}
          relatedProducts={relatedProducts}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
