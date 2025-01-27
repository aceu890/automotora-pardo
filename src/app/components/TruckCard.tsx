import Image from "next/image";
import Link from "next/link"; // Importamos el componente Link

const trucks = [
  {
    id: 1,
    image: "/images/camiones/1_camion/1.jpeg",
    price: "$16.500.000",
    features: ["Marca: hino zxu", "Año: 2014", "6 velocidades"],
    detailsUrl: "https://automotorapardo.cl/car/1", 
  },
  // {
  //   id: 2,
  //   image: "/images/camiones/2_camion/1.webp",
  //   price: "$28,500",
  //   features: ["Motor 6.7L", "Transmisión Automática", "Climatizador"],
  // },
  // {
  //   id: 3,
  //   image: "/images/camiones/3_camion/1.webp",
  //   price: "$22,000",
  //   features: ["Capacidad: 3 Toneladas", "Cámara de reversa", "Faros LED"],
  // },
  // {
  //   id: 4,
  //   image: "/images/camiones/4_camion/1.webp",
  //   price: "$35,000",
  //   features: ["Motor Híbrido", "Suspensión Reforzada", "Pantalla Táctil"],
  // },
  // {
  //   id: 5,
  //   image: "/images/camiones/5_camion/1.webp",
  //   price: "$26,700",
  //   features: ["Consumo eficiente", "Rines de Aluminio", "Frenos ABS"],
  // },
  // {
  //   id: 6,
  //   image: "/images/camiones/6_camion/1.webp",
  //   price: "$29,900",
  //   features: ["Cabina Doble", "Faros de Xenón", "Sonido Premium"],
  // },
];

export default function TruckCard() {
  return (
    <div className="w-full py-5 px-4 cursor-pointer flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
        {/* Imagen del camión */}
        <div className="relative h-64 sm:h-72 md:h-80">
          <Image
            src={trucks[0].image}
            alt={`Camión con ${trucks[0].features[0]}`}
            fill
            className="rounded-t-2xl object-cover"
            priority
          />
        </div>

        {/* Contenido de la tarjeta */}
        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{trucks[0].price}</h2>
          <ul className="space-y-3">
            {trucks[0].features.map((feature, index) => (
              <li key={index} className="text-lg text-gray-600 flex items-center gap-3">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                {feature}
              </li>
            ))}
          </ul>

          {trucks[0].detailsUrl ? (
            <Link
              href={trucks[0].detailsUrl}
              className="mt-6 block text-center bg-red-500 text-white text-lg font-medium py-3 px-6 rounded-lg hover:bg-red-600 transition"
              title={`Ver más detalles sobre el camión con ${trucks[0].features[0]}`}
            >
              Más detalles
            </Link>
          ) : (
            <p className="mt-6 text-base text-gray-500">Detalles no disponibles</p>
          )}
        </div>
      </div>
    </div>
  );
}

