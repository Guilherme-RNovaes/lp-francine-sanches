'use client'

import ServicesProps from "@/options/services";
import { useEffect, useRef } from "react";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from "next/image";
import BookingButton from "@/app/_components/cal-button";

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRefs = useRef<(HTMLImageElement | null)[]>([])

  const handleMouseEnter = (index: number) => {
    const el = imageRefs.current[index]
    if (!el) return

    gsap.fromTo(el,
      { autoAlpha: 0, scaleY: 0 },
      { autoAlpha: 1, scaleY: 1, duration: 0.2, ease: "power2.out" }
    )
  }

  const handleMouseLeave = (index: number) => {
    const el = imageRefs.current[index]
    if (!el) return

    gsap.to(el, { autoAlpha: 0, scaleY: 0, duration: 0.2, ease: "power2.inOut" })
  }

  useEffect(() => {
    if (!containerRef.current) return

    gsap.utils.toArray('.highlight').forEach((el, index) => {
      gsap.fromTo(
        el as Element,
        { backgroundSize: '0% 100%' },
        {
          backgroundSize: '100% 100%',
          duration: 1,
          ease: 'power2.out',
          delay: index * 0.4,
          scrollTrigger: {
            trigger: el as Element,
            start: 'top 80%',
          },
        }
      )
    })
  }, [])
  return (
    <section id="services" className="min-h-screen w-screen flex flex-col items-center text-foreground justify-between bg-background-secondary relative pt-20 md:pb-20 px-10 rounded-t-4xl">
      <h2 className="font-sub-title text-[9vw] md:text-[10vw] xl:text-[11.2vw] pb-24">Como posso te ajudar</h2>
      <div ref={containerRef} className="grid gap-20 w-full">
        {ServicesProps.map((item, i) => (
          <div
            key={i}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave(i)}
            className="relative grid grid-cols-[auto_1fr] gap-10 md:gap-40 xl:gap-80 items-start pb-4"
          >
            <span className="text-2xl md:text-4xl xl:text-8xl text-foreground font-title">
              ({String(i + 1).padStart(2, '0')})
            </span>
            <Image
              ref={el => imageRefs.current[i] = el}
              src={item.image}
              alt={item.title}
              width={250}
              height={250}
              className="hidden md:block absolute left-40 top-1/2 -translate-y-1/2 z-10 rounded-xl pointer-events-none opacity-0"
            />
            <div>
              <h2 className="text-2xl md:text-4xl xl:text-7xl pb-10 font-semibold font-sub-title border-b">{item.title}</h2>
              <p
                className="text-sm md:text-xl xl:text-2xl pt-10 text-muted-foreground mt-1 max-w-2xl"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          </div>
        ))}
        <div className="w-full flex flex-col items-center justify-center gap-10 py-10">
          <p className="font-sub-title text-sm md:text-xl xl:text-2xl">“Não é preciso enfrentar tudo sozinho(a). Agende uma sessão e dê o primeiro passo para cuidar de você.”</p>
          <BookingButton />
        </div>
      </div>
    </section>
  )
}
