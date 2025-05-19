import { useEffect, useRef } from "react";

interface TailoredSolutionItem {
  title: string;
  description: string;
}

const data: TailoredSolutionItem[] = [
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

const TailoredSolutions = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Configuración del grid de puntos
    const gridSize = 35; // Tamaño entre puntos (en píxeles)
    const dotSize = 2; // Tamaño de los puntos (en píxeles)
    const activationRadius = 80; // Radio de activación (en píxeles)

    // Calcular cuántos puntos necesitamos
    const containerRect = container.getBoundingClientRect();
    const cols = Math.ceil(containerRect.width / gridSize);
    const rows = Math.ceil(containerRect.height / gridSize);

    // Crear puntos en un grid
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const dot = document.createElement("div");
        dot.className = "absolute rounded-full bg-white opacity-0 transition-opacity duration-300 pointer-events-none";
        dot.style.width = `${dotSize}px`;
        dot.style.height = `${dotSize}px`;
        dot.style.left = `${x * gridSize}px`;
        dot.style.top = `${y * gridSize}px`;
        dot.style.transform = "translate(-50%, -50%)";
        container.appendChild(dot);
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const containerRect = container.getBoundingClientRect();
      const x = clientX - containerRect.left;
      const y = clientY - containerRect.top;

      // Resetear todos los puntos a opacidad 0
      const dots = container.querySelectorAll<HTMLDivElement>('div[class*="rounded-full"]');
      dots.forEach(dot => {
        dot.style.opacity = '0';
      });

      // Activar puntos cercanos
      dots.forEach(dot => {
        const dotX = parseFloat(dot.style.left);
        const dotY = parseFloat(dot.style.top);
        const distance = Math.sqrt(Math.pow(x - dotX, 2) + Math.pow(y - dotY, 2));

        if (distance < activationRadius) {
          // Calcular opacidad basada en la distancia (más cerca = más brillante)
          const opacity = 1 - (distance / activationRadius);
          dot.style.opacity = opacity.toString();
        }
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      const dots = container.querySelectorAll('div[class*="rounded-full"]');
      dots.forEach(dot => dot.remove());
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="my-8 md:my-[54px] md:grid md:grid-cols-2 max-w-7xl mx-auto relative"
    >
      <div className="max-md:mb-12 md:sticky md:top-[46px] pt-[30px] md:self-start z-10">
          <h1 className="max-md:text-center text-3xl md:text-4xl font-bold px-8 animate-[pulse_4500ms_linear_infinite]">
            Diseñamos sistemas digitales a medida <span className="text-white/40">que convierten tráfico en
            ventas.</span>
          </h1>
      </div>

      <div className="space-y-10 pt-[30px] px-8 z-10 md:border-l md:border-gray-300 md:border-opacity-30">
        <h2 className="text-2xl md:text-3xl font-semibold">Nuestra solución</h2>
        <div className="h-[1px] bg-gray-300 w-full opacity-30"></div>

        {data.map((item, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-xl md:text-2xl font-medium">{item.title}</h3>
            <p className="text-white/50">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TailoredSolutions;