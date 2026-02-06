import Image from "next/image"
import Link from "next/link"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const products = [
  {
    id: 1,
    name: "Aquamantys Plasmablade",
    image: "/images/imgs-prods/neurocirurgia/aquamantys-plasmablade.png",
    description: "Tecnologia de hemostasia por plasma para controle preciso de sangramento em cirurgias neurológicas.",
    pdfLinks: [
      { label: "Baixar PDF", url: "https://wtmsaude.com.br/dl-arquivos/Aquamantys-Plasmablade.pdf" }
    ]
  },
  {
    id: 2,
    name: "Midas Rex MR8",
    image: "/images/imgs-prods/neurocirurgia/midas-mr8.png",
    description: "Sistema pneumático de alta velocidade para craniotomias e procedimentos de coluna vertebral.",
    pdfLinks: [
      { label: "Baixar PDF", url: "https://wtmsaude.com.br/dl-arquivos/MidasRexMR8.pdf" }
    ]
  },
  {
    id: 3,
    name: "Válvula Programável",
    image: "/images/imgs-prods/neurocirurgia/valvula-programavel.png",
    description: "Sistema de derivação ventricular programável para tratamento de hidrocefalia.",
    pdfLinks: [
      { label: "Baixar PDF", url: "https://wtmsaude.com.br/dl-arquivos/Strata_FamiliaValvulasInformacoesPedidos_FY1_UC201707670.pdf" }
    ]
  }
]

export default function Neurocirurgia() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-white to-[#f8f9fa] pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#021339] via-[#1a2f5a] to-[#483FC5] text-white">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                Neurocirurgia
              </h1>
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
                Dispositivos avançados para neurocirurgia. Sistemas de hemostasia Aquamantys, 
                instrumentação Midas Rex para craniotomias e válvulas programáveis Strata 
                para tratamento de hidrocefalia.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <article
                key={product.id}
                className="group bg-white rounded-2xl border border-[#e5e5e5] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container with Blue Overlay */}
                <div className="relative aspect-square bg-gradient-to-br from-[#e8f0fe] to-[#d4e4fc] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#483FC5]/10 to-[#021339]/10 mix-blend-multiply"></div>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6 filter-blue-tint group-hover:scale-105 transition-transform duration-500"
                    style={{
                      filter: "brightness(1.05) contrast(1.1) saturate(0.9) hue-rotate(-10deg)"
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-[#0a0a0a] group-hover:text-[#483FC5] transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-[#6b6b6b] leading-relaxed line-clamp-3">
                    {product.description}
                  </p>

                  {/* PDF Downloads */}
                  <div className="space-y-2 pt-2">
                    {product.pdfLinks.map((link, index) => (
                      <Button
                        key={index}
                        asChild
                        variant="outline"
                        className="w-full justify-between group/btn border-[#483FC5]/20 hover:border-[#483FC5] hover:bg-[#483FC5] hover:text-white transition-all"
                      >
                        <Link href={link.url} target="_blank" rel="noopener noreferrer">
                          <span className="text-sm font-medium">{link.label}</span>
                          <Download className="h-4 w-4 group-hover/btn:translate-y-0.5 transition-transform" />
                        </Link>
                      </Button>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#f8f9fa] to-[#e8eef5] border-y border-[#e5e5e5]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0a0a0a]">
                Precisa de mais informações?
              </h2>
              <p className="text-lg text-[#6b6b6b]">
                Nossa equipe técnica está pronta para auxiliar na escolha 
                da melhor solução para seu procedimento cirúrgico.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[#483FC5] hover:bg-[#3a32a0] text-white px-8 py-6 text-base"
              >
                <Link href="#contato">
                  Fale com nossos especialistas
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
