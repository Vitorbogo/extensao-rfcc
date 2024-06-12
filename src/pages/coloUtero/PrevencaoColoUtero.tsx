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

const PrevencaoColoUtero: React.FC = () => {
  const history = useHistory()

  return (
    <AppLayout title='Prevenção' history={history}>
      <IonContent>
        <ContentBox>
          <p>
            É fazendo o exame preventivo (papanicolau). As lesões que precedem o câncer do colo do
            útero não tem sintomas, mas podem ser descobertos por meio do papanicolau. Quando
            diagnósticado na fase inicial as chances de cura são de 100%.
          </p>
        </ContentBox>
      </IonContent>
    </AppLayout>
  )
}

export default PrevencaoColoUtero
