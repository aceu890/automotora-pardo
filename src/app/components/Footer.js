import React from "react";
import { FaTruckMoving } from "react-icons/fa"; // Camión moviéndose, una opción de la colección
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            {/* Ícono de camión */}
            <FaTruckMoving className="text-2xl" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Automotora Pardo
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="https://automotorapardo.cl/nosotros" className="hover:underline me-4 md:me-6">
                Nosotros
              </Link>
            </li>
            <li>
              <Link href="https://automotorapardo.cl/catalogo" className="hover:underline me-4 md:me-6">
                Catálogo
              </Link>
            </li>
            <li>
              <Link href="https://automotorapardo.cl/nosotros" className="hover:underline">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <Link href="#" className="hover:underline">
            Automotora Pardo™
          </Link>
          . Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};
