'use client'

// components/AboutUs.js
import { motion } from 'framer-motion';
import Image from 'next/image';

// FIXME: EL SEO SOLO FUNCIONA EN UN SERVER COMPONENT
// export const metadata = {
//  title: 'Nosotros',
//  description: 'Explica en que consiste la empresa llamada pardo motors',
// };

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">

        {/* Sección Sobre Nosotros */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Image
              src="/images/nosotros.jpg"
              alt="Nuestro equipo"
              width={500}
              height={300}
              className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="text-left"
          >
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Sobre <span className='text-orange-400'>Nosotros</span></h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Somos una empresa dedicada a la compra y venta de automóviles, con
              años de experiencia en el mercado. Nuestro equipo está compuesto por
              expertos que se esfuerzan en ofrecer los mejores vehículos a nuestros
              clientes.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nos enorgullecemos de nuestra atención al cliente y buscamos siempre
              brindar un servicio transparente, con una amplia gama de vehículos
              de alta calidad.
            </p>
          </motion.div>
        </motion.div>

        {/* Sección Misión */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="bg-white py-16 shadow-md rounded-lg mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Nuestra <span className='text-orange-400'>Misión</span></h2>
          <p className="text-lg text-gray-600 leading-relaxed px-8">
            Nuestra misión es ofrecer a nuestros clientes vehículos de alta calidad
            a precios justos, asegurando un proceso de compra transparente y confiable.
            Nos comprometemos a brindar un servicio excelente y personalizado.
          </p>
        </motion.div>

        {/* Sección Visión */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="bg-gray-100 py-16 shadow-md rounded-lg mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Nuestra <span className='text-orange-400'>Visión</span></h2>
          <p className="text-lg text-gray-600 leading-relaxed px-8">
            Queremos ser líderes en el mercado automotriz, reconocidos por nuestra
            excelencia en la calidad de los vehículos y la transparencia de nuestro servicio.
            Aspiramos a ser una empresa que se adapte a las necesidades de nuestros clientes
            en un mundo en constante cambio.
          </p>
        </motion.div>

        {/* Sección Valores */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="bg-white py-16 shadow-md rounded-lg"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Nuestros <span className='text-orange-400'>Valores</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Transparencia</h3>
              <p className="text-lg text-gray-600">
                Nos regimos por la honestidad y claridad en cada transacción.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Calidad</h3>
              <p className="text-lg text-gray-600">
                Solo ofrecemos vehículos que cumplen con los más altos estándares de calidad.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Compromiso</h3>
              <p className="text-lg text-gray-600">
                Estamos comprometidos con la satisfacción de nuestros clientes en cada etapa.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
