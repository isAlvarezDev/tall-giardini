import { useEffect, useRef } from "react";

const data = [
  {
    title: "No hacemos plantillas",
    description:
      "Cada marca es única. Diseñamos estrategias personalizadas desde cero, adaptadas a tus clientes reales y tus metas específicas. Nada de copiar-pegar.",
  },
  {
    title: "No improvisamos. Construimos sobre datos.",
    description:
      "Cada decisión está respaldada por analytics y pruebas reales. Usamos lo que tus números revelan para diseñar embudos que escalan tu negocio, no suposiciones.",
  },
  {
    title: "No hacemos promesas vacías",
    description:
      "Cero humo. Solo resultados medibles: embudos que convierten, clientes cualificados y crecimiento sostenible. Te mostramos los datos reales.",
  },
  {
    title: "Hacemos crecer marcas con procesos reales",
    description:
      "Construimos embudos estratégicos que guían a tus clientes ideales desde el primer contacto hasta la compra. Sin suposiciones, solo procesos probados que generan ventas recurrentes.",
  },
];

const Solutions = () => {
    const stickyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('sticky', 'top-20');
        } else {
          entry.target.classList.remove('sticky', 'top-20');
        }
      },
      { threshold: 0.1 }
    );

    if (stickyRef.current) {
      observer.observe(stickyRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section className="my-20 grid grid-cols-2 max-w-7xl mx-auto relative">
      {/* Columna sticky - altura forzada */}
      <div ref={stickyRef} className="self-start">
          <h1 className="text-4xl font-bold px-8">
            Diseñamos sistemas digitales a medida que convierten tráfico en
            ventas.
          </h1>
      </div>

      {/* Columna de contenido desplazable */}
      <div className="space-y-10">
        <h2 className="text-3xl font-semibold">Nuestra solución</h2>
        <div className="h-[1px] bg-gray-300 w-full opacity-30"></div>

        {data.map((item, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-2xl font-medium">{item.title}</h3>
            <p className="text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;