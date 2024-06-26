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

const Causa: React.FC = () => {
  const history = useHistory()

  return (
    <AppLayout title='Causa' history={history}>
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
            <img src='assets/images/causa_genes.jpg' />
          </p>
          <p>
            As células normais possuem genes chamados proto-oncogenes, que ajudam a controlar quando as células crescem,
            se dividem para formar novas células ou permanecem vivas. Se um proto-oncogene for mutado (alterado) de
            certa forma, ele se torna um oncogene. Células que possuem esses oncogenes mutados podem se tornar
            cancerosas.
          </p>
          <p>
            As células normais também possuem genes chamados genes supressores de tumor, que ajudam a controlar com que
            frequência as células normais se dividem em duas, a reparar erros no DNA ou a fazer com que as células
            morram no momento certo. Se uma célula tem um gene supressor de tumor mutado, então a célula pode se
            transformar em câncer.
          </p>
          <p>
            Por fim, os cânceres podem ser causados por alterações genéticas que: • ativam oncogenes ou • desativam
            genes supressores de tumor.
          </p>
          <p>
            <strong>Mutações genéticas hereditárias</strong>
          </p>

          <p>
            Algumas alterações genéticas (mutações) são herdadas ou transmitidas a um individuo por seus pais dutante a
            formação do ser humano no momento da fecundação. Isso significa que essas mutações estão em todas as células
            quando o indivíduo nasce.
          </p>

          <p>
            Certas alterações genéticas hereditárias podem aumentar muito o risco de desenvolver certos cânceres e estão
            relacionadas a muitos dos cânceres que ocorrem em algumas famílias. Por exemplo, os genes BRCA (BRCA1 e
            BRCA2) são genes supressores de tumor. Quando um desses genes muda, ele não suprime mais o crescimento
            anormal das células, e o câncer é mais provável de se desenvolver. Uma alteração em um desses genes pode ser
            passada de um pai para um filho.
          </p>

          <p>
            <strong>Testes genéticos</strong>
          </p>

          <p>
            Os testes genéticos podem identificar mutações nos genes BRCA1 ou BRCA2, TP53, bem como em outros genes
            menos comuns, como PALB2, ATM ou CHEK2.
          </p>

          <p>
            <strong>Gerenciamento estratégico de quem tem mutações hereditárias:</strong>
          </p>

          <p>
            Essas mulheres podem então tomar medidas para reduzir seu risco de câncer de mama aumentando a consciência
            sobre seus seios e seguindo as recomendações adequadas de triagem para ajudar a encontrar o câncer em um
            estágio mais precoce e mais tratável. Como essas mutações também estão frequentemente associadas a outros
            cânceres (além do câncer de mama), mulheres com essas mutações também podem considerar triagem precoce e
            ações preventivas para outros cânceres.
          </p>

          <p>
            Mutacões em genes supressores de tumor como os genes BRCA são consideradas alta penetrância porque
            frequentemente levam ao câncer.
          </p>

          <p>
            <strong>Mutação genéticas adquiridas</strong>
          </p>

          <p>
            Essas são as principais responsáveis pelo desenvolvimento da maioria dos tipos de câncer que afetam os
            indivíduos.
          </p>

          <p>
            A maioria das mutações genéticas ligadas ao câncer de mama são adquiridas. Isso significa que a mudança
            ocorre nas células da mama durante a vida de uma pessoa, em vez de terem sido herdadas ou nascido com elas.
            As mutações de DNA adquiridas ocorrem ao longo do tempo e estão presentes apenas nas células cancerosas de
            mama.
          </p>

          <p>
            Essas mutações adquiridas de oncogenes e/ou genes supressores de tumor podem resultar de outros fatores,
            como radiação ou produtos químicos cancerígenos. Mas algumas mudanças genéticas podem ser eventos aleatórios
            que às vezes acontecem dentro de uma célula, sem ter uma causa externa. A maioria dos cânceres de mama
            possui várias mutações genéticas adquiridas.
          </p>

          <p>
            Com mais frequência, mutações de baixa penetração ou variações genéticas são um fator no desenvolvimento do
            câncer. Cada uma delas pode ter um pequeno efeito no surgimento do câncer em uma pessoa, mas o efeito geral
            na população pode ser grande porque as mutações são comuns e as pessoas frequentemente têm mais de uma ao
            mesmo tempo. Os genes envolvidos podem afetar funções como: níveis hormonais, metabolismo ou outros fatores
            que impactam o risco de câncer de mama. Esses genes também podem ser responsáveis por grande parte do risco
            de câncer de mama que ocorre em famílias.
          </p>
          <p>
            Por exemplo, fatores de risco relacionados ao estilo de vida, como o que você come e quanto se exercita,
            podem aumentar suas chances de desenvolver câncer de mama, mas ainda não sabemos exatamente como alguns
            desses fatores de risco fazem com que células normais se tornem cancerosas. Os hormônios também parecem
            desempenhar um papel em muitos casos de câncer de mama, mas não entendemos completamente como isso acontece.
          </p>
          <p>Logo, você pode interferir nas mutações adquiridas através de práticas saudáveis de vida.</p>
          <p>
            Sim, é verdade, se você adotar um estilo de vida saudável pode ajudar a reduzir o seu risco de desenvolver
            câncer de mama e outros tipos de cânceres.
          </p>
          <p>
            Aqui estão algumas práticas saudáveis de vida que podem influenciar positivamente a prevenção do câncer de
            mama:
          </p>
          <ul>
            <li>
              Alimentação saudável: Opte por uma dieta rica em frutas, vegetais, grãos integrais e proteínas magras.
              Reduza a ingestão de alimentos processados, gorduras saturadas e açúcares adicionados.
            </li>
            <li>
              Exercícios regulares: Mantenha-se ativo com atividades físicas regulares, como caminhadas, corridas,
              natação ou yoga. O exercício regular não apenas ajuda a manter um peso saudável, mas também pode reduzir o
              risco de câncer de mama
            </li>
            <li>
              Controle do peso: Mantenha um peso saudável para o seu corpo, pois o excesso de peso ou a obesidade estão
              associados a um maior risco de desenvolver câncer de mama.
            </li>
            <li>
              Evite o álcool: Reduza o consumo de álcool ou evite-o completamente, pois o consumo excessivo de álcool
              está ligado a um aumento do risco de câncer de mama
            </li>
            <li>
              Não fume: Se você fuma, procure ajuda para parar. O tabagismo não apenas aumenta o risco de vários tipos
              de câncer, mas também pode piorar os resultados do tratamento do câncer de mama.
            </li>
            <li>
              Limite a exposição a produtos químicos prejudiciais: Evite a exposição desnecessária a produtos químicos
              carcinogênicos, como produtos de limpeza agressivos, pesticidas e outros produtos químicos potencialmente
              nocivos.
            </li>
          </ul>
          <p>
            Embora essas práticas saudáveis de vida não garantam a prevenção do câncer de mama, elas podem ajudar a
            reduzir o risco e contribuir para uma vida mais saudável e equilibrada em geral.
          </p>
          <p>
            Sempre consulte seu médico de confiaça para orientações personalizadas sobre prevenção e detecção precoce do
            câncer de mama.
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
              <li>
                American Cancer Society.
                <a
                  href='https://www.cancer.org/cancer/types/breast-cancer/about/how-does-breast-cancer-form.html'
                  target='_blank'
                >
                https://www.cancer.org/cancer/types/breast-cancer/about/how-does-breast-cancer-form.html
                </a>
              </li>
            </ul>
          </p>
        </ContentBox>
      </IonContent>
    </AppLayout>
  )
}

export default Causa
