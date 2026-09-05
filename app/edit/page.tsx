import type { Metadata } from "next";
import Link from "next/link";
import FeaturedEditClient from "@/components/featured/FeaturedEditClient";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Container from "@/components/ui/Container";
import { getFeaturedProducts } from "@/lib/featuredProducts";
import { COMPANY } from "@/lib/constants/siteData";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: `Edit featured products - ${COMPANY.name}`,
  robots: { index: false, follow: false },
};

export default async function EditFeaturedPage() {
  const items = await getFeaturedProducts();

  return (
    <>
      <Header />
      <main>
        <div className="bg-white pt-[96px] sm:pt-[104px] lg:pt-[120px]">
          <Container
            size="wide"
            className="px-4 pb-16 pt-6 sm:px-6 md:px-8 lg:pb-20"
          >
            <nav
              className="mb-6 flex flex-wrap items-center justify-center gap-x-1.5 text-[10px] uppercase tracking-[0.18em] text-[#999999]"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="transition-colors hover:text-[#000000]">
                Home
              </Link>
              <span aria-hidden>/</span>
              <span className="text-[#000000]">Edit</span>
            </nav>
            <h1 className="mb-8 text-center text-[1.5rem] font-medium uppercase tracking-[0.12em] text-[#000000] sm:text-3xl">
              Featured products
            </h1>
            <FeaturedEditClient items={items} />
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
}
