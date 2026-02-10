import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function QualidadePage() {
  return (
    <>
      <Header />

      <main className="bg-white pt-[88px]">
       {/* HERO */}
               <section className="relative h-[60vh] min-h-[420px] flex items-center">
                 <Image
                   src="/images/quemsomos.webp"
                   alt="WTM Saúde SP"
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
              Qualidade como fundamento
            </h1>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#0a0a0a] mb-8">
                Qualidade em cada etapa da operação
              </h2>

              <p className="text-lg text-[#6b6b6b] leading-relaxed mb-6">
                Na <strong>WTM Saúde SP</strong>, a qualidade está presente em todas as áreas
                da operação. Atuamos de forma integrada nos setores comercial,
                logístico e de instrumentação cirúrgica, assegurando eficiência,
                segurança e confiabilidade em cada etapa do atendimento.
              </p>

              <p className="text-lg text-[#6b6b6b] leading-relaxed">
                Nosso compromisso é garantir que cada processo seja executado com
                rigor técnico, responsabilidade e total atenção às exigências do
                setor da saúde.
              </p>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#e5e5e5]">
              <Image
                src="/images/quality-process.webp"
                alt="Processos de qualidade WTM Saúde SP"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* LOGÍSTICA */}
        <section className="bg-[#f8f8f8] py-28 lg:py-36">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#0a0a0a] mb-8">
              Logística especializada
            </h2>

            <p className="text-lg text-[#6b6b6b] leading-relaxed">
              Nossa estrutura logística foi desenvolvida para atender às exigências
              do setor da saúde, onde tempo e precisão são fatores decisivos.
              Trabalhamos com processos rigorosos de controle, rastreabilidade e
              armazenamento de implantes cirúrgicos, garantindo que cada material
              chegue ao local correto, no momento certo e em perfeitas condições
              de uso.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
            {[
              "Controle e rastreabilidade rigorosos",
              "Armazenamento conforme protocolos técnicos",
              "Atendimento a demandas eletivas e emergenciais",
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl p-10 text-center border border-[#e5e5e5]"
              >
                <p className="text-lg font-medium text-[#0a0a0a]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* INSTRUMENTAÇÃO */}
        <section className="py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#0a0a0a] mb-8">
                Instrumentação cirúrgica
              </h2>

              <p className="text-lg text-[#6b6b6b] leading-relaxed mb-6">
                A atuação dos nossos instrumentadores é marcada pela experiência,
                domínio técnico e atenção aos detalhes. Esses profissionais
                desempenham um papel essencial dentro do centro cirúrgico,
                oferecendo suporte direto ao cirurgião e à equipe médica.
              </p>

              <p className="text-lg text-[#6b6b6b] leading-relaxed">
                Nosso time atua de forma preventiva, antecipando necessidades e
                contribuindo para um fluxo cirúrgico mais seguro, ágil e eficiente.
              </p>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#e5e5e5]">
              <Image
                src="/images/instrumentacao.jpg "
                alt="Instrumentação cirúrgica WTM Saúde SP"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* EQUIPE COMERCIAL */}
        <section className="bg-[#f8f8f8] py-28 lg:py-36">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#0a0a0a] mb-8">
              Equipe comercial técnica
            </h2>

            <p className="text-lg text-[#6b6b6b] leading-relaxed">
              A equipe comercial da WTM Saúde SP é formada por profissionais com
              amplo conhecimento técnico, preparados para orientar médicos e
              instituições de saúde na escolha das soluções mais adequadas para
              cada procedimento.
            </p>
          </div>
        </section>

        {/* DESENVOLVIMENTO */}
        <section className="py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#0a0a0a] mb-8">
                Desenvolvimento contínuo
              </h2>

              <p className="text-lg text-[#6b6b6b] leading-relaxed mb-6">
                Investimos de forma permanente no treinamento e capacitação de
                todos os colaboradores. A disseminação da cultura organizacional
                acontece em todos os níveis, fortalecendo nossos valores e
                garantindo a padronização dos processos.
              </p>

              <p className="text-lg text-[#6b6b6b] leading-relaxed">
                Participamos ativamente de eventos, congressos e feiras do setor,
                mantendo nosso time atualizado e alinhado às evoluções tecnológicas
                e às melhores práticas da área da saúde.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                {
                  title: "Treinamento contínuo",
                  text: "Capacitação constante de todos os profissionais",
                },
                {
                  title: "Cultura organizacional",
                  text: "Valores sólidos aplicados na rotina operacional",
                },
                {
                  title: "Atualização tecnológica",
                  text: "Acompanhamento das inovações do setor da saúde",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#e5e5e5] p-8"
                >
                  <h3 className="text-xl font-semibold text-[#0a0a0a] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#6b6b6b]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
