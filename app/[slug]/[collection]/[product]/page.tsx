import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CollectionPageView from "@/components/category/CollectionPageView";
import ProductPageView from "@/components/category/ProductPageView";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import {
  getAllProductParams,
  getCollectionPage,
  getNestedCollectionPage,
  getProductPage,
} from "@/lib/constants/collectionPages";
import { getCategoryPage } from "@/lib/constants/categoryPages";
import { COMPANY } from "@/lib/constants/siteData";

type ProductRouteProps = {
  params: Promise<{ slug: string; collection: string; product: string }>;
};

export const dynamicParams = true;

export function generateStaticParams() {
  return getAllProductParams();
}

export async function generateMetadata({
  params,
}: ProductRouteProps): Promise<Metadata> {
  const { slug, collection, product } = await params;
  const nestedCollection = getNestedCollectionPage(slug, collection, product);
  if (nestedCollection) {
    const category = getCategoryPage(slug);
    return {
      title: `${nestedCollection.title}${category ? ` - ${category.title}` : ""} - ${COMPANY.name}`,
      description: nestedCollection.description,
    };
  }

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
  const category = getCategoryPage(slug);
  const nestedCollection = getNestedCollectionPage(slug, collection, product);

  if (nestedCollection && category) {
    const parentCollection = getCollectionPage(slug, collection);
    return (
      <>
        <Header />
        <main>
          <CollectionPageView
            collection={nestedCollection}
            categoryTitle={category.title}
            categoryHref={`/${category.slug}`}
            parentCollection={
              parentCollection
                ? {
                    title: parentCollection.title,
                    href: `/${category.slug}/${collection}`,
                  }
                : undefined
            }
          />
        </main>
        <Footer />
        <WhatsAppButton />
      </>
    );
  }

  const page = getProductPage(slug, collection, product);
  const collectionPage = getCollectionPage(slug, collection);

  if (!page || !category || !collectionPage) {
    notFound();
  }

  const subCollection = page.subcollectionSlug
    ? getNestedCollectionPage(slug, collection, page.subcollectionSlug)
    : null;
  const trimCollection = getNestedCollectionPage(slug, collection, "trims");
  const relatedSource =
    subCollection ??
    (trimCollection && trimCollection.items.some((item) => item.id === page.slug)
      ? trimCollection
      : collectionPage);

  const relatedProducts = relatedSource.items.filter(
    (item) =>
      item.id !== page.slug &&
      item.id !== "trims" &&
      !item.isSubcategory,
  );

  return (
    <>
      <Header />
      <main>
        <ProductPageView
          product={page}
          categoryTitle={category.title}
          categoryHref={`/${category.slug}`}
          collectionTitle={relatedSource.title}
          collectionHref={
            relatedSource.key.split("/").length === 3
              ? `/${relatedSource.key}`
              : relatedSource.key.includes("/trims")
                ? `/${category.slug}/${collection}/trims`
                : `/${category.slug}/${collectionPage.slug}`
          }
          relatedProducts={relatedProducts}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
