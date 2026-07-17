"use client";

import { useCallback, useEffect } from "react";
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
    <section className="relative h-[86dvh] max-h-[86dvh] w-full overflow-hidden">
      {HERO_SLIDES.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-out ${
            index === activeSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${s.image})` }}
          aria-hidden={index !== activeSlide}
        >
          <div className="absolute inset-0 bg-black/50 sm:bg-black/45 lg:bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/40 sm:from-black/55 sm:via-transparent sm:to-black/30" />
        </div>
      ))}

      <div
        key={slide.id}
        className="relative z-10 flex h-full max-h-[100dvh] flex-col items-center justify-center px-4 py-12 pb-16 text-center sm:px-6 sm:py-16 sm:pb-20 md:px-8 animate-[fadeUp_0.7s_ease-out]"
      >
        <div className="flex w-full max-w-xl flex-col items-center sm:max-w-2xl lg:max-w-3xl">
          <TextSection
            title={slide.title}
            paragraphs={[slide.description]}
            headingLevel="h1"
            align="center"
            color="light"
            className="[&_h1]:text-xl [&_h1]:tracking-[0.08em] sm:[&_h1]:text-3xl sm:[&_h1]:tracking-[0.12em] md:[&_h1]:text-4xl lg:[&_h1]:text-5xl lg:[&_h1]:tracking-[0.15em] [&_p]:mt-3 [&_p]:line-clamp-4 [&_p]:text-xs [&_p]:leading-relaxed sm:[&_p]:mt-5 sm:[&_p]:line-clamp-none sm:[&_p]:text-sm md:[&_p]:text-base"
          />

          <div className="mt-5 w-full max-w-[220px] sm:mt-8 sm:max-w-none sm:w-auto">
            <Button
              href={slide.ctaHref}
              variant="outline"
              size="sm"
              fullWidth
              className="sm:w-auto sm:!px-8 sm:!py-3.5 sm:!text-sm"
            >
              {slide.ctaLabel}
            </Button>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-8 sm:gap-3">
          {HERO_SLIDES.map((s, index) => (
            <button
              key={s.id}
              type="button"
              onClick={() => dispatch(setActiveSlide(index))}
              className={`h-1.5 rounded-full transition-all duration-500 ease-out sm:h-2 ${
                index === activeSlide
                  ? "w-5 bg-white sm:w-8"
                  : "w-1.5 bg-white/40 hover:bg-white/60 sm:w-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
