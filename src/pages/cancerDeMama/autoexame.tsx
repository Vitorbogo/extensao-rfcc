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

const SinasSintomas: React.FC = () => {
  const history = useHistory()

  return (
    <AppLayout title='Sinas e Sintomas' history={history}>
      <IonContent>
        <ContentBox>
          O câncer de mama na sua fase inicial, o momento em que a cura é mais alcançável, é assintomático; a mulher não
          sente nada. Nessa fase, apenas os exames de imagem conseguem detectar alguma lesão.
          <p>
            Nas fases mais avançadas, o câncer de mama pode apresentar uma variedade de sinais e sintomas, que podem
            incluir:
          </p>
          <p>
            <ul>
              <li>Nódulo ou caroço no seio ou na axila;</li>
              <li>Mudanças na forma ou tamanho do seio;</li>
              <li>Alterações na textura da pele do seio, como enrugamento, espessamento ou retração;</li>
              <li>Pele com aspecto de casca de laranja;</li>
              <li>Inchaço, vermelhidão ou calor na área do seio;</li>
              <li>Dor persistente no seio ou na área da axila;</li>
              <li>
                Secreção mamilar, especialmente se for sanguinolenta ou acompanhada por alterações na pele ao redor do
                mamilo;
              </li>
              <li>Mudanças no mamilo, como inversão ou descamação.</li>
            </ul>
          </p>
          <p>
            É importante estar ciente a esses sinais e sintomas e procurar atendimento médico se você notar qualquer
            alteração em seus seios. No entanto, é essencial lembrar que esses sinais e sintomas também podem ser
            causados por condições benignas, mas é importante investigá-los para um diagnóstico preciso.
          </p>
          <p>
            <img src={'assets/images/sinais.jpg'} width={'350px'} />
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
                <a href='#'>National Cancer Institute</a>
              </li>
            </ul>
          </p>
        </ContentBox>
      </IonContent>
    </AppLayout>
  )
}

export default SinasSintomas
