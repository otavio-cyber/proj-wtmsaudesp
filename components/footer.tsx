import Link from "next/link"
import Image from "next/image"

const navigation = {
  solutions: [
    { name: "Coluna e Spine", href: "#" },
    { name: "Neurocirurgia", href: "#" },
    { name: "Neuromodulação", href: "#" },
    { name: "Radiofrequência", href: "#" },
  ],
  company: [
    { name: "Sobre", href: "#" },
    { name: "Operações", href: "#operacoes" },
    { name: "Medtronic", href: "#" },
    { name: "Contato", href: "#contato" },
  ],
  compliance: [
    { name: "Código de Ética", href: "#" },
    { name: "Canal de Denúncias", href: "#" },
    { name: "Política de Privacidade", href: "#" },
    { name: "Termos de Uso", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          {/* Logo and description */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/images/wtm-20saude-20sp-logoaprovado.png"
              alt="WTM Saúde SP"
              width={140}
              height={33}
              className="h-8 w-auto mb-6"
            />
            <p className="text-sm text-[#6b6b6b] leading-relaxed">
              Distribuição especializada de tecnologia médica de alta complexidade.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Soluções</h3>
            <ul className="space-y-3">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#6b6b6b] hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Institucional</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#6b6b6b] hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Compliance</h3>
            <ul className="space-y-3">
              {navigation.compliance.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#6b6b6b] hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#1a1a1a]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#6b6b6b]">
              © {new Date().getFullYear()} wtmsaudeSP. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-xs text-[#6b6b6b] hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-xs text-[#6b6b6b] hover:text-white transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
