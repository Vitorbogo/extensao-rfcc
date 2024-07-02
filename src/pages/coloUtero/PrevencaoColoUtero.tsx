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

const PrevencaoColoUtero: React.FC = () => {
  const history = useHistory()

  return (
    <AppLayout title='Prevenção/Diagnóstico' history={history}>
      <IonContent>
        <ContentBox>
          <img src='assets/images/prevencao_diagnostico.jpg' />
          <p>
            A prevenção primária do câncer do colo do útero está relacionada à diminuição do risco de contágio pelo
            papilomavírus humano (HPV). A transmissão da infecção pelo HPV ocorre por via sexual, presumidamente através
            de abrasões microscópicas na mucosa ou na pele da região anogenital. Consequentemente, o uso de
            preservativos (camisinha) durante a relação sexual com penetração protege parcialmente do contágio pelo HPV,
            que também pode ocorrer através do contato com a pele da vulva, região perineal, perianal e bolsa escrotal.
          </p>
          <p>
            A principal forma de prevenção, entretanto, é a vacina contra o HPV. O Ministério da Saúde implementou no
            calendário vacinal, em 2014, a vacina tetravalente contra o HPV para meninas e em 2017, para meninos. Esta
            vacina protege contra os subtipos 6, 11, 16 e 18 do HPV. Os dois primeiros causam verrugas genitais e os
            dois últimos são responsáveis por cerca de 70% dos casos de câncer do colo do útero.
          </p>
          <p>
            Atualmente, a recomendação é de uma única dose para o grupo etário alvo da vacina que são as meninas e os
            meninos com idade entre 9 e 14 anos, pois esta vacina é mais eficaz se usada antes do início da vida sexual.
            Grupos especiais, como pessoas com imunodeficiência causada pelo HIV, devem seguir orientações específicas.
            Para mulheres com imunossupressão, vivendo com HIV/Aids, transplantadas e portadoras de cânceres, a vacina é
            indicada até 45 anos de idade.
          </p>
          <p>
            A meta é vacinar pelo menos 80% da população alvo para alcançar o objetivo de reduzir a incidência deste
            câncer nas próximas décadas no país. A vacinação, em conjunto com o exame preventivo (Papanicolaou), se
            complementam como ações de prevenção deste câncer. Mesmo as mulheres vacinadas, quando alcançarem a idade
            preconizada, deverão realizar o exame preventivo, pois a vacina não protege contra todos os subtipos
            oncogênicos do HPV.
          </p>
          <p>
            <strong>Diagnóstico </strong>
          </p>
          <p>Os seguintes exames podem ser utilizados:</p>
          <ul>
            <li>
              <strong>Exame pélvico e história clínica: </strong> exame da vagina, colo do útero, útero, ovário e reto
              através de avaliação com espéculo, toque vaginal e toque retal.
            </li>
            <li>
              <strong>Exame Preventivo</strong> (Papanicolau)
            </li>
            <li>
              <strong>Colposcopia: </strong> exame que permite visualizar a vagina e o colo de útero com um aparelho
              chamado colposcópio, capaz de detectar lesões anormais nessas regiões.
            </li>
            <li>
              <strong>Biópsia: </strong> se células anormais são detectadas no exame preventivo (Papanicolau), é
              necessário realizar uma biópsia, com a retirada de pequena amostra de tecido para análise no microscópio.
            </li>
          </ul>

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

export default PrevencaoColoUtero
