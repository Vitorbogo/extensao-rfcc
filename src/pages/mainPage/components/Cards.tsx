import { Link } from 'react-router-dom'
import {
  ContentCard,
  DescriptionCard,
  HeaderCard,
  ImageCard,
  WrapperCard,
} from '../styles'
import { ICardsMain } from '../types'

interface IProps {
  data: ICardsMain
}

const CardsMain = ({ data }: IProps) => {
  return (
    <>
      <WrapperCard>
        <Link to={data.route}>
          <HeaderCard>
            <ImageCard src={data.img} width={'70px'}></ImageCard>
          </HeaderCard>
          <ContentCard>
            <DescriptionCard>{data.description}</DescriptionCard>
          </ContentCard>
        </Link>
      </WrapperCard>
    </>
  )
}

export default CardsMain
