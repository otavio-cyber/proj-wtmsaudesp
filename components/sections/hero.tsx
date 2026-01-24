"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    headline: "Operação logística e distribuição de excelência.",
    subheadline:
      "Efetividade, segurança e pontualidade atuante nas cidades de São Paulo, Sorocaba, Baixada Santista e Vale do Paraíba",
    image: "/images/hero-banner1.webp",
  },
  {
    id: 2,
    headline: "Pela Vida, Sempre!",
    subheadline:
      "Excelência nos serviços de instrumentação estruturada para médicos, hospitais e operadoras.",
    image: "/images/hero-banner2.webp",
  },
  {
    id: 3,
    headline: "Pela Vida, Sempre!",
    subheadline:
      "Distribuição de soluções médicas com alto padrão técnico e suporte especializado.",
    image: "/images/hero-banner3.webp",
  },
  
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide(index)
    setTimeout(() => setIsTransitioning(false), 700)
  }, [isTransitioning])

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length)
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length)
  }, [currentSlide, goToSlide])

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image || "/placeholder.svg"}
            alt=""
            fill
            className="object-cover"
            priority={index === 0}
          />

          {/* Soft gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/80 to-white/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Tagline */}
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#483FC5]/10 text-[#483FC5] border border-[#483FC5]/20">
                Distribuidor Autorizado Medtronic
              </span>
            </div>

            {/* Headline with transition */}
            <div className="relative min-h-[160px] lg:min-h-[200px] mb-8">
              {slides.map((slide, index) => (
                <h1
                  key={slide.id}
                  className={`absolute inset-0 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#0a0a0a] leading-[1.15] tracking-tight text-balance transition-all duration-700 ${index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                    }`}
                >
                  {slide.headline}
                </h1>
              ))}
            </div>

            {/* Subheadline with transition */}
            <div className="relative h-[80px] sm:h-[60px] mb-10">
              {slides.map((slide, index) => (
                <p
                  key={slide.id}
                  className={`absolute inset-0 text-base sm:text-lg text-[#6b6b6b] leading-relaxed transition-all duration-700 delay-100 ${index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                    }`}
                >
                  {slide.subheadline}
                </p>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#483FC5] hover:bg-[#3d35a8] text-white font-medium px-8 h-12 text-base"
              >
                <Link href="#solucoes">
                  Conheça nossas soluções
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#d1d1d1] text-[#0a0a0a] hover:bg-[#f5f5f7] font-medium px-8 h-12 text-base bg-transparent"
              >
                <Link href="#contato">
                  Contato institucional
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute z-20 bottom-1/2 translate-y-1/2 left-6 lg:left-8">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/80 hover:bg-white border border-[#e5e5e5] flex items-center justify-center text-[#6b6b6b] hover:text-[#0a0a0a] transition-all shadow-sm"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>
      <div className="absolute z-20 bottom-1/2 translate-y-1/2 right-6 lg:right-8">
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/80 hover:bg-white border border-[#e5e5e5] flex items-center justify-center text-[#6b6b6b] hover:text-[#0a0a0a] transition-all shadow-sm"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Pagination dots */}
      <div className="absolute z-20 bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${index === currentSlide
                ? "w-8 h-2 bg-[#483FC5] rounded-full"
                : "w-2 h-2 bg-[#d1d1d1] hover:bg-[#a1a1a1] rounded-full"
              }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute z-20 bottom-0 left-0 right-0 h-1 bg-[#e5e5e5]">
        <div
          className="h-full bg-[#483FC5] transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  )
}
