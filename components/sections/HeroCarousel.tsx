"use client";

import { useCallback, useEffect } from "react";
import Link from "next/link";
import RemoteImage from "@/components/ui/RemoteImage";
import { CAROUSEL_SLIDES } from "@/lib/constants/siteData";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { nextSlide, setActiveSlide } from "@/lib/store/slices/uiSlice";

export default function HeroCarousel() {
  const dispatch = useAppDispatch();
  const activeSlide = useAppSelector((state) => state.ui.activeSlide);
  const slide = CAROUSEL_SLIDES[activeSlide] ?? CAROUSEL_SLIDES[0];
  const total = CAROUSEL_SLIDES.length;

  const goToNext = useCallback(() => {
    dispatch(nextSlide(total));
  }, [dispatch, total]);

  const goToPrev = useCallback(() => {
    dispatch(setActiveSlide((activeSlide - 1 + total) % total));
  }, [dispatch, activeSlide, total]);

  useEffect(() => {
    const interval = setInterval(goToNext, 5500);
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <section
      className="relative w-full overflow-hidden bg-[#111111]"
      aria-roledescription="carousel"
      aria-label="Featured products"
    >
      <div className="relative h-[340px] w-full sm:h-[420px] md:h-[500px] lg:h-[560px]">
        {CAROUSEL_SLIDES.map((s, index) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              index === activeSlide
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
            aria-hidden={index !== activeSlide}
          >
            <RemoteImage
              src={s.image}
              alt={s.title}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
          </div>
        ))}

        <div className="absolute inset-0 z-10 flex items-end">
          <div className="flex w-full items-end justify-between gap-4 px-4 pb-14 sm:px-8 sm:pb-14 md:px-12 md:pb-16">
            <div
              key={slide.id}
              className="max-w-xl animate-[fadeUp_0.55s_ease-out]"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/70">
                Haris Building Solutions
              </p>
              <h2 className="mt-2 text-2xl font-light uppercase tracking-[0.12em] text-white sm:text-3xl md:text-4xl">
                {slide.title}
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
                {slide.description}
              </p>
              <Link
                href={slide.ctaHref}
                className="mt-5 inline-flex items-center border border-white/70 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-[#000000]"
              >
                {slide.ctaLabel}
              </Link>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <button
                type="button"
                onClick={goToPrev}
                className="flex h-11 w-11 items-center justify-center border border-white/40 text-white transition-colors hover:border-white hover:bg-white/10"
                aria-label="Previous slide"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="flex h-11 w-11 items-center justify-center border border-white/40 text-white transition-colors hover:border-white hover:bg-white/10"
                aria-label="Next slide"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-5">
          {CAROUSEL_SLIDES.map((s, index) => (
            <button
              key={s.id}
              type="button"
              onClick={() => dispatch(setActiveSlide(index))}
              className={`h-1.5 rounded-full transition-all duration-400 ${
                index === activeSlide
                  ? "w-7 bg-white"
                  : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeSlide}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
