// components/ContactSection.js

import Image from 'next/image';
import whatsappLogo from '../../../public/whatsapp-logo.png'; // Asegúrate de tener el logo de WhatsApp en esta ruta

const WspSection = () => {
  const phoneNumber = '56985467687'; // Reemplaza con tu número de teléfono
  const message = '¡Hola! Me gustaría obtener más información.';

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">¿Tienes preguntas?</h2>
      <p className="text-lg mb-6 text-center">Contáctame por WhatsApp y estaré encantado de ayudarte.</p>
      <Image src={whatsappLogo} alt="WhatsApp Logo" width={64} height={64} className="mb-4" />
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-green-600"
      >
        Contactar por WhatsApp
      </a>
    </div>
  );
};

export default WspSection;
