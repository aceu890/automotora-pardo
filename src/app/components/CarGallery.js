import Image from "next/image";
import Link from "next/link";

const cars = [
  {
    id: 1,
    image: "/images/camiones/1_camion/1.jpeg",
    brand: "HINO ZXU",
    year: 2014,
    price: "$16.500.000",
  },
  {
    id: 2,
     image: "/images/camiones/2_camion/1.jpg",
    brand: "Volkswagen Constellation",
    year: 2017,
    price: "$45,000.000",
  },
  {
    id: 3,
     image: "/images/camiones/3_camion/1.jpg",
    brand: "Freightliner Cascadia",
    year: 2018,
    price: "$47.000.000",
  }, 
];

export default function CarGallery() {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 cursor-pointer">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            {/* Ruta dinámica para cada auto */}
            <Link href={`/car/${car.id}`} className="relative overflow-hidden flex-grow">
              <Image
                src={car.image}
                alt={`${car.brand} ${car.year}`}
                layout="responsive"
                width={400}
                height={300}
                className="transition-transform duration-300 ease-in-out transform hover:scale-110 object-cover"
              />
            </Link>
            <div className="p-4 flex justify-between items-center flex-grow-0">
              <div className="flex flex-col">
                <h2 className="text-xl font-bold">{car.brand}</h2>
                <p className="text-gray-600">{car.year}</p>
              </div>
              <p className="text-red-500 font-semibold text-2xl">{car.price}</p>
            </div>
            <Link
              href={`/car/${car.id}`}
              className="bg-gray-800 text-white text-center py-2 px-4 rounded hover:bg-orange-600 transition w-full font-bold"
            >
              ver más
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
