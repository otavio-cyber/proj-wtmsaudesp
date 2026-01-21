export function InstitutionalSection() {
  return (
    <section className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-xs font-medium tracking-wider uppercase text-[#483FC5] mb-4 block">
              Sobre a <strong>WTM SAÚDE SP</strong>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0a0a0a] leading-tight tracking-tight mb-8">
              Comprometimento
            </h2>
            <div className="space-y-6 text-[#6b6b6b] leading-relaxed text-lg">
              <p>
                Total atenção à Vida Humana, a <strong>WTM SAÚDE SP</strong> atua na distribuição de dispositivos médicos de alta complexidade com responsabilidade e apoiando procedimentos que exigem precisão técnica, disponibilidade imediata e domínio operacional.
              </p>
              <p>
                Nossa operação integra armazenagem e logística qualificadas à atuação em instrumentação cirúrgica, assim como, atendendo médicos, hospitais e operadoras de saúde com foco em previsibilidade, rastreabilidade e suporte especializado em cada etapa do cuidado.
              </p>
            </div>
          </div>

          {/* Visual element */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-[#f8f8f8] overflow-hidden border border-[#e5e5e5]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-5 p-8 w-full">
                  <div className="bg-white rounded-xl p-6 border border-[#e5e5e5] hover:border-[#483FC5]/20 hover:shadow-sm transition-all">
                    <div className="w-11 h-11 rounded-lg bg-[#483FC5]/10 flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-[#483FC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-[#0a0a0a]">Confiabilidade</p>
                    <p className="text-xs text-[#6b6b6b] mt-1">Técnica comprovada</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-[#e5e5e5] hover:border-[#483FC5]/20 hover:shadow-sm transition-all">
                    <div className="w-11 h-11 rounded-lg bg-[#483FC5]/10 flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-[#483FC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-[#0a0a0a]">Disponibilidade</p>
                    <p className="text-xs text-[#6b6b6b] mt-1">Imediata e segura</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-[#e5e5e5] hover:border-[#483FC5]/20 hover:shadow-sm transition-all">
                    <div className="w-11 h-11 rounded-lg bg-[#483FC5]/10 flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-[#483FC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-[#0a0a0a]">Rastreabilidade</p>
                    <p className="text-xs text-[#6b6b6b] mt-1">Controle total</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-[#e5e5e5] hover:border-[#483FC5]/20 hover:shadow-sm transition-all">
                    <div className="w-11 h-11 rounded-lg bg-[#483FC5]/10 flex items-center justify-center mb-4">
                      <svg className="w-5 h-5 text-[#483FC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-[#0a0a0a]">Suporte</p>
                    <p className="text-xs text-[#6b6b6b] mt-1">Especializado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
