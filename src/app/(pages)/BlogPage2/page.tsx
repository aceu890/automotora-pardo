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
            Cómo Elegir el Camión Ideal para Ti
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Comprar un camión no es una decisión que deba tomarse a la ligera.
            Ya sea que necesites uno para tu negocio o para uso personal, elegir
            el modelo adecuado puede marcar la diferencia en términos de
            rendimiento, costos y comodidad. En este artículo, te ofrecemos una
            guía práctica para tomar la mejor decisión según tus necesidades.
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
                1. Define el Uso Principal del Camión
              </a>
            </li>
            <li>
              <a
                href="#camiones-autonomos"
                className="text-blue-600 hover:underline"
              >
                2. Conoce el Peso y Volumen de la Carga
              </a>
            </li>
            <li>
              <a
                href="#camiones-autonomos"
                className="text-blue-600 hover:underline"
              >
                3. Considera el Consumo de Combustible
              </a>
            </li>
            <li>
              <a
                href="#camiones-autonomos"
                className="text-blue-600 hover:underline"
              >
                4. Evalúa la Facilidad de Mantenimiento
              </a>
            </li>
            <li>
              <a
                href="#camiones-autonomos"
                className="text-blue-600 hover:underline"
              >
                5. Elige la Configuración Correcta
              </a>
            </li>
            <li>
              <a
                href="#camiones-autonomos"
                className="text-blue-600 hover:underline"
              >
                6. Tecnología y Seguridad
              </a>
            </li>
            <li>
              <a
                href="#camiones-autonomos"
                className="text-blue-600 hover:underline"
              >
                7. Define tu Presupuesto
              </a>
            </li>
            <li>
              <a
                href="#camiones-autonomos"
                className="text-blue-600 hover:underline"
              >
                Conclusión
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
            src="/images/blog/2_blog.webp"
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
            1. Define el Uso Principal del Camión
          </h2>
          <p className="text-justify">
            Lo primero que debes determinar es para qué usarás el camión.
            Algunas preguntas clave que puedes hacerte:{" "}
            <ul>
              <li>
                ¿Transportarás carga ligera o pesada? ¿Será para uso urbano o de
              </li>
              <li>
                largas distancias? ¿Necesitas capacidades específicas como
              </li>
              <li>refrigeración o volquete?</li>
            </ul>
            Ejemplo: Si necesitas transportar mercancías pequeñas dentro de la
            ciudad, un camión liviano con buena maniobrabilidad es ideal. Para
            cargas pesadas, un camión de mayor tonelaje es imprescindible.
          </p>
          <br />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          id="camiones-autonomos"
          className="prose prose-lg text-gray-700 mb-16"
        >
          <h2 className="text-2xl font-bold mb-4">
            2. Conoce el Peso y Volumen de la Carga
          </h2>
          <p className="text-justify">
            Cada camión tiene un límite de capacidad de carga (toneladas) que no
            debe excederse. Elige un camión que pueda manejar el peso promedio
            que transportarás, considerando también el espacio necesario.
          </p>
          <br />
          <p className="text-justify">
            Tip: Es mejor optar por un modelo con capacidad ligeramente superior
            a tus necesidades, para evitar forzar el motor y prolongar la vida
            útil del vehículo.
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
            3. Considera el Consumo de Combustible
          </h2>
          <p className="text-justify">
            El consumo de combustible es un factor crítico, especialmente si
            planeas recorrer largas distancias. Algunos modelos están diseñados
            para ser más eficientes en carretera, mientras que otros son más
            económicos para trayectos urbanos.
          </p>
          <br />
          <p className="text-justify">
            Consejo práctico: Revisa el rendimiento en kilómetros por litro de
            cada modelo y compara opciones. Los camiones diésel suelen ser más
            eficientes para trabajo pesado.
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
            4. Evalúa la Facilidad de Mantenimiento
          </h2>
          <p className="text-justify">
            Un camión con costos de mantenimiento accesibles y piezas de
            repuesto disponibles te ahorrará dolores de cabeza en el futuro.
            Investiga qué tan común es el modelo en tu región y si los talleres
            locales están capacitados para trabajar con él.
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
            5. Elige la Configuración Correcta
          </h2>
          <p className="text-justify">
            La configuración del camión también es importante:{" "}
            <ul>
              <li>
                Cabina: Escoge entre cabina simple, extendida o doble según el
                número de pasajeros o herramientas que debas llevar.
              </li>
              <li>
                Tracción: Los camiones 4x4 son ideales para terrenos difíciles,
                mientras que los de tracción 4x2 funcionan bien en carreteras
                pavimentadas.
              </li>
              <li>
                Carrocería: Dependiendo de tu carga, opta por una caja seca,
                plataforma abierta, volquete, entre otros.
              </li>
            </ul>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          id="camiones-autonomos"
          className="prose prose-lg text-gray-700 mb-16"
        >
          <h2 className="text-2xl font-bold mb-4">6. Tecnología y Seguridad</h2>
          <p className="text-justify">
            Hoy en día, muchos camiones ofrecen características tecnológicas
            avanzadas como sistemas de navegación, sensores de reversa y
            cámaras. También es crucial verificar las medidas de seguridad, como
            frenos ABS, control de estabilidad y airbags.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          id="camiones-autonomos"
          className="prose prose-lg text-gray-700 mb-16"
        >
          <h2 className="text-2xl font-bold mb-4">7. Define tu Presupuesto</h2>
          <p className="text-justify">
            Finalmente, establece cuánto estás dispuesto a invertir. Considera
            no solo el precio de compra, sino también los costos adicionales
            como seguro, combustible, mantenimiento y posibles reparaciones.
          </p>
          <br />
          <p className="text-justify">
            Opciones: Puedes evaluar modelos nuevos o usados. Si decides por uno
            usado, revisa el historial de mantenimiento, el kilometraje y las
            condiciones generales del vehículo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          id="camiones-autonomos"
          className="prose prose-lg text-gray-700 mb-16"
        >
          <h2 className="text-2xl font-bold mb-4">Conclusión</h2>
          <p className="text-justify">
            Elegir el camión ideal requiere evaluar múltiples factores, desde el
            uso que le darás hasta tu presupuesto. Tómate el tiempo para
            comparar diferentes modelos, busca asesoramiento si es necesario y
            realiza pruebas de manejo antes de tomar tu decisión. Recuerda, el
            camión perfecto es aquel que no solo cumple con tus necesidades
            actuales, sino que también te ofrece versatilidad y fiabilidad a
            largo plazo.
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
