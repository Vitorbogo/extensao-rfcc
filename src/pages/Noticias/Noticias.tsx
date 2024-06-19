import AppLayout from '../../components/appLayout'
import { Body, Container, Description } from './style'
import { useHistory } from 'react-router-dom'

function NewsScreen() {
  const history = useHistory()

  return (
    <AppLayout title='Notícias' history={history}>
      <Container>
        <Body>
          <Description>Notícias</Description>
        </Body>
      </Container>
    </AppLayout>
  )
}

export default NewsScreen
