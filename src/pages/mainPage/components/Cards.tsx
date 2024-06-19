import { ContentCard, DescriptionCard, HeaderCard, ImageCard, WrapperCard } from '../styles'
import { ICardsMain } from '../types'
import { useHistory } from 'react-router-dom'

interface IProps {
  data: ICardsMain
}

export default function CardsMain({ data }: IProps) {
  const history = useHistory()

  return (
    <WrapperCard onClick={() => history.push(data.route)}>
      <HeaderCard>
        <ImageCard src={data.img} width={'70px'}></ImageCard>
      </HeaderCard>
      <ContentCard>
        <DescriptionCard>{data.description}</DescriptionCard>
      </ContentCard>
    </WrapperCard>
  )
}
