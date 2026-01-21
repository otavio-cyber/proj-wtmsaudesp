"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Building2, Mail, Phone } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    instituicao: "",
    cargo: "",
    mensagem: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contato" className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left column - Info */}
          <div>
            <span className="text-xs font-medium tracking-wider uppercase text-[#483FC5] mb-4 block">
              Contato
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0a0a0a] leading-tight tracking-tight mb-8">
              Atendimento a hospitais, operadoras e convênios
            </h2>
            <p className="text-[#6b6b6b] leading-relaxed text-lg mb-12">
              Nossa equipe está preparada para atender instituições de saúde, operadoras e áreas de compras com informações técnicas, suporte comercial e alinhamento operacional.
            </p>

            {/* Contact info */}
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#f5f5f7] border border-[#e5e5e5] flex items-center justify-center text-[#483FC5] flex-shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0a0a0a] mb-1">Institucional</p>
                  <p className="text-sm text-[#6b6b6b]">
                    Atendimento exclusivo para hospitais, operadoras e áreas de compras
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#f5f5f7] border border-[#e5e5e5] flex items-center justify-center text-[#483FC5] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0a0a0a] mb-1">E-mail</p>
                  <p className="text-sm text-[#6b6b6b]">
                    contato@wtmsaudesp.com.br
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#f5f5f7] border border-[#e5e5e5] flex items-center justify-center text-[#483FC5] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#0a0a0a] mb-1">Telefone</p>
                  <p className="text-sm text-[#6b6b6b]">
                    +55 (11) 0000-0000
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div>
            <div className="bg-[#f8f8f8] rounded-2xl p-8 lg:p-10 border border-[#e5e5e5]">
              <h3 className="text-lg font-semibold text-[#0a0a0a] mb-2">
                Iniciar contato institucional
              </h3>
              <p className="text-sm text-[#6b6b6b] mb-8">
                Preencha o formulário para solicitar informações ou agendar uma reunião.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-[#0a0a0a] mb-2">
                      Nome completo
                    </label>
                    <Input
                      id="nome"
                      type="text"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="bg-white border-[#e5e5e5] focus:border-[#483FC5] focus:ring-[#483FC5]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#0a0a0a] mb-2">
                      E-mail corporativo
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white border-[#e5e5e5] focus:border-[#483FC5] focus:ring-[#483FC5]"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="instituicao" className="block text-sm font-medium text-[#0a0a0a] mb-2">
                      Instituição
                    </label>
                    <Input
                      id="instituicao"
                      type="text"
                      value={formData.instituicao}
                      onChange={(e) => setFormData({ ...formData, instituicao: e.target.value })}
                      className="bg-white border-[#e5e5e5] focus:border-[#483FC5] focus:ring-[#483FC5]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cargo" className="block text-sm font-medium text-[#0a0a0a] mb-2">
                      Cargo / Função
                    </label>
                    <Input
                      id="cargo"
                      type="text"
                      value={formData.cargo}
                      onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                      className="bg-white border-[#e5e5e5] focus:border-[#483FC5] focus:ring-[#483FC5]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-[#0a0a0a] mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="mensagem"
                    rows={4}
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="bg-white border-[#e5e5e5] focus:border-[#483FC5] focus:ring-[#483FC5] resize-none"
                    placeholder="Descreva sua necessidade ou solicite mais informações..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-[#483FC5] hover:bg-[#3d35a8] text-white font-medium h-12"
                >
                  Enviar solicitação
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-xs text-[#6b6b6b] text-center">
                  Seus dados serão tratados conforme nossa política de privacidade.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
