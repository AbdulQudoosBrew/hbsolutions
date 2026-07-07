import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import TextSection from "@/components/ui/TextSection";
import { CATALOGUE } from "@/lib/constants/siteData";

export default function CatalogueSection() {
  return (
    <Section id="catalogue" background="light" className="py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="https://giavanibathrooms.com/wp-content/uploads/2024/06/Giavani-Catalogue-2026.jpg"
              alt="Giavani 2026 Catalogue"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="text-center lg:text-left">
            <TextSection
              title={CATALOGUE.title}
              subtitle={CATALOGUE.subtitle}
              headingLevel="h2"
              align="center"
              color="dark"
              className="lg:text-left"
            />
            <div className="mt-8 flex justify-center lg:justify-start">
              <Button href={CATALOGUE.pdfUrl} variant="secondary" size="lg">
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
