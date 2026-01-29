"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const products = [
  {
    title: "Spine ToracoLombar",
    description: "Implantes e sistemas para cirurgias da coluna vertebral.",
    href: "#",
    image: "/images/products/spine-coluna.webp", // card 1
  },
  {
    title: "Spine Cervical",
    description: "Soluções específicas para procedimentos cervicais.",
    href: "#",
    image: "/images/products/cervical.webp", // card 5
  },
  {
    title: "Neurocirurgia",
    description: "Dispositivos de alta precisão para neurocirurgia.",
    href: "#",
    image: "/images/products/neurocirurgia.webp", // card 3
  },
  {
    title: "Neurofuncional",
    description: "Tecnologias para neuromodulação e controle funcional.",
    href: "#",
    image: "/images/products/neurofuncional.webp", // card 4
  },
]

export function ProductsSection() {
  return (
    <section id="solucoes" className="py-28 lg:py-36 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-20">
          <span className="text-xs font-medium tracking-wider uppercase text-[#483FC5] block mb-4">
            PRODUTOS EM DESTAQUE
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0a0a0a] mb-6">
            Implantes Cirúrgicos
          </h2>

          <p className="text-lg text-[#6b6b6b] leading-relaxed">
            A <strong>WTM Saúde SP</strong> atua com excelência na armazenagem e
            distribuição de implantes cirúrgicos, aliando rigor técnico e
            eficiência logística.
          </p>
        </div>

        {/* Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          {products.map((product) => (
            <Link
              key={product.title}
              href={product.href}
              className="group relative aspect-square rounded-2xl overflow-hidden"
            >
              {/* Background image */}
              <div
                className="
                  absolute inset-0
                  bg-cover bg-center
                  transition-transform duration-700 ease-out
                  group-hover:scale-105
                "
                style={{ backgroundImage: `url(${product.image})` }}
              />

              {/* Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-black/20
                  transition-colors duration-500
                  group-hover:bg-black/30
                "
              />

              {/* Content */}
              <div
                className="
                  relative z-10 h-full w-full p-8
                  flex flex-col justify-end
                  transition-all duration-500 ease-out
                  group-hover:translate-y-3
                "
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {product.title}
                </h3>

                <p className="text-sm text-white/90 mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="inline-flex items-center gap-2 text-sm font-medium text-white border border-white/70 px-4 py-2 rounded-full w-fit">
                  Saiba mais
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
