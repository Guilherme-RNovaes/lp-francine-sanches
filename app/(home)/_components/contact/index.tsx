import BookingButton from "@/app/_components/cal-button";

export default function Contact() {
  return (

    <section id="contact" className="min-h-screen w-screen flex flex-col items-center text-foreground justify-between bg-background relative pt-20 md:pb-20 px-10 rounded-t-4xl">
      <div className="w-full flex flex-col items-center justify-between py-30 gap-20 bg-background-secondary rounded-2xl">
        <h2 className="font-sub-title text-[9vw]">Vamos conversar?</h2>
        <p className="text-sm md:text-2xl text-center max-w-xs md:max-w-2xl">Estou aqui para te ouvir. Caso tenha dúvidas, queira agendar uma sessão ou apenas saber mais sobre o meu trabalho, sinta-se à vontade para entrar em contato.</p>
        <div className="flex flex-col items-center justify-center gap-6 md:gap-10">
          <BookingButton variant="ghost" />
          <span className="text-xs md:text-xl">Você escolhe o melhor dia e horário :)</span>
        </div>
      </div>
    </section>
  )
}
