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

const OQueEColoUtero: React.FC = () => {
  const history = useHistory()

  return (
    <AppLayout title='O que é' history={history}>
      <IonContent>
        <ContentBox>
          <img src='assets/images/colo_do_utero.jpg' />
          <p>
            O câncer do colo do útero (CCU), também chamado de câncer cervical, é causado pela infecção genital
            persistente por alguns tipos do Papilomavírus Humano - HPV (chamados de tipos oncogênicos).
          </p>

          <p>
            Esse vírus é sexualmente transmissível, muito frequente na população e seria evitável o contágio com o uso
            de preservativos. Na maioria das vezes a infecção não causa doença, mas em alguns casos, ocorrem alterações
            celulares que podem evoluir ao longo dos anos para o câncer. A presença do vírus e de lesões pré cancerosas
            são identificadas no exame preventivo (conhecido também como Papanicolau), e são curáveis na quase
            totalidade dos casos. Por isso, é importante a realização periódica do exame preventivo. As vacinas contra o
            HPV são também muito importantes para prevenir infecções por estes vírus e, portanto, prevenir o
            desenvolvimento deste câncer. Outros fatores de risco para o desenvolvimento deste câncer são o tabagismo e
            a baixa imunidade.
          </p>
          <p>
            Excetuando-se o câncer de pele não melanoma, o CCU é o terceiro tumor maligno mais frequente na população
            feminina (atrás do câncer de mama e do colorretal), e a quarta causa de morte de mulheres por câncer no
            Brasil.
          </p>
          <p>
            <strong>Referência</strong>
            <ul>
              <li>
                Inca – Instituto Nacional de Câncer.
                <a
                  href='https://www.gov.br/inca/pt-br/assuntos/gestor-e-profissional-de-saude/controle-do-cancer-de-mama/'
                  target='_blank'
                >
                  https://www.gov.br/inca/pt-br/assuntos/gestor-e-profissional-de-saude/controle-do-cancer-de-mama/
                </a>
              </li>
            </ul>
          </p>
        </ContentBox>
      </IonContent>
    </AppLayout>
  )
}

export default OQueEColoUtero
