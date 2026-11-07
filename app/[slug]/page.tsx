import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryPageView from "@/components/category/CategoryPageView";
import ProductPageView from "@/components/category/ProductPageView";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import {
  getAllCategorySlugs,
  getCategoryPage,
} from "@/lib/constants/categoryPages";
import {
  getCollectionPage,
  getCollectionProductPage,
} from "@/lib/constants/collectionPages";
import { buildPageMetadata, categorySeoTitle } from "@/lib/seo";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = true;

export function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryPage(slug);

  if (!category) {
    return { title: "Building materials in Manchester" };
  }

  return buildPageMetadata({
    title: categorySeoTitle(slug, category.title),
    description: category.description,
    path: `/${slug}`,
    image: category.heroImage || category.collections[0]?.image,
  });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryPage(slug);

  if (!category) {
    notFound();
  }

  const landingCollection = category.collections[0];
  const landingProduct =
    category.collections.length === 1 && landingCollection
      ? getCollectionProductPage(slug, landingCollection.id)
      : null;
  const landingCollectionPage = landingCollection
    ? getCollectionPage(slug, landingCollection.id)
    : null;

  return (
    <>
      <Header />
      <main>
        {landingProduct && landingCollectionPage ? (
          <ProductPageView
            product={landingProduct}
            categoryTitle={category.title}
            categoryHref={`/${category.slug}`}
            collectionTitle={landingCollectionPage.title}
            collectionHref={`/${category.slug}`}
          />
        ) : (
          <CategoryPageView category={category} />
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
