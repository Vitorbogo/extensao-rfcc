import React from 'react'
import { IonContent } from '@ionic/react'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import AppLayout from '../../components/appLayout'

const ContentBox = styled.div`
  background-color: #ffaec0;
  border-radius: 10px;
  padding: 20px;
  margin: 70px 20px 20px 20px;
  color: var(--ion-color-text);
`

const Causa: React.FC = () => {
  return (
    <AppLayout title='Causa'>
      <IonContent>
        <ContentBox>
          <p>
            O câncer de mama não tem uma causa única. Diversos fatores estão relacionados ao aumento
            do risco de desenvolver a doença, tais como: idade, fatores endócrinos/história
            reprodutiva, fatores comportamentais/ambientais e fatores genéticos/hereditários.
          </p>
        </ContentBox>
      </IonContent>
    </AppLayout>
  )
}

export default Causa
