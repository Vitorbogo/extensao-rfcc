import { ICardsMain } from '../pages/mainPage/types'

export const fakeCardsMain: ICardsMain[] = [
  {
    id: 1,
    img: '/assets/images/logo_rfcc.png',
    description: 'CONHEÇA UM POUCO SOBRE A INSTITUIÇÃO',
    route: '/sobre',
  },
  {
    id: 2,
    img: '/assets/images/news_icon.png',
    description: 'FIQUE POR DENTRO DAS NOTÍCIAS',
    route: '/noticias',
  },
  {
    id: 3,
    img: '/assets/images/cancerMama_icon.png',
    description: 'CÂNCER DE MAMA',
    route: '/cancer/mama',
  },
  {
    id: 4,
    img: '/assets/images/cancerColoUtero_icon.png',
    description: 'CÂNCER DE COLO DO ÚTERO',
    route: '/cancer/colo-utero',
  },
  {
    id: 5,
    img: '/assets/images/relogio_icon.png',
    description: 'HORÁRIOS PARA COLETA',
    route: '/agendar-coleta',
  },
  {
    id: 6,
    img: '/assets/images/contribuicao_icon.png',
    description: 'COLABORE COM A REDE',
    route: '/sobre/colaboracoes',
  },
]
