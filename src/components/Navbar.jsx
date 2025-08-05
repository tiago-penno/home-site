import React from 'react'

const Navbar = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            onClick={() => setCurrentPage('home')}
            className="text-2xl font-bold text-pink-500 italic cursor-pointer hover:text-pink-600 transition-colors duration-300"
          >
            home
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => setCurrentPage('services')}
              className={`font-medium transition-colors duration-300 ${
                currentPage === 'services' 
                  ? 'text-pink-500' 
                  : 'text-gray-700 hover:text-pink-500'
              }`}
            >
              Serviços
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-700 hover:text-pink-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

