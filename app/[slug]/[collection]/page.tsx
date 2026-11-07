import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CollectionPageView from "@/components/category/CollectionPageView";
import ProductPageView from "@/components/category/ProductPageView";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import {
  getAllCollectionParams,
  getCollectionPage,
  getCollectionProductPage,
} from "@/lib/constants/collectionPages";
import { getCategoryPage } from "@/lib/constants/categoryPages";
import { buildPageMetadata } from "@/lib/seo";

type CollectionRouteProps = {
  params: Promise<{ slug: string; collection: string }>;
};

export const dynamicParams = true;

export function generateStaticParams() {
  return getAllCollectionParams();
}

export async function generateMetadata({
  params,
}: CollectionRouteProps): Promise<Metadata> {
  const { slug, collection } = await params;
  const product = getCollectionProductPage(slug, collection);
  if (product) {
    return buildPageMetadata({
      title: product.title,
      description: product.description,
      path: `/${slug}/${collection}`,
      image: product.image,
    });
  }

  const page = getCollectionPage(slug, collection);

  if (!page) {
    return { title: "Building materials in Manchester" };
  }

  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: `/${slug}/${collection}`,
    image: page.image,
  });
}

export default async function CollectionRoutePage({
  params,
}: CollectionRouteProps) {
  const { slug, collection } = await params;
  const page = getCollectionPage(slug, collection);
  const category = getCategoryPage(slug);
  const product = getCollectionProductPage(slug, collection);

  if (!page || !category) {
    notFound();
  }

  if (product) {
    return (
      <>
        <Header />
        <main>
          <ProductPageView
            product={product}
            categoryTitle={category.title}
            categoryHref={`/${category.slug}`}
            collectionTitle={page.title}
            collectionHref={`/${category.slug}`}
          />
        </main>
        <Footer />
        <WhatsAppButton />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <CollectionPageView
          collection={page}
          categoryTitle={category.title}
          categoryHref={`/${category.slug}`}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
