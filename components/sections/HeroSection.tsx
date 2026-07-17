import Button from "@/components/ui/Button";
import TextSection from "@/components/ui/TextSection";
import { HERO_SLIDES } from "@/lib/constants/siteData";

const hero = HERO_SLIDES[0];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden mt-[207px] ">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(https://giavanibathrooms.com/wp-content/uploads/2026/05/web-header-scaled.jpg)` }}
      
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-36 pb-20 text-center animate-[fadeUp_0.7s_ease-out]">
        <TextSection
          title={hero.title}
          paragraphs={[hero.description]}
          headingLevel="h1"
          align="center"
          color="light"
          className="max-w-3xl"
        />
        <div className="mt-10">
          <Button href={hero.ctaHref} variant="outline" size="lg">
            {hero.ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
