import { ArrowRight, ShoppingCart, Mail } from 'lucide-react'

export default function MainSection() {
  return (
    <div className="bg-gray-900 rounded-se-[150px] rounded-br-[150px] px-10 md:px-32 text-white py-28">
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-yellow-400">
                Desarrollado para impulsar su negocio en línea
              </h2>
              <p className="text-lg">
                Nuestra plataforma de comercio electrónico está diseñada para adaptarse a su forma única de hacer negocios. Con herramientas intuitivas y personalizables, puede crear una tienda en línea que refleje la identidad de su marca y optimice las ventas.
              </p>
              <a href="#" className="inline-flex items-center text-yellow-400 hover:underline">
                Más información sobre nuestras soluciones de e-commerce
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <ShoppingCart className="h-48 w-48 text-yellow-400" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-yellow-400">
                Potencia tu marketing desde el primer día
              </h2>
              <p className="text-lg">
                Con nuestro sistema integrado de email marketing, puede conectar con sus clientes de forma efectiva desde el principio. Disfrute de herramientas avanzadas de segmentación, plantillas personalizables y análisis detallados para impulsar sus campañas.
              </p>
              <a href="#" className="inline-flex items-center text-yellow-400 hover:underline">
                Descubra cómo nuestro email marketing puede impulsar sus ventas
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Mail className="h-48 w-48 text-yellow-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}