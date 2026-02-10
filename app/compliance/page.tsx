import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CompliancePage() {
  return (
    <>
      <Header />

      <main className="bg-white">

        {/* HERO */}
        <section className="relative h-[60vh] min-h-[420px] flex items-center">
          <Image
            src="/images/compliance.webp"
            alt="Compliance WTM Saúde SP"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#021339]/80" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <span className="text-xs uppercase tracking-widest text-white/70 block mb-4">
              Institucional
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white max-w-3xl leading-tight">
              Compliance
            </h1>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-28 lg:py-36">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#0a0a0a] mb-8">
              Integridade, ética e transparência
            </h2>

            <p className="text-lg text-[#6b6b6b] leading-relaxed mb-6">
              O Departamento de Compliance da <strong>WTM Saúde SP</strong> tem como
              objetivo acompanhar e assegurar que todos os colaboradores estejam
              em conformidade com as práticas, normas e condutas estabelecidas pela
              Empresa.
            </p>

            <p className="text-lg text-[#6b6b6b] leading-relaxed">
              Nossa missão é atender às necessidades dos clientes, contribuindo
              para o bem-estar e a qualidade de vida da sociedade, por meio da
              disponibilização de produtos e serviços de qualidade, atendendo às
              expectativas de clientes, colaboradores e da sociedade em geral.
            </p>
          </div>
        </section>

        {/* PROGRAMA DE COMPLIANCE */}
        <section className="bg-[#f8f8f8] py-28 lg:py-36">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#0a0a0a] mb-8">
              Programa de Compliance
            </h2>

            <p className="text-lg text-[#6b6b6b] leading-relaxed mb-6">
              Com o propósito de aprimorar continuamente os mecanismos necessários
              para o cumprimento de sua missão e visando à preservação de sua imagem
              íntegra, ética e transparente no mercado, a WTM Saúde SP implementou
              seu Programa de Compliance.
            </p>

            <p className="text-lg text-[#6b6b6b] leading-relaxed">
              Comprometida com os princípios da integridade e da responsabilidade,
              a Empresa disponibiliza um canal de denúncias destinado ao relato de
              práticas que possam representar riscos aos seus procedimentos
              internos.
            </p>
          </div>
        </section>

        {/* CANAL DE DENÚNCIAS */}
        <section className="py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-start">

            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#0a0a0a] mb-8">
                Canal de Denúncias
              </h2>

              <p className="text-lg text-[#6b6b6b] leading-relaxed mb-6">
                O canal de denúncias tem como finalidade o recebimento de
                comunicações relacionadas a possíveis violações ao Código de Ética
                e de Conduta, bem como às demais normas e diretrizes de Compliance
                da WTM Saúde SP.
              </p>

              <p className="text-lg text-[#6b6b6b] leading-relaxed mb-6">
                O relato poderá ser realizado de forma anônima ou identificada.
                Caso opte por se identificar, a Empresa garante a adoção de todas
                as medidas necessárias para sua proteção e a não retaliação.
              </p>

              <p className="text-lg text-[#6b6b6b] leading-relaxed">
                A WTM Saúde SP assegura o sigilo absoluto das informações, o
                tratamento adequado de cada situação e a condução das análises
                sem qualquer conflito de interesses.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                "O que: descrição da situação",
                "Quem: pessoas envolvidas e testemunhas",
                "Quando: data ou período do ocorrido",
                "Por que: causa ou motivo",
                "Quanto: valores envolvidos, se aplicável",
                "Provas: evidências disponíveis, se houver",
              ].map((item) => (
                <div
                  key={item}
                  className="border border-[#e5e5e5] rounded-2xl p-8 bg-white"
                >
                  <p className="text-[#0a0a0a] font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CÓDIGO DE ÉTICA */}
        <section className="bg-[#f8f8f8] py-28 lg:py-36">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#0a0a0a] mb-8">
              Código de Ética e Conduta
            </h2>

            <p className="text-lg text-[#6b6b6b] leading-relaxed">
              A responsabilidade pela veracidade das informações prestadas é do
              relator. Para viabilizar uma análise objetiva e eficaz, é
              fundamental que as informações fornecidas sejam claras, completas
              e detalhadas.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
