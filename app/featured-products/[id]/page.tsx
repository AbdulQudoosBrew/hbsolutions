import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import CategoryImage from "@/components/ui/CategoryImage";
import Container from "@/components/ui/Container";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { getFeaturedProducts } from "@/lib/featuredProducts";
import { COMPANY } from "@/lib/constants/siteData";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

type FeaturedProductPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: FeaturedProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const items = await getFeaturedProducts();
  const product = items.find((item) => item.id === id);
  if (!product) {
    return { title: COMPANY.name };
  }

  return buildPageMetadata({
    title: product.title,
    description:
      product.description ||
      `${product.title} from Haris Building Solutions in Manchester.`,
    path: `/featured-products/${id}`,
    image: product.image,
  });
}

export default async function FeaturedProductPage({
  params,
}: FeaturedProductPageProps) {
  const { id } = await params;
  const items = await getFeaturedProducts();
  const product = items.find((item) => item.id === id);

  if (!product) notFound();

  return (
    <>
      <Header />
      <main>
        <div className="bg-white pt-[96px] sm:pt-[104px] lg:pt-[120px]">
          <Container
            size="wide"
            className="px-4 py-8 sm:px-6 md:px-8 md:py-12 lg:py-16"
          >
            <nav
              className="mb-6 flex flex-wrap items-center justify-center gap-x-1.5 text-[10px] uppercase tracking-[0.18em] text-[#999999]"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-[#000000]">
                Home
              </Link>
              <span aria-hidden>/</span>
              <Link href="/featured-products" className="hover:text-[#000000]">
                Featured Products
              </Link>
              <span aria-hidden>/</span>
              <span className="text-[#000000]">{product.title}</span>
            </nav>
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="relative aspect-square w-full overflow-hidden border border-[#e5e5e5] bg-white lg:col-span-5">
                <CategoryImage
                  src={product.image}
                  alt={product.title}
                  variant="product"
                />
              </div>
              <div className="lg:col-span-7">
                <h1 className="text-[22px] font-light uppercase tracking-[0.05em] text-[#111111] sm:text-[28px]">
                  {product.title}
                </h1>
                {product.description ? (
                  <p className="mt-6 max-w-xl text-sm leading-7 text-[#666666]">
                    {product.description}
                  </p>
                ) : null}
              </div>
            </div>
          </Container>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
