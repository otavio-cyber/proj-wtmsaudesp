import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero"
import { ProductsSection } from "@/components/sections/products"
import { InstitutionalSection } from "@/components/sections/institutional"
import { OperationsSection } from "@/components/sections/operations"
import { MedtronicSection } from "@/components/sections/medtronic"
import { SpecialtiesSection } from "@/components/sections/specialties"
import { ComplianceSection } from "@/components/sections/compliance"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <HeroSection />

      <ProductsSection />

      <InstitutionalSection />

      <OperationsSection />

      <MedtronicSection />

      <SpecialtiesSection />

      <ComplianceSection />

      <ContactSection />

      <Footer />
    </main>
  )
}
