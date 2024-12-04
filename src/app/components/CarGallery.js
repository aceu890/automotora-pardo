import Image from "next/image";
import Link from "next/link";

const cars = [
  {
    id: 1,
    image: "/images/camiones/1_camion/1.webp",
    brand: "Toyota",
    year: 2020,
    price: "$20,000",
  },
  {
    id: 2,
     image: "/images/camiones/2_camion/1.webp",
    brand: "Ford",
    year: 2019,
    price: "$18,500",
  },
  {
    id: 3,
     image: "/images/camiones/3_camion/1.webp",
    brand: "Honda",
    year: 2021,
    price: "$22,300",
  },
  {
    id: 4,
     image: "/images/camiones/4_camion/1.webp",
    brand: "Chevrolet",
    year: 2018,
    price: "$16,700",
  },
  {
    id: 5,
     image: "/images/camiones/5_camion/1.webp",
    brand: "Chevrolet",
    year: 2018,
    price: "$16,700",
  },
  {
    id: 6,
     image: "/images/camiones/6_camion/1.webp",
    brand: "Chevrolet",
    year: 2018,
    price: "$16,700",
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
              Ver Auto
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
