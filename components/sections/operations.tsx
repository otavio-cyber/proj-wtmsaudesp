const pillars = [
  {
    title: "Disponibilidade",
    description: "Estoque estratégico e logística especializada para atendimento imediato",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
  {
    title: "Precisão",
    description: "Processos controlados e rastreabilidade em todas as etapas",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Suporte Especializado",
    description: "Equipe técnica presente no ambiente cirúrgico",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Conformidade",
    description: "Alinhamento às exigências regulatórias do setor",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

export function OperationsSection() {
  return (
    <section id="operacoes" className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-xs font-medium tracking-wider uppercase text-[#483FC5] mb-4 block">
            Operações
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0a0a0a] leading-tight tracking-tight mb-6">
            Atuação técnica integrada ao ambiente cirúrgico
          </h2>
          <p className="text-[#6b6b6b] leading-relaxed text-lg">
            A <strong>WTM SAÚDE SP</strong> opera como parceira técnica na distribuição de dispositivos médicos, oferecendo logística especializada aos procedimentos cirúrgicos.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#f5f5f7] border border-[#e5e5e5] flex items-center justify-center text-[#483FC5] mx-auto mb-6">
                {pillar.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-[#0a0a0a] mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#6b6b6b] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom text */}
<div className="mt-20 pt-12 border-t border-[#e5e5e5]">
  <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
    
    {/* Texto */}
    <p className="text-[#6b6b6b] leading-relaxed text-lg">
      Nossa atuação está alinhada às exigências técnicas, regulatórias e
      operacionais de centros cirúrgicos de média e alta complexidade.
    </p>

    {/* Imagem */}
    <div className="w-full max-w-sm aspect-square relative overflow-hidden rounded-2xl justify-self-center">
      <img
        src="/images/quemsomos.webp"
        alt="Quem somos"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</div>

      </div>
    </section>
  )
}
