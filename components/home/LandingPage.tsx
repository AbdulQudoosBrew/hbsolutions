import CatalogueSection from "@/components/sections/CatalogueSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroCarousel from "@/components/sections/HeroCarousel";
import HeroSection from "@/components/sections/HeroSection";
import ProductCategories from "@/components/sections/ProductCategories";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function LandingPage() {
  return (
    <>
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
      <WhatsAppButton />
    </>
  );
}
