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

const CausaColoUtero: React.FC = () => {
  const history = useHistory()

  return (
    <AppLayout title='Causa' history={history}>
      <IonContent>
        <ContentBox>
          <p>
            A principal causa é a infecção por alguns tipos de vírus chamados de hpv papiloma vírus
            humano. Fatores como o início precoce da atividade sexual, a diversidade de parceiros, o
            fumo e a má higiene íntima podem facilitar a infecção. Normalmente, as células em nossos
          </p>
        </ContentBox>
      </IonContent>
    </AppLayout>
  )
}

export default CausaColoUtero
