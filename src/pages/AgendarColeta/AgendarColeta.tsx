import React from 'react'
import AppLayout from '../../components/appLayout'
import { Body, Container, Description, Header, WrapperDoacao } from './style'
import CardText from '../../components/common/CardText/CardText'
import { useHistory } from 'react-router'

export default function AgendarColetaScreen() {
  const history = useHistory()

  return (
    <AppLayout title='Agendar Coleta' history={history}>
      <Container>
        <Header>
          <CardText text='Horários de Coleta' fontSize='20px' />
        </Header>

        <Body>
          <Description width='50%'>Trazer seus documentos pessoais: RG, CPF e o Cartão SUS.</Description>
          <div style={{ marginBottom: '35px' }}></div>

          <WrapperDoacao>
            <Description width='40%'>De segunda à sexta</Description>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '40%',
                borderLeft: '2px solid black',
                height: '100px',
                justifyContent: 'center',
              }}
            >
              <Description>Das 8h às 10h30</Description>
              <Description>E de 10h30 às 16hs</Description>
            </div>
          </WrapperDoacao>
        </Body>
      </Container>
    </AppLayout>
  )
}
