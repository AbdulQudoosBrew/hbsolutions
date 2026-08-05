"use client";

import Link from "next/link";
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
  const images = product.images?.length ? product.images : [product.image];
  // Only real product colour variants — never sibling products
  const colours = (product.colours || []).filter((c) => !c.href);
  const sizes = product.sizes || [];

  const [activeImage, setActiveImage] = useState(0);
  const [colour, setColour] = useState(colours[0]?.value ?? "");
  const [size, setSize] = useState(sizes[0]?.value ?? "");
  const [zoom, setZoom] = useState({ x: 50, y: 50, on: false });

  const selectedColourLabel =
    colours.find((c) => c.value === colour)?.label ?? "";
  const selectedSizeLabel = sizes.find((s) => s.value === size)?.label ?? "";

  const enquireHref = useMemo(() => {
    const parts = [`I would like to enquire about ${product.title}`];
    if (selectedColourLabel) parts.push(`Colour: ${selectedColourLabel}`);
    if (selectedSizeLabel) parts.push(`Size: ${selectedSizeLabel}`);
    return `/?enquiry=${encodeURIComponent(parts.join("\n"))}#contact`;
  }, [product.title, selectedColourLabel, selectedSizeLabel]);

  const activeSrc =
    colours.find((c) => c.value === colour)?.image ||
    images[activeImage] ||
    product.image;

  return (
    <div className="bg-white pt-[64px] lg:pt-[88px]">
      <Container size="wide" className="pb-16 pt-6 md:pt-10">
        <nav
          className="text-[11px] uppercase tracking-[0.22em] text-[#999999]"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition-colors hover:text-[#000000]">
            Home
          </Link>
          <span className="mx-2 text-[#cccccc]">/</span>
          <Link
            href={categoryHref}
            className="transition-colors hover:text-[#000000]"
          >
            {categoryTitle}
          </Link>
          <span className="mx-2 text-[#cccccc]">/</span>
          <Link
            href={collectionHref}
            className="transition-colors hover:text-[#000000]"
          >
            {collectionTitle}
          </Link>
          <span className="mx-2 text-[#cccccc]">/</span>
          <span className="text-[#000000]">{product.title}</span>
        </nav>

        <div className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Gallery + zoom */}
          <div>
            <div
              className="relative aspect-square w-full cursor-zoom-in overflow-hidden bg-[#f7f7f7]"
              onMouseEnter={() => setZoom((z) => ({ ...z, on: true }))}
              onMouseLeave={() => setZoom({ x: 50, y: 50, on: false })}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setZoom({
                  on: true,
                  x: ((e.clientX - rect.left) / rect.width) * 100,
                  y: ((e.clientY - rect.top) / rect.height) * 100,
                });
              }}
            >
              <div
                className="absolute inset-0 transition-transform duration-150 ease-out will-change-transform"
                style={{
                  transform: zoom.on ? "scale(1.75)" : "scale(1)",
                  transformOrigin: `${zoom.x}% ${zoom.y}%`,
                }}
              >
                <CategoryImage
                  src={activeSrc}
                  alt={product.title}
                  variant="product"
                  priority
                />
              </div>
            </div>

            {images.length > 1 ? (
              <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
                {images.map((img, index) => (
                  <button
                    key={`${img}-${index}`}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={`relative h-16 w-16 shrink-0 overflow-hidden bg-[#f7f7f7] transition-opacity ${
                      activeImage === index
                        ? "ring-1 ring-[#000000] opacity-100"
                        : "opacity-70 hover:opacity-100"
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
          <div className="lg:pt-2">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#999999]">
              {collectionTitle}
            </p>
            <h1 className="mt-3 text-2xl font-light uppercase tracking-[0.1em] text-[#000000] md:text-3xl">
              {product.title}
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#666666] md:text-[15px]">
              {product.description}
            </p>

            {colours.length > 0 ? (
              <div className="mt-8 border-t border-[#efefef] pt-8">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#000000]">
                    Colour
                  </p>
                  {selectedColourLabel ? (
                    <p className="text-xs text-[#888888]">{selectedColourLabel}</p>
                  ) : null}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {colours.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        setColour(opt.value);
                        if (opt.image) {
                          const idx = images.findIndex((img) => img === opt.image);
                          if (idx >= 0) setActiveImage(idx);
                        }
                      }}
                      className={`min-w-[4.5rem] border px-4 py-2.5 text-[11px] uppercase tracking-[0.18em] transition-colors ${
                        colour === opt.value
                          ? "border-[#000000] bg-[#000000] text-white"
                          : "border-[#e0e0e0] text-[#444444] hover:border-[#000000]"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {sizes.length > 0 ? (
              <div
                className={`mt-6 ${colours.length === 0 ? "border-t border-[#efefef] pt-8" : ""}`}
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#000000]">
                  Size
                </p>
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="mt-4 w-full max-w-sm border border-[#e0e0e0] bg-white px-4 py-3 text-sm text-[#333333] outline-none transition-colors focus:border-[#000000]"
                >
                  {sizes.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            ) : null}

            <div className="mt-10">
              <Link
                href={enquireHref}
                className="inline-flex min-w-[200px] items-center justify-center bg-[#000000] px-10 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] text-white transition-colors hover:bg-[#222222]"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
