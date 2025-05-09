import { ChartNoAxesColumnDecreasing, CircleAlert, Clock } from "lucide-react";

const TunnelSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <h1 className="text-center text-5xl mt-6 mb-16 md:mb-24 font-bold">
        Tráfico Sin Conversión
      </h1>
      {/* Contenedor del grid con imagen de borde */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative after:content-[''] after:absolute after:top-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-[#222b] after:to-transparent before:content-[''] before:absolute before:bottom-0 before:w-full before:h-0.5 before:bg-gradient-to-l before:from-transparent before:via-[#222b] before:to-transparent">
        {/* Celda 1 */}
        <div className="left-top-border center-top-border px-7 py-9 shadow-md relative before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-0.5 before:bg-white before:z-50">
          <div className="glow-trapezoid"></div>
          <div className="flex items-center justify-center h-16 w-16 rounded-full m-auto relative">
            <CircleAlert className="w-9 h-9"/>
          </div>
          <h3 className="mt-4 text-xl text-white text-center font-semibold">
            Alto Rebote
          </h3>
          <p className="mt-2 text-sm text-gray-300 text-center">
            Los visitantes llegan pero se van rápidamente sin interactuar.
          </p>
        </div>

        {/* Celda 2 */}
        <div className="left-top-border px-7 py-9 shadow-md relative before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-0.5 before:bg-white before:z-50">
        <div className="glow-trapezoid"></div>
          <div className="flex items-center justify-center h-16 w-16 rounded-full m-auto relative">
            <Clock className="w-9 h-9"/>
          </div>
          <h3 className="mt-4 text-xl text-white text-center font-semibold">
            Poco Tiempo en Página
          </h3>
          <p className="mt-2 text-sm text-gray-300 text-center">
            Los usuarios no encuentran contenido relevante o interesante.
          </p>
        </div>

        {/* Celda 3 */}
        <div className="left-top-border right-top-border px-7 py-9 shadow-md relative before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-0.5 before:bg-white before:z-50">
        <div className="glow-trapezoid"></div>
          <div className="flex items-center justify-center h-16 w-16 rounded-full m-auto relative">
            <ChartNoAxesColumnDecreasing className="w-9 h-9"/>
          </div>
          <h3 className="mt-4 text-xl text-white text-center font-semibold">
            Baja Tasa de Conversión
          </h3>
          <p className="mt-2 text-sm text-gray-300 text-center">
            El tráfico no se traduce en leads o ventas.
          </p>
        </div>

        {/* Celda 4 */}
        <div className="left-bottom-border px-7 py-9 shadow-md relative before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-0.5 before:bg-white before:z-50 after:content-[''] after:absolute after:top-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-[#222b] after:to-transparent">
        <div className="glow-trapezoid"></div>
          <div className="flex items-center justify-center h-16 w-16 rounded-full m-auto relative">
            <svg
              className="h-8 w-8 text-white relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          <h3 className="mt-4 text-xl text-white text-center font-semibold">
            Falta de Claridad
          </h3>
          <p className="mt-2 text-sm text-gray-300 text-center">
            Los visitantes no entienden tu oferta o el siguiente paso.
          </p>
        </div>

        {/* Celda 5 */}
        <div className="left-bottom-border border-b-2 border-gray-300 px-7 py-9 shadow-md relative before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-0.5 before:bg-white before:z-50 after:content-[''] after:absolute after:top-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-[#222b] after:to-transparent">
        <div className="glow-trapezoid"></div>
          <div className="flex items-center justify-center h-16 w-16 rounded-full m-auto relative">
            <svg
              className="h-8 w-8 text-white relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 20l4-16m4 4l-4 16m-4-4l4-16"
              ></path>
            </svg>
          </div>
          <h3 className="mt-4 text-xl text-white text-center font-semibold">
            Experiencia de Usuario Deficiente
          </h3>
          <p className="mt-2 text-sm text-gray-300 text-center">
            El sitio web es difícil de navegar o no es intuitivo.
          </p>
        </div>

        {/* Celda 6 */}
        <div className="left-bottom-border right-bottom-border px-7 py-9 shadow-md relative before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-0.5 before:bg-white before:z-50 after:content-[''] after:absolute after:top-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-transparent after:via-[#222b] after:to-transparent">
        <div className="glow-trapezoid"></div>
          <div className="flex items-center justify-center h-16 w-16 rounded-full m-auto relative">
            <svg
              className="h-8 w-8 text-white relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <h3 className="mt-4 text-xl text-white text-center font-semibold">
            Mensaje No Convincente
          </h3>
          <p className="mt-2 text-sm text-gray-300 text-center">
            La propuesta de valor no resuena con la audiencia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TunnelSection;
