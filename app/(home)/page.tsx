import ReactLenis from "lenis/react";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <ReactLenis root>
      <main className="min-h-screen">
        <section className="sticky top-0">
          <Hero />
        </section>
        <section className="sticky">
          <Hero />
          <Hero />
        </section>
        <Hero />
      </main>
    </ReactLenis>
  )
}
