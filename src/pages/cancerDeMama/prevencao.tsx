import React from 'react'
import { IonContent } from '@ionic/react'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import AppLayout from '../../components/appLayout'

const ContentBox = styled.div`
  border-radius: 10px;
  padding: 20px;
  margin: 40px 20px 20px 20px;
  color: var(--ion-color-text);

  & a {
    text-decoration: none;
    color: pink;
  }
`

const Prevencao: React.FC = () => {
  const history = useHistory()

  return (
    <AppLayout title='Prevenção/Diagnóstico' history={history}>
      <IonContent>
        <ContentBox>
          Aqui é extremamente importante entender a terminologia médica e vale uma breve introdução sobre os conceitos
          de prevenção primária e prevenção secundária.
          <p>
            <strong>Prevenção primária </strong>
          </p>
          <p>São estratégias voltadas para evitar/reduzir o risco que o câncer apareça.</p>
          <p>Adoção de um estilo de vida saudável:</p>
          <p>
            <ul>
              <li>atividade física regular</li>
              <li>alimentação equilibrada</li>
              <li>perder peso</li>
              <li>evitar o consumo excessivo de álcool</li>
              <li>não fumar</li>
            </ul>
          </p>
          <p>
            <strong>Amamentação: </strong> A amamentação pode reduzir o risco de desenvolver câncer de mama,
            especialmente quando realizada por um período prolongado.
          </p>
          <p>
            <strong>Evitar a terapia hormonal: </strong> Evitar o uso de terapia hormonal para reposição hormonal após a
            menopausa, a menos que seja estritamente necessário e não a utilizar pois mais de 5 anos.
          </p>
          <p>
            O câncer de mama não é completamente previsível. Mas podemos impactar através destas ações para reduzir o
            risco do câncer de mama aparecer.
          </p>
          <p>
            <strong>Prevenção secundária</strong>
          </p>
          <p>O foco aqui é o diagnóstico precoce da doença.</p>
          <p>
            Neste tópico estamos falando de diagnosticar o câncer de mama antes de ser palpável. Para isso precisamos
            fazer exames de imagem como a mamografia.
          </p>
          <p>
            <img src='assets/images/mamografia.jpeg' width={"350px"} />
          </p>
          <p>
            Por fim, fazer mamografia periodicamente não previne o câncer de mama em sua essência, ou seja, não impede
            de se ter o câncer de mama (portanto, não é uma medida de prevenção primária). Fazer a mamografia permite,
            sim, diagnosticar o câncer de mama no início e, com isso, termos altíssimas chances de cura (isso é o que
            chamamos de prevenção secundária).
          </p>
          <p>
            Vamos dividir em população de risco habitual (consiste na maior parte da população) ou de população de alto
            risco (pacientes com grande história familiar ou com mutações genéticas já comprovadas como dos genes BRCA
            1, BRCA2, TP53 e PALB2)
          </p>
          <p>
            <strong>População de risco habitual</strong>
          </p>
          <p>
            <ul>
              <li>
                Mamografia: indicada para mulheres acima dos 40 anos de idade ou 10 anos antes do caso mais jovem na
                família
              </li>
            </ul>
          </p>
          <p>
            <strong>População de alto risco</strong>
          </p>
          <p>
            Na população de alto risco, além da mamografia, vamos precisar também realizar a Ressonância Magnética (RM)
            das mamas.
          </p>
          <p>
            A RM de mamas é realizada em um aparelho que se assemelha a um tubo. O exame é realizado de barriga para
            baixo.
          </p>
          <p>
          <img src='assets/images/ressonancia.jpg' width={"350px"} />
          </p>
          <p>A – Pacientes com mutação do gene BRCA ou PALB</p>
          <p>
            <ul>
              <li>Consulta médica + exame físico: semestral a partir dos 25 anos</li>
              <li>Ressonância magnética (RM) de mamas: anual a partir dos 25 anos de idade</li>
              <li>Mamografia: anual a partir dos 30 anos de idade e a cada 12 meses</li>
            </ul>
          </p>
          <p>B – Pacientes com mutação do gene TP53</p>
          <p>
            <ul>
              <li>Consulta médica + exame físico: semestral a partir dos 20 anos</li>
              <li>Ressonância magnética (RM) de mamas: a partir dos 20 anos de idade e a cada 12 meses</li>
              <li>Mamografia: a partir dos 30 anos de idade e a cada 12 meses</li>
            </ul>
          </p>
          <p>
            C – Paciente que realizaram radioterapia na região do tórax para tratamento de linfoma quando eram
            adolescentes ou adultos jovens:
          </p>
          <p>
            <ul>
              <li>Consulta médica + exame físico: semestral após o 8o. ano da radioterapia</li>
              <li>Ressonância magnética (RM) de mamas: a partir dos 25 anos de idade e a cada 12 meses</li>
              <li>Mamografia: a partir dos 30 anos de idade e a cada 12 meses</li>
            </ul>
          </p>
          <p>
            Vários casos não se enquadram nestes critérios devendo sua avaliação ser individualizada de acordo aos dados
            colhidos em consulta médica e a idade de manifestação do câncer de mama no indivíduo mais jovem da família.
          </p>
          <p>
            <strong>Observação: </strong> Se você tiver algum sintoma como: nódulo palpável, secreção pelo bico,
            abaulamento/retração da pele ou do bico, nódulo na axila a sua avaliação deve ser imediata.
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

export default Prevencao
