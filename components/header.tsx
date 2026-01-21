"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const productsSubmenu = [
  "Spine / Coluna",
  "Cervical",
  "Neurofuncional",
  "Neurocirurgia",
  "Radiofrequência",
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
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
              <Link href="#" className="text-sm font-medium text-[#6b6b6b] hover:text-[#0a0a0a]">
                Home
              </Link>

              <Link href="#" className="text-sm font-medium text-[#6b6b6b] hover:text-[#0a0a0a]">
                Empresa
              </Link>

              <Link href="#" className="text-sm font-medium text-[#6b6b6b] hover:text-[#0a0a0a]">
                Qualidade
              </Link>

              {/* Produtos com submenu */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-sm font-medium text-[#6b6b6b] hover:text-[#0a0a0a]">
                  Produtos
                  <ChevronDown className="h-4 w-4 opacity-70 group-hover:opacity-100" />
                </button>

                <div className="absolute left-0 top-full mt-3 w-64 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
                  <div className="rounded-xl bg-[#f2f2f2] border border-[#dcdcdc] shadow-lg py-3">
                    {productsSubmenu.map((item) => (
                      <Link
                        key={item}
                        href="#"
                        className="block px-5 py-2 text-sm text-[#4b4b4b] hover:bg-[#e6e6e6] hover:text-[#0a0a0a] transition-colors"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="#" className="text-sm font-medium text-[#6b6b6b] hover:text-[#0a0a0a]">
                Serviços
              </Link>

              <Link href="#" className="text-sm font-medium text-[#6b6b6b] hover:text-[#0a0a0a]">
                Hospitais e Convênios
              </Link>

              <Link href="#" className="text-sm font-medium text-[#6b6b6b] hover:text-[#0a0a0a]">
                Compliance
              </Link>

              <Button asChild className="ml-4 bg-[#483FC5] text-white">
                <Link href="#">Contato</Link>
              </Button>
            </div>

            {/* MOBILE TRIGGER */}
            <button
              className="lg:hidden flex items-center gap-2"
              onClick={() => setMobileMenuOpen(true)}
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
        <div className="fixed inset-0 z-50 bg-[#f2f2f2]/95 backdrop-blur-md">
          <div className="flex items-center justify-between px-4 py-4 border-b border-[#dcdcdc]">
            <span className="text-sm font-semibold tracking-widest uppercase">
              Menu
            </span>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="px-4 py-6 space-y-5">
            {["Home", "Empresa", "Qualidade"].map((item) => (
              <div key={item} className="border-b border-[#dcdcdc] pb-4">
                <Link href="#" className="text-base font-medium block">
                  {item}
                </Link>
              </div>
            ))}

            <div className="border-b border-[#dcdcdc] pb-4">
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="w-full flex items-center justify-between text-base font-medium"
              >
                Produtos
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    productsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {productsOpen && (
                <div className="mt-4 ml-3 space-y-3">
                  {productsSubmenu.map((sub) => (
                    <Link
                      key={sub}
                      href="#"
                      className="block text-sm text-[#4b4b4b] hover:text-[#483FC5]"
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {["Serviços", "Hospitais e Convênios", "Compliance"].map((item) => (
              <div key={item} className="border-b border-[#dcdcdc] pb-4">
                <Link href="#" className="text-base font-medium block">
                  {item}
                </Link>
              </div>
            ))}

            <Button className="w-full mt-6 bg-[#483FC5] text-white">
              Contato
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
