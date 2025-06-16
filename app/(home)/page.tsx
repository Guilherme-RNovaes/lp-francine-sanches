import ReactLenis from "lenis/react";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <ReactLenis root>
      <main className="min-h-screen">
        <Hero />
        <Hero />
        <Hero />
        <Hero />
      </main>
    </ReactLenis>
  )
}
