import React from 'react'
import { IonContent } from '@ionic/react'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import AppLayout from '../../components/appLayout'

const ContentBox = styled.div`
  text-align: justify;
  border-radius: 10px;
  padding: 20px;
  margin: 70px 20px 20px 20px;
  color: var(--ion-color-text);
`

const SinasSintomas: React.FC = () => {
  const history = useHistory()

  return (
    <AppLayout title='Sinas e Sintomas' history={history}>
      <IonContent>
        <ContentBox>
          <p>O câncer de mama é decorrente de múltiplas causa que vai levar, por fim, a uma mutação genética.</p>
          <p>
            90% dessas mutações irão ocorrer ao longo da vida do indivíduo (mutação genética adquirida e não
            hereditária).
          </p>
          <p>10% apenas decorrem de mutações herdadas do pai da mãe (mutação genética hereditária).</p>
          <p>Mecanismos celulares envolvidos no processo:</p>
          <p>
            Os genes controlam como nossas células funcionam. E essas características são gerdadas de ambos os nossos
            pais. O DNA afeta mais do que apenas a nossa aparência; também pode influenciar nosso risco de desenvolver
            certas doenças, incluindo alguns tipos de câncer.
          </p>

          <p>
            <img src={''} width={'350px'} />
          </p>
        </ContentBox>
      </IonContent>
    </AppLayout>
  )
}

export default SinasSintomas
