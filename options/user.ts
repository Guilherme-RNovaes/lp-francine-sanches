export interface User {
  name: string
  lastName: string
  profession: string;
  heroText: string;
  about: string;
  contactText: string;
  heroImageUrl: string;
  aboutImageUrl: string;
  logoUrl: string;
}

const userProps: User =
{
  name: 'Francine Sanches',
  lastName: 'Novaes',
  profession: 'Psicóloga Clínica | Terapia Cognitivo-Comportamental (TCC)',
  heroText: '"Você não precisa viver presa(o) à ansiedade, autocobrança e pensamentos negativos. A Terapia Cognitivo-Comportamental (TCC) oferece ferramentas práticas para lidar com emoções difíceis, fortalecer sua autoestima e construir uma vida mais leve, com equilíbrio e propósito."',
  about: 'Desenvolvedor autônomo, especializado em criar soluções digitais como Landing Pages, E-commerces e Páginas Institucionais, unindo funcionalidade, design e alta performance para potencializar sua presença online.',
  contactText: 'Estou aqui para te ouvir. Caso tenha dúvidas, queira agendar uma sessão ou apenas saber mais sobre o meu trabalho, sinta-se à vontade para entrar em contato.',
  heroImageUrl: '/images/francine-sanches-hero-photo.png',
  aboutImageUrl: '/images/francine-sanches-about-photo.jpg',
  logoUrl: '/Logo-dark.svg'
}

export default userProps;
