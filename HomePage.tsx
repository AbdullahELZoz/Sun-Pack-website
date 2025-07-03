import { MainLayout } from "@/components/layout/MainLayout";
import { HeroSection } from "@/components/home/HeroSection";
import { CompanyOverview } from "@/components/home/CompanyOverview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { NewsUpdates } from "@/components/home/NewsUpdates";
import { ProductCategories } from "@/components/home/ProductCategories";
import { CtaSection } from "@/components/home/CtaSection";

function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <CompanyOverview />
      <ProductCategories />
      <FeaturedProjects />
      <NewsUpdates />
      <CtaSection />
    </MainLayout>
  );
}

export default HomePage;