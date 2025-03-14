import type { Metadata } from "next";
import "./globals.css";
import BlogGallery from "./components/BlogGallery";
// import SwiperComponent from "./components/SwiperComponent";
// import CarGallery from "./components/CarGallery";
import WatchVideo from "./components/WatchVideo";
// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
import Map from "./components/Map";
import WspFlotante from "./components/WspFlotante";

import TruckCard from "./components/TruckCard";

import Hero from "./components/hero";
// import ViewAllButton from "./components/ViewAllButton";

export const metadata: Metadata = {
  title: "Pardo Motors - Venta de Vehículos en Melipilla, Chile",
  description:
    "Pardo Motors es tu opción confiable en la compra y venta de vehículos en Melipilla, Chile. Especializados en camiones y autos de calidad, ofrecemos remates y una experiencia de compra única. Con precios competitivos y atención personalizada, facilitamos la adquisición de vehículos adaptados a tus necesidades y presupuesto. Descubre nuestras ofertas y contáctanos hoy para más información. ¡Tu satisfacción es nuestra prioridad!",
  keywords:
    "venta de vehículos, compra de camiones, remates en Melipilla, financiamiento de autos, autos en Chile, compra venta de vehiculos, ciudad melipilla, san antonio, santiago, pardo motors",
};

// TODO: BLOGS
const blogs = [
  {
    id: 1,
    title: "Lo que debes saber de la industria",
    description: "En este blog, exploramos los aspectos más importantes de la industria, brindando una visión general sobre sus principales desafíos, oportunidades y tendencias. Descubre lo que debes saber para comprender mejor este sector en constante evolución",
    image: "/images/blog/1_blog.webp",
    slug: "primer-blog",
  },
  {
    id: 2,
    title: "!Encuentra el Camión ideal!",
    description: "Descubre el camión perfecto para tus necesidades con nuestra selección de opciones y consejos.",
    image: "/images/blog/2_blog.webp",
    slug: "segundo-blog",
  },
  {
    id: 3,
    title: "Como empezar un negocio de venta de vehículos",
    description: "Guía práctica para iniciar tu propio negocio de venta de vehículos, desde la planificación hasta la estrategia de ventas.",
    image: "/images/blog/3_blog.webp",
    slug: "tercer-blog",
  },
];



export default function Home() {
  return (
    <main className="overflow-x-hidden bg-gray-100">
      <Hero />
      <TruckCard />
      {/* Contenedor para los iconos flotantes */}

      {/* Botón flotante con el ícono de WhatsApp */}
      <WspFlotante
        phoneNumber="56983786259"
        message="¡Hola! Me gustaría saber más sobre un camión"
        buttonStyles="fixed right-4 bottom-80"
        iconStyles="w-12 h-12"
        iconName="wsp"
      />

      <WspFlotante
        phoneNumber="56985467687"
        message="¡Hola! Tengo una consulta sobre la oferta."
        buttonStyles="fixed right-4 bottom-60"
        iconStyles="w-12 h-12"
        iconName="ig"
        url="https://www.instagram.com/auto_pardotruck/"
      />

      <WspFlotante
        phoneNumber="1234567890"
        message="¡Hola! Quisiera obtener más información sobre tu página."
        buttonStyles="fixed right-4 bottom-40"
        iconStyles="w-12 h-12"
        iconName="face"
        url="https://www.facebook.com/Auto.pardo.cl/"
      />

      <div>
        <BlogGallery blogs={blogs} />
      </div>

      {/* <WspFlotante
        phoneNumber="0987654321"
        message="¡Hola! Quiero saber más sobre tus videos."
        buttonStyles="fixed right-4 bottom-20"
        iconStyles="w-8 h-8"
        iconName="tt"
      /> */}

      {/* TODO: CAR GALLERY */}
      {/* <div>
        <CarGallery />
        <ViewAllButton
          buttonText="Ver Todo"
          linkUrl="http://localhost:3000/catalogo"
        />
      </div> */}

      <div>
        <WatchVideo />
      </div>

      <div className="flex items-center justify-center p-5">
        {/* <WspSection /> */}
        <Map />
      </div>
    </main>
  );
}
