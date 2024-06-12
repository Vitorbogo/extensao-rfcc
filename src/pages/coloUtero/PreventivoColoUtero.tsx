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

const PreventivoColoUtero: React.FC = () => {
  const history = useHistory()

  return (
    <AppLayout title='O que é o Preventivo' history={history}>
      <IonContent>
        <ContentBox>
          <p>
            É a coleta da secreção do colo do útero, utilizando espátula e escovinha. O material é colocado em uma lâmina de vidro para ser examinado posteriormente em um microscópio.
          </p>
        </ContentBox>
      </IonContent>
    </AppLayout>
  )
}

export default PreventivoColoUtero
