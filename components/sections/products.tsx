"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const products = [
  {
    title: "Coluna e Spine",
    description: "Implantes e instrumentais para cirurgia da coluna vertebral.",
    href: "/produtos/coluna-spine",
    image: "/images/products/spine.jpg",
  },
  {
    title: "Neurocirurgia",
    description: "Tecnologias avançadas para procedimentos neurocirúrgicos.",
    href: "/produtos/neurocirurgia",
    image: "/images/products/neuro.jpg",
  },
  {
    title: "Neuromodulação",
    description: "Soluções de estimulação para dor crônica e distúrbios neurológicos.",
    href: "/produtos/neuromodulacao",
    image: "/images/products/neuromodulacao.jpg",
  },
  {
    title: "Radiofrequência",
    description: "Equipamentos para tratamentos minimamente invasivos.",
    href: "/produtos/radiofrequencia",
    image: "/images/products/radiofrequencia.jpg",
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
            A WTMSaúdeSP conduz com excelencia operações de armazenagem e distribuição de implantes cirúrgicos com rigor técnico e eficiência logística.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.title}
              href={product.href}
              className="group relative aspect-square rounded-2xl overflow-hidden"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${product.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/20 transition-colors duration-500" />

              {/* Content */}
              <div
                className="
    relative z-10 h-full w-full p-8 flex flex-col justify-end
    transition-all duration-700 ease-out
    group-hover:opacity-70
    group-hover:translate-y-4
  "
              >

                <h3 className="text-xl font-semibold text-white mb-3">
                  {product.title}
                </h3>
                <p className="text-sm text-white/85 mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="inline-flex items-center gap-2 text-sm font-medium text-white border border-[#adaaaa] px-4 py-2 rounded-full w-fit">
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
