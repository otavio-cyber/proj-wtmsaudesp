import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const pillars = [
  {
    title: "Ética e Conduta",
    description: "Princípios que norteiam todas as nossas relações comerciais",
  },
  {
    title: "Conformidade Regulatória",
    description: "Alinhamento às normas do setor de saúde",
  },
  {
    title: "Transparência",
    description: "Clareza em processos e comunicação institucional",
  },
  {
    title: "Governança",
    description: "Estrutura organizacional responsável e íntegra",
  },
]

export function ComplianceSection() {
  return (
    <section id="compliance" className="py-28 lg:py-36 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left column - Main content */}
          <div>
            <span className="text-xs font-medium tracking-wider uppercase text-[#483FC5] mb-4 block">
              Compliance
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0a0a0a] leading-tight tracking-tight mb-8">
              Compliance e integridade institucional
            </h2>
            <div className="space-y-6 text-[#6b6b6b] leading-relaxed text-lg mb-12">
              <p>
                A wtmsaudeSP atua com base em princípios de integridade, transparência e conformidade regulatória em todas as suas relações com médicos, hospitais, operadoras e parceiros.
              </p>
              <p>
                Nossos processos estão alinhados às normas aplicáveis ao setor de saúde, às boas práticas de governança e aos padrões éticos exigidos em ambientes clínicos e hospitalares.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid sm:grid-cols-2 gap-6">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="border-l-2 border-[#483FC5] pl-4">
                  <h3 className="text-sm font-semibold text-[#0a0a0a] mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#6b6b6b]">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Canal de denúncias */}
          <div className="lg:pl-8">
            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[#e5e5e5] h-full flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-[#483FC5]/10 flex items-center justify-center text-[#483FC5] mb-8">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>

              <h3 className="text-2xl font-semibold text-[#0a0a0a] mb-4">
                Canal de denúncias
              </h3>

              <div className="space-y-4 text-[#6b6b6b] leading-relaxed flex-1">
                <p>
                  Disponibilizamos um canal seguro e confidencial para o relato de condutas que violem princípios éticos, normas internas ou legislação aplicável.
                </p>
                <p>
                  As manifestações podem ser realizadas de forma identificada ou anônima e serão tratadas com confidencialidade, imparcialidade e responsabilidade.
                </p>
              </div>

              <Button 
                asChild
                className="mt-8 bg-[#483FC5] hover:bg-[#3d35a8] text-white font-medium"
              >
                <Link href="#">
                  Acessar canal de denúncias
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
