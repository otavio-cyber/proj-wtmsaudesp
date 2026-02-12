"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Building2,
  User,
  AlertCircle,
  CheckCircle2
} from "lucide-react"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    assunto: "",
    mensagem: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Simula envio (aqui você implementa a integração real)
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log("Form submitted:", formData)
      setSubmitStatus('success')
      
      // Reset form após 2 segundos
      setTimeout(() => {
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          empresa: "",
          assunto: "",
          mensagem: ""
        })
        setSubmitStatus('idle')
      }, 2000)
      
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
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
        <section className="relative h-[50vh] min-h-[380px] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#021339] via-[#0a1f5c] to-[#483FC5]" />
          
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/90 font-semibold mb-6">
              <MessageSquare className="h-4 w-4" />
              Entre em Contato
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl mx-auto leading-tight mb-6">
              Fale Conosco
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Estamos prontos para atender suas necessidades em tecnologia médica
            </p>
          </div>
        </section>

        {/* CONTACT INFO CARDS */}
        <section className="py-16 bg-gradient-to-b from-white to-[#f8f8f8]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-24 relative z-20">
              {[
                {
                  icon: Phone,
                  title: "Telefone",
                  content: "(11) 3000-0000",
                  subContent: "Seg a Sex, 8h às 18h",
                  href: "tel:+551130000000"
                },
                {
                  icon: Mail,
                  title: "E-mail",
                  content: "contato@wtmsaudesp.com.br",
                  subContent: "Respondemos em até 24h",
                  href: "mailto:contato@wtmsaudesp.com.br"
                },
                {
                  icon: MapPin,
                  title: "Endereço",
                  content: "Rua Barata Ribeiro, 190",
                  subContent: "Bela Vista, São Paulo - SP",
                  href: "https://maps.google.com"
                },
                {
                  icon: Clock,
                  title: "Horário",
                  content: "Segunda a Sexta",
                  subContent: "8:00 - 18:00",
                  href: null
                }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href || "#"}
                  target={item.href?.startsWith("http") ? "_blank" : undefined}
                  rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`bg-white rounded-2xl p-8 border border-[#e5e5e5] shadow-xl hover:shadow-2xl transition-all duration-300 group ${
                    item.href ? "hover:border-[#483FC5]/30 cursor-pointer" : "cursor-default"
                  }`}
                >
                  <div className="bg-gradient-to-br from-[#483FC5] to-[#6D64E8] w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-sm uppercase tracking-wider text-[#6b6b6b] font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-lg font-semibold text-[#0a0a0a] mb-1">
                    {item.content}
                  </p>
                  <p className="text-sm text-[#6b6b6b]">
                    {item.subContent}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* MAIN CONTACT SECTION */}
        <section className="py-20 lg:py-28 bg-[#f8f8f8]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-16 items-start">
              {/* FORM - 3 columns */}
              <div className="lg:col-span-3">
                <div className="mb-10">
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#0a0a0a] mb-4">
                    Envie sua Mensagem
                  </h2>
                  <p className="text-lg text-[#6b6b6b] leading-relaxed">
                    Preencha o formulário abaixo e nossa equipe entrará em contato 
                    o mais breve possível para atender sua solicitação.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 lg:p-10 border border-[#e5e5e5] shadow-xl space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nome" className="flex items-center gap-2 text-sm font-medium text-[#0a0a0a] mb-2">
                        <User className="h-4 w-4 text-[#483FC5]" />
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
                      <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-[#0a0a0a] mb-2">
                        <Mail className="h-4 w-4 text-[#483FC5]" />
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
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="telefone" className="flex items-center gap-2 text-sm font-medium text-[#0a0a0a] mb-2">
                        <Phone className="h-4 w-4 text-[#483FC5]" />
                        Telefone *
                      </label>
                      <Input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        required
                        value={formData.telefone}
                        onChange={handleChange}
                        placeholder="(11) 00000-0000"
                        className="h-12 rounded-xl border-[#e5e5e5] focus:border-[#483FC5] focus:ring-[#483FC5]"
                      />
                    </div>

                    <div>
                      <label htmlFor="empresa" className="flex items-center gap-2 text-sm font-medium text-[#0a0a0a] mb-2">
                        <Building2 className="h-4 w-4 text-[#483FC5]" />
                        Empresa / Hospital
                      </label>
                      <Input
                        id="empresa"
                        name="empresa"
                        type="text"
                        value={formData.empresa}
                        onChange={handleChange}
                        placeholder="Nome da instituição"
                        className="h-12 rounded-xl border-[#e5e5e5] focus:border-[#483FC5] focus:ring-[#483FC5]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="assunto" className="flex items-center gap-2 text-sm font-medium text-[#0a0a0a] mb-2">
                      <MessageSquare className="h-4 w-4 text-[#483FC5]" />
                      Assunto *
                    </label>
                    <Input
                      id="assunto"
                      name="assunto"
                      type="text"
                      required
                      value={formData.assunto}
                      onChange={handleChange}
                      placeholder="Sobre o que você gostaria de falar?"
                      className="h-12 rounded-xl border-[#e5e5e5] focus:border-[#483FC5] focus:ring-[#483FC5]"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="flex items-center gap-2 text-sm font-medium text-[#0a0a0a] mb-2">
                      <AlertCircle className="h-4 w-4 text-[#483FC5]" />
                      Mensagem *
                    </label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="Descreva sua necessidade ou dúvida..."
                      rows={6}
                      className="rounded-xl border-[#e5e5e5] focus:border-[#483FC5] focus:ring-[#483FC5] resize-none"
                    />
                  </div>

                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <p className="text-sm text-green-800">
                        Mensagem enviada com sucesso! Entraremos em contato em breve.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
                      <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                      <p className="text-sm text-red-800">
                        Erro ao enviar mensagem. Por favor, tente novamente.
                      </p>
                    </div>
                  )}

                  <div className="pt-4">
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 bg-[#483FC5] hover:bg-[#3a32a0] text-white text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Enviando...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="h-5 w-5" />
                          Enviar Mensagem
                        </span>
                      )}
                    </Button>

                    <p className="text-xs text-[#6b6b6b] text-center mt-4">
                      * Campos obrigatórios. Suas informações estão seguras e serão usadas apenas para responder sua solicitação.
                    </p>
                  </div>
                </form>
              </div>

              {/* SIDEBAR INFO - 2 columns */}
              <div className="lg:col-span-2 space-y-8">
                {/* Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#e5e5e5] shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000"
                    alt="Atendimento WTM Saúde SP"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info Box */}
                <div className="bg-white rounded-2xl p-8 border border-[#e5e5e5] shadow-lg">
                  <h3 className="text-xl font-bold text-[#0a0a0a] mb-4">
                    Por que nos contatar?
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Atendimento personalizado para sua instituição",
                      "Respostas rápidas e soluções eficientes",
                      "Equipe especializada em tecnologia médica",
                      "Suporte técnico qualificado",
                      "Consultoria em gestão de materiais médicos"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="bg-[#483FC5]/10 rounded-full p-1 mt-0.5">
                          <CheckCircle2 className="h-4 w-4 text-[#483FC5]" />
                        </div>
                        <p className="text-[#6b6b6b]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Localização */}
                <div className="bg-white rounded-2xl p-8 border border-[#e5e5e5] shadow-lg">
                  <h3 className="text-xl font-bold text-[#0a0a0a] mb-4">
                    Nossa Localização
                  </h3>
                  <div className="space-y-3 mb-6">
                    <p className="text-[#6b6b6b]">
                      <strong className="text-[#0a0a0a]">Endereço:</strong><br />
                      Rua Barata Ribeiro, 190<br />
                      Ed. Doctors Center - Salas 71 a 76<br />
                      Bela Vista, São Paulo - SP<br />
                      CEP 01308-000
                    </p>
                  </div>
                  <Button 
                    asChild
                    variant="outline"
                    className="w-full h-12 rounded-xl border-[#483FC5] text-[#483FC5] hover:bg-[#483FC5] hover:text-white transition-colors"
                  >
                    <a 
                      href="https://www.google.com/maps" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MapPin className="h-5 w-5" />
                      Ver no Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0a0a0a] mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-lg text-[#6b6b6b]">
                Confira algumas das dúvidas mais comuns
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Qual o prazo de resposta para solicitações?",
                  answer: "Nossa equipe responde todas as solicitações em até 24 horas úteis. Para urgências, entre em contato diretamente por telefone."
                },
                {
                  question: "Vocês atendem em todo o Brasil?",
                  answer: "Sim, atendemos instituições de saúde em todo o território nacional, com logística especializada para cada região."
                },
                {
                  question: "Como funciona o processo de parceria?",
                  answer: "Após o primeiro contato, agendamos uma reunião para entender suas necessidades e apresentar nossas soluções personalizadas."
                },
                {
                  question: "Oferecem suporte técnico?",
                  answer: "Sim, contamos com equipe técnica especializada disponível para suporte durante procedimentos cirúrgicos e orientações sobre produtos."
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-[#f8f8f8] rounded-2xl p-6 border border-[#e5e5e5]"
                >
                  <h3 className="text-lg font-semibold text-[#0a0a0a] mb-3">
                    {item.question}
                  </h3>
                  <p className="text-[#6b6b6b] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}