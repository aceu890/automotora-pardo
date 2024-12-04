import { motion, AnimatePresence } from "framer-motion";
import { NavbarMenu } from "../../mockData/data";
import Link from "next/link";

interface ResponsiveMenuProps {
  open: boolean; // El tipo de 'open' debe ser booleano
  onClose: () => void; // Nueva función que se pasa como prop para cerrar el menú
}

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ open, onClose }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl cursor-pointer">
            <ul className="flex flex-col justify-center items-center gap-10">
              {/* Iteramos sobre NavbarMenu para crear el menú dinámico */}
              {NavbarMenu.map((item) => (
                <li
                  key={item.id}
                  className="w-full hover:bg-[hsl(0,78%,62%)] hover:scale-105 transition-all duration-300 px-4 py-2 rounded-lg text-center"
                  onClick={onClose} // Cierra el menú al hacer clic
                  onKeyUp={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      onClose(); // Cierra el menú al presionar Enter o Space
                    }
                  }}
                >
                  {/* Usamos Link de Next.js para la navegación */}
                  <Link href={item.link} onClick={onClose}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
