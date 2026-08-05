import Link from "next/link";
import CategoryImage from "@/components/ui/CategoryImage";
import Container from "@/components/ui/Container";
import type { ProductPageData } from "@/lib/constants/collectionPages";

interface ProductPageViewProps {
  product: ProductPageData;
  categoryTitle: string;
  categoryHref: string;
  collectionTitle: string;
  collectionHref: string;
}

export default function ProductPageView({
  product,
  categoryTitle,
  categoryHref,
  collectionTitle,
  collectionHref,
}: ProductPageViewProps) {
  return (
    <div className="bg-white pt-[64px] lg:pt-[88px]">
      <Container size="wide" className="pb-16 pt-6 md:pt-10">
        <nav
          className="text-xs uppercase tracking-[0.2em] text-[#888888]"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition-colors hover:text-[#000000]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={categoryHref}
            className="transition-colors hover:text-[#000000]"
          >
            {categoryTitle}
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={collectionHref}
            className="transition-colors hover:text-[#000000]"
          >
            {collectionTitle}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#000000]">{product.title}</span>
        </nav>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-start">
          <div className="relative aspect-square w-full overflow-hidden border border-[#d8d8d8] bg-white">
            <CategoryImage
              src={product.image}
              alt={product.title}
              variant="product"
              priority
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#888888]">
              {categoryTitle} / {collectionTitle}
            </p>
            <h1 className="mt-4 text-2xl font-light uppercase tracking-[0.12em] text-[#000000] md:text-3xl lg:text-4xl">
              {product.title}
            </h1>
            <p className="mt-6 text-sm leading-relaxed text-[#555555] md:text-base">
              {product.description}
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center border border-[#000000] bg-[#000000] px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-[#000000]"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
