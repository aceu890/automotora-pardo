"use client";
import React, { useState } from "react";
import CarGallery from "@/app/components/CarGallery";
import Search from "@/app/components/Search";
// FIXME: import FilterSidebar from "../../components/FilterSidebar";
import { FiFilter } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Catalogo = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } },
  };

  return (
    <div>
      <Search onSearch={undefined} />
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* <div className="hidden md:flex items-center justify-center w-1/4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
          </motion.div>
        </div> */}

        {/* CarGallery */}
        <motion.div
          className="w-full md:w-3/4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CarGallery />
        </motion.div>

        {/* Icono de filtro para la vista móvil */}
        <motion.button
          type="button"
          className="fixed bottom-4 right-4 md:hidden p-2 bg-blue-500 text-white rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleModal}
        >
          Filtrar
          <div className="flex items-center justify-center">
            <FiFilter size={24} />
          </div>
        </motion.button>
      </div>

      {/* Modal de filtros */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            <div className="bg-white rounded-lg shadow-lg p-6 relative">
              <button
                type="button"
                className="absolute top-2 right-2 text-gray-600"
                onClick={toggleModal}
              >
                &times; {/* Icono de cierre */}
              </button>
              <h2 className="text-lg font-bold mb-4">Filtros</h2>
              {/* FIXME: <FilterSidebar /> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Catalogo;
