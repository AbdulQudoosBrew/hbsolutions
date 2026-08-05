import Link from "next/link";
import CategoryImage from "@/components/ui/CategoryImage";
import Container from "@/components/ui/Container";
import type { CollectionPageData } from "@/lib/constants/collectionPages";

interface CollectionPageViewProps {
  collection: CollectionPageData;
  categoryTitle: string;
  categoryHref: string;
}

export default function CollectionPageView({
  collection,
  categoryTitle,
  categoryHref,
}: CollectionPageViewProps) {
  return (
    <div className="bg-white pt-[64px] lg:pt-[88px]">
      <Container size="wide" className="pb-8 pt-6 md:pt-10">
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
          <span className="text-[#000000]">{collection.title}</span>
        </nav>

        <h1 className="mt-8 text-3xl font-light uppercase tracking-[0.15em] text-[#000000] md:text-4xl lg:text-5xl">
          {collection.title}
        </h1>

        {collection.description ? (
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-[#555555] md:text-base">
            {collection.description}
          </p>
        ) : null}
      </Container>

      {collection.heroImage ? (
        <div className="relative mt-4 aspect-[16/9] w-full overflow-hidden md:aspect-[21/9] lg:aspect-[1754/1063]">
          <CategoryImage
            src={collection.heroImage}
            alt={collection.title}
            variant="hero"
            priority
          />
        </div>
      ) : null}

      <Container
        size="wide"
        className={
          collection.heroImage ? "py-12 md:py-16" : "pb-12 pt-4 md:pb-16 md:pt-6"
        }
      >
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <img
            src="https://giavanibathrooms.com/wp-content/uploads/2023/10/333.png"
            alt=""
            width={69}
            height={58}
            className="h-10 w-auto opacity-80"
          />
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#000000]">
            {collection.itemsHeading ?? "View Our Range"}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
          {collection.items.map((item) => {
            const content = (
              <>
                <div className="relative aspect-square w-full overflow-hidden border border-[#d8d8d8] bg-[#f5f5f5] shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-[border-color,box-shadow] duration-300 group-hover:border-[#000000] group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                  <CategoryImage
                    src={item.image}
                    alt={item.label}
                    variant="card"
                    className="transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
                </div>
                <span className="mt-4 inline-flex min-h-10 items-center justify-center px-2 text-xs font-medium uppercase tracking-[0.2em] text-[#333333] transition-colors duration-300 group-hover:text-[#000000] md:text-[13px]">
                  {item.label}
                </span>
              </>
            );

            if (item.href.startsWith("/") && item.href !== `/${collection.categorySlug}/${collection.slug}`) {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="group flex flex-col items-center text-center"
                >
                  {content}
                </Link>
              );
            }

            return (
              <div
                key={item.id}
                className="group flex flex-col items-center text-center"
              >
                {content}
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
