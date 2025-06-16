import AnimatedLink from "../animated-link";

export default function Navbar() {
  return (
    <nav>
      <AnimatedLink
        href="/home"
        className='text-foreground font-medium text-sm'
        hasTarget={false}
      >
        Home
      </AnimatedLink>
    </nav>
  )
}
