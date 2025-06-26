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

export default function Therapy() {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const tl = gsap.timeline()

  useGSAP(() => {
    gsap.fromTo(
      lineRef.current,
      { height: '1%' },
      {
        height: '100%',
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "center 30%",
          scrub: true,
        },
      }
    );

    tl.fromTo(
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
        },
      }
    );

    gsap.fromTo(
      ".line",
      { width: steps.filter((s) => s.align === "left") ? '1%' : '-1%' },
      {
        width: '100%',
        duration: 2,
        stagger: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "-15% 60%",
          end: "bottom 40%",
          scrub: true,
          toggleActions: "play play reverse reverse"
        },

      }
    );
  }, []);

  return (
    <section id="services" className="min-h-screen w-screen flex flex-col items-center text-foreground justify-between bg-background relative pt-20 md:pb-20 px-10 rounded-t-4xl">
      <h2 className="font-sub-title text-[9vw] md:text-[10vw] xl:text-[11.2vw] pb-24">Fases da Terapia</h2>
      <div ref={containerRef} className="w-full flex items-center justify-start ">
        <div className="flex flex-row justify-center relative w-full">
          {/* Coluna esquerda */}
          <div className="hidden md:flex flex-col items-end gap-64 w-full">
            {steps.filter((s) => s.align === "left").map((step, i) => (
              <div key={i} className="w-full text-right step">
                <div className="flex items-center justify-start gap-14">
                  <h3 className="text-4xl font-title text-foreground">{step.number}</h3>
                  <h2 className="text-3xl font-sub-title font-semibold mb-2">{step.title}</h2>
                </div>
                <div className="w-full flex flex-row items-center justify-end">
                  <div className="w-full line h-[2px] bg-foreground" />
                  <div className="w-3 h-3 rounded-xs bg-foreground" />
                </div>
                <p className="text-justify max-w-xl text-foreground">{step.text}</p>
              </div>
            ))}
          </div>

          <div ref={lineRef} className="absolute left-0 md:left-1/2 -translate-x-1/2 top-0 bg-foreground h-full w-[2px]" />

          <div className="hidden md:flex flex-col items-start gap-64 mt-50 w-full">
            {steps.filter((s) => s.align === "right").map((step, i) => (
              <div key={i} className="w-full flex flex-col items-start justify-start text-right step">
                <div className="flex items-end justify-end gap-14 pl-30">
                  <h3 className="text-4xl font-title text-foreground">{step.number}</h3>
                  <h2 className="text-3xl font-sub-title font-semibold mb-2">{step.title}</h2>
                </div>
                <div className="w-full flex flex-row items-center justify-start">
                  <div className="w-3 h-3 rounded-xs bg-foreground" />
                  <div className="w-full line h-[2px] bg-foreground" />
                </div>
                <p className="text-justify max-w-xl text-foreground pl-30">{step.text}</p>
              </div>
            ))}
          </div>

          <div className="flex md:hidden flex-col items-start gap-32 w-full">
            {steps.map((step, i) => (
              <div key={i} className="w-full flex flex-col items-start justify-start text-right step">
                <div className="flex items-end justify-end gap-3 pl-4">
                  <h3 className="text-2xl font-title text-foreground">{step.number}</h3>
                  <h2 className="text-xl font-sub-title font-semibold mb-2">{step.title}</h2>
                </div>
                <div className="w-full flex flex-row items-center justify-start">
                  <div className="w-3 h-3 rounded-xs bg-foreground" />
                  <div className="w-full line h-[2px] bg-foreground" />
                </div>
                <p className="text-sm text-justify max-w-md text-foreground pl-16">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
