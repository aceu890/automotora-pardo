
export default function WatchVideo() {
  return (
    <section className="bg-gray-100 py-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
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
        <div className="relative w-full h-80 md:h-auto overflow-hidden rounded-lg shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/aNT4paSCTE8?si=TNcddUNGHKWH50j7"
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


