import React from 'react'
import { IonContent } from '@ionic/react'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import AppLayout from '../../components/appLayout'

const ContentBox = styled.div`
  background-color: #ffaec0;
  border-radius: 10px;
  padding: 20px;
  margin: 40px 20px 20px 20px;
  color: var(--ion-color-text);
`

const Autoexame: React.FC = () => {
  const history = useHistory()

  return (
    <AppLayout title='Autoexame' history={history}>
      <IonContent>
        <ContentBox>
          <p>
            Com os dedos da mão esquerda, apalpe a parte interna da mama esquerda. Inverta a posição
            para o lado direito e apalpe da mesma forma a mama direita.
          </p>
        </ContentBox>
      </IonContent>
    </AppLayout>
  )
}

export default Autoexame
