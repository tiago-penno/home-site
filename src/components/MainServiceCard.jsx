import React from 'react'

const MainServiceCard = ({ 
  icon: IconComponent, 
  title, 
  description, 
  isActive, 
  onClick 
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white rounded-2xl p-8 shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-105
        ${isActive ? 'opacity-100 ring-2 ring-pink-500 shadow-xl' : 'opacity-60 hover:opacity-80'}
      `}
    >
      <div className="text-center">
        <div className={`
          inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-all duration-300
          ${isActive ? 'bg-pink-500 text-white' : 'bg-pink-100 text-pink-500'}
        `}>
          <IconComponent className="h-8 w-8" />
        </div>
        <h3 className={`
          text-2xl font-bold mb-4 transition-all duration-300
          ${isActive ? 'text-gray-800' : 'text-gray-600'}
        `}>
          {title}
        </h3>
        <p className={`
          leading-relaxed transition-all duration-300
          ${isActive ? 'text-gray-600' : 'text-gray-500'}
        `}>
          {description}
        </p>
      </div>
    </div>
  )
}

export default MainServiceCard

