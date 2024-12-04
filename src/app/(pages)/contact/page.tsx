"use client";

// components/Contact.js
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Sección de Contacto */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mb-16"
        >
          {/* Información de Contacto */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Información de <span className="text-orange-400">Contacto</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Puedes contactarnos a través de los siguientes medios:
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Teléfono:</strong> +56 9 83786259
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Email:</strong> contacto@pardomotors.com
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Dirección:</strong> Calle Ficticia 123, Ciudad, País
            </p>
          </motion.div>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Contáctanos</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Si tienes alguna pregunta o necesitas más información, no dudes en
            ponerte en contacto con nosotros.
          </p>
        </motion.div>

        {/* Formulario de Contacto */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="bg-white py-10 shadow-md rounded-lg mb-16"
        >
          <form className="max-w-xl mx-auto">
            <div className="mb-4">
              <label
                className="block text-left text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                placeholder="Tu nombre"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-left text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                placeholder="Tu correo"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-left text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                placeholder="Tu mensaje"
                rows={4}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Enviar
              </button>
            </div>
          </form>
        </motion.div>

        {/* Mapa de Google */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Nuestra <span className="text-orange-400">Ubicación</span>
          </h2>
          <div className="flex justify-center items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d13279.950044298292!2d-71.22503218519523!3d-33.68338755777937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-33.620032699999996!2d-71.5958544!4m5!1s0x966300003f7690e5%3A0x582872cdf30d9dfe!2sMelipilla%2C%20Regi%C3%B3n%20Metropolitana!3m2!1d-33.6831873!2d-71.2234926!5e0!3m2!1ses!2scl!4v1728684949706!5m2!1ses!2scl"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Melipilla, Región Metropolitana"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
