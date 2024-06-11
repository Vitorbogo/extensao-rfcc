import React from 'react'
import { IonContent } from '@ionic/react'
import styled from 'styled-components'
import AppLayout from '../../components/appLayout'
import { useHistory } from 'react-router'

const ContentBox = styled.div`
  background-color: #ffaec0;
  border-radius: 10px;
  padding: 20px;
  margin: 40px 20px 20px 20px;
  color: var(--ion-color-text);
`

const OQueEColoUtero: React.FC = () => {
  const history = useHistory()

  return (
    <AppLayout title='O que é' history={history}>
      <IonContent>
        <ContentBox>
          <p>
            É um tipo de câncer que demora muitos anos para se desenvolver. As alterações das
            células que dão origem ao câncer do colo do útero são facilmente descobertas no exame
            preventivo. Conforme a doença avança, os principais sintomas são sangramento vaginal,
            corrimento e dor.
          </p>
        </ContentBox>
      </IonContent>
    </AppLayout>
  )
}

export default OQueEColoUtero
