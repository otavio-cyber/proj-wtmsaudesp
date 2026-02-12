"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Building2, 
  HeartPulse, 
  Shield, 
  Users, 
  Clock, 
  CheckCircle2,
  Phone,
  Mail,
  MapPin
} from "lucide-react"

export default function HospitaisConveniosPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    hospital: "",
    mensagem: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Aqui você implementará a lógica de envio
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      <Header />

      <main className="bg-white pt-24">
        {/* HERO SECTION */}
        <section className="relative h-[60vh] min-h-[420px] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#483FC5]/95 via-[#5B52D6]/90 to-[#6D64E8]/85" />
          
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/90 font-semibold mb-6">
              <Building2 className="h-4 w-4" />
              Parcerias Estratégicas
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight mb-6">
              Hospitais e Convênios
            </h1>
            <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
              Soluções especializadas para instituições de saúde com excelência operacional
            </p>
          </div>
        </section>

        {/* INTRO SECTION */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-[#f8f8f8]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0a0a0a] mb-6">
                Parceria Estratégica com Hospitais e Convênios
              </h2>
              <p className="text-lg text-[#6b6b6b] leading-relaxed">
                A <strong className="text-[#483FC5]">WTM Saúde SP</strong> atua como parceira estratégica 
                de hospitais e convênios, oferecendo soluções completas em tecnologia médica de alta 
                complexidade. Nossa experiência e infraestrutura garantem agilidade, segurança e 
                confiabilidade em cada etapa do atendimento.
              </p>
            </div>

            {/* DIFERENCIAIS GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: HeartPulse,
                  title: "Atendimento Especializado",
                  description: "Equipe técnica capacitada para suporte completo em procedimentos de alta complexidade"
                },
                {
                  icon: Shield,
                  title: "Segurança e Rastreabilidade",
                  description: "Controle rigoroso e rastreabilidade total em todas as etapas da cadeia logística"
                },
                {
                  icon: Clock,
                  title: "Disponibilidade 24/7",
                  description: "Suporte contínuo para atender emergências e procedimentos programados"
                },
                {
                  icon: Users,
                  title: "Equipe Qualificada",
                  description: "Profissionais experientes em instrumentação cirúrgica e gestão hospitalar"
                },
                {
                  icon: Building2,
                  title: "Logística Integrada",
                  description: "Sistema otimizado de distribuição e armazenamento de implantes e dispositivos"
                },
                {
                  icon: CheckCircle2,
                  title: "Qualidade Certificada",
                  description: "Processos certificados e conformidade com normas sanitárias vigentes"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-8 border border-[#e5e5e5] hover:border-[#483FC5]/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-[#483FC5] to-[#6D64E8] w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#6b6b6b] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVIÇOS SECTION */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-sm uppercase tracking-wider text-[#483FC5] font-semibold mb-4 block">
                  Nossos Serviços
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#0a0a0a] mb-6">
                  Soluções Completas para Instituições de Saúde
                </h2>
                <p className="text-lg text-[#6b6b6b] leading-relaxed mb-8">
                  Oferecemos um conjunto integrado de serviços desenvolvidos para atender 
                  as demandas específicas de hospitais e convênios médicos.
                </p>

                <div className="space-y-6">
                  {[
                    "Fornecimento de implantes e dispositivos médicos",
                    "Instrumentação cirúrgica especializada",
                    "Gestão de consignados e logística reversa",
                    "Treinamento para equipes médicas e assistenciais",
                    "Suporte técnico em centro cirúrgico",
                    "Consultoria em gestão de materiais médicos"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-[#483FC5]/10 rounded-full p-1.5 mt-0.5">
                        <CheckCircle2 className="h-5 w-5 text-[#483FC5]" />
                      </div>
                      <p className="text-[#0a0a0a] text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#e5e5e5] shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=2000"
                    alt="Equipe médica WTM Saúde SP"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-[#483FC5]/20 to-[#6D64E8]/20 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* FORM SECTION */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f8f8f8] to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Form */}
              <div className="bg-white rounded-3xl p-8 lg:p-12 border border-[#e5e5e5] shadow-xl">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-[#0a0a0a] mb-4">
                    Entre em Contato
                  </h2>
                  <p className="text-[#6b6b6b] text-lg">
                    Contamos com uma equipe especializada para atendimento aos hospitais e convênios. 
                    Preencha o formulário abaixo para que possamos entender suas necessidades.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-[#0a0a0a] mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="h-12 rounded-xl border-[#e5e5e5] focus:border-[#483FC5] focus:ring-[#483FC5]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#0a0a0a] mb-2">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="h-12 rounded-xl border-[#e5e5e5] focus:border-[#483FC5] focus:ring-[#483FC5]"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-[#0a0a0a] mb-2">
                      Telefone *
                    </label>
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={handleChange}
                      placeholder="(11) 3237-3626"
                      className="h-12 rounded-xl border-[#e5e5e5] focus:border-[#483FC5] focus:ring-[#483FC5]"
                    />
                  </div>

                  <div>
                    <label htmlFor="hospital" className="block text-sm font-medium text-[#0a0a0a] mb-2">
                      Hospital / Convênio
                    </label>
                    <Input
                      id="hospital"
                      name="hospital"
                      type="text"
                      value={formData.hospital}
                      onChange={handleChange}
                      placeholder="Nome da instituição"
                      className="h-12 rounded-xl border-[#e5e5e5] focus:border-[#483FC5] focus:ring-[#483FC5]"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-[#0a0a0a] mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="Como podemos ajudar?"
                      rows={4}
                      className="rounded-xl border-[#e5e5e5] focus:border-[#483FC5] focus:ring-[#483FC5] resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full h-12 bg-[#483FC5] hover:bg-[#3a32a0] text-white text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Enviar Mensagem
                  </Button>

                  <p className="text-xs text-[#6b6b6b] text-center">
                    * Campos obrigatórios. Suas informações estão seguras conosco.
                  </p>
                </form>
              </div>

              {/* Contact Info + Image */}
              <div className="space-y-8">
                {/* Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#e5e5e5] shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000"
                    alt="Atendimento WTM Saúde SP"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-6 border border-[#e5e5e5] flex items-start gap-4">
                    <div className="bg-[#483FC5]/10 rounded-xl p-3">
                      <Phone className="h-6 w-6 text-[#483FC5]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0a0a0a] mb-1">Telefone</h3>
                      <p className="text-[#6b6b6b]">(11) 3237-3626</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-[#e5e5e5] flex items-start gap-4">
                    <div className="bg-[#483FC5]/10 rounded-xl p-3">
                      <Mail className="h-6 w-6 text-[#483FC5]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0a0a0a] mb-1">E-mail</h3>
                      <p className="text-[#6b6b6b]">contato@wtmsaudesp.com.br</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-[#e5e5e5] flex items-start gap-4">
                    <div className="bg-[#483FC5]/10 rounded-xl p-3">
                      <MapPin className="h-6 w-6 text-[#483FC5]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0a0a0a] mb-1">Endereço</h3>
                      <p className="text-[#6b6b6b]">
                        Rua Barata Ribeiro, 190<br />
                        Bela Vista, São Paulo - SP<br />
                        CEP 01308-000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-gradient-to-br from-[#483FC5] to-[#6D64E8] relative overflow-hidden">
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Pronto para Estabelecer uma Parceria?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Nossa equipe está preparada para apresentar as melhores soluções 
              para sua instituição de saúde.
            </p>
            <Button 
              asChild
              className="bg-white text-[#483FC5] hover:bg-white/90 h-14 px-10 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              <a href="#form">Fale com Nossa Equipe</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}