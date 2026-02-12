"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Shield,
  Lock,
  AlertTriangle,
  FileText,
  Send,
  CheckCircle2,
  Info,
  Eye,
  EyeOff
} from "lucide-react"

export default function CompliancePage() {
  const [formData, setFormData] = useState({
    tipo: "",
    descricao: "",
    envolvidos: "",
    data: "",
    local: "",
    valores: "",
    evidencias: "",
    identificacao: "anonima",
    nome: "",
    email: "",
    telefone: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [showIdentification, setShowIdentification] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log("Denúncia enviada:", formData)
      setSubmitStatus('success')
      
      setTimeout(() => {
        setFormData({
          tipo: "",
          descricao: "",
          envolvidos: "",
          data: "",
          local: "",
          valores: "",
          evidencias: "",
          identificacao: "anonima",
          nome: "",
          email: "",
          telefone: ""
        })
        setSubmitStatus('idle')
        setShowIdentification(false)
      }, 3000)
      
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      <Header />

      <main className="bg-white pt-24">
        {/* HERO */}
        <section className="relative h-[60vh] min-h-[420px] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#021339] via-[#0a1f5c] to-[#483FC5]" />
          
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/90 font-semibold mb-6">
              <Shield className="h-4 w-4" />
              Institucional
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight mb-6">
              Compliance
            </h1>
            <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
              Integridade, ética e transparência em todas as nossas ações
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-[#f8f8f8]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0a0a0a] mb-8">
              Integridade, Ética e Transparência
            </h2>

            <p className="text-lg text-[#6b6b6b] leading-relaxed mb-6">
              O Departamento de Compliance da <strong className="text-[#483FC5]">WTM Saúde SP</strong> tem como
              objetivo acompanhar e assegurar que todos os colaboradores estejam
              em conformidade com as práticas, normas e condutas estabelecidas pela
              Empresa.
            </p>

            <p className="text-lg text-[#6b6b6b] leading-relaxed">
              Nossa missão é atender às necessidades dos clientes, contribuindo
              para o bem-estar e a qualidade de vida da sociedade, por meio da
              disponibilização de produtos e serviços de qualidade, atendendo às
              expectativas de clientes, colaboradores e da sociedade em geral.
            </p>
          </div>
        </section>

        {/* PILARES */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Integridade",
                  description: "Comprometimento com práticas éticas e transparentes em todas as relações"
                },
                {
                  icon: FileText,
                  title: "Conformidade",
                  description: "Adequação rigorosa às normas legais e regulamentações do setor"
                },
                {
                  icon: Lock,
                  title: "Sigilo",
                  description: "Proteção absoluta das informações e garantia de confidencialidade"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-[#f8f8f8] rounded-2xl p-8 border border-[#e5e5e5] hover:border-[#483FC5]/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-[#483FC5] to-[#6D64E8] w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a0a0a] mb-3">
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

        {/* PROGRAMA DE COMPLIANCE */}
        <section className="bg-[#f8f8f8] py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0a0a0a] mb-8">
              Programa de Compliance
            </h2>

            <p className="text-lg text-[#6b6b6b] leading-relaxed mb-6">
              Com o propósito de aprimorar continuamente os mecanismos necessários
              para o cumprimento de sua missão e visando à preservação de sua imagem
              íntegra, ética e transparente no mercado, a WTM Saúde SP implementou
              seu Programa de Compliance.
            </p>

            <p className="text-lg text-[#6b6b6b] leading-relaxed">
              Comprometida com os princípios da integridade e da responsabilidade,
              a Empresa disponibiliza um canal de denúncias destinado ao relato de
              práticas que possam representar riscos aos seus procedimentos
              internos.
            </p>
          </div>
        </section>

        {/* CANAL DE DENÚNCIAS */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-16 items-start">
              {/* INFO - 2 columns */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#0a0a0a] mb-6">
                    Canal de Denúncias
                  </h2>

                  <p className="text-lg text-[#6b6b6b] leading-relaxed mb-6">
                    O canal de denúncias tem como finalidade o recebimento de
                    comunicações relacionadas a possíveis violações ao Código de Ética
                    e de Conduta, bem como às demais normas e diretrizes de Compliance
                    da WTM Saúde SP.
                  </p>

                  <p className="text-lg text-[#6b6b6b] leading-relaxed mb-6">
                    O relato poderá ser realizado de forma <strong className="text-[#483FC5]">anônima ou identificada</strong>.
                    Caso opte por se identificar, a Empresa garante a adoção de todas
                    as medidas necessárias para sua proteção e a não retaliação.
                  </p>

                  <p className="text-lg text-[#6b6b6b] leading-relaxed">
                    A WTM Saúde SP assegura o <strong className="text-[#483FC5]">sigilo absoluto</strong> das informações, o
                    tratamento adequado de cada situação e a condução das análises
                    sem qualquer conflito de interesses.
                  </p>
                </div>

                {/* Info Cards */}
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-[#483FC5]/10 to-[#6D64E8]/10 rounded-2xl p-6 border border-[#483FC5]/20">
                    <div className="flex items-start gap-4">
                      <Lock className="h-6 w-6 text-[#483FC5] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-[#0a0a0a] mb-2">
                          100% Confidencial
                        </h3>
                        <p className="text-sm text-[#6b6b6b]">
                          Todas as informações são tratadas com sigilo absoluto
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#483FC5]/10 to-[#6D64E8]/10 rounded-2xl p-6 border border-[#483FC5]/20">
                    <div className="flex items-start gap-4">
                      <Shield className="h-6 w-6 text-[#483FC5] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-[#0a0a0a] mb-2">
                          Proteção Garantida
                        </h3>
                        <p className="text-sm text-[#6b6b6b]">
                          Zero tolerância a retaliações contra denunciantes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FORMULÁRIO - 3 columns */}
              <div className="lg:col-span-3">
                <form onSubmit={handleSubmit} className="bg-[#f8f8f8] rounded-3xl p-8 lg:p-10 border border-[#e5e5e5] shadow-xl space-y-6">
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
                    <Info className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-900">
                      Para uma análise eficaz, forneça informações claras e detalhadas. 
                      A responsabilidade pela veracidade é do relator.
                    </p>
                  </div>

                  {/* Tipo de Denúncia */}
                  <div>
                    <label htmlFor="tipo" className="flex items-center gap-2 text-sm font-medium text-[#0a0a0a] mb-2">
                      <AlertTriangle className="h-4 w-4 text-[#483FC5]" />
                      Tipo de Denúncia *
                    </label>
                    <select
                      id="tipo"
                      name="tipo"
                      required
                      value={formData.tipo}
                      onChange={handleChange}
                      className="w-full h-12 rounded-xl border border-[#e5e5e5] bg-white px-4 focus:border-[#483FC5] focus:ring-[#483FC5] focus:ring-2 outline-none transition-all"
                    >
                      <option value="">Selecione o tipo</option>
                      <option value="etica">Violação do Código de Ética</option>
                      <option value="corrupcao">Corrupção ou Suborno</option>
                      <option value="fraude">Fraude</option>
                      <option value="assedio">Assédio (Moral ou Sexual)</option>
                      <option value="discriminacao">Discriminação</option>
                      <option value="conflito">Conflito de Interesses</option>
                      <option value="seguranca">Questões de Segurança</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  {/* Descrição */}
                  <div>
                    <label htmlFor="descricao" className="text-sm font-medium text-[#0a0a0a] mb-2 block">
                      O QUE: Descrição detalhada da situação *
                    </label>
                    <Textarea
                      id="descricao"
                      name="descricao"
                      required
                      value={formData.descricao}
                      onChange={handleChange}
                      placeholder="Descreva de forma clara o que aconteceu..."
                      rows={4}
                      className="rounded-xl border-[#e5e5e5] bg-white focus:border-[#483FC5] focus:ring-[#483FC5] resize-none"
                    />
                  </div>

                  {/* Grid 2 colunas */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="envolvidos" className="text-sm font-medium text-[#0a0a0a] mb-2 block">
                        QUEM: Pessoas envolvidas
                      </label>
                      <Input
                        id="envolvidos"
                        name="envolvidos"
                        value={formData.envolvidos}
                        onChange={handleChange}
                        placeholder="Nomes ou cargos"
                        className="h-12 rounded-xl border-[#e5e5e5] bg-white focus:border-[#483FC5] focus:ring-[#483FC5]"
                      />
                    </div>

                    <div>
                      <label htmlFor="data" className="text-sm font-medium text-[#0a0a0a] mb-2 block">
                        QUANDO: Data ou período
                      </label>
                      <Input
                        id="data"
                        name="data"
                        type="date"
                        value={formData.data}
                        onChange={handleChange}
                        className="h-12 rounded-xl border-[#e5e5e5] bg-white focus:border-[#483FC5] focus:ring-[#483FC5]"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="local" className="text-sm font-medium text-[#0a0a0a] mb-2 block">
                        ONDE: Local do ocorrido
                      </label>
                      <Input
                        id="local"
                        name="local"
                        value={formData.local}
                        onChange={handleChange}
                        placeholder="Departamento, setor, etc."
                        className="h-12 rounded-xl border-[#e5e5e5] bg-white focus:border-[#483FC5] focus:ring-[#483FC5]"
                      />
                    </div>

                    <div>
                      <label htmlFor="valores" className="text-sm font-medium text-[#0a0a0a] mb-2 block">
                        QUANTO: Valores envolvidos
                      </label>
                      <Input
                        id="valores"
                        name="valores"
                        value={formData.valores}
                        onChange={handleChange}
                        placeholder="Se aplicável"
                        className="h-12 rounded-xl border-[#e5e5e5] bg-white focus:border-[#483FC5] focus:ring-[#483FC5]"
                      />
                    </div>
                  </div>

                  {/* Evidências */}
                  <div>
                    <label htmlFor="evidencias" className="text-sm font-medium text-[#0a0a0a] mb-2 block">
                      PROVAS: Evidências disponíveis
                    </label>
                    <Textarea
                      id="evidencias"
                      name="evidencias"
                      value={formData.evidencias}
                      onChange={handleChange}
                      placeholder="Descreva documentos, testemunhas ou outras evidências..."
                      rows={3}
                      className="rounded-xl border-[#e5e5e5] bg-white focus:border-[#483FC5] focus:ring-[#483FC5] resize-none"
                    />
                  </div>

                  {/* Divider */}
                  <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-[#e5e5e5]"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-[#f8f8f8] px-4 text-sm text-[#6b6b6b]">
                        Identificação (Opcional)
                      </span>
                    </div>
                  </div>

                  {/* Tipo de Identificação */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <button
                        type="button"
                        onClick={() => {
                          setShowIdentification(false)
                          setFormData(prev => ({ ...prev, identificacao: "anonima" }))
                        }}
                        className={`flex-1 h-12 rounded-xl border-2 font-medium transition-all ${
                          !showIdentification
                            ? "border-[#483FC5] bg-[#483FC5]/10 text-[#483FC5]"
                            : "border-[#e5e5e5] bg-white text-[#6b6b6b] hover:border-[#483FC5]/30"
                        }`}
                      >
                        <span className="flex items-center justify-center gap-2">
                          <EyeOff className="h-4 w-4" />
                          Denúncia Anônima
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setShowIdentification(true)
                          setFormData(prev => ({ ...prev, identificacao: "identificada" }))
                        }}
                        className={`flex-1 h-12 rounded-xl border-2 font-medium transition-all ${
                          showIdentification
                            ? "border-[#483FC5] bg-[#483FC5]/10 text-[#483FC5]"
                            : "border-[#e5e5e5] bg-white text-[#6b6b6b] hover:border-[#483FC5]/30"
                        }`}
                      >
                        <span className="flex items-center justify-center gap-2">
                          <Eye className="h-4 w-4" />
                          Me Identificar
                        </span>
                      </button>
                    </div>

                    {showIdentification && (
                      <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                        <Input
                          name="nome"
                          value={formData.nome}
                          onChange={handleChange}
                          placeholder="Seu nome completo"
                          className="h-12 rounded-xl border-[#e5e5e5] bg-white focus:border-[#483FC5] focus:ring-[#483FC5]"
                        />
                        <div className="grid md:grid-cols-2 gap-4">
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="seu@email.com"
                            className="h-12 rounded-xl border-[#e5e5e5] bg-white focus:border-[#483FC5] focus:ring-[#483FC5]"
                          />
                          <Input
                            name="telefone"
                            type="tel"
                            value={formData.telefone}
                            onChange={handleChange}
                            placeholder="(11) 00000-0000"
                            className="h-12 rounded-xl border-[#e5e5e5] bg-white focus:border-[#483FC5] focus:ring-[#483FC5]"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <p className="text-sm text-green-800">
                        Denúncia enviada com sucesso! Analisaremos com total sigilo e seriedade.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
                      <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0" />
                      <p className="text-sm text-red-800">
                        Erro ao enviar denúncia. Por favor, tente novamente.
                      </p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 bg-[#483FC5] hover:bg-[#3a32a0] text-white text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Enviando com Segurança...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="h-5 w-5" />
                          Enviar Denúncia
                        </span>
                      )}
                    </Button>

                    <p className="text-xs text-[#6b6b6b] text-center mt-4">
                      * Campos obrigatórios. Todas as informações são tratadas com absoluto sigilo.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CÓDIGO DE ÉTICA */}
        <section className="bg-gradient-to-br from-[#483FC5] to-[#6D64E8] py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Código de Ética e Conduta
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              A responsabilidade pela veracidade das informações prestadas é do
              relator. Para viabilizar uma análise objetiva e eficaz, é
              fundamental que as informações fornecidas sejam claras, completas
              e detalhadas.
            </p>
            <Button 
              asChild
              className="bg-white text-[#483FC5] hover:bg-white/90 h-14 px-10 text-lg font-semibold rounded-xl shadow-2xl"
            >
              <a href="#" download>
                Baixar Código de Ética (PDF)
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}