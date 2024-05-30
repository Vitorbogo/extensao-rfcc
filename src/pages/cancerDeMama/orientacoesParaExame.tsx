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

const OrientacoesParaExame: React.FC = () => {
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  return (
    <AppLayout title='Orientações para exame'>
      <IonContent>
        <ContentBox>
          <p>Trazer seus documentos pessoais: identidade, CPF e o cartão do SUS.</p>
        </ContentBox>
      </IonContent>
    </AppLayout>
  )
}

export default OrientacoesParaExame
