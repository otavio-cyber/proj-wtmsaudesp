"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const menuStructure = [
  { name: "Spine / Coluna", href: "/produtos/spine-coluna" },
  { name: "Cervical", href: "/produtos/cervical" },
  {
    name: "Neurofuncional",
    href: "/produtos/neurofuncional",
    submenu: [
      { name: "Bomba de Infusão", href: "/produtos/neurofuncional/bomba-de-infusao" },
      { name: "DBS", href: "/produtos/neurofuncional/dbs" },
      { name: "Neuroestimulador Sacral", href: "/produtos/neurofuncional/neuroestimulador-sacral" },
      { name: "Neuroestimulador Dor Crônica", href: "/produtos/neurofuncional/neuroestimulador-dor-cronica" },
      { name: "Radiofrequência", href: "/produtos/neurofuncional/radiofrequencia" },
    ],
  },
  { name: "Neurocirurgia", href: "/produtos/neurocirurgia" },
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false)
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
        <nav>
          <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto">
            <Link href="/">
              <Image
                src="/images/wtm-20saude-20sp-logoaprovado.png"
                alt="WTM Saúde SP"
                width={160}
                height={38}
                className="h-9 w-auto"
                priority
              />
            </Link>

            {/* DESKTOP */}
            <div className="hidden lg:flex items-center gap-x-10">
              <Link href="/" className="text-sm font-medium text-[#6b6b6b] hover:text-[#0a0a0a]">
                Home
              </Link>

              <Link href="/quem-somos" className="text-sm font-medium text-[#6b6b6b] hover:text-[#0a0a0a]">
                Empresa
              </Link>

              <Link href="/qualidade" className="text-sm font-medium text-[#6b6b6b] hover:text-[#0a0a0a]">
                Qualidade
              </Link>

              {/* PRODUTOS */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-sm font-medium text-[#6b6b6b] hover:text-[#0a0a0a]">
                  Produtos
                  <ChevronDown className="h-4 w-4 opacity-70" />
                </button>

                <div className="absolute left-0 top-full mt-3 w-64 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
                  <div className="rounded-xl bg-[#f2f2f2] border border-[#dcdcdc] shadow-lg py-3">
                    {menuStructure.map((item) => (
                      <div key={item.name} className="relative group/sub">
                        <Link
                          href={item.href}
                          className="flex items-center justify-between px-5 py-2 text-sm text-[#4b4b4b] hover:bg-[#e6e6e6]"
                        >
                          {item.name}
                          {item.submenu && <ChevronRight className="h-4 w-4 opacity-60" />}
                        </Link>

                        {item.submenu && (
                          <div className="absolute left-full top-0 ml-2 w-64 opacity-0 invisible group-hover/sub:visible group-hover/sub:opacity-100">
                            <div className="rounded-xl bg-white border border-[#dcdcdc] shadow-lg py-3">
                              {item.submenu.map((sub) => (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  className="block px-5 py-2 text-sm text-[#4b4b4b] hover:bg-[#f2f2f2]"
                                >
                                  {sub.name}
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

              <Link href="/servicos" className="text-sm font-medium text-[#6b6b6b] hover:text-[#0a0a0a]">
                Serviços
              </Link>

              <Link href="/hospitais-e-convenios" className="text-sm font-medium text-[#6b6b6b] hover:text-[#0a0a0a]">
                Hospitais e Convênios
              </Link>

              <Link href="/compliance" className="text-sm font-medium text-[#6b6b6b] hover:text-[#0a0a0a]">
                Compliance
              </Link>

              <Button asChild className="ml-4 bg-[#483FC5] hover:bg-[#3a32a0] text-white">
                <Link href="/contato">Contato</Link>
              </Button>
            </div>

            {/* MOBILE */}
            <button className="lg:hidden" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#f2f2f2]/95 backdrop-blur-md lg:hidden">
          <div className="flex justify-between px-4 py-4 border-b">
            <span className="text-sm font-semibold uppercase">Menu</span>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="px-4 py-6 space-y-5">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/quem-somos" onClick={() => setMobileMenuOpen(false)}>Empresa</Link>
            <Link href="/qualidade" onClick={() => setMobileMenuOpen(false)}>Qualidade</Link>

            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="w-full flex justify-between"
            >
              Produtos
              <ChevronDown className={productsOpen ? "rotate-180" : ""} />
            </button>

            {productsOpen && (
              <div className="ml-4 space-y-3">
                {menuStructure.map((cat) =>
                  !cat.submenu ? (
                    <Link key={cat.name} href={cat.href} onClick={() => setMobileMenuOpen(false)}>
                      {cat.name}
                    </Link>
                  ) : (
                    <div key={cat.name}>
                      <button
                        onClick={() => setNeurofuncionalOpen(!neurofuncionalOpen)}
                        className="w-full flex justify-between"
                      >
                        {cat.name}
                        <ChevronDown className={neurofuncionalOpen ? "rotate-180" : ""} />
                      </button>

                      {neurofuncionalOpen && (
                        <div className="ml-4 space-y-2">
                          {cat.submenu.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>
            )}

            <Link href="/servicos" onClick={() => setMobileMenuOpen(false)}>Serviços</Link>
            <Link href="/hospitais-e-convenios" onClick={() => setMobileMenuOpen(false)}>
              Hospitais e Convênios
            </Link>
            <Link href="/compliance" onClick={() => setMobileMenuOpen(false)}>Compliance</Link>

            <Button className="w-full mt-6" asChild>
              <Link href="/contato">Contato</Link>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
