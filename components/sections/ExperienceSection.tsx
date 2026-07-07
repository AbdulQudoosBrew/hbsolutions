import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import TextSection from "@/components/ui/TextSection";

export default function ExperienceSection() {
  return (
    <Section id="about" background="white" className="py-20 md:py-28">
      <Container size="narrow">
        <TextSection
          title="Over 40 years of design experience"
          paragraphs={[
            "Drawing on over 40 years of design expertise, Giavani Bathrooms specialises in creating spaces that are streamlined, comfortable and stylish, capturing the true essence of contemporary bathroom design.",
            "Our collection of bathroom products and accessories is a clear reflection of our extensive experience and design heritage. Every product in our range has been carefully crafted with precision and to exacting standards. The result is a perfect balance of performance and aesthetics, built to perform and designed to last.",
          ]}
          headingLevel="h2"
          align="center"
          color="dark"
        />
      </Container>
    </Section>
  );
}
