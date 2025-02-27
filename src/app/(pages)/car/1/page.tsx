"use client";

import SwiperComponent from "@/app/components/SwiperComponent";
import Link from "next/link";
import { FaPlayCircle, FaDownload } from "react-icons/fa";

export default function IndividualCar() {
  const images = [
    { src: "/images/camiones/1_camion/1.jpeg", alt: "Autos" },
    { src: "/images/camiones/1_camion/2.jpeg", alt: "Autos" },
    { src: "/images/camiones/1_camion/3.jpeg", alt: "Autos" },
    { src: "/images/camiones/1_camion/4.jpeg", alt: "Autos" },
    { src: "/images/camiones/1_camion/5.jpeg", alt: "Autos" },
    { src: "/images/camiones/1_camion/6.jpeg", alt: "Autos" },
    { src: "/images/camiones/1_camion/7.jpeg", alt: "Autos" },
    { src: "/images/camiones/1_camion/8.jpeg", alt: "Autos" },
    { src: "/images/camiones/1_camion/9.jpeg", alt: "Autos" },
    { src: "/images/camiones/1_camion/10.jpeg", alt: "Autos" },
    { src: "/images/camiones/1_camion/11.jpeg", alt: "Autos" },
    { src: "/images/camiones/1_camion/12.jpeg", alt: "Autos" },
  ];

  const scrollToVideo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const videoSection = document.querySelector("#video");
    videoSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Título */}
      <h2 className="text-3xl font-bold text-center">
        <span className="text-red-500 uppercase">HINU</span> ZXU
      </h2>

      {/* Contenedor principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Slider e información básica */}
        <div className="space-y-6">
          <SwiperComponent
            images={images}
            spaceBetween={30}
            navigation={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="w-full"
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
          />
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600">$16.500.000</div>
            <Link
              className="mt-4 inline-flex items-center justify-center bg-orange-600 text-white px-4 py-3 rounded hover:bg-orange-500 transition"
              href={"#"}
              onClick={scrollToVideo}
            >
              <FaPlayCircle className="mr-2" />
              Conoce este auto
            </Link>
          </div>
        </div>

        {/* Descripción e información adicional */}
        <div className="space-y-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Descripción del Vehículo
            </h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>
                <strong>Chasis:</strong> Largo y en excelente estado de
                conservación.
              </li>
              <li>
                <strong>Caja de cambios:</strong> Manual de 6 velocidades.
              </li>
              <li>
                <strong>Motor:</strong> Equipado con turbo intercooler.
              </li>
              <li>
                <strong>Confort:</strong> Aire acondicionado incluido.
              </li>
              <li>
                <strong>Neumáticos:</strong> Al 100% de vida útil.
              </li>
              <li>
                <strong>Mantenciones:</strong> Recientes, incluyendo cambio de
                filtros.
              </li>
              <li>
                <strong>Carrocería:</strong> Dimensiones de 6,40m x 2,40m.
              </li>
              <li>
                <strong>Kilometraje:</strong> 230.000 km.
              </li>
              <li>
                <strong>Estado legal:</strong> Sin multas ni partes.
              </li>
              <li>
                <strong className="text-orange-500">Telefono:</strong>
                <strong>+569 83786259 +569 20165719</strong>
              </li>
            </ul>
          </div>

          {/* Detalles adicionales */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Año", value: "2014" },
              { label: "Tracción", value: "4x4" },
              { label: "Km", value: "230.000 km" },
              { label: "Combustible", value: "Gasolina" },
              { label: "Cilindrada", value: "Gasolina" },
              { label: "Transmisión", value: "Automática" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 bg-gray-100 rounded-lg text-center shadow"
              >
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="text-base font-bold">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Descargar PDF */}
          {/* <div className="text-center">
            <Link
              href="/cav.pdf"
              target="_blank"
              className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-500 transition"
            >
              <FaDownload className="mr-2" />
              Descargar CAV
            </Link>
          </div> */}
        </div>
      </div>

      {/* Video */}
      <div id="video" className="w-full h-[500px]">
        {" "}
        {/* Ajusta la altura a tu gusto */}
        <iframe
          className="w-full h-full rounded-lg shadow"
          src="https://www.youtube.com/embed/aNT4paSCTE8?si=OVN6F7IZi0Y8D8rZ"
          title="Video del vehículo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
