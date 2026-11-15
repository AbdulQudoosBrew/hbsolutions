import Link from "next/link";
import CategoryImage from "@/components/ui/CategoryImage";
import Container from "@/components/ui/Container";
import FavouriteButton from "@/components/ui/FavouriteButton";
import type { CollectionPageData } from "@/lib/constants/collectionPages";
import { getCollectionSummaryLines } from "@/lib/utils/productBlurb";

interface CollectionPageViewProps {
  collection: CollectionPageData;
  categoryTitle: string;
  categoryHref: string;
  parentCollection?: {
    title: string;
    href: string;
  };
}

export default function CollectionPageView({
  collection,
  categoryTitle,
  categoryHref,
  parentCollection,
}: CollectionPageViewProps) {
  return (
    <div className="bg-white pt-[96px] sm:pt-[104px] lg:pt-[120px]">
      <Container
        size="wide"
        className="px-4 pb-10 pt-4 sm:px-6 sm:pb-12 sm:pt-6 md:px-8 md:pb-16 md:pt-8 lg:pb-20"
      >
        <nav
          className="mb-4 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-[10px] uppercase tracking-[0.18em] text-[#999999] sm:mb-6 sm:gap-x-2 sm:text-[11px] sm:tracking-[0.22em]"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition-colors hover:text-[#000000]">
            Home
          </Link>
          <span aria-hidden>/</span>
          <Link
            href={categoryHref}
            className="transition-colors hover:text-[#000000]"
          >
            {categoryTitle}
          </Link>
          {parentCollection ? (
            <>
              <span aria-hidden>/</span>
              <Link
                href={parentCollection.href}
                className="transition-colors hover:text-[#000000]"
              >
                {parentCollection.title}
              </Link>
            </>
          ) : null}
          <span aria-hidden>/</span>
          <span className="max-w-[55vw] truncate text-[#000000] sm:max-w-none">
            {collection.title}
          </span>
        </nav>

        <div className="mx-auto max-w-3xl px-1 text-center sm:px-0">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#888888] sm:text-[11px] sm:tracking-[0.35em]">
            {parentCollection?.title ?? categoryTitle}
          </p>
          <h1 className="mt-2 text-[1.5rem] font-medium uppercase leading-[1.25] tracking-[0.12em] text-[#000000] sm:mt-3 sm:text-3xl sm:tracking-[0.16em] md:text-4xl md:tracking-[0.18em] lg:text-[2.75rem]">
            {collection.title}
          </h1>

          {collection.description || collection.items.length ? (
            <div className="mx-auto mt-4 max-w-2xl space-y-2 text-sm leading-[1.7] text-[#555555] sm:mt-5 sm:text-[15px] sm:leading-[1.75] md:mt-6 md:text-base">
              {getCollectionSummaryLines(collection).map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          ) : null}
        </div>

        <div className="mb-8 mt-8 flex flex-col items-center gap-2.5 text-center sm:mb-10 sm:mt-10 sm:gap-3 md:mb-14">
          <img
            src="https://giavanibathrooms.com/wp-content/uploads/2023/10/333.png"
            alt=""
            width={69}
            height={58}
            className="h-8 w-auto opacity-80 sm:h-9 md:h-10"
          />
          <p className="px-2 text-xs font-medium uppercase tracking-[0.28em] text-[#000000] sm:text-sm sm:tracking-[0.35em]">
            {collection.itemsHeading ?? "View Our Range"}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 sm:gap-y-10 md:grid-cols-3 md:gap-x-6 md:gap-y-12 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-14">
          {collection.items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex flex-col items-center text-center"
            >
              <div className="relative aspect-square w-full overflow-hidden border border-[#e5e5e5] bg-white shadow-[0_1px_1px_rgba(0,0,0,0.06),0_6px_10px_rgba(0,0,0,0.08)] transition-shadow duration-300 group-hover:shadow-[0_2px_2px_rgba(0,0,0,0.07),0_10px_16px_rgba(0,0,0,0.1)]">
                <CategoryImage
                  src={item.image}
                  alt={item.label}
                  variant="card"
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {item.isSubcategory ? null : (
                  <FavouriteButton
                    item={{
                      id: item.href,
                      title: item.label,
                      image: item.image,
                      href: item.href,
                      price: item.price,
                    }}
                  />
                )}
              </div>
              <div className="mt-3 w-full sm:mt-4">
                <span className="inline-flex min-h-9 w-full items-center justify-center px-1 text-[11px] font-medium uppercase leading-snug tracking-[0.14em] text-[#333333] transition-transform duration-300 group-hover:scale-110 sm:min-h-10 sm:px-2 sm:text-xs sm:tracking-[0.2em] md:text-[13px]">
                  {item.label}
                </span>
                <span className="block pb-1.5 text-[9px] uppercase tracking-[0.16em] text-[#888888] sm:pb-2 sm:text-[10px] sm:tracking-[0.2em]">
                  {item.isSubcategory
                    ? "View range"
                    : item.purchasable
                      ? item.price || "Add to basket"
                      : "View & Enquire"}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>

      {collection.heroImage ? (
        <div className="relative h-[220px] w-full overflow-hidden bg-[#ffffff] sm:h-[280px] md:h-[340px] lg:h-[400px]">
          <CategoryImage
            src={collection.heroImage}
            alt={collection.title}
            variant="hero"
          />
        </div>
      ) : null}
    </div>
  );
}
