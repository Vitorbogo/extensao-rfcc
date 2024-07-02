import React from 'react'
import { IonContent } from '@ionic/react'
import styled from 'styled-components'
import AppLayout from '../../components/appLayout'
import { useHistory } from 'react-router'

const ContentBox = styled.div`
  border-radius: 10px;
  padding: 20px;
  margin: 40px 20px 20px 20px;
  color: var(--ion-color-text);
  text-align: justify;
`

const RiscoColoUtero: React.FC = () => {
  const history = useHistory()

  return (
    <AppLayout title='Fatores de Risco' history={history}>
      <IonContent>
        <ContentBox>
          <p>Os fatores de risco para câncer cervical incluem:</p>
          <ul>
            <li>
              <strong>Fumar tabaco. </strong> Fumar aumenta o risco de câncer cervical. Quando infecções por HPV
              acontecem em pessoas que fumam, as infecções tendem a durar mais e têm menos probabilidade de desaparecer.
              O HPV causa a maioria dos cânceres cervicais.
            </li>
            <li>
              <strong>Aumento do número de parceiros sexuais. </strong> Quanto maior o seu número de parceiros sexuais,
              e quanto maior o número de parceiros sexuais do seu parceiro, maior a sua chance de pegar HPV .
            </li>
            <li>
              <strong>Atividade sexual precoce. </strong> Fazer sexo em idade precoce aumenta o risco de HPV .
            </li>
            <li>
              <strong>Outras infecções sexualmente transmissíveis. </strong> Ter outras infecções sexualmente
              transmissíveis, também chamadas de ISTs , aumenta o risco de HPV , que pode levar ao câncer cervical.
              Outras ISTs que aumentam o risco incluem herpes, clamídia, gonorreia, sífilis e HIV / AIDS .
            </li>
            <li>
              <strong>Um sistema imunológico enfraquecido.</strong> Você pode ter mais probabilidade de desenvolver
              câncer cervical se seu sistema imunológico estiver enfraquecido por outra condição de saúde e você tiver
              HPV .
            </li>
            <li>
              <strong>Exposição a medicamentos para prevenção de aborto espontâneo. </strong> Se seus pais tomaram um
              medicamento chamado dietilestilbestrol, também conhecido como DES, durante a gravidez, seu risco de câncer
              cervical pode aumentar. Este medicamento foi usado na década de 1950 para prevenir aborto espontâneo. Ele
              está ligado a um tipo de câncer cervical chamado adenocarcinoma de células claras.
            </li>
          </ul>
          <p>
            <strong>Referência</strong>
            <ul>
              <li>
                <a
                  href='https://www.mayoclinic.org/diseases-conditions/cervical-cancer/symptoms-causes/syc-20352501/'
                  target='_blank'
                >
                  https://www.mayoclinic.org/diseases-conditions/cervical-cancer/symptoms-causes/syc-20352501
                </a>
              </li>
            </ul>
          </p>
        </ContentBox>
      </IonContent>
    </AppLayout>
  )
}

export default RiscoColoUtero
