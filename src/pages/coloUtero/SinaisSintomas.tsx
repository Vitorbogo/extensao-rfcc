import React, { useState, useEffect } from 'react';
import { IonContent, IonSpinner } from '@ionic/react';
import styled from 'styled-components';
import AppLayout from '../../components/appLayout';
import { useHistory } from 'react-router';
import { fetchCollectionForm } from '../../services/pagesInfo';

const SinaisSintomasColoUtero: React.FC = () => {
  const history = useHistory();
  const [questions, setQuestions] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCollectionForm('sinais_sintomas');
        setQuestions(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <AppLayout title='Sinais e Sintomas' history={history}>
      <IonContent>
        {loading ? (
          <LoadingContainer>
            <SpinnerWrapper>
              <IonSpinner name="crescent" />
            </SpinnerWrapper>
          </LoadingContainer>
        ) : (
          <Container>
            <Title>Está com algum desses sintomas?</Title>
            {questions.map((question, index) => (
              <Question key={index}>
                <Column>{question}</Column>
                <Column>
                  <WrapperOption>
                    <Option>
                      <input type='radio' id={`question_${index}_sim`} name={`question_${index}`} value='sim' />
                      <label htmlFor={`question_${index}_sim`}> Sim</label>
                    </Option>
                    <Option>
                      <input type='radio' id={`question_${index}_nao`} name={`question_${index}`} value='nao' />
                      <label htmlFor={`question_${index}_nao`}> Não</label>
                    </Option>
                  </WrapperOption>
                </Column>
              </Question>
            ))}
            <Button>Concluir</Button>
          </Container>
        )}
      </IonContent>
    </AppLayout>
  );
};

export default SinaisSintomasColoUtero;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;`;

const Container = styled.div`
  border-radius: 10px;
  padding: 20px;
  margin: 40px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 20px;
  margin-bottom: 45px;
`;

const Question = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 45px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Button = styled.button`
  width: 150px;
  height: 35px;
  font-size: 20px;
  background-color: pink;
  border-radius: 10px;
  color: white;
`;

const WrapperOption = styled.div`
  display: flex;
  flex-direction: column;
`;

const Option = styled.div``;
