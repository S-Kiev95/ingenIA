import React from 'react';

const Terms = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Términos y Condiciones</h1>
        
        <div className="prose prose-purple">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Aceptación de los Términos</h2>
            <p className="text-gray-600">
              Al acceder y utilizar los servicios de IngenIA Labs, usted acepta estar sujeto a estos términos y condiciones.
              Nos reservamos el derecho de modificar estos términos en cualquier momento, siendo efectivos inmediatamente después de su publicación.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Servicios</h2>
            <p className="text-gray-600 mb-4">
              IngenIA Labs proporciona servicios de:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Desarrollo de software personalizado</li>
              <li>Soluciones de inteligencia artificial</li>
              <li>Marketing digital</li>
              <li>Consultoría tecnológica</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Propiedad Intelectual</h2>
            <p className="text-gray-600">
              Todo el contenido, código, metodologías y materiales desarrollados por IngenIA Labs son propiedad exclusiva de la empresa,
              a menos que se especifique lo contrario en un acuerdo por escrito.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Limitación de Responsabilidad</h2>
            <p className="text-gray-600">
              IngenIA Labs no será responsable por daños indirectos, incidentales o consecuentes que surjan del uso de nuestros servicios.
              Nuestra responsabilidad está limitada al monto pagado por los servicios específicos en cuestión.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Terminación</h2>
            <p className="text-gray-600">
              Nos reservamos el derecho de terminar o suspender el acceso a nuestros servicios en cualquier momento,
              por cualquier razón, sin previo aviso.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;