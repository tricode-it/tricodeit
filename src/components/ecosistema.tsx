'use client'

import { useEffect, useRef } from 'react'

export default function Ecosistema() {
  const outerCirclesCount = 8
  const baseRadius = 150
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      for (let i = 0; i < outerCirclesCount; i++) {
        const angle = (i / outerCirclesCount) * 2 * Math.PI
        const radiusVariation = Math.sin(Date.now() * 0.001 + i) * 20
        const x = Math.cos(angle) * (baseRadius + radiusVariation) + 200
        const y = Math.sin(angle) * (baseRadius + radiusVariation) + 200

        ctx.beginPath()
        ctx.moveTo(200, 200)
        ctx.lineTo(x, y)
        ctx.strokeStyle = '#FDE68A'
        ctx.lineWidth = 2
        ctx.stroke()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="flex flex-col px-10 space-y-10 m-auto my-28  md:flex-row items-center justify-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4 text-yellow-400">Integración perfecta con tu tecnología</h1>
        <p className="text-xl mb-6 text-gray-800">
        Nuestro sistema está diseñado para adaptarse a más de 100 herramientas y plataformas, garantizando una sincronización eficiente con tu stack tecnológico preferido. Deja que nuestro ecosistema impulse tu ecommerce, optimizando cada aspecto de tu tienda para que sea más eficiente y fácil de gestionar.
        </p>
        <button className="bg-yellow-300 text-black px-6 py-2 rounded-full hover:bg-yellow-400 transition-colors">
          Explore nuestro ecosistema
        </button>
      </div>
      <div className="">
        <div className="w-[400px] h-[400px] relative">
          <canvas ref={canvasRef} width={400} height={400} className="absolute top-0 left-0" />
          
          {/* Central circle */}
          <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center shadow-lg transform -translate-x-1/2 -translate-y-1/2 z-10">
            <span className="text-4xl font-bold text-yellow-600"><img className='p-2' src="/logotricode.png" alt="LogoTricode" /></span>
          </div>
          
          {/* Outer circles */}
          {Array.from({ length: outerCirclesCount }).map((_, index) => {
            const angle = (index / outerCirclesCount) * 2 * Math.PI
            const radiusVariation = Math.sin(index) * 1
            const x = Math.cos(angle) * (baseRadius + radiusVariation) + 200
            const y = Math.sin(angle) * (baseRadius + radiusVariation) + 200
            
            return (
              <div 
                key={index}
                className="absolute w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                style={{
                  top: `${y}px`,
                  left: `${x}px`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <span className="text-3xl font-bold text-yellow-400">.</span>
                
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}