import { Instagram, Youtube, Twitter, Mail, Heart, Video, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/home.ctv/",
      color: "hover:text-pink-500"
    },
    {
      icon: Youtube,
      label: "YouTube",
      href: "#",
      color: "hover:text-red-500"
    },
    {
      icon: Video,
      label: "TikTok",
      href: "#",
      color: "hover:text-black"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "#",
      color: "hover:text-blue-500"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:contato@homectv.com",
      color: "hover:text-pink-500"
    }
  ]

  return (
    <footer className="py-16 px-4">
      <div className="container mx-auto">
        {/* Seção principal */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            HOME CTV
          </h2>
          <p className="text-xl text-pink-500 font-medium mb-8">
            Transformando marcas em fenômenos digitais 🚀
          </p>
          
          {/* Redes sociais */}
          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-gray-100 hover:bg-gray-200 rounded-full transform hover:scale-110 transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <IconComponent className="h-6 w-6 text-gray-600" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Links e informações */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Sobre */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl mb-4 text-gray-800">Sobre a Home CTV</h3>
            <p className="text-gray-600 leading-relaxed">
              Somos especialistas em marketing digital, social media e design gráfico. 
              Nossa missão é transformar sua marca em um fenômeno digital através de 
              estratégias criativas e resultados comprovados.
            </p>
          </div>

          {/* Serviços */}
          <div className="text-center">
            <h3 className="font-bold text-xl mb-4 text-gray-800">Nossos Serviços</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-pink-500 transition-colors">Gestão de Redes Sociais</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Design Gráfico Digital</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Growth Marketing</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Estratégia Digital</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div className="text-center md:text-right">
            <h3 className="font-bold text-xl mb-4 text-gray-800">Contato Comercial</h3>
            <div className="space-y-2 text-gray-600">
              <p className="flex items-center justify-center md:justify-end gap-2">
                <Mail className="h-4 w-4" />
                contato@homectv.com
              </p>
              <p className="flex items-center justify-center md:justify-end gap-2">
                <Phone className="h-4 w-4" />
                (11) 99999-9999
              </p>
              <p className="flex items-center justify-center md:justify-end gap-2">
                <MapPin className="h-4 w-4" />
                São Paulo, Brasil
              </p>
              <p className="flex items-center justify-center md:justify-end gap-2">
                <Instagram className="h-4 w-4" />
                @home.ctv
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gray-50 rounded-3xl p-8 mb-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Newsletter Exclusiva
          </h3>
          <p className="text-gray-600 mb-6">
            Receba dicas de marketing digital, tendências e insights exclusivos direto no seu email 📧
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu email profissional..."
              className="flex-1 px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-pink-400 transition-colors"
            />
            <button className="bg-pink-500 hover:bg-pink-600 px-8 py-3 rounded-full font-bold text-white transform hover:scale-105 transition-all duration-300 shadow-lg">
              Inscrever 🚀
            </button>
          </div>
        </div>

        {/* Rodapé final */}
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-500 flex items-center justify-center gap-2">
            Desenvolvido com <Heart className="h-4 w-4 text-pink-500" /> pela equipe Home CTV
          </p>
          <p className="text-gray-400 text-sm mt-2">
            © 2024 Home CTV - Marketing Digital. Todos os direitos reservados. Resultados garantidos! 📈
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

