import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CollectionPageView from "@/components/category/CollectionPageView";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import {
  getAllCollectionParams,
  getCollectionPage,
} from "@/lib/constants/collectionPages";
import { getCategoryPage } from "@/lib/constants/categoryPages";
import { COMPANY } from "@/lib/constants/siteData";

type CollectionRouteProps = {
  params: Promise<{ slug: string; collection: string }>;
};

export function generateStaticParams() {
  return getAllCollectionParams();
}

export async function generateMetadata({
  params,
}: CollectionRouteProps): Promise<Metadata> {
  const { slug, collection } = await params;
  const page = getCollectionPage(slug, collection);
  const category = getCategoryPage(slug);

  if (!page) {
    return { title: COMPANY.name };
  }

  return {
    title: `${page.title}${category ? ` - ${category.title}` : ""} - ${COMPANY.name}`,
    description: page.description,
  };
}

export default async function CollectionRoutePage({
  params,
}: CollectionRouteProps) {
  const { slug, collection } = await params;
  const page = getCollectionPage(slug, collection);
  const category = getCategoryPage(slug);

  if (!page || !category) {
    notFound();
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
