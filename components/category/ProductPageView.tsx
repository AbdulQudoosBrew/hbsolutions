"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
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
  const router = useRouter();
  const images = product.images?.length ? product.images : [product.image];
  const [activeImage, setActiveImage] = useState(0);
  const [colour, setColour] = useState(
    product.colours.find((c) => c.value === product.slug)?.value ||
      product.colours[0]?.value ||
      ""
  );
  const [size, setSize] = useState(product.sizes[0]?.value ?? "");

  const selectedColourLabel = useMemo(
    () => product.colours.find((c) => c.value === colour)?.label ?? "",
    [colour, product.colours]
  );
  const selectedSizeLabel = useMemo(
    () => product.sizes.find((s) => s.value === size)?.label ?? "",
    [size, product.sizes]
  );

  const enquireHref = useMemo(() => {
    const parts = [
      `I would like to enquire about ${product.title}`,
      `Category: ${categoryTitle}`,
      `Collection: ${collectionTitle}`,
    ];
    if (selectedColourLabel) parts.push(`Colour: ${selectedColourLabel}`);
    if (selectedSizeLabel) parts.push(`Size: ${selectedSizeLabel}`);
    return `/?enquiry=${encodeURIComponent(parts.join("\n"))}#contact`;
  }, [
    product.title,
    categoryTitle,
    collectionTitle,
    selectedColourLabel,
    selectedSizeLabel,
  ]);

  const onColourChange = (value: string) => {
    const opt = product.colours.find((c) => c.value === value);
    // Sibling finishes navigate to their product page
    if (opt?.href && opt.href !== `/${product.categorySlug}/${product.collectionSlug}/${product.slug}`) {
      router.push(opt.href);
      return;
    }
    setColour(value);
    if (opt?.image) {
      const idx = images.findIndex((img) => img === opt.image);
      setActiveImage(idx >= 0 ? idx : 0);
    }
  };

  return (
    <div className="bg-white pt-[64px] lg:pt-[88px]">
      {/* Product header */}
      <div className="border-b border-[#ebebeb] bg-[#fafafa]">
        <Container size="wide" className="py-6 md:py-8">
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

          <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.35em] text-[#888888]">
            {categoryTitle} / {collectionTitle}
          </p>
          <h1 className="mt-3 max-w-4xl text-2xl font-light uppercase tracking-[0.12em] text-[#000000] md:text-3xl lg:text-4xl">
            {product.title}
          </h1>
        </Container>
      </div>

      <Container size="wide" className="py-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-start">
          {/* Gallery */}
          <div>
            <div className="relative aspect-square w-full overflow-hidden border border-[#e5e5e5] bg-white">
              <CategoryImage
                src={
                  product.colours.find((c) => c.value === colour)?.image ||
                  images[activeImage] ||
                  product.image
                }
                alt={product.title}
                variant="product"
                priority
              />
            </div>

            {images.length > 1 ? (
              <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-5 md:grid-cols-6">
                {images.map((img, index) => (
                  <button
                    key={`${img}-${index}`}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={`relative aspect-square overflow-hidden border bg-white transition-colors ${
                      activeImage === index
                        ? "border-[#000000]"
                        : "border-[#e5e5e5] hover:border-[#999999]"
                    }`}
                    aria-label={`View image ${index + 1}`}
                  >
                    <CategoryImage
                      src={img}
                      alt=""
                      variant="card"
                      className="object-contain"
                    />
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          {/* Details */}
          <div>
            <p className="text-sm leading-relaxed text-[#555555] md:text-base">
              {product.description}
            </p>

            {product.features && product.features.length > 0 ? (
              <ul className="mt-6 space-y-2 border-t border-[#ebebeb] pt-6">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 text-sm text-[#444444]"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#000000]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {product.colours.length > 0 ? (
              <div className="mt-8">
                <label
                  htmlFor="product-colour"
                  className="text-xs font-medium uppercase tracking-[0.25em] text-[#000000]"
                >
                  Colour
                </label>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.colours.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => onColourChange(opt.value)}
                      className={`border px-3 py-2 text-xs uppercase tracking-[0.15em] transition-colors ${
                        colour === opt.value
                          ? "border-[#000000] bg-[#000000] text-white"
                          : "border-[#d0d0d0] bg-white text-[#333333] hover:border-[#000000]"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                {/* Keep select for a11y / long lists */}
                <select
                  id="product-colour"
                  className="sr-only"
                  value={colour}
                  onChange={(e) => onColourChange(e.target.value)}
                >
                  {product.colours.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            ) : null}

            {product.sizes.length > 0 ? (
              <div className="mt-6">
                <label
                  htmlFor="product-size"
                  className="text-xs font-medium uppercase tracking-[0.25em] text-[#000000]"
                >
                  Size
                </label>
                <select
                  id="product-size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="mt-3 w-full border border-[#d0d0d0] bg-white px-4 py-3 text-sm text-[#333333] outline-none transition-colors focus:border-[#000000]"
                >
                  {product.sizes.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            ) : null}

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href={enquireHref}
                className="inline-flex items-center justify-center border border-[#000000] bg-[#000000] px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-[#000000]"
              >
                Enquire Now
              </Link>
              <Link
                href={collectionHref}
                className="inline-flex items-center justify-center border border-[#d0d0d0] px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-[#333333] transition-colors hover:border-[#000000] hover:text-[#000000]"
              >
                Back to {collectionTitle}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
