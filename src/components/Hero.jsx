import React from 'react'

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-pink-50 pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          
          {/* Left Side - Geometric Shape with Labels */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Main Pink Semi-Circle */}
              <div className="w-80 h-80 bg-pink-500 rounded-full relative shadow-2xl">
                
                {/* Design Label */}
                <div className="absolute -top-4 left-8 bg-white px-6 py-3 rounded-lg shadow-lg transform -rotate-3">
                  <span className="text-gray-800 font-semibold text-lg">design</span>
                </div>
                
                {/* Marketing Label */}
                <div className="absolute top-20 -right-8 bg-white px-6 py-3 rounded-lg shadow-lg transform rotate-2">
                  <span className="text-gray-800 font-semibold text-lg">marketing</span>
                </div>
                
                {/* Tráfego Pago Label */}
                <div className="absolute -bottom-6 left-4 bg-white px-6 py-3 rounded-lg shadow-lg transform -rotate-1">
                  <span className="text-gray-800 font-semibold text-lg">tráfego pago</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="space-y-8 text-center lg:text-left">
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
                Criamos o visual,
                <br />
                o conteúdo e a
                <br />
                estratégia
              </h1>
              
              <p className="text-xl lg:text-2xl text-pink-500 font-medium">
                para o seu negócio
                <br />
                crescer de verdade.
              </p>
            </div>
            
            {/* Call to Action Section */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                {/* WhatsApp Button */}
                <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                  WhatsApp
                </button>
                
                {/* Question Text */}
                <p className="text-gray-600 text-lg">
                  Do que seu negócio
                  <br />
                  precisa hoje?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

