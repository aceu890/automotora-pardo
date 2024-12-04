import Image from "next/image";
import { useRouter } from "next/router";

const CarDetail = ({ car }) => {
  const router = useRouter();

  // Si aún no se ha generado la página
  if (router.isFallback) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{car.brand} {car.year}</h1>
      <Image
          src={car.image}
          alt={`${car.brand} ${car.year}`}
          width={800} // Anchura sugerida
          height={600} // Altura sugerida
          className="rounded-lg shadow-lg object-cover"
          priority // Carga prioritaria de la imagen
        />
      <p className="mt-4 text-lg">Precio: <span className="font-semibold">{car.price}</span></p>
    </div>
  );
};

// Obtén los datos del auto según su `id`
export async function getStaticProps({ params }) {
  const cars = [
    { id: 1, image: "/images/gallery_1.jpg", brand: "Toyota", year: 2020, price: "$20,000" },
    { id: 2, image: "/images/gallery_2.jpg", brand: "Ford", year: 2019, price: "$18,500" },
    { id: 3, image: "/images/gallery_3.jpg", brand: "Honda", year: 2021, price: "$22,300" },
    { id: 4, image: "/images/gallery_4.jpg", brand: "Chevrolet", year: 2018, price: "$16,700" },
  ];

  const car = cars.find((car) => car.id === Number.parseInt(params.id));

  if (!car) {
    return {
      notFound: true,
    };
  }

  return {
    props: { car },
  };
}

// Genera las rutas estáticas para cada auto
export async function getStaticPaths() {
  const cars = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ];

  const paths = cars.map((car) => ({
    params: { id: car.id.toString() },
  }));

  return {
    paths,
    fallback: true, // Generar páginas dinámicas si es necesario
  };
}

export default CarDetail;
