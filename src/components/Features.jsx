import { BarChart3, Users, Palette, Megaphone, Camera, Star, Instagram, TrendingUp, Zap, Target, Brain, Rocket } from 'lucide-react'
import '../App.css'

const Features = () => {
  const features = [
    {
      icon: Instagram,
      title: "Gestão de Redes Sociais",
      description: "Criamos e gerenciamos suas redes com conteúdo que engaja e converte",
      color: "text-pink-500"
    },
    {
      icon: Palette,
      title: "Design Gráfico Digital",
      description: "Identidade visual completa: logos, posts, stories e materiais promocionais",
      color: "text-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Growth Hacking",
      description: "Estratégias de crescimento acelerado com foco em ROI e métricas reais",
      color: "text-pink-500"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Relatórios detalhados e insights acionáveis para otimizar resultados",
      color: "text-purple-500"
    },
    {
      icon: Brain,
      title: "Estratégia Digital",
      description: "Planejamento completo de marketing digital personalizado para seu negócio",
      color: "text-pink-500"
    },
    {
      icon: Rocket,
      title: "Campanhas Virais",
      description: "Criamos campanhas que viralizam e geram buzz autêntico para sua marca",
      color: "text-purple-500"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50 relative">
      {/* Elementos decorativos */}
      <div className="absolute top-10 left-10 home-ctv-sticker home-ctv-pulse">
        🎯 FOCO
      </div>
      <div className="absolute bottom-10 right-10 home-ctv-sticker home-ctv-bounce" style={{transform: 'rotate(15deg)'}}>
        🚀 TOP
      </div>

      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 className="home-ctv-title text-4xl md:text-6xl mb-6 home-ctv-text-gradient">
            Nossos Serviços
          </h2>
          <p className="home-ctv-subtitle text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Soluções completas de marketing digital que transformam sua presença online! 🚀
          </p>
        </div>

        {/* Grid de features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 home-ctv-shadow home-ctv-hover-scale relative overflow-hidden group"
              >
                {/* Efeito de fundo no hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Conteúdo */}
                <div className="relative z-10">
                  <div className="mb-6">
                    <IconComponent className={`h-16 w-16 ${feature.color} mx-auto`} />
                  </div>
                  
                  <h3 className="font-bold text-2xl mb-4 text-gray-800">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Elemento decorativo */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-20"></div>
              </div>
            )
          })}
        </div>

        {/* Seção de resultados */}
        <div className="mt-20 bg-white/80 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto shadow-xl">
          <h3 className="text-3xl md:text-4xl font-black uppercase tracking-wider mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent text-center">
            Resultados que Impressionam
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-pink-500 mb-2">+500%</div>
              <p className="text-gray-600 font-semibold">Crescimento Médio de Seguidores</p>
            </div>
            <div>
              <div className="text-4xl font-black text-purple-500 mb-2">+300%</div>
              <p className="text-gray-600 font-semibold">Aumento no Engajamento</p>
            </div>
            <div>
              <div className="text-4xl font-black text-pink-500 mb-2">+200%</div>
              <p className="text-gray-600 font-semibold">ROI em Campanhas Pagas</p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto home-ctv-shadow">
            <h3 className="home-ctv-title text-2xl md:text-3xl mb-4 home-ctv-text-gradient">
              Vamos Fazer Sua Marca Decolar?
            </h3>
            <p className="text-gray-600 mb-6">
              Entre em contato e descubra como podemos transformar sua presença digital!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="home-ctv-gradient text-white font-bold px-8 py-4 rounded-full home-ctv-hover-scale transition-all">
                Solicitar Orçamento 💰
              </button>
              <button className="border-2 border-pink-500 text-pink-500 hover:bg-pink-50 font-bold px-8 py-4 rounded-full home-ctv-hover-scale transition-all">
                Ver Cases de Sucesso 📈
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

