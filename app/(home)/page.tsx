'use client'

import ReactLenis from "lenis/react";
import Hero from "./_components/hero";
import Services from "./_components/services";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./_components/about";
import Therapy from "./_components/therapy";
import Footer from "./_components/footer";
import Contact from "./_components/contact";
import EntryAnimation from "../_components/entry-animation";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const heroSection = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0);

    const heroSectionElement = heroSection.current;
    gsap.fromTo(
      '.section-up',
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
      '.section-down',
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
  }, []);
  return (
    <ReactLenis root>
      <main className="min-h-screen">
        <EntryAnimation />
        <section ref={heroSection} className="sticky section-down top-0">
          <Hero />
        </section>
        <section className="sticky section-up">
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
