import CatalogueSection from "@/components/sections/CatalogueSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroCarousel from "@/components/sections/HeroCarousel";
import HeroSection from "@/components/sections/HeroSection";
import ProductCategories from "@/components/sections/ProductCategories";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function LandingPage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-[#000000]"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <HeroSection />
        <ProductCategories />
        {/* <CatalogueSection /> */}
        <ExperienceSection />
        <HeroCarousel />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
