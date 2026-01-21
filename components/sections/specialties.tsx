const specialties = [
  {
    title: "Coluna e Spine",
    image: "/images/specialties/coluna-spine-v2.png",
    visual: (
      <div className="h-full w-full flex items-center justify-center overflow-hidden">
        <img 
          src="/images/specialties/coluna-spine-v2.png" 
          alt="Coluna e Spine - Cirurgia de coluna vertebral" 
          className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
        />
      </div>
    ),
  },
  {
    title: "Neurocirurgia",
    image: "/images/specialties/neurocirurgia-v2.png",
    visual: (
      <div className="h-full w-full flex items-center justify-center overflow-hidden">
        <img 
          src="/images/specialties/neurocirurgia-v2.png" 
          alt="Neurocirurgia - Cirurgia cerebral e neurológica" 
          className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
        />
      </div>
    ),
  },
  {
    title: "Neuromodulação",
    image: "/images/specialties/neuromodulacao-v2.png",
    visual: (
      <div className="h-full w-full flex items-center justify-center overflow-hidden">
        <img 
          src="/images/specialties/neuromodulacao-v2.png" 
          alt="Neuromodulação - Estimulação elétrica terapêutica" 
          className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
        />
      </div>
    ),
  },
  {
    title: "Radiofrequência",
    image: "/images/specialties/radiofrequencia-v2.png",
    visual: (
      <div className="h-full w-full flex items-center justify-center overflow-hidden">
        <img 
          src="/images/specialties/radiofrequencia-v2.png" 
          alt="Radiofrequência - Tratamento térmico por ondas de rádio" 
          className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
        />
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
              className="group aspect-square bg-[#f8f8f8] border border-[#e5e5e5] rounded-2xl p-8 flex flex-col items-center justify-center hover:bg-[#483FC5] hover:border-[#483FC5] transition-all duration-400 cursor-pointer"
            >
              <div className="flex-1 flex items-center justify-center w-full">
                {specialty.visual}
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
