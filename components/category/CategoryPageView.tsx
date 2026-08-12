import Link from "next/link";
import CategoryImage from "@/components/ui/CategoryImage";
import Container from "@/components/ui/Container";
import type { CategoryPageData } from "@/lib/constants/categoryPages";

interface CategoryPageViewProps {
  category: CategoryPageData;
}

export default function CategoryPageView({ category }: CategoryPageViewProps) {
  const collectionHeading =
    category.collectionHeading ?? "View Our Collection";
  const isPortrait = category.collectionAspect === "portrait";

  return (
    <div className="bg-white pt-[96px] sm:pt-[104px] lg:pt-[120px]">
      <Container
        size="wide"
        className="px-4 pb-6 pt-4 sm:px-6 sm:pb-8 sm:pt-6 md:px-8 md:pb-10 md:pt-8 lg:pb-12"
      >
        <nav
          className="mb-4 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-[10px] uppercase tracking-[0.18em] text-[#999999] sm:mb-6 sm:gap-x-2 sm:text-[11px] sm:tracking-[0.22em]"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition-colors hover:text-[#000000]">
            Home
          </Link>
          <span aria-hidden>/</span>
          <span className="max-w-[70vw] truncate text-[#000000] sm:max-w-none">
            {category.title}
          </span>
        </nav>

        <div className="mx-auto max-w-3xl px-1 text-center sm:px-0">
          <h1 className="text-[1.5rem] font-medium uppercase leading-[1.25] tracking-[0.12em] text-[#000000] sm:text-3xl sm:tracking-[0.16em] md:text-4xl md:tracking-[0.18em] lg:text-[2.75rem]">
            {category.title}
          </h1>

          {category.description ? (
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-[1.7] text-[#555555] sm:mt-5 sm:text-[15px] sm:leading-[1.75] md:mt-6 md:text-base">
              {category.description}
            </p>
          ) : null}
        </div>
      </Container>

      {category.heroImage ? (
        <div className="relative w-full overflow-hidden bg-[#f0f0f0]">
          <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-[1536/931]">
            <CategoryImage
              src={category.heroImage}
              alt={category.title}
              variant="hero"
              priority
            />
          </div>
        </div>
      ) : null}

      {category.bannerImage ? (
        <div className="relative w-full overflow-hidden bg-[#f0f0f0]">
          <div className="relative min-h-[44px] w-full aspect-[1536/233] sm:min-h-[56px] md:min-h-[72px]">
            <CategoryImage
              src={category.bannerImage}
              alt={`${category.title} banner`}
              variant="banner"
            />
          </div>
        </div>
      ) : null}

      <Container
        size="wide"
        className="px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:py-20"
      >
        <div className="mb-8 flex flex-col items-center gap-2.5 text-center sm:mb-10 sm:gap-3 md:mb-14">
          <img
            src="https://giavanibathrooms.com/wp-content/uploads/2023/10/333.png"
            alt=""
            width={69}
            height={58}
            className="h-8 w-auto opacity-80 sm:h-9 md:h-10"
          />
          <p className="px-2 text-xs font-medium uppercase tracking-[0.28em] text-[#000000] sm:text-sm sm:tracking-[0.35em]">
            {collectionHeading}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 sm:gap-y-10 md:grid-cols-3 md:gap-x-6 md:gap-y-12 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-14">
          {category.collections.map((collection) => (
            <Link
              key={collection.id}
              href={collection.href}
              className="group flex flex-col items-center text-center"
            >
              <div
                className={`relative w-full overflow-hidden bg-[#f5f5f5] ${
                  isPortrait ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <CategoryImage
                  src={collection.image}
                  alt={collection.label}
                  variant="card"
                  className="transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
              </div>
              <span className="mt-3 inline-flex min-h-9 items-center justify-center px-1 text-[11px] font-medium uppercase leading-snug tracking-[0.14em] text-[#333333] transition-colors duration-300 group-hover:text-[#000000] sm:mt-4 sm:min-h-10 sm:px-2 sm:text-xs sm:tracking-[0.2em] md:text-[13px]">
                {collection.label}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
