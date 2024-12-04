import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '56983786259'; // Reemplaza con tu número de teléfono
  const message = 'Hola, me gustaria saber más.'; // Mensaje por defecto
  const encodedMessage = encodeURIComponent(message); // Codifica el mensaje para la URL

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`} target="_blank" aria-label="Chat on WhatsApp">
        <div className="bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out">
          <FaWhatsapp className="text-white text-3xl" />
        </div>
      </Link>
    </div>
  );
};

export default WhatsAppButton;
