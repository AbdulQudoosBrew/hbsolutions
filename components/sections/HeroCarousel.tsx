"use client";

import RemoteImage from "@/components/ui/RemoteImage";
import { useEffect, useCallback } from "react";
import Button from "@/components/ui/Button";
import TextSection from "@/components/ui/TextSection";
import { HERO_SLIDES } from "@/lib/constants/siteData";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { nextSlide, setActiveSlide } from "@/lib/store/slices/uiSlice";

export default function HeroCarousel() {
  const dispatch = useAppDispatch();
  const activeSlide = useAppSelector((state) => state.ui.activeSlide);
  const slide = HERO_SLIDES[activeSlide];

  const goToNext = useCallback(() => {
    dispatch(nextSlide(HERO_SLIDES.length));
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(goToNext, 6000);
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <section className="relative min-h-screen">
      {HERO_SLIDES.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === activeSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <RemoteImage
            src={s.image}
            alt={s.title}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#1a1a1a]/60" />
        </div>
      ))}

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-32 pb-16 text-center">
        <TextSection
          title={slide.title}
          paragraphs={[slide.description]}
          headingLevel="h1"
          align="center"
          color="light"
          className="max-w-3xl"
        />
        <div className="mt-10">
          <Button href={slide.ctaHref} variant="outline" size="lg">
            {slide.ctaLabel}
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
          {HERO_SLIDES.map((s, index) => (
            <button
              key={s.id}
              type="button"
              onClick={() => dispatch(setActiveSlide(index))}
              className={`h-2 w-2 rounded-full transition-all ${
                index === activeSlide
                  ? "w-8 bg-white"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
