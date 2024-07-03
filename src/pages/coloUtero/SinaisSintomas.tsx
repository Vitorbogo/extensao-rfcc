import React, { useEffect, useState } from 'react';
import { IonContent, IonSpinner } from '@ionic/react';
import styled from 'styled-components';
import AppLayout from '../../components/appLayout';
import { useHistory } from 'react-router';
import { fBuscaInfoPages } from '../../services/pagesInfo';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

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

const SinaisSintomasColoUtero: React.FC = () => {
  const history = useHistory();
  const [contentData, setContentData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fBuscaInfoPages('sinais_sintomas_colo_utero');
        setContentData(data);
      } catch (error) {
        console.error('Erro ao buscar dados do banco:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <AppLayout title="Sinais e Sintomas" history={history}>
      <IonContent>
        {loading ? (
          <LoadingContainer>
            <SpinnerWrapper>
              <IonSpinner name="crescent" />
            </SpinnerWrapper>
          </LoadingContainer>
        ) : (
          <Container>
            <Title>{contentData?.title}</Title>
            {contentData?.questions?.map((question: any, index: number) => (
              <Question key={index}>
                <Column>{question.question}</Column>
                <Column>
                  <WrapperOption>
                    <Option>
                      <input type="radio" id={`${question.name}_sim`} name={question.name} value="sim" />
                      <label htmlFor={`${question.name}_sim`}> Sim</label>
                    </Option>
                    <Option>
                      <input type="radio" id={`${question.name}_nao`} name={question.name} value="nao" />
                      <label htmlFor={`${question.name}_nao`}> Não</label>
                    </Option>
                  </WrapperOption>
                </Column>
              </Question>
            ))}
            <Button>{contentData?.buttonText}</Button>
          </Container>
        )}
      </IonContent>
    </AppLayout>
  );
};

export default SinaisSintomasColoUtero;
