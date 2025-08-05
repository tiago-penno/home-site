import React from 'react'

const SubServiceCard = ({ 
  icon: IconComponent, 
  title, 
  description 
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-100 rounded-lg group-hover:bg-pink-500 transition-all duration-300">
            <IconComponent className="h-6 w-6 text-pink-500 group-hover:text-white transition-all duration-300" />
          </div>
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-pink-600 transition-all duration-300">
            {title}
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SubServiceCard

