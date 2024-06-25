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

const OqueE: React.FC = () => {
  const history = useHistory()

  return (
    <AppLayout title='O que é' history={history}>
      <IonContent>
        <ContentBox>
          <p>
            O câncer de mama consiste em um crescimento descontrolado de células da mama. Ele ocorre em decorrência de
            mutações, ou alterações anormais, nos genes responsáveis por regular o crescimento das células e mantê-las
            saudáveis.
          </p>
          <p>
            <img src="assets/images/genes.jpg" width={"350px"}/>
          </p>
          <p>
            Os genes estão no núcleo de cada célula e contém o código genético (como se o código fonte de um programa de
            computador) que determina as funções das células bem como os mecanismos de replicação celular. Quando o DNA
            da célula sofre uma mutação, esse código fonte é danificado, e a célula passa a funcionar de uma forma
            descontrolada.
          </p>
          <p>
            Normalmente, as células em nossos corpos se substituem por meio de um processo ordenado de crescimento
            celular: novas células saudáveis assumem o controle à medida que as antigas morrem. Mas com o tempo, as
            mutações podem “ligar” certos genes e “desligar” outros em uma célula. Essa célula alterada ganha a
            capacidade de continuar se dividindo sem controle, produzindo cada vez mais células doentes (o que chamamos
            de desdiferenciação) até formar o câncer propriamente dito.
          </p>
          <p>
            <img src="assets/images/celulas.jpg" width={"350px"}/>
          </p>
          <p>
            O termo “câncer de mama” refere-se a um tumor maligno que se desenvolveu a partir de células da mama.
            Normalmente, o câncer de mama começa nas células dos lóbulos, que são as glândulas produtoras de leite, ou
            nos ductos, as passagens que drenam o leite dos lóbulos para o mamilo. Menos comumente, o câncer de mama
            pode começar nos tecidos estromais, que incluem os tecidos conjuntivos fibrosos e gordurosos da mama.
          </p>

          <p>
            Com o tempo, as células cancerosas podem invadir o tecido mamário saudável próximo e chegar aos linfonodos
            (ou gânglios) das axilas, pequenas estruturas que filtram substâncias estranhas no corpo. Se as células
            cancerígenas acometerem os gânglios linfáticos já denota uma fase mais avançada do câncer o que chamamos de
            metástase ganglionares ou metástases regionais. Essas células cancerígenas também podem cair na corrente
            sanguínea e se espalharem para outras partes do corpo como ossos, pulmão, cérebro, fígado… nestes casos
            chamados de metástases sistêmicas.
          </p>

          <p>
            O estágio do câncer de mama refere-se ao quanto as células cancerígenas se espalham além do tumor original
            (consulte ESTADIAMENTO do câncer de mama para obter mais informações).
          </p>

          <p>
            O câncer de mama é sempre causado por uma anormalidade genética (um “erro” no material genético), logo,{' '}
            <strong>todo câncer é genético,</strong> mas nem todo câncer é hereditário (que se refere a transmissão
            hereditária de pai/mãe para filhos (as)).
          </p>

          <p>
            Apenas 5-10% dos cânceres são devidos a uma anormalidade herdada (caracteristíca de transmissão genética
            entre as gerações) de sua mãe ou pai, nestes casos falamos que o câncer é genético e hereditário. Em vez
            disso, 85-90% dos cânceres de mama são devidos a anormalidades genéticas que ocorrem como resultado do
            processo de envelhecimento e do “desgaste” da vida em geral.
          </p>
          <p>
            Referência:
            <ul>
              <li>American Cancer Society</li>
              <li>Center for Disease Control and Prevention</li>
            </ul>
          </p>
        </ContentBox>
      </IonContent>
    </AppLayout>
  )
}

export default OqueE
