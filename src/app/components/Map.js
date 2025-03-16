"use client";

import { motion } from "framer-motion";

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13279.950044298292!2d-71.209750!3d-33.675500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQwJzMxLjgiUyA3McKwMTInMzUuMSJX!5e0!3m2!1ses!2scl!4v1728684949706!5m2!1ses!2scl"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación personalizada"
        />
      </div>
    </motion.div>
  );
};

export default Map;
