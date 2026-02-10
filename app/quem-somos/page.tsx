import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function QuemSomosPage() {
  return (
    <>
      <Header />

      <main className="bg-white">

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
              Quem Somos
            </h1>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#0a0a0a] mb-8">
                Cuidado com a vida, precisão em cada entrega
              </h2>

              <p className="text-lg text-[#6b6b6b] leading-relaxed mb-6">
                A <strong>WTM Saúde SP</strong> nasceu para ampliar o cuidado com a
                vida por meio de soluções eficientes na área da saúde. Atuamos com
                foco na logística, distribuição e suporte técnico de implantes
                cirúrgicos, sempre orientados pela responsabilidade, precisão e
                compromisso com cada procedimento realizado.
              </p>

              <p className="text-lg text-[#6b6b6b] leading-relaxed">
                Nossa operação atende a Capital do Estado de São Paulo, o Vale do
                Paraíba e todo o litoral paulista, levando tecnologia, agilidade e
                segurança para hospitais, clínicas e profissionais da saúde.
              </p>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#e5e5e5]">
              <Image
                src="/images/operations.webp"
                alt="Operação WTM Saúde"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* COMPROMISSO */}
        <section className="bg-[#f8f8f8] py-28 lg:py-36">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-[#0a0a0a] mb-8">
              Compromisso com a excelência
            </h2>

            <p className="text-lg text-[#6b6b6b] leading-relaxed">
              A atuação da WTM Saúde SP é pautada pela eficiência operacional e
              pela confiabilidade. Somos especializados no armazenamento, controle
              e distribuição de implantes cirúrgicos, garantindo disponibilidade
              imediata, organização logística e suporte técnico qualificado para
              atender demandas eletivas e emergenciais.
            </p>
          </div>

                  {/* PILARES */}
<div className="max-w-7xl mx-auto px-6 lg:px-8 mt-20 grid grid-cols-2 lg:grid-cols-4 gap-10">
  {[
    { title: "Agilidade", icon: "/images/agilidade.png" },
    { title: "Confiança", icon: "/images/confianca.png" },
    { title: "Precisão", icon: "/images/precisao.png" },
    { title: "Qualidade", icon: "/images/qualidade.png" },
  ].map((item) => (
    <div
      key={item.title}
      className="
        group relative overflow-hidden rounded-2xl
        bg-gradient-to-br from-[#2f8fa3] to-[#1f6f86]
        p-10 text-center
        shadow-md transition-all duration-300
        hover:shadow-xl hover:-translate-y-1
      "
    >
      {/* ÍCONE */}
      <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
        <Image
          src={item.icon}
          alt={item.title}
          width={48}
          height={48}
          className="opacity-90"
        />
      </div>

      {/* TEXTO */}
      <p className="text-xl font-semibold text-white tracking-wide">
        {item.title}
      </p>

      {/* brilho sutil decorativo */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute -top-1/2 -right-1/2 h-full w-full rounded-full bg-white/5 blur-3xl" />
      </div>
    </div>
  ))}
</div>

        </section> {/* ⬅️ FECHAMENTO QUE FALTAVA */}



        {/* CULTURA */}
        <section className="py-28 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#0a0a0a] mb-8">
                Nossa cultura
              </h2>

              <p className="text-lg text-[#6b6b6b] leading-relaxed mb-6">
                Acreditamos que resultados consistentes são construídos por
                pessoas comprometidas. Nossa cultura valoriza o trabalho em
                equipe, o respeito aos processos e a consciência de que cada
                detalhe influencia diretamente a vida do paciente.
              </p>

              <p className="text-lg text-[#6b6b6b] leading-relaxed">
                Atuamos com disciplina, atenção ao tempo e foco absoluto na
                execução perfeita de cada tarefa, sempre guiados pelo princípio
                de que a vida deve estar no centro de todas as decisões.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                {
                  title: "Evoluir",
                  text: "Buscamos constantemente aprimorar processos e soluções",
                },
                {
                  title: "Impactar",
                  text: "Entendemos que a tecnologia aplicada à saúde transforma realidades",
                },
                {
                  title: "Consolidar",
                  text: "Fortalecemos nossa atuação por meio de um time unido e preparado",
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
