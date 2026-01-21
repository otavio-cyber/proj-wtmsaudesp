export function MedtronicSection() {
  return (
    <section className="py-28 lg:py-36 bg-[#f8f8f8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Visual */}
          <div className="order-2 lg:order-1">
            <div className="aspect-square max-w-lg mx-auto relative">
              {/* Abstract tech visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Concentric circles */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[90%] h-[90%] rounded-full border border-[#e5e5e5]" />
                    <div className="absolute w-[70%] h-[70%] rounded-full border border-[#e5e5e5]" />
                    <div className="absolute w-[50%] h-[50%] rounded-full border border-[#d1d1d1]" />
                    <div className="absolute w-[30%] h-[30%] rounded-full border border-[#d1d1d1]" />
                  </div>
                  
                  {/* Center element */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#483FC5] to-[#3d35a8] flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>

                  {/* Floating dots */}
                  <div className="absolute top-[15%] left-[20%] w-3 h-3 rounded-full bg-[#483FC5]/30" />
                  <div className="absolute top-[25%] right-[15%] w-2 h-2 rounded-full bg-[#483FC5]/20" />
                  <div className="absolute bottom-[20%] left-[15%] w-2 h-2 rounded-full bg-[#483FC5]/25" />
                  <div className="absolute bottom-[30%] right-[20%] w-3 h-3 rounded-full bg-[#483FC5]/15" />
                </div>
              </div>
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
                A Medtronic é uma das principais empresas globais de tecnologia médica, com décadas de investimento contínuo em pesquisa, desenvolvimento e inovação clínica.
              </p>
              <p>
                Suas soluções são amplamente utilizadas em procedimentos de alta complexidade, oferecendo precisão, segurança e evidência científica para diferentes especialidades médicas.
              </p>
              <p>
                A wtmsaudeSP atua na distribuição e no suporte técnico dessas tecnologias em sua região de operação.
              </p>
            </div>

            {/* Features */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center sm:text-left">
                <p className="text-3xl font-semibold text-[#0a0a0a]">70+</p>
                <p className="text-sm text-[#6b6b6b] mt-1">Anos de inovação</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-3xl font-semibold text-[#0a0a0a]">150+</p>
                <p className="text-sm text-[#6b6b6b] mt-1">Países</p>
              </div>
              <div className="text-center sm:text-left">
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
