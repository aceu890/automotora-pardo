import Image from "next/image";

const trucks = [
  {
    id: 1,
    image: "/images/camiones/1_camion/2.webp", 
    price: "$30,000",
    features: ["Motor V8", "Capacidad: 5 Toneladas", "4x4"],
  },
  {
    id: 2,
    image: "/images/camiones/2_camion/1.webp", 
    price: "$28,500",
    features: ["Motor 6.7L", "Transmisión Automática", "Climatizador"],
  },
  {
    id: 3,
    image: "/images/camiones/3_camion/1.webp", 
    price: "$22,000",
    features: ["Capacidad: 3 Toneladas", "Cámara de reversa", "Faros LED"],
  },
  {
    id: 4,
    image: "/images/camiones/4_camion/1.webp", 
    price: "$35,000",
    features: ["Motor Híbrido", "Suspensión Reforzada", "Pantalla Táctil"],
  },
  {
    id: 5,
    image: "/images/camiones/5_camion/1.webp", 
    price: "$26,700",
    features: ["Consumo eficiente", "Rines de Aluminio", "Frenos ABS"],
  },
  {
    id: 6,
    image: "/images/camiones/6_camion/1.webp", 

    price: "$29,900",
    features: ["Cabina Doble", "Faros de Xenón", "Sonido Premium"],
  },
];

export default function TruckGallery() {
  return (
    <div className="w-full py-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">Galería de Camiones</h1>
      <div className="flex overflow-x-auto space-x-6 px-4 scrollbar-hide">
        {trucks.map((truck) => (
          <div
            key={truck.id}
            className="min-w-[300px] bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl flex-shrink-0"
          >
            {/* Imagen del camión */}
            <div className="relative h-48">
              <Image
                src={truck.image}
                alt={`Camión ${truck.id}`}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>

            {/* Contenido de la tarjeta */}
            <div className="p-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{truck.price}</h2>
              <ul className="space-y-2">
                {truck.features.map((feature, index) => (
                  <li key={index} className="text-gray-600 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition">
                Más detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
