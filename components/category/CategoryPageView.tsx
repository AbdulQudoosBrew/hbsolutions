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
          <span className="text-[#000000]">{category.title}</span>
        </nav>

        <h1 className="mt-8 text-3xl font-light uppercase tracking-[0.15em] text-[#000000] md:text-4xl lg:text-5xl">
          {category.title}
        </h1>

        {category.description ? (
          <p className="mt-6 max-w-4xl text-sm leading-relaxed text-[#555555] md:text-base">
            {category.description}
          </p>
        ) : null}
      </Container>

      {category.heroImage ? (
        <div className="relative mt-4 aspect-[16/9] w-full overflow-hidden md:aspect-[21/9] lg:aspect-[1754/1063]">
          <CategoryImage src={category.heroImage} alt={category.title} />
        </div>
      ) : null}

      {category.bannerImage ? (
        <div className="relative w-full overflow-hidden">
          <div className="relative aspect-[1754/266] w-full">
            <CategoryImage
              src={category.bannerImage}
              alt={`${category.title} banner`}
            />
          </div>
        </div>
      ) : null}

      <Container
        size="wide"
        className={category.heroImage ? "py-12 md:py-16" : "pb-12 pt-4 md:pb-16 md:pt-6"}
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
            {collectionHeading}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
          {category.collections.map((collection) => (
            <Link
              key={collection.id}
              href={collection.href}
              className="group flex flex-col items-center text-center"
            >
              <div
                className={`relative w-full overflow-hidden border border-[#d8d8d8] bg-[#f5f5f5] shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-[border-color,box-shadow] duration-300 group-hover:border-[#000000] group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] ${
                  isPortrait ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <CategoryImage src={collection.image} alt={collection.label} />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
              </div>
              <span className="mt-4 inline-flex min-h-10 items-center justify-center px-2 text-xs font-medium uppercase tracking-[0.2em] text-[#333333] transition-colors duration-300 group-hover:text-[#000000] md:text-[13px]">
                {collection.label}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
