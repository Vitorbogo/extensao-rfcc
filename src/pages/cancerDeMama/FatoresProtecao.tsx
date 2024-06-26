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

  & a {
    text-decoration: none;
    color: pink;
  }
`

const FatoresProtecao: React.FC = () => {
  const history = useHistory()

  return (
    <AppLayout title='Fatores de Proteção' history={history}>
      <IonContent>
        <ContentBox>
          <img src={'assets/images/fatores_protecao.jpg'} width={'350px'} />

          <p>
            <strong>Os principais fatores para reduzir o risco do câncer de mama são: </strong>
          </p>
          <p>
            <strong>Exercícios físicos regulares: </strong> A atividade física ajuda a manter um peso saudável,
            reduzindo o risco de obesidade e os níveis elevados de estrogênio associados, ambos fatores de risco para o
            câncer de mama. Exercícios também fortalecem o sistema imunológico.
          </p>
          <p>
            <strong>Dieta equilibrada e saudável: </strong> Uma dieta rica em vegetais, frutas, grãos integrais e baixa
            em gorduras saturadas pode ajudar a reduzir o risco de câncer de mama. Alimentos antioxidantes e ricos em
            fibras são particularmente benéficos.
          </p>
          <p>
            <strong>Manutenção de um peso corporal saudável: </strong> Estar acima do peso ou obeso, especialmente após
            a menopausa, aumenta o risco de câncer de mama. Manter um peso saudável pode ajudar a diminuir esse risco.
          </p>
          <p>
            <strong>Limitar o consumo de álcool: </strong> O consumo de álcool está ligado a um risco aumentado de
            câncer de mama. Reduzir a ingestão de álcool pode ser uma medida preventiva eficaz.
          </p>
          <p>
            <strong>Limitar o uso da terapia de reposição hormonal prolongada (TRH): </strong> O uso de TRH,
            especialmente a combinação de estrogênio e progesterona, foi associado a um aumento do risco. Limitar o
            tempo de uso pode ser benéfico. Quem a utilizar, utilizar por no máximo 5 anos. Não se pode utilizar TRH por
            toda a vida depois da menopausa!!!
          </p>
          <p>
            <strong>Educação sobre riscos genéticos e histórico familiar: </strong> Conhecer e entender o histórico
            familiar de câncer de mama e de mais tipos de cânceres (ovário, próstata, pâncreas, intestino...) pode
            ajudar na adoção de estratégias de prevenção e no rastreamento precoce, especialmente para aqueles com
            mutações genéticas conhecidas que aumentam o risco.
          </p>
          <p>
            <strong>Gravidez, especialmente quando ocorre antes dos 30 anos: </strong> está associada a uma redução no
            risco de câncer de mama. Existem várias razões biológicas por trás dessa conexão.
          </p>
          <p>
            <ul>
              <li>
                Alterações Hormonais Durante a Gravidez: Durante a gravidez, o corpo da mulher passa por mudanças
                hormonais significativas. Essas alterações podem ter um efeito protetor sobre as células mamárias,
                tornando-as menos suscetíveis a se transformarem em células cancerígenas.
              </li>
              <li>
                Diferenciação das Células Mamárias: A gravidez leva à diferenciação completa das células mamárias. Isso
                significa que as células mamárias amadurecem e atingem um estado em que são menos propensas a sofrer
                mutações que podem levar ao câncer.
              </li>
              <li>
                Menor Exposição a Ciclos Menstruais: Mulheres que engravidam têm menos ciclos menstruais ao longo da
                vida. Cada ciclo menstrual envolve um aumento nos níveis de estrogênio e progesterona, que podem
                estimular o crescimento de células mamárias, incluindo células anormais ou pré-cancerígenas. Portanto,
                menos ciclos podem significar um risco reduzido.
              </li>
            </ul>
          </p>
          <p>
            <strong>Amamentação: </strong> A amamentação, que muitas vezes segue a gravidez, também tem sido associada a
            uma redução no risco de câncer de mama. A amamentação por um período prolongado pode prolongar o período de
            alterações hormonais benéficas e contribuir para a eliminação de células com potencial para danos ao DNA.
          </p>
          <p>
            Estes fatores de proteção não garantem a prevenção do câncer de mama, mas podem significativamente reduzir o
            risco. É importante combinar estes hábitos saudáveis com consultas regulares ao médico e discussões
            informadas sobre riscos e estratégias de prevenção individualizadas.
          </p>
          <p>
            <strong>Referência: </strong>
          </p>
          <p>
            <ul>
              <li>
                {' '}
                IARC,{' '}
                <a href='https://gco.iarc.fr/' target='_blank'>
                  https://gco.iarc.fr/
                </a>
              </li>
              <li>
                {' '}
                INCA,{' '}
                <a href='https://www.gov.br/inca/pt-br/assuntos/cancer/numeros' target='_blank'>
                  https://www.gov.br/inca/pt-br/assuntos/cancer/numeros
                </a>
              </li>
              <li>
                {' '}
                <a href='http://BreastCancer.org' target='_blank'>
                  BreastCancer.org
                </a>
              </li>
            </ul>
          </p>
        </ContentBox>
      </IonContent>
    </AppLayout>
  )
}

export default FatoresProtecao
