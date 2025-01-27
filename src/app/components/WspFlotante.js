import Link from 'next/link';
import Image from 'next/image';

const WspFlotante = ({ 
  phoneNumber = '0000000000', 
  message = '¡Hola! Me gustaría saber más sobre los productos.', 
  buttonStyles, // Lo hacemos opcional eliminando el valor por defecto
  iconStyles = 'w-8 h-8', 
  iconName = 'wsp' 
}) => {
  const encodedMessage = encodeURIComponent(message); // Codifica el mensaje para la URL

  // Ruta de los íconos SVG según el nombre pasado
  const iconUrl = `/images/${iconName}.svg`;

  return (
    <Link href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`} target="_blank" aria-label="Contact">
      <div
        className={`fixed bottom-4 right-4 z-50 p-3 transition duration-300 ease-in-out ${
          buttonStyles || 'bg-gray-500 hover:bg-gray-600'
        }`}
      >
        {/* Usamos el componente Image de Next.js para cargar el SVG */}
        <Image 
          src={iconUrl} 
          alt="Red social" 
          className={`${iconStyles} transition-transform duration-300 ease-in-out hover:scale-125`} 
          width={32}  // Ajusta el tamaño que prefieras
          height={32} // Ajusta el tamaño que prefieras
        />
      </div>
    </Link>
  );
};

export default WspFlotante;
