"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const menuStructure = [
  { 
    name: "Spine / Coluna", 
    href: "/produtos/spine-coluna" 
  },
  { 
    name: "Cervical", 
    href: "/produtos/cervical" 
  },
  {
    name: "Neurofuncional",
    href: "/produtos/neurofuncional",
    submenu: [
      { name: "Bomba de Infusão", href: "/produtos/neurofuncional/bomba-de-infusao" },
      { name: "DBS", href: "/produtos/neurofuncional/dbs" },
      { name: "Neuroestimulador Sacral", href: "/produtos/neurofuncional/neuroestimulador-sacral" },
      { name: "Neuroestimulador Dor Crônica", href: "/produtos/neurofuncional/neuroestimulador-dor-cronica" },
      { name: "Radiofrequência", href: "/produtos/neurofuncional/radiofrequencia" },
      { name: "VNS Epilepsia", href: "/produtos/neurofuncional/vns-epilepsia" },
    ]
  },
  { 
    name: "Neurocirurgia", 
    href: "/produtos/neurocirurgia" 
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [neurofuncionalOpen, setNeurofuncionalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Fecha o menu mobile ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#e5e5e5]"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <nav className="w-full">
          <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/wtm-20saude-20sp-logoaprovado.png"
                alt="WTM Saúde SP"
                width={160}
                height={38}
                className="h-9 w-auto"
                priority
              />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-x-10">
              <Link href="#" className="text-sm font-medium text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors">
                Home
              </Link>

              <Link href="#" className="text-sm font-medium text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors">
                Empresa
              </Link>

              <Link href="#" className="text-sm font-medium text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors">
                Qualidade
              </Link>

              {/* Produtos com submenu hierárquico */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-sm font-medium text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors">
                  Produtos
                  <ChevronDown className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                </button>

                <div className="absolute left-0 top-full mt-3 w-64 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
                  <div className="rounded-xl bg-[#f2f2f2] border border-[#dcdcdc] shadow-lg py-3">
                    {menuStructure.map((item) => (
                      <div key={item.name} className="relative group/submenu">
                        <Link
                          href={item.href}
                          className="flex items-center justify-between px-5 py-2 text-sm text-[#4b4b4b] hover:bg-[#e6e6e6] hover:text-[#0a0a0a] transition-colors"
                        >
                          {item.name}
                          {item.submenu && (
                            <ChevronRight className="h-4 w-4 opacity-60" />
                          )}
                        </Link>

                        {/* Submenu de segundo nível (Neurofuncional) */}
                        {item.submenu && (
                          <div className="absolute left-full top-0 ml-2 w-64 opacity-0 invisible group-hover/submenu:visible group-hover/submenu:opacity-100 transition-all duration-200">
                            <div className="rounded-xl bg-white border border-[#dcdcdc] shadow-lg py-3">
                              {item.submenu.map((subitem) => (
                                <Link
                                  key={subitem.name}
                                  href={subitem.href}
                                  className="block px-5 py-2 text-sm text-[#4b4b4b] hover:bg-[#f2f2f2] hover:text-[#0a0a0a] transition-colors"
                                >
                                  {subitem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="#" className="text-sm font-medium text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors">
                Serviços
              </Link>

              <Link href="#" className="text-sm font-medium text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors">
                Hospitais e Convênios
              </Link>

              <Link href="#" className="text-sm font-medium text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors">
                Compliance
              </Link>

              <Button asChild className="ml-4 bg-[#483FC5] hover:bg-[#3a32a0] text-white transition-colors">
                <Link href="#">Contato</Link>
              </Button>
            </div>

            {/* MOBILE TRIGGER */}
            <button
              className="lg:hidden flex items-center gap-2"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <span className="text-sm font-semibold tracking-widest uppercase">
                Menu
              </span>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#f2f2f2]/95 backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between px-4 py-4 border-b border-[#dcdcdc]">
            <span className="text-sm font-semibold tracking-widest uppercase">
              Menu
            </span>
            <button onClick={() => setMobileMenuOpen(false)} aria-label="Fechar menu">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="px-4 py-6 space-y-5 overflow-y-auto max-h-[calc(100vh-80px)]">
            {["Home", "Empresa", "Qualidade"].map((item) => (
              <div key={item} className="border-b border-[#dcdcdc] pb-4">
                <Link 
                  href="#" 
                  className="text-base font-medium block hover:text-[#483FC5] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              </div>
            ))}

            {/* Produtos - Primeira Camada */}
            <div className="border-b border-[#dcdcdc] pb-4">
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="w-full flex items-center justify-between text-base font-medium hover:text-[#483FC5] transition-colors"
                aria-expanded={productsOpen}
              >
                Produtos
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${
                    productsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {productsOpen && (
                <div className="mt-4 ml-3 space-y-3">
                  {menuStructure.map((category) => (
                    <div key={category.name}>
                      {/* Se não tem submenu, apenas link direto */}
                      {!category.submenu ? (
                        <Link
                          href={category.href}
                          className="block text-sm text-[#4b4b4b] hover:text-[#483FC5] py-1 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {category.name}
                        </Link>
                      ) : (
                        /* Neurofuncional - Segunda Camada */
                        <div>
                          <button
                            onClick={() => setNeurofuncionalOpen(!neurofuncionalOpen)}
                            className="w-full flex items-center justify-between text-sm text-[#4b4b4b] hover:text-[#483FC5] py-1 transition-colors"
                            aria-expanded={neurofuncionalOpen}
                          >
                            {category.name}
                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-200 ${
                                neurofuncionalOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {neurofuncionalOpen && (
                            <div className="mt-2 ml-4 space-y-2 border-l-2 border-[#dcdcdc] pl-3">
                              {category.submenu.map((subitem) => (
                                <Link
                                  key={subitem.name}
                                  href={subitem.href}
                                  className="block text-sm text-[#6b6b6b] hover:text-[#483FC5] py-1 transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {subitem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {["Serviços", "Hospitais e Convênios", "Compliance"].map((item) => (
              <div key={item} className="border-b border-[#dcdcdc] pb-4">
                <Link 
                  href="#" 
                  className="text-base font-medium block hover:text-[#483FC5] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              </div>
            ))}

            <Button 
              className="w-full mt-6 bg-[#483FC5] hover:bg-[#3a32a0] text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </Button>
          </div>
        </div>
      )}
    </>
  )
}