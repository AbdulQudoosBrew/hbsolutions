"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import CategoryImage from "@/components/ui/CategoryImage";
import Container from "@/components/ui/Container";
import type {
  CollectionItem,
  ProductPageData,
} from "@/lib/constants/collectionPages";
import { getColourSwatch, isLightSwatch } from "@/lib/utils/colorSwatch";
import {
  findImageForColour,
  findImagesForColour,
} from "@/lib/utils/colourImages";
import { uniqueImages } from "@/lib/utils/imageUrl";

interface ProductPageViewProps {
  product: ProductPageData;
  categoryTitle: string;
  categoryHref: string;
  collectionTitle: string;
  collectionHref: string;
  relatedProducts?: CollectionItem[];
}

export default function ProductPageView({
  product,
  categoryTitle,
  categoryHref,
  collectionTitle,
  collectionHref,
  relatedProducts = [],
}: ProductPageViewProps) {
  const allImages = useMemo(
    () =>
      uniqueImages(
        product.images?.length ? product.images : [product.image]
      ),
    [product.images, product.image]
  );
  const colours = (product.colours || []).filter((c) => !c.href);
  const sizes = product.sizes || [];

  const [colour, setColour] = useState(colours[0]?.value ?? "");
  const [size, setSize] = useState(sizes[0]?.value ?? "");
  const [activeImage, setActiveImage] = useState(0);
  const [zoom, setZoom] = useState({ x: 50, y: 50, on: false });

  const selectedColour = colours.find((c) => c.value === colour);
  const selectedSizeLabel = sizes.find((s) => s.value === size)?.label ?? "";

  const galleryImages = useMemo(() => {
    if (!selectedColour) return allImages;
    return uniqueImages(findImagesForColour(allImages, selectedColour));
  }, [allImages, selectedColour]);

  useEffect(() => {
    if (!selectedColour) {
      setActiveImage(0);
      return;
    }
    const matched = findImageForColour(allImages, selectedColour);
    if (!matched) {
      setActiveImage(0);
      return;
    }
    const idx = galleryImages.findIndex((img) => img === matched);
    setActiveImage(idx >= 0 ? idx : 0);
  }, [colour, selectedColour, allImages, galleryImages]);

  const enquireHref = useMemo(() => {
    const parts = [`I would like to enquire about ${product.title}`];
    if (selectedColour?.label) parts.push(`Colour: ${selectedColour.label}`);
    if (selectedSizeLabel) parts.push(`Size: ${selectedSizeLabel}`);
    return `/?enquiry=${encodeURIComponent(parts.join("\n"))}#contact`;
  }, [product.title, selectedColour?.label, selectedSizeLabel]);

  const activeSrc =
    galleryImages[activeImage] ||
    findImageForColour(allImages, selectedColour) ||
    allImages[0] ||
    product.image;

  const selectColour = (value: string) => {
    setColour(value);
    const opt = colours.find((c) => c.value === value);
    const matched = findImageForColour(allImages, opt);
    if (matched) {
      const nextImages = uniqueImages(findImagesForColour(allImages, opt));
      const idx = nextImages.findIndex((img) => img === matched);
      setActiveImage(idx >= 0 ? idx : 0);
    } else {
      setActiveImage(0);
    }
  };

  const related = relatedProducts.filter((item) => item.id !== product.slug);

  return (
    <div className="min-h-screen bg-white pt-[96px] sm:pt-[104px] lg:pt-[120px]">
      <Container
        size="wide"
        className="px-4 pb-14 pt-4 sm:px-6 sm:pb-16 sm:pt-6 md:px-8 md:pb-20 md:pt-8 lg:pb-24"
      >
        <nav
          className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[10px] uppercase tracking-[0.18em] text-[#aaaaaa] sm:text-[11px] sm:tracking-[0.2em]"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition-colors hover:text-[#111111]">
            Home
          </Link>
          <span>/</span>
          <Link
            href={categoryHref}
            className="transition-colors hover:text-[#111111]"
          >
            {categoryTitle}
          </Link>
          <span>/</span>
          <Link
            href={collectionHref}
            className="transition-colors hover:text-[#111111]"
          >
            {collectionTitle}
          </Link>
          <span className="hidden sm:inline">/</span>
          <span className="hidden max-w-[220px] truncate text-[#111111] sm:inline md:max-w-none">
            {product.title}
          </span>
        </nav>

        {product.heroImage ? (
          <div className="relative mt-4 aspect-[16/9] w-full overflow-hidden bg-[#f0f0f0] sm:mt-6 sm:aspect-[21/9] lg:aspect-[1500/400]">
            <CategoryImage
              src={product.heroImage}
              alt={product.title}
              variant="banner"
              priority
            />
          </div>
        ) : null}

        <div className="mt-6 grid items-start gap-6 sm:mt-8 sm:gap-8 md:mt-10 lg:mt-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Gallery */}
          <div className="w-full lg:col-span-5">
            <div
              className="relative mx-auto aspect-square w-full max-w-[300px] overflow-hidden border border-[#eeeeee] bg-white sm:max-w-[360px] md:max-w-[400px] lg:mx-0 lg:max-w-none lg:cursor-zoom-in"
              onMouseEnter={() => setZoom((z) => ({ ...z, on: true }))}
              onMouseLeave={() => setZoom({ x: 50, y: 50, on: false })}
              onMouseMove={(e) => {
                if (window.matchMedia("(hover: hover)").matches) {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setZoom({
                    on: true,
                    x: ((e.clientX - rect.left) / rect.width) * 100,
                    y: ((e.clientY - rect.top) / rect.height) * 100,
                  });
                }
              }}
            >
              <div
                key={activeSrc}
                className="absolute inset-0 bg-white p-4 transition-transform duration-200 ease-out will-change-transform sm:p-6 md:p-8"
                style={{
                  transform: zoom.on ? "scale(1.65)" : "scale(1)",
                  transformOrigin: `${zoom.x}% ${zoom.y}%`,
                }}
              >
                <div className="relative h-full w-full">
                  <CategoryImage
                    src={activeSrc}
                    alt={product.title}
                    variant="product"
                    priority
                    className="bg-white object-contain"
                  />
                </div>
              </div>
            </div>

            {galleryImages.length > 1 ? (
              <div className="mx-auto mt-3 grid max-w-[300px] grid-cols-4 gap-1.5 sm:mt-4 sm:max-w-[360px] sm:gap-2 md:max-w-[400px] lg:mx-0 lg:max-w-none lg:grid-cols-5">
                {galleryImages.map((img, index) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={`relative aspect-square overflow-hidden border bg-white p-1.5 transition-colors sm:p-2 ${
                      activeImage === index
                        ? "border-[#111111]"
                        : "border-[#eeeeee] hover:border-[#bbbbbb]"
                    }`}
                    aria-label={`View image ${index + 1}`}
                    aria-current={activeImage === index}
                  >
                    <CategoryImage
                      src={img}
                      alt=""
                      variant="product"
                      className="bg-white object-contain"
                    />
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          {/* Details */}
          <div className="w-full lg:col-span-7 lg:pt-1">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#999999] sm:text-[11px] sm:tracking-[0.28em]">
              {collectionTitle}
            </p>
            <h1 className="mt-2 text-[22px] font-light leading-snug tracking-[0.05em] text-[#111111] uppercase sm:mt-3 sm:text-[28px] sm:leading-tight sm:tracking-[0.06em] md:text-[34px]">
              {product.title}
            </h1>

            <div className="mt-4 h-px w-10 bg-[#111111] sm:mt-6 sm:w-12" />

            <p className="mt-4 max-w-xl text-sm leading-6 text-[#666666] sm:mt-6 sm:text-[15px] sm:leading-7">
              {product.description}
            </p>

            {product.features && product.features.length > 0 ? (
              <ul className="mt-5 max-w-xl space-y-2 text-sm leading-6 text-[#555555] sm:mt-6 sm:text-[15px] sm:leading-7">
                {product.features.map((feature) => (
                  <li key={feature} className="flex gap-2.5">
                    <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 bg-[#111111]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {product.specs && product.specs.length > 0 ? (
              <div className="mt-7 max-w-xl sm:mt-9">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#111111] sm:text-[11px] sm:tracking-[0.25em]">
                  Specifications
                </p>
                <dl className="mt-3 border-t border-[#eeeeee] sm:mt-4">
                  {product.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="grid gap-1 border-b border-[#eeeeee] py-3 sm:grid-cols-[minmax(120px,34%)_1fr] sm:gap-4 sm:py-3.5"
                    >
                      <dt className="text-[11px] uppercase tracking-[0.12em] text-[#888888] sm:text-xs">
                        {spec.label}
                      </dt>
                      <dd className="text-sm leading-6 text-[#444444] sm:text-[15px] sm:leading-7">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ) : null}

            {colours.length > 0 ? (
              <div className="mt-6 sm:mt-8">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#111111] sm:text-[11px] sm:tracking-[0.25em]">
                  Colour
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2.5 sm:mt-4 sm:gap-3">
                  {colours.map((opt) => {
                    const swatch = getColourSwatch(opt.value, opt.label);
                    const selected = colour === opt.value;
                    const light = isLightSwatch(swatch);
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        title={opt.label}
                        aria-label={opt.label}
                        aria-pressed={selected}
                        onClick={() => selectColour(opt.value)}
                        className={`relative h-8 w-8 rounded-full transition-transform sm:h-9 sm:w-9 ${
                          selected
                            ? "scale-110 ring-2 ring-[#111111] ring-offset-2"
                            : "hover:scale-105"
                        }`}
                        style={{
                          background: swatch,
                          border: light
                            ? "1px solid #d4d4d4"
                            : "1px solid transparent",
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            ) : null}

            {sizes.length > 0 ? (
              <div className="mt-6 sm:mt-8">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#111111] sm:text-[11px] sm:tracking-[0.25em]">
                  Size
                </p>
                <div className="mt-3 flex flex-wrap gap-2 sm:mt-4">
                  {sizes.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setSize(opt.value)}
                      className={`min-w-[3.25rem] border px-3 py-2 text-[11px] tracking-[0.08em] transition-colors sm:min-w-[3.5rem] sm:px-4 sm:py-2.5 sm:text-xs ${
                        size === opt.value
                          ? "border-[#111111] bg-[#111111] text-white"
                          : "border-[#e5e5e5] text-[#444444] hover:border-[#111111]"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-8 sm:mt-10">
              <Link
                href={enquireHref}
                className="inline-flex h-11 w-full items-center justify-center bg-[#111111] px-8 text-[11px] font-medium uppercase tracking-[0.22em] text-white transition-colors hover:bg-[#000000] sm:h-12 sm:w-auto sm:min-w-[220px]"
              >
                Enquire Now
              </Link>
            </div>

            <p className="mt-4 max-w-md text-xs leading-5 text-[#999999] sm:mt-5">
              Trade and retail enquiries welcome. We’ll confirm availability,
              finishes and lead times.
            </p>
          </div>
        </div>

        {related.length > 0 ? (
          <section className="mt-14 border-t border-[#eeeeee] pt-10 sm:mt-16 sm:pt-12 md:mt-20 md:pt-14 lg:mt-24">
            <div className="mb-6 flex flex-col items-start justify-between gap-3 sm:mb-8 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#999999] sm:text-[11px] sm:tracking-[0.28em]">
                  {collectionTitle}
                </p>
                <h2 className="mt-1.5 text-lg font-light uppercase tracking-[0.1em] text-[#111111] sm:mt-2 sm:text-xl sm:tracking-[0.12em] md:text-2xl">
                  Related Products
                </h2>
              </div>
              <Link
                href={collectionHref}
                className="text-[10px] uppercase tracking-[0.18em] text-[#666666] transition-colors hover:text-[#111111] sm:text-[11px] sm:tracking-[0.2em]"
              >
                View collection
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-4 sm:gap-y-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-10">
              {related.slice(0, 8).map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="group flex flex-col"
                >
                  <div className="relative aspect-square overflow-hidden border border-[#eeeeee] bg-white p-3 transition-colors group-hover:border-[#111111] sm:p-4">
                    <CategoryImage
                      src={item.image}
                      alt={item.label}
                      variant="product"
                      className="bg-white object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <span className="mt-2.5 px-1 text-center text-[10px] uppercase leading-snug tracking-[0.12em] text-[#444444] transition-colors group-hover:text-[#111111] sm:mt-3 sm:text-[11px] sm:tracking-[0.16em]">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </Container>
    </div>
  );
}
