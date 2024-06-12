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

const RiscoColoUtero: React.FC = () => {
  const history = useHistory()

  return (
    <AppLayout title='Risco' history={history}>
      <IonContent>
        <ContentBox>
          <p>
            Preencher texto
          </p>
        </ContentBox>
      </IonContent>
    </AppLayout>
  )
}

export default RiscoColoUtero
