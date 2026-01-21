"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
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
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="#" className="flex items-center">
            <Image
              src="/images/wtm-20saude-20sp-logoaprovado.png"
              alt="WTM Saúde SP"
              width={160}
              height={38}
              priority
            />
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-x-8">
            <Link href="#" className="menu-link">Home</Link>
            <Link href="#" className="menu-link">Empresa</Link>
            <Link href="#" className="menu-link">Qualidade</Link>

            <div className="relative group">
              <button className="menu-link flex items-center gap-1">
                Produtos <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 mt-3 w-56 rounded-xl bg-white shadow-lg border border-[#e5e5e5] opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition">
                <ul className="py-2">
                  <li><Link href="#" className="submenu-link">Spine / Coluna</Link></li>
                  <li><Link href="#" className="submenu-link">Cervical</Link></li>
                  <li><Link href="#" className="submenu-link">Neurocirurgia</Link></li>
                  <li><Link href="#" className="submenu-link">Neurofuncional</Link></li>
                </ul>
              </div>
            </div>

            <Link href="#" className="menu-link">Serviços</Link>
            <Link href="#" className="menu-link">Hospitais e Convênios</Link>
            <Link href="#" className="menu-link">Compliance</Link>

            <Button className="bg-[#483FC5] hover:bg-[#3d35a8] text-white">
              Contato
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-white shadow-xl transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <span className="font-semibold text-sm">Menu</span>
          <button onClick={() => setMobileMenuOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-6 space-y-4">
          <Link href="#" className="mobile-link">Home</Link>
          <Link href="#" className="mobile-link">Empresa</Link>
          <Link href="#" className="mobile-link">Qualidade</Link>

          <button
            onClick={() => setProductsOpen(!productsOpen)}
            className="mobile-link flex items-center justify-between"
          >
            Produtos <ChevronDown size={16} />
          </button>

          {productsOpen && (
            <div className="ml-4 flex flex-col space-y-3 text-sm">
              <Link href="#" className="mobile-sublink">Spine / Coluna</Link>
              <Link href="#" className="mobile-sublink">Cervical</Link>
              <Link href="#" className="mobile-sublink">Neurocirurgia</Link>
              <Link href="#" className="mobile-sublink">Neurofuncional</Link>
            </div>
          )}

          <Link href="#" className="mobile-link">Serviços</Link>
          <Link href="#" className="mobile-link">Hospitais e Convênios</Link>
          <Link href="#" className="mobile-link">Compliance</Link>

          <Button className="mt-6 bg-[#483FC5] hover:bg-[#3d35a8] text-white w-full">
            Contato
          </Button>
        </nav>
      </aside>

      {/* Helpers */}
      <style jsx>{`
        .menu-link {
          font-size: 0.875rem;
          font-weight: 500;
          color: #6b6b6b;
          transition: color 0.2s;
        }
        .menu-link:hover {
          color: #0a0a0a;
        }
        .submenu-link {
          display: block;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          color: #444;
        }
        .submenu-link:hover {
          background: #f5f5f5;
        }
        .mobile-link {
          font-size: 1rem;
          font-weight: 500;
          color: #111;
        }
        .mobile-sublink {
          color: #555;
        }
      `}</style>
    </>
  )
}
