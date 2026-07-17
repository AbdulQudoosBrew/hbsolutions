import { DESIGN_SECTION } from "@/lib/constants/siteData";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";
import TextSection from "@/components/ui/TextSection";

export default function DesignSection() {
  return (
    <Section background="light" className="py-20 md:py-28">
      <Container size="narrow">
        <FadeIn>
          <TextSection
            title={DESIGN_SECTION.title}
            paragraphs={[...DESIGN_SECTION.paragraphs]}
            headingLevel="h2"
            align="center"
            color="dark"
          />
        </FadeIn>
      </Container>
    </Section>
  );
}
