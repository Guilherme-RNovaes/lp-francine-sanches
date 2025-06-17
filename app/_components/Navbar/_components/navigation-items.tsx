import NavigationProps from "@/options/navigation";
import AnimatedLink from "../../animated-link";

export default function NavigationItems() {
  return (
    <nav className="flex flex-row items-center justify-center gap-10">
      {NavigationProps.map((props, index) => (
        <AnimatedLink
          href={props.href}
          key={index}
          className='text-foreground font-medium text-sm'
          hasTarget={false}
        >
          {props.name}
        </AnimatedLink>
      ))}
    </nav>
  )
}
