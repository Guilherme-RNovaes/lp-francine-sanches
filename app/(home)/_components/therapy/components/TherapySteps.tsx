import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "(01)",
    title: "Primeira conversa (acolhimento)",
    text: "Neste primeiro momento, o foco está em te escutar com empatia e sem julgamentos. Conversamos sobre suas demandas, sentimentos e expectativas, criando um espaço seguro para você se expressar com liberdade.",
    align: "left",
  },
  {
    number: "(02)",
    title: "Plano terapêutico personalizado",
    text: "A partir do que foi compartilhado, definimos juntas(os) os objetivos da terapia. Estabelecemos metas terapêuticas realistas, alinhadas com suas necessidades e possibilidades, para orientar todo o processo.",
    align: "right",
  },
  {
    number: "(03)",
    title: "Encontros semanais",
    text: "Neste primeiro momento, o foco está em te escutar com empatia e sem julgamentos. Conversamos sobre suas demandas, sentimentos e expectativas, criando um espaço seguro para você se expressar com liberdade.",
    align: "left",
  },
  {
    number: "(04)",
    title: "Acompanhamento e evolução",
    text: "Ao longo da terapia, revisamos juntos seus avanços, refletimos sobre aprendizados e ajustamos o percurso conforme necessário. É um espaço para reconhecer conquistas, superar desafios e construir novos caminhos possíveis.",
    align: "right",
  },
];

export default function TherapySteps() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      lineRef.current,
      { strokeDashoffset: 1000 },
      {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 30%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".step",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="relative px-8 py-24 bg-[#f4f4fc] text-[#043428]">
      <div className="grid grid-cols-[1fr_auto_1fr] gap-x-8 relative">
        {/* Coluna esquerda */}
        <div className="flex flex-col items-end gap-32">
          {steps.filter((s) => s.align === "left").map((step, i) => (
            <div key={i} className="text-right step max-w-md">
              <h3 className="text-xl font-title italic text-[#043428]">{step.number}</h3>
              <h2 className="text-2xl font-semibold border-b mb-2">{step.title}</h2>
              <p className="text-base text-[#043428]">{step.text}</p>
            </div>
          ))}
        </div>

        {/* Linha central com SVG */}
        <div className="relative w-6">
          <svg ref={lineRef} viewBox="0 0 2 1000" className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-1">
            <line
              x1="1"
              y1="0"
              x2="1"
              y2="1000"
              stroke="#043428"
              strokeWidth="2"
              strokeDasharray="1000"
              strokeDashoffset="1000"
            />
          </svg>

          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-[#043428] rounded-full left-1/2 -translate-x-1/2"
              style={{ top: `${i * 25}%` }}
            />
          ))}
        </div>

        {/* Coluna direita */}
        <div className="flex flex-col items-start gap-32">
          {steps.filter((s) => s.align === "right").map((step, i) => (
            <div key={i} className="text-left step max-w-md">
              <h3 className="text-xl font-title italic text-[#043428]">{step.number}</h3>
              <h2 className="text-2xl font-semibold border-b mb-2">{step.title}</h2>
              <p className="text-base text-[#043428]">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
