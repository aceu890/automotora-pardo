import Image from "next/image";
import Link from "next/link"; 

const trucks = [
  {
    id: 1,
    image: "/images/camiones/1_camion/1.jpeg",
    price: "$16.500.000",
    features: ["Marca: hino zxu", "Año: 2014", "6 velocidades"],
    detailsUrl: "https://automotorapardo.cl/car/1", 
  },
  {
    id: 2,
    image: "/images/camiones/2_camion/1.jpg",
    price: "$45.000.000",
    features: ["Volkswagen Constellation", "Año: 2017", "13 velocidades"],
    detailsUrl: "https://automotorapardo.cl/car/2", 
  },
  {
    id: 3,
    image: "/images/camiones/3_camion/1.jpg",
    price: "$46.000.000",
    features: [" Freightliner Cascadia", "Año: 2018", "18 velocidades"],
    detailsUrl: "https://automotorapardo.cl/car/3", 
  },
  
 
];

export default function TruckCard() {
  return (
    <div className="w-full py-5 px-4 flex flex-wrap justify-center gap-6 bg-gray-100">
      {trucks.map((truck) => (
        <div 
          key={truck.id} 
          className="w-full max-w-lg bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
        >
          {/* Imagen del camión */}
          <div className="relative h-64 sm:h-72 md:h-80">
            <Image
              src={truck.image}
              alt={`Camión con ${truck.features[0]}`}
              fill
              className="rounded-t-2xl object-cover"
              priority
            />
          </div>

          {/* Contenido de la tarjeta */}
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{truck.price}</h2>
            <ul className="space-y-3">
              {truck.features.map((feature, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
<li key={index} className="text-lg text-gray-600 flex items-center gap-3">
                  <span className="w-3 h-3 bg-green-500 rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>

            {truck.detailsUrl ? (
              <Link
                href={truck.detailsUrl}
                className="mt-6 block text-center bg-red-500 text-white text-lg font-medium py-3 px-6 rounded-lg hover:bg-red-600 transition"
                title={`Ver más detalles sobre el camión con ${truck.features[0]}`}
              >
                Más detalles
              </Link>
            ) : (
              <p className="mt-6 text-base text-gray-500">Detalles no disponibles</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
