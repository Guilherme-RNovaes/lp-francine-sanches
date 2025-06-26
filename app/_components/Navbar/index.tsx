'use client'

import NavigationItems from "./_components/navigation-items";
import Image from "next/image";
import userProps from "@/options/user";
import BookingButton from "../cal-button";
import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { getCalApi } from "@calcom/embed-react";

gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const navRef = useRef(null);
  const blurRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  // Cal.com init
  useEffect(() => {
    (async function() {
      const cal = await getCalApi({ "namespace": "60min" });
      cal("ui", { "theme": "light", "cssVarsPerTheme": { "light": { "cal-brand": "#f3f5f0" }, "dark": { "cal-brand": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [])

  // Animação com GSAP declarativa
  useGSAP(() => {
    gsap.to(blurRef.current, {
      height: menuOpen ? "100vh" : "0vh",
      duration: 0.1,
      ease: "power4",
    });

    gsap.to(blurRef.current, {
      background: menuOpen ? "#00000030" : "transparent",
      duration: 0.4,
      ease: "power4",
    });

    gsap.to(bgRef.current, {
      height: menuOpen ? "500px" : "52px",
      duration: 0.5,
      ease: "power4.inOut",
    });

    gsap.to(navRef.current, {
      opacity: menuOpen ? "100%" : "0%",
      delay: 0.2,
      duration: 0.5,
      ease: "power4.inOut",
    });

    if (menuOpen) {
      gsap.to(line1Ref.current, {
        rotate: 45,
        y: 3,
        duration: 0.5,
        ease: 'power4.inOut',
      });
      gsap.to(line2Ref.current, {
        rotate: -45,
        y: -6,
        duration: 0.5,
        ease: 'power4.inOut',
      });
    } else {
      gsap.to([line1Ref.current, line2Ref.current], {
        rotate: 0,
        y: 0,
        duration: 0.5,
        ease: 'power4.inOut',
      });
    }
  }, [menuOpen]);

  return (
    <div ref={containerRef}>
      <div
        ref={blurRef}
        className="w-full fixed top-0 flex justify-center p-2 md:p-5 items-start z-50 transition-all"
      >
        <div
          ref={bgRef}
          className="max-w-[800px] min-h-[50px] w-full bg-background shadow-md rounded-[10px] flex flex-col items-start justify-start gap-6 py-2 px-3 overflow-hidden"
        >
          <div className="w-full flex items-start justify-between">
            {/* Logo + Título */}
            <div className="flex items-start gap-2">
              <Image
                src={userProps.logoUrl}
                alt="logo da profissional"
                width={40}
                height={40}
              />
              <div className="hidden md:block">
                <p className="font-title text-3xl leading-5">Francine Novaes</p>
                <p className="font-sub-title text-xs">Psicóloga · CRP 06/193069</p>
              </div>
            </div>

            <div className="flex flex-row items-center justify-between gap-10">
              <BookingButton variant="ghost" />
              <button onClick={toggleMenu} className="relative w-8 h-8 group">
                <div ref={line1Ref} className="absolute w-full h-[2px] bg-foreground top-3 left-0 origin-center" />
                <div ref={line2Ref} className="absolute w-full h-[2px] bg-foreground top-5 left-0 origin-center" />
              </button>
            </div>
          </div>

          {menuOpen && (
            <div ref={navRef} className="opacity-0 w-full pt-6 px-40">
              <NavigationItems />
            </div>

          )}
        </div>
      </div>
    </div>
  );
}
