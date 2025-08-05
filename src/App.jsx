import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicesPage from './components/ServicesPage'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <ServicesPage />
      case 'home':
      default:
        return <Hero />
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  )
}

export default App
