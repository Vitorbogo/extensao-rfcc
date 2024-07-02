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

const FatoresProtecaoColoUtero: React.FC = () => {
  const history = useHistory()

  return (
    <AppLayout title='O que é o Preventivo' history={history}>
      <IonContent>
        <ContentBox>
          <img src='assets/images/fatores_de_risco.jpg' width={"350px"}/>
          <p>Para reduzir o risco de câncer cervical:</p>
          <ul>
            <li>
              <strong>Pergunte ao seu médico sobre a vacina contra o HPV . </strong> Receber uma vacinação para prevenir
              a infecção pelo HPV pode reduzir o risco de câncer cervical e outros cânceres relacionados ao HPV .
              Pergunte à sua equipe de saúde se uma vacina contra o HPV é adequada para você.
            </li>
            <li>
              <strong>Faça exames de Papanicolau de rotina. </strong> Os exames de Papanicolau podem detectar condições
              pré-cancerígenas do colo do útero. Essas condições podem ser monitoradas ou tratadas para prevenir o
              câncer cervical. A maioria das organizações médicas sugere começar os exames de Papanicolau de rotina aos
              21 anos e repeti-los a cada poucos anos.
            </li>
            <li>
              <strong>Pratique sexo seguro. </strong> Reduza seu risco de câncer cervical tomando medidas para prevenir
              infecções sexualmente transmissíveis. Isso pode incluir usar um preservativo toda vez que você fizer sexo
              e limitar o número de parceiros sexuais que você tem.
            </li>
            <li>
              <strong>Não fume. </strong> Se você não fuma, não comece. Se você fuma, converse com um profissional de
              saúde sobre maneiras de ajudar você a parar.
            </li>
          </ul>
          <p>
            <strong>Referência</strong>
            <ul>
              <li>
                <a
                  href='https://www.mayoclinic.org/diseases-conditions/cervical-cancer/symptoms-causes/syc-20352501'
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

export default FatoresProtecaoColoUtero
