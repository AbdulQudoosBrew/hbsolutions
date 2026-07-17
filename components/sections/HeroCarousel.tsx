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
    <section className="relative min-h-screen w-full overflow-hidden">
      {HERO_SLIDES.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-out ${
            index === activeSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${s.image})` }}
          aria-hidden={index !== activeSlide}
        >
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        </div>
      ))}

      <div
        key={slide.id}
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-36 pb-20 text-center animate-[fadeUp_0.7s_ease-out]"
      >
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

        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-3">
          {HERO_SLIDES.map((s, index) => (
            <button
              key={s.id}
              type="button"
              onClick={() => dispatch(setActiveSlide(index))}
              className={`h-2 rounded-full transition-all duration-500 ease-out ${
                index === activeSlide
                  ? "w-8 bg-white"
                  : "w-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
