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
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-16">

          {/* Coluna 1 – Logo */}
          <div>
            <Image
              src="/images/logo-wtmsaude-branco.svg"
              alt="WTM Saúde SP"
              width={150}
              height={36}
              className="h-9 w-auto mb-6"
            />
            <p className="text-sm text-white/70 leading-relaxed">
              Tecnologia médica de alta complexidade com foco em precisão,
              logística crítica e suporte cirúrgico especializado.
            </p>
          </div>

          {/* Coluna 2 – Soluções */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Soluções</h3>
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

          {/* Coluna 3 – Institucional */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Institucional</h3>
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

          {/* Coluna 4 – Endereço */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Endereço</h3>
            <address className="not-italic text-sm text-white/70 leading-relaxed space-y-1">
              <p>Rua Barata Ribeiro, 190</p>
              <p>Bela Vista</p>
              <p>Ed. Doctors Center</p>
              <p>Salas 71 a 76</p>
              <p>CEP 01308-000</p>
            </address>
          </div>

          {/* Coluna 5 – Imagem (sem título e mais alta) */}
          <div className="flex items-start">
            <Link
              href="https://www.google.com/maps"
              target="_blank"
              className="block w-full"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden border border-white/10 -mt-2">
                <Image
                  src="/images/quemsomos.webp"
                  alt="WTM Saúde SP - Fachada"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-xs text-white/50 text-center">
            © {new Date().getFullYear()} WTM Saúde SP. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
