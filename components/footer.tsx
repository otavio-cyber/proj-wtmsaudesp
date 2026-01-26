import Link from "next/link"
import Image from "next/image"

const navigation = {
  solutions: [
    { name: "Spine / Coluna", href: "#" },
    { name: "Cervical", href: "#" },
    { name: "Neurofuncional", href: "#" },
    { name: "Neurocirurgia", href: "#" },
    { name: "Radiofrequência", href: "#" },
  ],
  institutional: [
    { name: "Sobre", href: "#" },
    { name: "Operações", href: "#operacoes" },
    { name: "Compliance", href: "#compliance" },
    { name: "Contato", href: "#contato" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#021339] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* 1 - Logo e frase */}
          <div>
            <Image
              src="/images/logo-wtmsaude-branco.svg"
              alt="WTM Saúde SP"
              width={160}
              height={40}
              className="h-8 w-auto mb-6"
            />
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Tecnologia médica de alta complexidade com atuação técnica, logística e regulatória integrada.
            </p>
          </div>

          {/* 2 - Soluções */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wide">
              Soluções
            </h3>
            <ul className="space-y-3">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3 - Institucional */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wide">
              Institucional
            </h3>
            <ul className="space-y-3">
              {navigation.institutional.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4 - Endereço */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wide">
              Endereço
            </h3>
            <address className="not-italic text-sm text-white/70 leading-relaxed space-y-1">
              <p>Rua Barata Ribeiro, 190</p>
              <p>Bela Vista</p>
              <p>Edifício Doctors Center</p>
              <p>Salas 71 a 76</p>
              <p>CEP 01308-000</p>
            </address>
          </div>

          {/* 5 - Fachada / Maps */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 uppercase tracking-wide">
              Localização
            </h3>
            <Link
              href="https://www.google.com/maps/search/?api=1&query=Rua+Barata+Ribeiro+190+São+Paulo"
              target="_blank"
              className="block relative aspect-square rounded-xl overflow-hidden border border-white/10 hover:opacity-90 transition"
            >
              <Image
                src="/images/fachada.webp"
                alt="WTM Saúde SP - Fachada"
                fill
                className="object-cover"
              />
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} WTM Saúde SP. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-white/50 hover:text-white transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              href="#"
              className="text-xs text-white/50 hover:text-white transition-colors"
            >
              Termos de Uso
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
