"use client"

import Image from "next/image"

export function MedtronicSection() {
  return (
    <section className="py-28 lg:py-36 bg-[#f8f8f8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full max-w-lg mx-auto aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/medtronic.webp"
                alt="WTM Saúde SP"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-xs font-medium tracking-wider uppercase text-[#483FC5] mb-4 block">
              Parceria
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0a0a0a] leading-tight tracking-tight mb-8">
              Tecnologia Medtronic
            </h2>

            <div className="space-y-6 text-[#6b6b6b] leading-relaxed text-lg">
              <p>
                A Medtronic é uma das principais empresas globais de tecnologia médica,
                com décadas de investimento contínuo em pesquisa, desenvolvimento e
                inovação clínica.
              </p>

              <p>
                Suas soluções são amplamente utilizadas em procedimentos de alta
                complexidade, oferecendo precisão, segurança e evidência científica
                para diferentes especialidades médicas.
              </p>

              <p>
                A <strong>WTM SAÚDE SP</strong> atua na distribuição e no suporte técnico
                dessas tecnologias em sua região de operação.
              </p>
            </div>

            {/* Metrics */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-semibold text-[#0a0a0a]">70+</p>
                <p className="text-sm text-[#6b6b6b] mt-1">Anos de inovação</p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-[#0a0a0a]">150+</p>
                <p className="text-sm text-[#6b6b6b] mt-1">Países</p>
              </div>

              <div>
                <p className="text-3xl font-semibold text-[#0a0a0a]">Global</p>
                <p className="text-sm text-[#6b6b6b] mt-1">Líder em med-tech</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
