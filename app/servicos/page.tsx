import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function QualidadePage() {
  return (
    <>
      <Header />

      <main className="bg-white pt-24">
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
            Serviços
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#0a0a0a] mb-8">
            Precisão e cuidado em cada serviço
          </h2>
          <p className="text-lg text-[#6b6b6b] leading-relaxed">
            A <strong>WTM Saúde SP</strong> atua com foco absoluto na qualidade dos
            serviços prestados, integrando logística, distribuição e instrumentação
            cirúrgica em uma operação organizada, segura e eficiente. Cada serviço é
            executado com atenção máxima aos detalhes, respeitando prazos, protocolos
            e necessidades específicas de cada cliente.
          </p>
        </div>
      </section>

      {/* LOGÍSTICA */}
      <section className="bg-[#f8f8f8] py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold text-[#0a0a0a] mb-6">
              Logística e distribuição
            </h3>
            <p className="text-lg text-[#6b6b6b] leading-relaxed mb-6">
              Nossa operação logística foi estruturada para atender com excelência
              a dinâmica do ambiente hospitalar. Realizamos o planejamento, a
              separação e o transporte de implantes cirúrgicos com controle rigoroso
              e rastreabilidade total, assegurando que o material esteja disponível
              no momento exato do procedimento.
            </p>
            <p className="text-lg text-[#6b6b6b] leading-relaxed">
              Entendemos que cada entrega representa mais do que um envio: ela faz
              parte de um processo que impacta diretamente a vida de pessoas.
            </p>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#e5e5e5]">
            <Image
              src="/images/logistica.jpg"
              alt="Logística hospitalar WTM Saúde SP"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* INSTRUMENTAÇÃO */}
      <section className="py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#e5e5e5] order-2 lg:order-1">
            <Image
              src="/images/instrumentacao.jpg"
              alt="Instrumentação cirúrgica WTM Saúde SP"
              fill
              className="object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="text-2xl lg:text-3xl font-semibold text-[#0a0a0a] mb-6">
              Instrumentação cirúrgica especializada
            </h3>
            <p className="text-lg text-[#6b6b6b] leading-relaxed mb-6">
              Além da logística, oferecemos suporte completo em instrumentação
              cirúrgica, com profissionais capacitados para atuar diretamente nas
              salas de cirurgia. Nossa equipe trabalha em sintonia com médicos e
              equipes assistenciais, garantindo organização, agilidade e segurança
              durante os procedimentos.
            </p>
            <p className="text-lg text-[#6b6b6b] leading-relaxed">
              O conhecimento técnico, aliado à experiência prática, permite uma
              atuação eficiente, reduzindo riscos e contribuindo para o sucesso das
              cirurgias.
            </p>
          </div>
        </div>
      </section>

      {/* EVOLUÇÃO */}
      <section className="bg-[#f8f8f8] py-28 lg:py-36">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-2xl lg:text-3xl font-semibold text-[#0a0a0a] mb-6">
            Compromisso com a evolução
          </h3>
          <p className="text-lg text-[#6b6b6b] leading-relaxed">
            A WTM Saúde SP investe constantemente em pessoas, processos e tecnologia.
            Buscamos soluções inovadoras, aprimoramos nossos métodos e acompanhamos a
            evolução do setor da saúde para oferecer serviços cada vez mais
            confiáveis e eficientes. Nossa atuação é guiada pela responsabilidade,
            pela precisão e pelo respeito à vida.
          </p>
        </div>
      </section>

      {/* EXCELÊNCIA */}
      <section className="py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="text-2xl lg:text-3xl font-semibold text-[#0a0a0a] mb-12 text-center">
            Excelência operacional
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {["Agilidade", "Disponibilidade", "Segurança", "Excelência"].map((item) => (
              <div
                key={item}
                className="border border-[#e5e5e5] rounded-2xl p-10 text-center"
              >
                <p className="text-xl font-semibold text-[#0a0a0a]">
                  {item}
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