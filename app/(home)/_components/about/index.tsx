'use client'

import userProps from "@/options/user"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="min-h-screen w-screen flex flex-col items-center text-foreground justify-between bg-background-secondary relative pt-20 pb-40 md:pb-20 px-10 rounded-b-4xl">
      <div className="flex flex-col md:flex-row items-end gap-20 justify-center md:justify-start w-full md:pr-10 xl:pr-20">
        <Image src={userProps.aboutImageUrl} alt="Fotografia da profissional" width={540} height={540} className="rounded-2xl shadow-2xl hidden md:block max-w-[140px] md:max-w-[340px] xl:max-w-[540px]" />
        <div className="flex flex-col items-start md:gap-0 justify-start">
          <p className="font-sub-title text-sm md:text-xl xl:text-2xl">“Sou psicóloga, mas também sou feita de histórias, escolhas e afetos.”</p>
          <div className="flex flex-col items-start justify-start xl:leading-16 uppercase pb-20">
            <h2 className="font-sub-title text-6xl md:text-[9vw]">psicóloga,</h2>
            <h2 className="font-sub-title text-6xl md:text-[9vw]">esposa,</h2>
            <h2 className="font-sub-title text-6xl md:text-[9vw]">mãe</h2>
          </div>
          <Image src={userProps.aboutImageUrl} alt="Fotografia da profissional" width={540} height={540} className="rounded-2xl shadow-2xl block md:hidden max-w-[200px] md:max-w-[340px] xl:max-w-[540px] mb-16" />
          <div className="flex flex-col items-center">
            <h3 className="max-w-3xl text-xl md:text-2xl text-justify pb-20 md:pb-32">Acredito que a escuta terapêutica vai além da técnica — é feita com empatia, presença e respeito pelo tempo do outro. Ser mãe e esposa me trouxe ainda mais ferramentas para acolher, compreender e guiar meus pacientes com humanidade.</h3>
            <div className="flex flex-col md:flex-row items-start justify-between gap-5 md:gap-20">
              <span className="font-sub-title text-xl">(sobre mim)</span>
              <p className="text-lg md:text-xl max-w-xl text-justify">Sou Francine, psicóloga clínica com foco em TCC. Além da minha formação, carrego na minha vivência os desafios e aprendizados de ser esposa e mãe — experiências que enriquecem minha escuta e empatia com cada paciente.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
