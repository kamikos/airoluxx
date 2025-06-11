import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { CompanySection } from "@/components/company-section"
import { ProductsSection } from "@/components/products-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <CompanySection />
      <ProductsSection />
    </main>
  )
}
