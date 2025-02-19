import React from 'react';
import { 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Mail, 
  FileSpreadsheet, 
  FileText,
  HardDrive,
  Brain,
  Code,
  Rocket,
  ChevronRight
} from 'lucide-react';
import NetworkAnimation from '../components/NetworkAnimation';

const Home = () => {
  const services = [
    { icon: <Brain className="w-12 h-12 text-purple-600" />, name: 'AI Solutions', description: 'Soluciones inteligentes para tu negocio' },
    { icon: <Code className="w-12 h-12 text-purple-600" />, name: 'Desarrollo', description: 'Software a medida con las últimas tecnologías' },
    { icon: <Rocket className="w-12 h-12 text-purple-600" />, name: 'Marketing', description: 'Estrategias digitales que impulsan tu crecimiento' }
  ];

  const integrations = [
    { 
      icon: <Instagram className="w-8 h-8 text-pink-600 group-hover:text-pink-700 transition-colors" />, 
      name: 'Instagram',
      color: 'bg-gradient-to-br from-pink-500 to-purple-600'
    },
    { 
      icon: <Facebook className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors" />, 
      name: 'Facebook',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    { 
      icon: <MessageCircle className="w-8 h-8 text-green-600 group-hover:text-green-700 transition-colors" />, 
      name: 'WhatsApp',
      color: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    { 
      icon: <Mail className="w-8 h-8 text-red-600 group-hover:text-red-700 transition-colors" />, 
      name: 'Gmail',
      color: 'bg-gradient-to-br from-red-500 to-red-600'
    },
    { 
      icon: <FileSpreadsheet className="w-8 h-8 text-emerald-600 group-hover:text-emerald-700 transition-colors" />, 
      name: 'Sheets',
      color: 'bg-gradient-to-br from-emerald-500 to-emerald-600'
    },
    { 
      icon: <FileText className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors" />, 
      name: 'Docs',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    { 
      icon: <HardDrive className="w-8 h-8 text-yellow-600 group-hover:text-yellow-700 transition-colors" />, 
      name: 'Drive',
      color: 'bg-gradient-to-br from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')] opacity-10 bg-cover bg-center" />
        <NetworkAnimation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Transformamos tu negocio con IA
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Marketing inteligente y desarrollo de software potenciado por IA
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-500 hover:bg-purple-400 transition-colors duration-300 shadow-lg hover:shadow-xl md:text-lg"
            >
              Comienza ahora
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-50 p-4 rounded-full mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.name}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Integraciones</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {integrations.map((integration, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden"
              >
                <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative z-10">
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl ${integration.color}`}></div>
                  {integration.icon}
                  <span className="mt-3 font-medium text-gray-800">{integration.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para transformar tu negocio?</h2>
          <p className="text-xl mb-10 text-purple-100">Contáctanos hoy y descubre cómo podemos ayudarte</p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-purple-600 transition-colors duration-300 md:text-lg"
          >
            Contactar
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;