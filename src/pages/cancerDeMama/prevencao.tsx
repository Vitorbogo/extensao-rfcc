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

const Prevencao: React.FC = () => {
  return (
    <AppLayout title='Prevenção'>
      <IonContent>
        <ContentBox>
          <p>
            Como medidas que podem contribuir para a prevenção primária da doença, estimula-se,
            portanto, praticar atividade física, manter o peso corporal adequado, adotar uma
            alimentação mais saudável e evitar ou reduzir o consumo de bebidas alcoólicas. Amamentar
            é também um fator protetor.
          </p>
        </ContentBox>
      </IonContent>
    </AppLayout>
  )
}

export default Prevencao
