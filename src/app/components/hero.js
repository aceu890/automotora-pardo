import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center text-white h-[70vh] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      <div className="bg-black bg-opacity-50 w-full h-full absolute"></div>
      <div className="relative text-center z-10 px-6">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          Automotora <span className="text-yellow-400">Pardo</span>
        </h1>
        <p className="text-lg lg:text-xl mb-8">
          Camiones Utilitarios y más...
        </p>
        <div className="flex flex-col lg:flex-row gap-4 justify-center">
          <Link href="https://automotorapardo.cl/catalogo">
            <button className="px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition">
              Ver Catálogo
            </button>
          </Link>
          <Link href="http://localhost:3000/contact">
            <button className="px-8 py-4 bg-white text-red-700 font-semibold rounded-lg hover:bg-gray-200 transition">
              Contáctanos
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
