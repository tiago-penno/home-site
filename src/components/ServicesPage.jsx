import React, { useState } from 'react'
import { Instagram, Palette, TrendingUp, Calendar, Feather, Rocket, MessageSquare, BarChart2, Brush, Layers, Megaphone, Target, Zap, Users } from 'lucide-react'

const ServicesPage = () => {
  const [activeService, setActiveService] = useState('social-media')

  const servicesData = [
    {
      id: "social-media",
      mainCard: {
        icon: Instagram,
        title: "Social Media",
        description: "Estratégias que engajam e convertem seguidores em clientes fiéis"
      },
      subCards: [
        {
          icon: Instagram,
          title: "Gestão de Redes Sociais",
          description: "Planejamento, criação e postagem de conteúdo com foco em engajamento e conversão."
        },
        {
          icon: Calendar,
          title: "Calendário Editorial",
          description: "Organização estratégica das postagens com base nos objetivos da marca."
        },
        {
          icon: Feather,
          title: "Criação de Conteúdo",
          description: "Imagens, legendas e criativos pensados para fortalecer a presença digital."
        },
        {
          icon: Rocket,
          title: "Sequência de Stories e Reels",
          description: "Conteúdos visuais otimizados para gerar conexão e alcance."
        },
        {
          icon: MessageSquare,
          title: "Monitoramento e Respostas",
          description: "Acompanhamento das interações com respostas personalizadas."
        },
        {
          icon: BarChart2,
          title: "Relatórios de Performance",
          description: "Acompanhamento de métricas com análises mensais de resultados."
        }
      ]
    },
    {
      id: "design-grafico",
      mainCard: {
        icon: Palette,
        title: "Design Gráfico",
        description: "Identidade visual marcante que faz sua marca ser lembrada"
      },
      subCards: [
        {
          icon: Brush,
          title: "Identidade Visual",
          description: "Criação de logotipo, paleta de cores e elementos visuais únicos para sua marca."
        },
        {
          icon: Layers,
          title: "Material Gráfico",
          description: "Posts, stories, banners e peças publicitárias com design profissional."
        },
        {
          icon: Palette,
          title: "Branding Completo",
          description: "Desenvolvimento da personalidade visual da marca em todos os pontos de contato."
        },
        {
          icon: Target,
          title: "Design para Conversão",
          description: "Peças gráficas estratégicas focadas em gerar resultados e vendas."
        }
      ]
    },
    {
      id: "growth-marketing",
      mainCard: {
        icon: TrendingUp,
        title: "Growth Marketing",
        description: "Crescimento acelerado com métricas reais e resultados comprovados"
      },
      subCards: [
        {
          icon: Target,
          title: "Estratégia de Crescimento",
          description: "Planejamento de ações focadas no crescimento sustentável do negócio."
        },
        {
          icon: Zap,
          title: "Otimização de Conversão",
          description: "Análise e melhoria dos pontos de conversão para maximizar resultados."
        },
        {
          icon: BarChart2,
          title: "Análise de Métricas",
          description: "Monitoramento detalhado de KPIs e indicadores de performance."
        },
        {
          icon: Users,
          title: "Segmentação de Público",
          description: "Identificação e direcionamento para o público ideal da sua marca."
        },
        {
          icon: Megaphone,
          title: "Campanhas Pagas",
          description: "Gestão de anúncios no Google, Facebook e Instagram com foco em ROI."
        },
        {
          icon: Rocket,
          title: "Growth Hacking",
          description: "Técnicas inovadoras para acelerar o crescimento de forma escalável."
        }
      ]
    }
  ]

  const activeServiceData = servicesData.find(service => service.id === activeService)

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-pink-50 pt-20 px-4">
      <div className="container mx-auto py-16">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Nossos Serviços
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas em marketing digital para transformar sua marca em um fenômeno digital
          </p>
        </div>

        {/* Main Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {servicesData.map((service) => {
            const IconComponent = service.mainCard.icon
            const isActive = activeService === service.id
            
            return (
              <div
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`
                  bg-white rounded-2xl p-8 shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-105
                  ${isActive ? 'opacity-100 ring-2 ring-pink-500' : 'opacity-60 hover:opacity-80'}
                `}
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-6">
                    <IconComponent className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {service.mainCard.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.mainCard.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Sub Service Cards */}
        {activeServiceData && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              O que inclui em {activeServiceData.mainCard.title}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeServiceData.subCards.map((subService, index) => {
                const SubIconComponent = subService.icon
                
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-100 rounded-lg">
                          <SubIconComponent className="h-6 w-6 text-pink-500" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                          {subService.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {subService.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Pronto para transformar sua marca?
            </h3>
            <p className="text-gray-600 mb-6">
              Entre em contato conosco e descubra como podemos acelerar o crescimento do seu negócio
            </p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesPage

