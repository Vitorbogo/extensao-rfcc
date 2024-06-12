import React from 'react'
import AppLayout from '../../components/appLayout'
import { Body, Container, Description, Header, Img } from './style'
import { useHistory } from 'react-router-dom'

const Noticias: React.FC = () => {
  // history implementation
  const history = useHistory()

  return (
    <AppLayout title='Notícias' history={history}>
      <Container>
        <Body>
          <Description>Corpo notíticas</Description>
        </Body>
      </Container>
    </AppLayout>
  )
}

export default Noticias
