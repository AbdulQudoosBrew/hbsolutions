import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryPageView from "@/components/category/CategoryPageView";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import {
  getAllCategorySlugs,
  getCategoryPage,
} from "@/lib/constants/categoryPages";
import { COMPANY } from "@/lib/constants/siteData";

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
    return { title: COMPANY.name };
  }

  return {
    title: `${category.title} - ${COMPANY.name}`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryPage(slug);

  if (!category) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <CategoryPageView category={category} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
