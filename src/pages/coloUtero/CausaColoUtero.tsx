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

const CausaColoUtero: React.FC = () => {
  const history = useHistory()

  return (
    <AppLayout title='Causa' history={history}>
      <IonContent>
        <ContentBox>
          <img src='assets/images/colo_do_utero.webp' />
          <p>
            O câncer cervical começa quando células saudáveis no colo do útero desenvolvem alterações em seu DNA . O DNA
            de uma célula contém as instruções que dizem a uma célula o que fazer. As alterações dizem às células para
            se multiplicarem rapidamente. As células continuam vivendo quando células saudáveis morreriam como parte de
            seu ciclo de vida natural. Isso causa muitas células. As células podem formar uma massa chamada tumor. As
            células podem invadir e destruir tecidos saudáveis do corpo. Com o tempo, as células podem se separar e se
            espalhar para outras partes do corpo.
          </p>

          <p>
            A maioria dos cânceres cervicais é causada pelo HPV . O HPV é um vírus comum que é transmitido por contato
            sexual. Para a maioria das pessoas, o vírus nunca causa problemas. Ele geralmente desaparece sozinho. Para
            algumas, porém, o vírus pode causar alterações nas células que podem levar ao câncer.
          </p>
          <p>
            <strong>Tipos de câncer cervical</strong>
          </p>
          <p>
            O câncer cervical é dividido em tipos com base no tipo de célula em que o câncer começa. Os principais tipos
            de câncer cervical são:
          </p>
          <ul>
            <li>
              <strong>Carcinoma de células escamosas.</strong> Este tipo de câncer cervical começa em células finas e
              planas, chamadas células escamosas. As células escamosas revestem a parte externa do colo do útero. A
              maioria dos cânceres cervicais são carcinomas de células escamosas.
            </li>
            <li>
              <strong>Adenocarcinoma. </strong> Este tipo de câncer cervical começa nas células glandulares em forma de
              coluna que revestem o canal cervical.
            </li>
          </ul>
          <p>
            Às vezes, ambos os tipos de células estão envolvidos no câncer cervical. Muito raramente, o câncer ocorre em
            outras células do colo do útero.
          </p>
          <p>
            <strong>Referência</strong>
            <ul>
              <li>
                <a
                  href='https://www.mayoclinic.org/diseases-conditions/cervical-cancer/symptoms-causes/syc-20352501/'
                  target='_blank'
                >
                  https://www.mayoclinic.org/diseases-conditions/cervical-cancer/symptoms-causes/syc-20352501{' '}
                </a>
              </li>
            </ul>
          </p>
        </ContentBox>
      </IonContent>
    </AppLayout>
  )
}

export default CausaColoUtero
