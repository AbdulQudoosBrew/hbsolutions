import Container from "@/components/ui/Container";
import ProductCategoryCard from "@/components/ui/ProductCategoryCard";
import Section from "@/components/ui/Section";
import { PRODUCT_CATEGORIES } from "@/lib/constants/siteData";

export default function ProductCategories() {
  return (
    <Section id="products" background="white" className="py-16 md:py-20">
      <Container size="wide">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 md:gap-6 lg:grid-cols-5">
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
