import type { Metadata } from "next";
import "./globals.css";
// import SwiperComponent from "./components/SwiperComponent";
import CarGallery from "./components/CarGallery";
import WatchVideo from "./components/WatchVideo";
import WspSection from "./components/WspSection";
import WspFlotante from "./components/WspFlotante";
import TruckCard from "./components/TruckCard.js";

import Hero from "./components/hero";
import ViewAllButton from "./components/ViewAllButton";

export const metadata: Metadata = {
  title: "Pardo Motors - Venta de Vehículos en Melipilla, Chile",
  description: "Pardo Motors es tu opción confiable en la compra y venta de vehículos en Melipilla, Chile. Especializados en camiones y autos de calidad, ofrecemos remates y una experiencia de compra única. Con precios competitivos y atención personalizada, facilitamos la adquisición de vehículos adaptados a tus necesidades y presupuesto. Descubre nuestras ofertas y contáctanos hoy para más información. ¡Tu satisfacción es nuestra prioridad!",
  keywords: "venta de vehículos, compra de camiones, remates en Melipilla, financiamiento de autos, autos en Chile, compra venta de vehiculos, ciudad melipilla, san antonio, santiago, pardo motors"
};
export default function Home() {
  // Definición de imágenes, ahora en el ámbito del servidor
  // const images = [
  //   { src: "/images/autos.png", alt: "Autos" },
  //   { src: "/images/pickups.png", alt: "Pickups" },
  //   { src: "/images/camiones.png", alt: "Camiones" },
  //   { src: "/images/vans.png", alt: "Vans" },
  //   { src: "/images/motos.png", alt: "Motos" },
  // ];

  return (
    <main className="overflow-x-hidden bg-gray-100">
      {/* <h1 className="text-3xl md:text-4xl font-bold text-center my-8">
        Automotora<span className="text-orange-500"> Pardo</span>
      </h1> */}
      <Hero />
    
    <TruckCard />

      {/* <div className="w-full flex justify-center items-center">
        <SwiperComponent
          images={images}
          spaceBetween={15}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="w-full"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        />
      </div> */}

      <h1 className="text-3xl md:text-4xl font-bold text-center my-5">
        Más <span className="text-orange-500">vistos</span>
      </h1>

      {/* WspFlotante puede necesitar ser Client Component si tiene interacción */}
      <WspFlotante />

      <div>
        <CarGallery />
        <ViewAllButton buttonText="Ver Todo" linkUrl="http://localhost:3000/catalogo" />
      </div>

      <div>
        <WatchVideo />
      </div>

      <div>
        <WspSection />
      </div>
    </main>
  );
}
