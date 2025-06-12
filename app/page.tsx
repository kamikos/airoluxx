import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { CompanySection } from "@/components/company-section"
import { ProductsSection } from "@/components/products-section"
import { MadeInGermanySection } from "@/components/made-in-germany-section"
import { SolutionsSection } from "@/components/solutions-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <CompanySection />
      <ProductsSection />
      <MadeInGermanySection />
      <SolutionsSection />
      <Footer />
    </div>
  )
}
