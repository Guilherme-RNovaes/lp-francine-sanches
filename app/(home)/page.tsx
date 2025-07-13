'use client'

import ReactLenis, { useLenis } from "lenis/react";
import Hero from "./_components/hero";
import Services from "./_components/services";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./_components/about";
import Therapy from "./_components/therapy";
import Footer from "./_components/footer";
import Contact from "./_components/contact";
import EntryAnimation from "../_components/entry-animation";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const heroSection = useRef(null)
  const otherSection = useRef(null)
  const lenis = useLenis()

  useLenis(() => {
    ScrollTrigger.update()
  })

  useGSAP(() => {
    lenis?.scrollTo(0, { immediate: true })

    const heroSectionElement = heroSection.current;
    gsap.fromTo(
      otherSection.current,
      { scaleX: '95%' },
      {
        scaleX: '100%',
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: heroSectionElement,
          scrub: true,
          markers: false,
          start: 'top 20%',
        },
      }
    )

    gsap.fromTo(
      heroSection.current,
      { translateY: '0%', opacity: '100%' },
      {
        translateY: '5%',
        opacity: '0%',
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: heroSectionElement,
          scrub: true,
          markers: false,
          start: 'top 50%',
        },
      }
    )
    ScrollTrigger.refresh()
  }, [lenis]);
  return (
    <ReactLenis root>
      <main className="min-h-screen">
        <EntryAnimation />
        <section ref={heroSection} className="sticky top-0">
          <Hero />
        </section>
        <section ref={otherSection} className="sticky">
          <Services />
          <About />
          <Therapy />
          <Contact />
          <Footer />
        </section>
      </main>
    </ReactLenis>
  )
}
