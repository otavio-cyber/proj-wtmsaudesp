const specialties = [
  {
    title: "Coluna e Spine",
    visual: (
      <div className="h-full w-full flex items-center justify-center">
        <svg className="w-16 h-16 text-[#483FC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      </div>
    ),
  },
  {
    title: "Neurocirurgia",
    visual: (
      <div className="h-full w-full flex items-center justify-center">
        <svg className="w-16 h-16 text-[#483FC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
    ),
  },
  {
    title: "Neuromodulação",
    visual: (
      <div className="h-full w-full flex items-center justify-center">
        <svg className="w-16 h-16 text-[#483FC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
    ),
  },
  {
    title: "Radiofrequência",
    visual: (
      <div className="h-full w-full flex items-center justify-center">
        <svg className="w-16 h-16 text-[#483FC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </div>
    ),
  },
]

export function SpecialtiesSection() {
  return (
    <section id="especialidades" className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-xs font-medium tracking-wider uppercase text-[#483FC5] mb-4 block">
            Especialidades
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0a0a0a] leading-tight tracking-tight">
            Áreas de atuação clínica
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty) => (
            <div
              key={specialty.title}
              className="group aspect-square bg-[#f8f8f8] border border-[#e5e5e5] rounded-2xl p-8 flex flex-col items-center justify-center hover:bg-[#483FC5] hover:border-[#483FC5] transition-all duration-400"
            >
              <div className="flex-1 flex items-center justify-center w-full group-hover:scale-105 transition-transform duration-400">
                <div className="group-hover:[&_svg]:text-white transition-colors duration-400">
                  {specialty.visual}
                </div>
              </div>
              <h3 className="text-base font-semibold text-[#0a0a0a] group-hover:text-white transition-colors duration-400 text-center mt-4">
                {specialty.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
