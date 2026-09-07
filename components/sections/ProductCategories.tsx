import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import ProductCategoryCard from "@/components/ui/ProductCategoryCard";
import Section from "@/components/ui/Section";
import TextSection from "@/components/ui/TextSection";
import { PRODUCT_CATEGORIES } from "@/lib/constants/siteData";
import { getFeaturedProducts } from "@/lib/featuredProducts";

export default async function ProductCategories() {
  const featured = await getFeaturedProducts();
  const categories = [
    ...PRODUCT_CATEGORIES.filter((category) => category.id !== "featured-products"),
    ...PRODUCT_CATEGORIES.filter((category) => category.id === "featured-products"),
  ].map((category) =>
    category.id === "featured-products" && featured[0]
      ? { ...category, image: featured[0].image }
      : category,
  );

  return (
    <Section id="products" background="white" className="py-16 md:py-20">
      <Container size="wide">
        <FadeIn>
          <TextSection
            title="Our Product Range"
            paragraphs={[
              "Explore our full collection of building materials, bathroom products and finishing solutions.",
            ]}
            headingLevel="h2"
            align="center"
            color="dark"
            className="mb-10 md:mb-14"
          />
        </FadeIn>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 md:gap-6 lg:grid-cols-5">
          {categories.map((category, index) => (
            <FadeIn key={category.id} delay={index * 40}>
              <ProductCategoryCard
                id={category.id}
                label={category.label}
                image={category.image}
              />
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
