import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import TextSection from "@/components/ui/TextSection";

export default function DesignSection() {
  return (
    <Section background="light" className="py-20 md:py-28">
      <Container size="narrow">
        <TextSection
          title="Design, Create & Inspire"
          paragraphs={[
            "Boasting the ultimate collection for any bathroom, our product ranges are made to last. We use robust materials throughout, meaning that many of our products are designed and manufactured to surpass most of the world's quality standards. As well as using durable, dependable materials, we also provide a range of styles and designs.",
          ]}
          headingLevel="h2"
          align="center"
          color="dark"
        />
      </Container>
    </Section>
  );
}
