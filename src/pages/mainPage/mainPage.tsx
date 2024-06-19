import { Container, Content, ContentColumn, Header, WrapperBody } from './styles'
import AppLayout from '../../components/appLayout'
import { CardsMain } from './components'
import { Fragment, useEffect, useState } from 'react'
import useCardsMain from '../../hooks/useCardsMain/useCardsMain'
import { ICardsMain } from './types'
import { useHistory } from 'react-router'

export default function MainPage() {
  // hooks
  const { findAllCardsMain } = useCardsMain()
  const history = useHistory()

  // states
  const [cardsData, setCardsData] = useState<ICardsMain[]>([])

  useEffect(() => {
    async function getData() {
      await findAllCardsMain()
        .then((response) => setCardsData(response))
        .catch((e) => console.log(e))
        .finally(() => console.log('Get data successfully'))
    }

    getData()
  }, [])

  function renderCards(data: ICardsMain, key: number) {
    return (
      <Fragment key={key}>
        <CardsMain data={data} />
      </Fragment>
    )
  }

  return (
    <AppLayout title='Página principal' history={history}>
      <Container>
        <Content>
          <Header>
            <h1>Esse aplicativo não exclui a necessidade da acompanhamento médico</h1>
          </Header>

          <WrapperBody>
            <ContentColumn>{cardsData.map(renderCards)}</ContentColumn>
          </WrapperBody>
        </Content>
      </Container>
    </AppLayout>
  )
}
