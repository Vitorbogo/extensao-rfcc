import React from 'react'
import { IonContent } from '@ionic/react'
import styled from 'styled-components'
import AppLayout from '../../components/appLayout'
import { useHistory } from 'react-router'

const OrientacoesColoUtero: React.FC = () => {
  const history = useHistory()

  return (
    <AppLayout title='Orientações para o exame' history={history}>
      <IonContent>
        <Container>
          <ContentBox>
            <p>
              À partir do momento que tiver relação sexual (menor de idade acompanhada do
              responsável)
            </p>
          </ContentBox>

          <ContentBox>
            <p>Sem uso de pomada</p>
          </ContentBox>

          <ContentBox>
            <p>8 dias após o último dia da menstruação</p>
          </ContentBox>

          <ContentBox>
            <p>3 dias sem relação sexual</p>
          </ContentBox>

          <ContentBox>
            <p>Trazer seus documentos pessoais: RG, CPF e o Cartão do SUS</p>
          </ContentBox>
        </Container>
      </IonContent>
    </AppLayout>
  )
}

export default OrientacoesColoUtero

const Container = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

const ContentBox = styled.div`
  background-color: #ffaec0;
  border-radius: 10px;
  padding: 5px;
  margin: 10px;
  color: var(--ion-color-text);
  width: 50%;
  text-align: center;

  @media (max-width: 768px) {
    width: 90%;
  }
`
