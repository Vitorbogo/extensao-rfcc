import { ContentCard, DescriptionCard, HeaderCard, ImageCard, WrapperCard } from '../styles'
import { ICardsMain } from '../types'
import { useHistory } from 'react-router-dom'

interface IProps {
  data: ICardsMain
  sizeImg?: string
  background?: string
}

export default function CardsMain({ data, sizeImg = '70px', background }: IProps) {
  const history = useHistory()

  return (
    <WrapperCard onClick={() => history.push(data.route)}>
      <HeaderCard>
        <ImageCard src={data.img} width={sizeImg}></ImageCard>
      </HeaderCard>
      <ContentCard>
        <DescriptionCard>{data.description}</DescriptionCard>
      </ContentCard>
    </WrapperCard>
  )
}
