export type navigation = {
  name: string;
  href: string;
  id: string;
}

const NavigationProps: navigation[] = [
  {
    name: 'Home',
    href: '/',
    id: 'home',
  },
  {
    name: 'Serviços',
    href: '/#services',
    id: 'services',
  },
  {
    name: 'Sobre',
    href: '/#about',
    id: 'about',
  },
  {
    name: 'Contato',
    href: '/#contact',
    id: 'contact',
  },
]

export default NavigationProps;
