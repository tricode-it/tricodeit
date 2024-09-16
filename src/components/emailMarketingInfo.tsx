import { Mail, Users, BarChart3, Clock, Target, Zap } from 'lucide-react'

export default function EmailMarketingInfo() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <header className="bg-gradient-to-r from-yellow-400 to-yellow-300 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 text-center">
            Impulsa tus Ventas con
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 mt-2">
              Nuestras Soluciones de Email Marketing
            </span>
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <p className="text-xl mb-12 text-center max-w-3xl mx-auto">
          Descubre cómo nuestras soluciones de email marketing pueden transformar tu estrategia de comunicación digital. 
          Ofrecemos herramientas potentes y flexibles que se adaptan perfectamente a las necesidades de tu negocio.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Mail className="h-8 w-8 text-yellow-500" />,
              title: "Plantillas personalizables",
              description: "Crea emails atractivos con nuestras plantillas fácilmente personalizables que reflejan la identidad de tu marca."
            },
            {
              icon: <Users className="h-8 w-8 text-yellow-500" />,
              title: "Segmentación avanzada",
              description: "Divide tu audiencia en segmentos específicos para enviar mensajes más relevantes y aumentar las tasas de conversión."
            },
            {
              icon: <BarChart3 className="h-8 w-8 text-yellow-500" />,
              title: "Análisis detallado",
              description: "Obtén insights valiosos con nuestros informes detallados sobre el rendimiento de tus campañas de email."
            },
            {
              icon: <Clock className="h-8 w-8 text-yellow-500" />,
              title: "Automatización de campañas",
              description: "Configura secuencias de emails automáticos basados en el comportamiento y las acciones de tus suscriptores."
            },
            {
              icon: <Target className="h-8 w-8 text-yellow-500" />,
              title: "Tests A/B",
              description: "Optimiza tus campañas con pruebas A/B para determinar qué contenido y diseño funcionan mejor con tu audiencia."
            },
            {
              icon: <Zap className="h-8 w-8 text-yellow-500" />,
              title: "Integración con CRM",
              description: "Sincroniza tus datos de clientes con nuestro sistema para una gestión de contactos más eficiente y personalizada."
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