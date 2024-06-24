import React from 'react'
import { IonContent } from '@ionic/react'
import styled from 'styled-components'
import AppLayout from '../../components/appLayout'
import { useHistory } from 'react-router'

const SinaisSintomasColoUtero: React.FC = () => {
  const history = useHistory()

  return (
    <AppLayout title='Sinais e Sintomas' history={history}>
      <IonContent>
        <Container>
          <Title>Está com algum desses sintomas?</Title>

          <Question>
            <Column>Sangramento e secreção vaginal anormal</Column>
            <Column>
              <WrapperOption>
                <Option>
                  <input type='radio' id='question_one_sim' name='question_one' value='sim' />
                  <label htmlFor={'question_one_sim'}> Sim</label>
                </Option>
                <Option>
                  <input type='radio' id='question_one_two' name='question_one' value='nao' />
                  <label htmlFor={'question_one_two'}> Não</label>
                </Option>
              </WrapperOption>
            </Column>
          </Question>

          <Question>
            <Column>Dor abdominal associada com queixas urinárias ou intestinais</Column>
            <Column>
              <WrapperOption>
                <Option>
                  <input type='radio' id='question_two_sim' name='question_two' value='sim' />
                  <label htmlFor={'question_two_sim'}> Sim</label>
                </Option>
                <Option>
                  <input type='radio' id='question_two_no' name='question_two' value='nao' />
                  <label htmlFor={'question_two_no'}> Não</label>
                </Option>
              </WrapperOption>
            </Column>
          </Question>

          <Question>
            <Column>Sangramento menstrual mais prolongado</Column>
            <Column>
              <WrapperOption>
                <Option>
                  <input type='radio' id='question_three_sim' name='question_three' value='sim' />
                  <label htmlFor={'question_three_sim'}> Sim</label>
                </Option>
                <Option>
                  <input type='radio' id='question_three_no' name='question_three' value='nao' />
                  <label htmlFor={'question_three_no'}> Não</label>
                </Option>
              </WrapperOption>
            </Column>
          </Question>

          <Question>
            <Column>Sangramento após a relação sexual e dores durante a relação</Column>
            <Column>
              <WrapperOption>
                <Option>
                  <input type='radio' id='question_four_sim' name='question_four' value='sim' />
                  <label htmlFor={'question_four_sim'}> Sim</label>
                </Option>
                <Option>
                  <input type='radio' id='question_four_no' name='question_four' value='nao' />
                  <label htmlFor={'question_four_no'}> Não</label>
                </Option>
              </WrapperOption>
            </Column>
          </Question>

          <Button>Concluir</Button>
        </Container>
      </IonContent>
    </AppLayout>
  )
}

export default SinaisSintomasColoUtero

const Container = styled.div`
  border-radius: 10px;
  padding: 20px;
  margin: 40px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`

const Title = styled.div`
  font-size: 20px;
  margin-bottom: 45px;
`

const Question = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 45px;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

const Button = styled.button`
  width: 150px;
  height: 35px;
  font-size: 20px;
  background-color: pink;
  border-radius: 10px;
  color: white;
`

const WrapperOption = styled.div`
  display: flex;
  flex-direction: column;
`

const Option = styled.div``
