"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const BlogCamiones = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Título del blog */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Lo que debes saber de la industria en 2025
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            En 2025, la industria de venta de camiones enfrenta una creciente
            competencia y costos operativos elevados, lo que podría afectar la
            rentabilidad de las inversiones en este sector. INTERLINK FBC
            Además, se anticipa un aumento en las tarifas de transporte, con un
            pronóstico de incremento del 9% en el costo por milla para las
            furgonetas secas en comparación con 2024.
          </p>
        </motion.div>

        {/* Índice de navegación */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Índice</h2>
          <ul className="list-disc list-inside text-left">
            <li>
              <a
                href="#camiones-electricos"
                className="text-blue-600 hover:underline"
              >
                1. El Auge de los Camiones Eléctricos y de Hidrógeno
              </a>
            </li>
            <li>
              <a
                href="#camiones-autonomos"
                className="text-blue-600 hover:underline"
              >
                2. La Expansión del Mercado de Camiones Usados
              </a>
            </li>
            <li>
              <a
                href="#camiones-autonomos"
                className="text-blue-600 hover:underline"
              >
                3. Adaptación a la Digitalización y la Venta Online
              </a>
            </li>
            <li>
              <a
                href="#camiones-autonomos"
                className="text-blue-600 hover:underline"
              >
                4. Desafíos en la Escasez de Semiconductores y la Producción
              </a>
            </li>
            <li>
              <a
                href="#camiones-autonomos"
                className="text-blue-600 hover:underline"
              >
                5. El Impacto de las Regulaciones Ambientales
              </a>
            </li>
            <li>
              <a
                href="#camiones-autonomos"
                className="text-blue-600 hover:underline"
              >
                6. La Importancia de la Postventa
              </a>
            </li>
            <li>
              <a
                href="#camiones-autonomos"
                className="text-blue-600 hover:underline"
              >
               7. Conclusión
              </a>
            </li>
          </ul>
        </div>

        {/* Imagen destacada */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative w-full h-96 mb-8"
        >
          <Image
            src="/images/blog/1_blog.webp"
            alt="Camiones"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Contenido del blog */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          id="camiones-electricos"
          className="prose prose-lg text-gray-700 mb-16"
        >
          <h2 className="text-2xl font-bold mb-4">
            1. El Futuro de los Camiones Eléctricos
          </h2>
          <p className="text-justify">
          Uno de los cambios más notables en el mercado de los camiones es el crecimiento de la demanda de vehículos de carga más ecológicos. Los camiones eléctricos y de hidrógeno están ganando terreno como alternativas sostenibles frente a los tradicionales camiones diésel. Según informes, los camiones eléctricos no solo ayudan a las empresas a reducir su huella de carbono, sino que también pueden reducir los costos operativos a largo plazo al eliminar la necesidad de combustibles fósiles.
          </p><br />
          <p className="text-justify">
          La transición hacia estos vehículos más ecológicos representa una oportunidad clave para las empresas que venden camiones. Aquellas que se especialicen en ofrecer vehículos eléctricos o híbridos tendrán una ventaja competitiva al satisfacer las necesidades de las empresas que buscan cumplir con las normativas ambientales y mejorar su eficiencia operativa.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          id="camiones-autonomos"
          className="prose prose-lg text-gray-700 mb-16"
        >
          <h2 className="text-2xl font-bold mb-4">
          2. La Expansión del Mercado de Camiones Usados
          </h2>
          <p className="text-justify">
          El mercado de camiones usados está experimentando un crecimiento importante, impulsado por la necesidad de las pequeñas y medianas empresas de acceder a vehículos a precios más bajos. En 2025, se espera que este mercado continúe en expansión, ya que las empresas buscan vehículos en buen estado a precios más asequibles, sin sacrificar la calidad.
          </p><br />
          <p className="text-justify">
          Para los concesionarios, la venta de camiones usados representa una excelente oportunidad de negocio. Ofrecer garantías, programas de mantenimiento y financiamiento flexible para camiones usados puede atraer a más clientes, especialmente a aquellos que prefieren opciones más económicas sin comprometer la calidad.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          id="camiones-autonomos"
          className="prose prose-lg text-gray-700 mb-16"
        >
          <h2 className="text-2xl font-bold mb-4">
          3. Adaptación a la Digitalización y la Venta Online
          </h2>
          <p className="text-justify">
          La digitalización ha transformado numerosos sectores, y la venta de camiones no es la excepción. La venta en línea, la posibilidad de ver camiones en 3D y el uso de plataformas digitales para el financiamiento están cambiando la forma en que los concesionarios hacen negocios. Los consumidores buscan cada vez más la comodidad de comprar vehículos de forma remota, lo que ha impulsado a los concesionarios a mejorar sus sitios web y ofrecer herramientas interactivas para visualizar vehículos y calcular precios.
          </p><br />
          <p className="text-justify">
          El uso de tecnología de vanguardia, como simuladores de camiones y aplicaciones móviles que permiten a los clientes revisar características, precios y opciones de financiamiento, se está convirtiendo en una necesidad para seguir siendo competitivo en el mercado.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          id="camiones-autonomos"
          className="prose prose-lg text-gray-700 mb-16"
        >
          <h2 className="text-2xl font-bold mb-4">
          4. Desafíos en la Escasez de Semiconductores y la Producción
          </h2>
          <p className="text-justify">
          Aunque la demanda de camiones sigue siendo alta, los concesionarios deben lidiar con las interrupciones en la cadena de suministro debido a la escasez de semiconductores y otros componentes clave para la fabricación de vehículos. Esta situación ha provocado retrasos en la entrega de camiones nuevos, lo que afecta las ventas y obliga a los concesionarios a adaptar sus estrategias de inventario.
          </p><br />
          <p className="text-justify">
          Para mitigar estos desafíos, los concesionarios deben trabajar de cerca con los fabricantes y proveedores para asegurar una cadena de suministro estable. Además, ofrecer soluciones de financiamiento atractivas y un servicio al cliente excepcional puede ayudar a fidelizar a los compradores a pesar de los retrasos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          id="camiones-autonomos"
          className="prose prose-lg text-gray-700 mb-16"
        >
          <h2 className="text-2xl font-bold mb-4">
          5. El Impacto de las Regulaciones Ambientales
          </h2>
          <p className="text-justify">
          Las regulaciones medioambientales están desempeñando un papel cada vez más importante en el negocio de la venta de camiones. En 2025, se espera que los gobiernos de todo el mundo implementen normativas más estrictas en cuanto a las emisiones de los vehículos de carga. Esto obliga a los fabricantes y concesionarios a ofrecer vehículos que cumplan con estos estándares.
          </p><br />
          <p className="text-justify">
          A medida que las autoridades exigen vehículos más limpios, las empresas de ventas de camiones que puedan ofrecer soluciones ecológicas y cumplir con las regulaciones serán más atractivas para los clientes. Invertir en la venta de camiones eléctricos o híbridos, así como en vehículos que cuenten con la última tecnología en control de emisiones, será fundamental para mantenerse competitivo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          id="camiones-autonomos"
          className="prose prose-lg text-gray-700 mb-16"
        >
          <h2 className="text-2xl font-bold mb-4">
          6. La Importancia de la Postventa
          </h2>
          <p className="text-justify">
          El negocio de la venta de camiones no termina en la entrega del vehículo. Un área clave para el éxito a largo plazo es el servicio postventa, que incluye el mantenimiento, las reparaciones y el suministro de repuestos. Los concesionarios que puedan ofrecer un excelente servicio postventa, con opciones de financiamiento para reparaciones y mantenimiento, crearán relaciones duraderas con sus clientes.
          </p><br />
          <p className="text-justify">
          Además, el seguimiento constante a través de programas de fidelización y el asesoramiento personalizado también pueden ayudar a incrementar la satisfacción del cliente y fomentar la repetición de negocios.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          id="camiones-autonomos"
          className="prose prose-lg text-gray-700 mb-16"
        >
          <h2 className="text-2xl font-bold mb-4">
          Conclusión
          </h2>
          <p className="text-justify">
          El negocio de la venta de camiones en 2025 se encuentra en un momento de transformación. Las oportunidades en el mercado de vehículos eléctricos, la expansión de los camiones usados y la digitalización de las ventas son áreas clave que los concesionarios deben aprovechar. Al mismo tiempo, deben estar preparados para enfrentar desafíos como la escasez de componentes y las regulaciones ambientales más estrictas. Aquellas empresas que se adapten a estos cambios, ofrezcan soluciones innovadoras y brinden un excelente servicio postventa estarán mejor posicionadas para tener éxito en un mercado cada vez más competitivo.
          </p>
        </motion.div>

        {/* Enlace a la lista de publicaciones */}
        <div className="text-center mt-12">
          <Link href="/blog" className="text-xl text-blue-600 hover:underline">
            Ver más artículos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogCamiones;
