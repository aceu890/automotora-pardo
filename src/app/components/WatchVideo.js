
export default function WatchVideo() {
  return (
    <section className="bg-gray-100 py-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Miralo en Video</h2>
          <p className="text-lg text-gray-600 mb-6">
            Somos una empresa dedicada a la venta de automóviles y camiones de alta calidad. Nuestro
            equipo está comprometido con ofrecer la mejor experiencia a nuestros clientes, garantizando
            transparencia y confianza en cada transacción.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Con años de experiencia en el sector, nos destacamos por nuestro conocimiento técnico, asesoría
            especializada y servicio post-venta. Trabajamos arduamente para satisfacer todas las necesidades
            de nuestros clientes.
          </p>
        </div>
        <div className="relative w-full h-80 md:h-auto overflow-hidden rounded-lg shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/BaRtheYNNfo"
            title="Video de presentación"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
