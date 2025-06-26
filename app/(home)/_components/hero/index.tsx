import userProps from "@/options/user";
import Image from "next/image";
import arrowDown from "@/public/images/arrow-down.svg";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen w-screen flex flex-col items-center text-foreground justify-between bg-background relative pt-40 md:pt-40 pb-40 md:pb-20 px-10">
      <div className="flex flex-col md:flex-row w-full items-center justify-between pb-32 2xl:pb-20">
        <div className="flex flex-col items-start justify-start font-title text-[15vw] md:text-[12vw]">
          <h1 className="leading-[12vw]">{userProps.name}</h1>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-center md:gap-8 xl:gap-16">
            <h2 className="leading-[12vw]">{userProps.lastName}</h2>
            <p className="text-xl md:text-2xl xl:text-3xl font-sub-title">{userProps.profession}</p>
          </div>
        </div>
        {/*<Image src={userProps.heroImageUrl} alt="foto da profissional francine" className="w-[20vw]" width={300} height={300} />*/}
      </div>
      <div className="flex flex-col md:flex-row items-start justify-between w-full gap-20 md:gap-0">
        <div className="flex flex-col items-start justify-center font-sub-title text-xl md:text-2xl xl:text-5xl">
          <div className="flex flex-row w-full items-center justify-center gap-4 md:gap-6 xl:gap-10">
            <div className="h-[1px] w-full bg-foreground-secondary/50" />
            <p className="w-full text-nowrap">“Cuidar da mente</p>
          </div>
          <p>é um ato de coragem e amor-próprio.”</p>
        </div>
        <p className="w-[300px] md:w-[400px] xl:w-[600px] text-justify text-sm md:text-xl">
          {userProps.heroText}
        </p>
      </div>
      <Image src={arrowDown} alt="arrow-down" width={200} height={200} className="absolute bottom-24 right-10 md:right-auto md:bottom-10 opacity-20" />
    </section>
  )
}
