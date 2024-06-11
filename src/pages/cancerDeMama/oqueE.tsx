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

const OqueE: React.FC = () => {
  const history = useHistory()

  return (
    <AppLayout title='O que é' history={history}>
      <IonContent>
        <ContentBox>
          <p>
            O câncer de mama pode ocorrer em mulheres e, raramente, em homens. Os sintomas do câncer
            de mama incluem um nódulo na mama, secreção com sangue pelo mamilo e mudanças na forma
            ou textura do mamilo ou da mama. O tratamento depende da fase do câncer. Pode envolver
            quimioterapia, radioterapia e cirurgia.
          </p>
        </ContentBox>
      </IonContent>
    </AppLayout>
  )
}

export default OqueE
