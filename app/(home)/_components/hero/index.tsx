import userProps from "@/options/user";
import Image from "next/image";
import arrowDown from "@/public/images/arrow-down.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";

export default function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline();
    const splitChars = new SplitType('.reveal-hero', {
      types: 'chars',
      charClass: 'reveal-text',
    })

    const splitWords = new SplitType('.reveal-text', {
      types: 'words',
      charClass: 'reveal-text',
    })

    tl.fromTo(
      splitChars.chars,
      { y: "115%" },
      {
        y: "0%",
        ease: "power4.out",
        duration: 0.7,
        delay: 2.8,
      }
    );

    tl.fromTo(splitWords.words,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        ease: "power4.out",
        duration: 0.5,
        stagger: 0.05,
      },
      "-=0.7"
    );
    tl.fromTo(
      ".sub-reveal",
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
      },
      "-=2.4"
    )
  })
  return (
    <section id="home" className="min-h-screen w-screen flex flex-col items-center text-foreground justify-between bg-background relative pt-40 md:pt-40 pb-40 md:pb-20 px-10">
      <div className="flex flex-col md:flex-row w-full items-center justify-between pb-32 2xl:pb-20">
        <div className="flex flex-col items-start justify-start font-title text-[15vw] md:text-[12vw]">
          <h1 className="leading-[12vw] overflow-hidden">
            <span className="reveal-hero translate-y-[100%] pr-1">
              {userProps.name}
            </span>
          </h1>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-center md:gap-8 xl:gap-16">
            <h2 className="leading-[12vw] overflow-hidden">
              <span className="reveal-hero translate-y-[115%] pr-1">
                {userProps.lastName}
              </span>
            </h2>
            <h3 className="text-xl md:text-2xl xl:text-3xl font-sub-title overflow-hidden">
              <span className="reveal-text translate-y-[115%]">
                {userProps.profession}
              </span>
            </h3>
          </div>
        </div>
        {/*<Image src={userProps.heroImageUrl} alt="foto da profissional francine" className="w-[20vw]" width={300} height={300} />*/}
      </div>
      <div className="flex flex-col md:flex-row items-start justify-between w-full gap-20 md:gap-0">
        <div className="flex flex-col items-start justify-center font-sub-title text-xl md:text-2xl xl:text-5xl">
          <div className="sub-reveal flex flex-row w-full items-center justify-center gap-4 md:gap-6 xl:gap-10 overflow-hidden">
            <div className="h-[1px] w-full bg-foreground-secondary/50" />
            <p className="sub-reveal w-full text-nowrap">“Cuidar da mente</p>
          </div>
          <div className="overflow-hidden pb-2">
            <p className="sub-reveal">é um ato de coragem e amor-próprio.”</p>
          </div>
        </div>
        <h4 className="w-[300px] md:w-[400px] xl:w-[600px] text-justify text-sm md:text-xl overflow-hidden">
          <span className="reveal-text translate-y-[115%]">
            {userProps.heroText}
          </span>
        </h4>
      </div>
      <Image src={arrowDown} alt="arrow-down" width={200} height={200} className="absolute bottom-24 right-10 md:right-auto md:bottom-10 opacity-20" />
    </section>
  )
}
