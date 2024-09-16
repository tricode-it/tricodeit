import { ShoppingCart, CreditCard, Truck, BarChart, Headphones, Zap } from 'lucide-react'

export default function EcommerceInfo() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <header className="bg-gradient-to-r from-yellow-400 to-yellow-300 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 text-center">
            Potencia tu Negocio con
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 mt-2">
              Nuestras Soluciones de E-commerce
            </span>
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <p className="text-xl mb-12 text-center max-w-3xl mx-auto">
          Descubre cómo nuestras soluciones de comercio electrónico pueden transformar tu negocio en línea. 
          Ofrecemos una plataforma robusta y flexible que se adapta perfectamente a tus necesidades específicas.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <ShoppingCart className="h-8 w-8 text-yellow-500" />,
              title: "Tienda en línea personalizable",
              description: "Crea una tienda en línea única que refleje la identidad de tu marca y ofrezca una experiencia de compra excepcional."
            },
            {
              icon: <CreditCard className="h-8 w-8 text-yellow-500" />,
              title: "Procesamiento de pagos seguro",
              description: "Integración con múltiples pasarelas de pago para transacciones seguras y sin complicaciones."
            },
            {
              icon: <Truck className="h-8 w-8 text-yellow-500" />,
              title: "Gestión de inventario y envíos",
              description: "Herramientas avanzadas para gestionar tu inventario y opciones de envío de manera eficiente."
            },
            {
              icon: <BarChart className="h-8 w-8 text-yellow-500" />,
              title: "Análisis y reportes detallados",
              description: "Obtén información valiosa sobre el rendimiento de tu tienda con análisis y reportes detallados."
            },
            {
              icon: <Headphones className="h-8 w-8 text-yellow-500" />,
              title: "Soporte al cliente integrado",
              description: "Herramientas de atención al cliente para mantener a tus compradores satisfechos y fidelizados."
            },
            {
              icon: <Zap className="h-8 w-8 text-yellow-500" />,
              title: "Optimización para móviles",
              description: "Diseño responsivo que garantiza una experiencia de compra perfecta en todos los dispositivos."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold ml-2">{feature.title}</h3>
              </div>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-yellow-400 text-black py-2 px-4 rounded transform skew-x-[-15deg] hover:opacity-80 transition-opacity">
            Solicitar una demostración
          </button>
        </div>
      </main>
    </div>
  )
}