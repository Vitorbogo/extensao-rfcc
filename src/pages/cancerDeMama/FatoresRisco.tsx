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

const FatoresRisco: React.FC = () => {
  const history = useHistory()

  return (
    <AppLayout title='Fatores de Risco' history={history}>
      <IonContent>
        <ContentBox>
          Os principais fatores de risco para o desenvolvimento de câncer de mama incluem ser mulher e envelhecer. Vamos
          explicar melhor:
          <p>
            <strong>Sexo:</strong> Ser do sexo feminino é o principal fator de risco para o desenvolvimento de câncer de
            mama (pois homens também têm câncer de mama). São estimados cerca de 100 casos de câncer de mama em mulheres
            para um caso em homem. No Brasil, são esperados para esse ano cerca de 73.610 casos de câncer de mama em
            mulheres e 730 casos de câncer de mama em homens.
          </p>
          <p>
            <strong>Envelhecimento:</strong> A idade também desempenha um papel importante. O risco aumenta com a idade,
            sendo mais comum em mulheres acima dos 50 anos. As células da mama estão em constante renovação, morrendo e
            nascendo milhões de células todos os dias em um processo biológico replicativo.
          </p>
          <p>
            Com o envelhecimento o ciclo celular fica desgastado e perde seu controle fino podendo ocorrer mutações no
            DNA. Uma célula saudável que deveria dar origem a outra célula saudável passa a dar origem a uma célula
            doente, essa célula doente por sua vez dá origem a uma célula ainda mais doente… e assim sucessivamente. O
            corpo entra em processo de hiperprodução de células defeituosas gerando uma massa/nódulo em crescimento
            celular descontrolado.
          </p>
          <p>
            <strong>Histórico Familiar:</strong> Ter parentes de primeiro grau (mãe, irmã ou filha) com câncer de mama
            aumenta o risco, especialmente se a doença ocorreu em uma idade jovem.
          </p>
          <p>
            <strong>Mutação Genética:</strong> Portadores de mutações nos genes BRCA1, BRCA2, PALB2, TP53, dentre
            outros, têm um risco significativamente maior de desenvolver câncer de mama.
          </p>
          <p>
            <strong>Exposição a Estrogênio:</strong> Exposições prolongadas ao estrogênio, seja devido a terapia
            hormonal de reposição, uso de contraceptivos hormonais por longos períodos ou menarca precoce (início da
            menstruação) e menopausa tardia, podem aumentar o risco.
          </p>
          <p>
            <strong>Menstruação Precoce e Menopausa Tardia:</strong> Começar a menstruar cedo (antes dos 12 anos) ou
            entrar na menopausa tardiamente (após os 55 anos) pode aumentar o risco pela maior exposição estrogênica ao
            longo da vida.
          </p>
          <p>
            <strong>Terapia de Reposição Hormonal:</strong> O uso prolongado de terapia hormonal após a menopausa
            aumenta o risco pelo maior tempo de estímulo replicativo celular pelo hormônio no corpo da mulher.
          </p>
          <p>
            <strong>Densidade Mamária Alta:</strong> Tecido mamário denso pode ocultar cânceres em mamografias,
            aumentando o risco.
          </p>
          <p>
            <strong>Histórico Pessoal de Câncer de Mama:</strong> Se você já teve câncer de mama em uma mama, tem maior
            risco de desenvolver na outra mama ou recidiva.
          </p>
          <p>
            <strong>Histórico de Lesões Proliferativas:</strong> Certas lesões não cancerosas da mama, como hiperplasia
            atípica ou carcinoma lobular in situ, podem aumentar o risco de câncer de mama.
          </p>
          <p>
            <strong>Radiação na Região do Tórax:</strong> Ter recebido tratamento de radiação na área do tórax,
            especialmente durante a infância para tratamento de linfomas da região torácica, aumenta o risco de câncer
            de mama.
          </p>
          <p>
            <strong>Obesidade:</strong> Estar acima do peso ou estar obeso, principalmente após a menopausa, está
            associado a um maior risco.
          </p>
          <p>
            <strong>Consumo de Álcool:</strong> Beber álcool em excesso, mesmo em quantidade moderada, pode aumentar o
            risco de câncer de mama.
          </p>
          <p>
            <strong>Inatividade Física/Sedentarismo:</strong> A falta de atividade física regular está ligada a um maior
            risco de câncer de mama.
          </p>
          <p>
            É importante lembrar que ter um ou mais desses fatores de risco não significa necessariamente que você
            desenvolverá câncer de mama. Muitas pessoas com fatores de risco nunca desenvolvem a doença, enquanto outras
            sem fatores de risco podem ser diagnosticadas com câncer de mama.
          </p>
          <p>
            Vale a pena ressaltar que alguns desses fatores são modificáveis e exercem grande importância na redução de
            riscos.
          </p>
          <p>
            <strong>Referência:</strong>
          </p>
          <p>
            <ul>
              <li>IARC, <a href='https://gco.iarc.fr/' target='_blank'> https://gco.iarc.fr/</a></li>
              <li>INCA, <a href='#' target='_blank'>Instituto Nacional do Câncer</a></li>
              <li><a href='BreastCancer.org' target='_blank'> BreastCancer.org</a></li>
              <li><a href='#' target='_blank'>National Cancer Institute</a></li>
            </ul>
          </p>
        </ContentBox>
      </IonContent>
    </AppLayout>
  )
}

export default FatoresRisco
