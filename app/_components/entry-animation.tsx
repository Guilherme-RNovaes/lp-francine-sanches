import { useGSAP } from "@gsap/react";
import gsap from "gsap"

export default function EntryAnimation() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".loader",
      { x: "-100%", scaleY: 0.002 },
      {
        x: "0%",
        ease: "power4.inOut",
        duration: 1.5,
      }
    );

    tl.fromTo(
      ".loader",
      { scaleY: 0.002 },
      {
        scaleY: 1,
        ease: "power4.inOut",
        duration: 0.7,
      }
    );

    tl.fromTo(
      ".loader-second-bg",
      { scaleY: "0%" },
      {
        scaleY: "100%",
        ease: "power4.inOut",
        duration: 0.7,
      },
      "-=0.5"
    );

    tl.fromTo(
      ".loader-first-bg",
      { opacity: "100%" },
      {
        opacity: "0%",
        display: "none",
        ease: "power4.inOut",
        duration: 0.5,
      },
      "-=0.5"
    );
  }, []);
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 loader-first-bg bg-background min-h-screen w-screen z-[150] flex items-center overflow-hidden">
        <div className="w-full loader -translate-x-[100%] min-h-screen bg-foreground">
          <div className="fixed top-0 left-0 loader-second-bg bg-background min-h-screen w-screen z-[140] flex items-center" />
        </div>
      </div>
    </div>
  )
}
