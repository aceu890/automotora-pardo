import Link from 'next/link';
import Image from 'next/image';

const WspFlotante = ({ 
  phoneNumber = '0000000000', 
  message = '¡Hola! Me gustaría saber más sobre los productos.', 
  url = '', // Nueva prop para la URL de redirección
  buttonStyles, 
  iconStyles = 'w-8 h-8', 
  iconName = 'wsp' 
}) => {
  const encodedMessage = encodeURIComponent(message);  
  const linkUrl = url || `https://wa.me/${phoneNumber}?text=${encodedMessage}`; // Usa la URL si existe, de lo contrario, WhatsApp

  const iconUrl = `/images/${iconName}.svg`;

  return (
    <Link href={linkUrl} target="_blank" aria-label="Contact">
      <div
        className={`fixed bottom-4 right-4 z-50 p-3 transition duration-300 ease-in-out ${
          buttonStyles || 'bg-gray-500 hover:bg-gray-600'
        }`}
      >
        <Image 
          src={iconUrl} 
          alt="Red social" 
          className={`${iconStyles} transition-transform duration-300 ease-in-out hover:scale-125`} 
          width={32}  
          height={32} 
        />
      </div>
    </Link>
  );
};

export default WspFlotante;
