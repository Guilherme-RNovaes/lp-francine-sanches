export type service = {
  title: string;
  description: string;
  image: string;
}

const ServicesProps: service[] = [
  {
    title: 'Ansiedade e Estresse',
    description: 'Técnicas para lidar com a agitação mental, crises de <span class="highlight">ansiedade</span> e <span class="highlight">estresse</span> no dia a dia.',
    image: '/images/ansiedade.png',
  },
  {
    title: 'Terapia Cognitivo-Comportamental',
    description: 'Identificação e reestruturação de padrões de pensamento que causam <span class="highlight">sofrimento emocional</span>.',
    image: '/images/terapia-tcc.png',
  },
  {
    title: 'Autoestima e Autoconhecimento',
    description: 'Espaço seguro para desenvolver sua <span class="highlight">autoconfiança</span> e compreender sua história pessoal.',
    image: '/images/autoestima.png',
  },
  {
    title: 'Relacionamentos e Comunicação',
    description: 'Melhoria da comunicação em relações <span class="highlight">familiares</span>, <span class="highlight">amorosas</span> ou <span class="highlight">profissionais</span>.',
    image: '/images/relacionamentos.png',
  },
]

export default ServicesProps;
