import NavigationProps from "@/options/navigation";
import AnimatedLink from "../../animated-link";

export default function NavigationItems() {
  return (
    <nav className="flex flex-col md:flex-row items-start justify-center gap-10">
      {NavigationProps.map((props, index) => (
        <AnimatedLink
          href={props.href}
          key={index}
          className='text-foreground font-medium text-xl'
          hasTarget={false}
        >
          {props.name}
        </AnimatedLink>
      ))}
    </nav>
  )
}
