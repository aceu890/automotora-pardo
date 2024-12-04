"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Importa estilos de Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Módulos
import { Pagination, Navigation } from "swiper/modules";

const SwiperComponent = ({
  images,
  spaceBetween = 50,
  navigation = true,
  pagination = { clickable: true },
  scrollbar = { draggable: true },
  className = "w-[80%] mx-auto",
  breakpoints = {
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 3 },
  },
}) => {
  return (
    <div className=" relative w-[98%] mt-5">
      {/* Contenedor del Swiper */}
      <Swiper
        spaceBetween={spaceBetween}
        navigation={navigation}
        pagination={pagination}
        scrollbar={scrollbar}
        className={className} // Asegúrate de que el Swiper ocupe el 100%
        modules={[Pagination, Navigation]}
        breakpoints={breakpoints}
        style={{
          "--swiper-navigation-color": "#ffff",
          "--swiper-pagination-color": "#ffff",
          "--swiper-pagination-bottom": "30px",
        }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.src}>
            {" "}
            {/* Usa un identificador único aquí */}
            <div className="relative group cursor-pointer">
              <Image
                src={image.src}
                width={900}
                height={100}
                layout="responsive"
                className="rounded-lg"
                alt={image.alt}
              />
              <div className="absolute inset-0 bg-red-500 rounded-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
