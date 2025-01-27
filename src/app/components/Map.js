"use client";

import { motion } from "framer-motion";

const Map = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="mb-16"
    >
      <h2 className="text-4xl text-center font-bold text-gray-800 mb-8">
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
  );
};

export default Map;
