import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../App.css'

const InteractiveElements = () => {
  const [clickCount, setClickCount] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Rastrear posição do mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Função para criar confetti
  const triggerConfetti = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 2000)
  }

  // Elementos interativos flutuantes
  const floatingElements = [
    { emoji: '🎪', x: 10, y: 20, delay: 0 },
    { emoji: '🎭', x: 85, y: 15, delay: 0.5 },
    { emoji: '🎨', x: 15, y: 70, delay: 1 },
    { emoji: '🎬', x: 80, y: 75, delay: 1.5 },
    { emoji: '🎵', x: 50, y: 10, delay: 2 },
    { emoji: '🎯', x: 90, y: 50, delay: 2.5 }
  ]

  return (
    <>
      {/* Cursor personalizado */}
      <motion.div
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full bg-pink-500 rounded-full opacity-70"></div>
      </motion.div>

      {/* Elementos flutuantes interativos */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute text-4xl cursor-pointer pointer-events-auto"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ 
              scale: 1, 
              rotate: 0,
              y: [-10, 10, -10],
            }}
            transition={{
              delay: element.delay,
              duration: 0.8,
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            whileHover={{ 
              scale: 1.5, 
              rotate: 360,
              transition: { duration: 0.3 }
            }}
            onClick={() => {
              setClickCount(prev => prev + 1)
              if (clickCount > 0 && clickCount % 3 === 0) {
                triggerConfetti()
              }
            }}
          >
            {element.emoji}
          </motion.div>
        ))}
      </div>

      {/* Contador de cliques */}
      <AnimatePresence>
        {clickCount > 0 && (
          <motion.div
            className="fixed top-4 right-4 z-20 bg-pink-500 text-white px-4 py-2 rounded-full font-bold"
            initial={{ scale: 0, y: -50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: -50 }}
          >
            Cliques: {clickCount} 🎉
          </motion.div>
        )}
      </AnimatePresence>

      {/* Efeito confetti */}
      <AnimatePresence>
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-30">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  backgroundColor: ['#ff0080', '#ff1493', '#ff69b4', '#ffc0cb'][i % 4],
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{ scale: 0, y: -100 }}
                animate={{ 
                  scale: [0, 1, 0], 
                  y: [0, 200, 400],
                  x: [0, Math.random() * 200 - 100],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.02,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Botão de surpresa */}
      <motion.button
        className="fixed bottom-8 left-8 z-20 bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 rounded-full shadow-lg home-ctv-hover-scale"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={triggerConfetti}
        animate={{
          boxShadow: [
            "0 0 20px rgba(255, 0, 128, 0.3)",
            "0 0 40px rgba(255, 0, 128, 0.6)",
            "0 0 20px rgba(255, 0, 128, 0.3)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        ✨ Surpresa!
      </motion.button>

      {/* Ondas de energia */}
      <div className="fixed inset-0 pointer-events-none z-5">
        <motion.div
          className="absolute inset-0 border-4 border-pink-300/20 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
        <motion.div
          className="absolute inset-0 border-4 border-purple-300/20 rounded-full"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.3, 0, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>
    </>
  )
}

export default InteractiveElements

