import React from 'react';

const Privacy = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Política de Privacidad</h1>
        
        <div className="prose prose-purple">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Información que Recopilamos</h2>
            <p className="text-gray-600 mb-4">
              En IngenIA Labs, recopilamos información que nos ayuda a proporcionar y mejorar nuestros servicios. Esta información puede incluir:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Información de contacto (nombre, email, teléfono)</li>
              <li>Información de uso de nuestros servicios</li>
              <li>Datos técnicos de dispositivos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Uso de la Información</h2>
            <p className="text-gray-600 mb-4">
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Proporcionar y mantener nuestros servicios</li>
              <li>Mejorar y personalizar la experiencia del usuario</li>
              <li>Comunicarnos con nuestros usuarios</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Protección de Datos</h2>
            <p className="text-gray-600">
              Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal. 
              Estas medidas incluyen encriptación de datos, acceso restringido y monitoreo regular de nuestros sistemas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Sus Derechos</h2>
            <p className="text-gray-600 mb-4">
              Usted tiene derecho a:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Acceder a sus datos personales</li>
              <li>Rectificar información inexacta</li>
              <li>Solicitar la eliminación de sus datos</li>
              <li>Oponerse al procesamiento de sus datos</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;