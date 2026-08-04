import Button from "@/components/ui/Button";
import TextSection from "@/components/ui/TextSection";
import { HERO_SLIDES } from "@/lib/constants/siteData";

const hero = HERO_SLIDES[0];
const HERO_IMAGE =
  "/web-header-scaled.png";

export default function HeroSection() {
  return (
    <section className="relative mt-[64px] w-full overflow-hidden sm:mt-[72px] sm:min-h-[calc(100dvh-72px)] lg:mt-[88px] lg:min-h-[calc(100dvh-88px)]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        aria-hidden
      />
    
   

      <div className="relative z-10 flex min-h-[inherit] flex-col items-center justify-center px-4 py-16 text-center sm:px-6 sm:py-20 md:px-8 md:py-24 lg:py-28 animate-[fadeUp_0.7s_ease-out]">
        <TextSection
          title={hero.title}
          paragraphs={[hero.description]}
          headingLevel="h1"
          align="center"
          color="light"
          className="max-w-xl sm:max-w-2xl lg:max-w-3xl [&_h1]:text-2xl font-bold [&_h1]:tracking-[0.08em] sm:[&_h1]:text-3xl sm:[&_h1]:tracking-[0.12em] md:[&_h1]:text-4xl lg:[&_h1]:text-5xl lg:[&_h1]:tracking-[0.15em] [&_p]:text-sm [&_p]:leading-relaxed sm:[&_p]:text-base"
        />
        {/* <div className="mt-8 w-full max-w-xs sm:mt-10 sm:max-w-none sm:w-auto">
          <Button
            href={hero.ctaHref}
            variant="secondary"
            size="md"
            fullWidth
            className="sm:w-auto sm:!px-8 sm:!py-4 sm:!text-sm"
          >
            {hero.ctaLabel}
          </Button>
        </div> */}
      </div>
    </section>
  );
}
