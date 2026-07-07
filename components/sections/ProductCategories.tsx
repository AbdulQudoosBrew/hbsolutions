import Container from "@/components/ui/Container";
import ProductCategoryCard from "@/components/ui/ProductCategoryCard";
import Section from "@/components/ui/Section";
import { PRODUCT_CATEGORIES } from "@/lib/constants/siteData";

export default function ProductCategories() {
  return (
    <Section id="products" background="white" className="py-16 md:py-20">
      <Container size="wide">
        <div className="grid grid-cols-2 gap-px bg-[#e0e0e0] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {PRODUCT_CATEGORIES.map((category) => (
            <ProductCategoryCard
              key={category.id}
              id={category.id}
              label={category.label}
              image={category.image}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
