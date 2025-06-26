import userProps from "@/options/user";
import Image from "next/image";

export default function Footer() {
  return (
    <section id="services" className="min-h-screen w-screen flex flex-col items-center text-foreground justify-between bg-background relative pt-20 md:pb-20 px-10">
      <div className="w-full flex items-center justify-center border-t border-t-foreground ">
        <div className="flex items-center gap-2">
          <Image
            src={userProps.logoUrl}
            alt="logo da profissional"
            width={60}
            height={60}
          />
          <div className="flex flex-col items-start">
            <p className="font-title text-4xl leading-5">Francine Novaes</p>
            <p className="font-sub-title text-sm">Psicóloga · CRP 06/193069</p>
          </div>
        </div>
      </div>
    </section>
  )
}
