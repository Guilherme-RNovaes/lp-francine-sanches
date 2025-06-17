import userProps from "@/options/user";

export default function Hero() {
  return (
    <section className="min-h-screen w-screen flex flex-col items-center text-foreground bg-background pt-20 md:pt-40 px-10">
      {userProps.heroText}
    </section>
  )
}
