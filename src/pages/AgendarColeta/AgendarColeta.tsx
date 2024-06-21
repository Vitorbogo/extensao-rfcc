import React from 'react'
import AppLayout from '../../components/appLayout'
import { Body, Container, Description, DescriptionContainer, WrapperDonation } from './style'
import CardText from '../../components/common/CardText/CardText'
import { useHistory } from 'react-router'

export default function AgendarColetaScreen() {
  const history = useHistory()

  return (
    <AppLayout title='Agendar Coleta' history={history}>
      <Container>
        <CardText text='Horários de Coleta' fontSize='20px' />

        <Body>
          <Description width='50%'>Trazer seus documentos pessoais: RG, CPF e o Cartão SUS.</Description>
          <div style={{ marginBottom: '35px' }} />

          <WrapperDonation>
            <Description width='40%'>De segunda à sexta</Description>
            <DescriptionContainer>
              <Description>Das 8h às 10h30</Description>
              <Description>E de 10h30 às 16hs</Description>
            </DescriptionContainer>
          </WrapperDonation>
        </Body>
      </Container>
    </AppLayout>
  )
}
