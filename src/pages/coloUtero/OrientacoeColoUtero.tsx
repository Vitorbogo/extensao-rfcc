import React, { useState, useEffect } from 'react';
import { IonContent, IonSpinner } from '@ionic/react';
import styled from 'styled-components';
import AppLayout from '../../components/appLayout';
import { useHistory } from 'react-router';
import { fetchFieldFromDocument } from '../../services/pagesInfo';

const OrientacoesColoUtero: React.FC = () => {
  const history = useHistory();
  const [orientacoes, setOrientacoes] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFieldFromDocument('cancer_colo_utero', 'orientacoes_para_exame');
        const parsedData = data.split('</p>').map((str: string) => str.replace('<p>', '').trim()).filter((str: string) => str);
        setOrientacoes(parsedData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <AppLayout title='Orientações para o exame' history={history}>
      <IonContent>
        {loading ? (
          <LoadingContainer>
            <SpinnerWrapper>
              <IonSpinner name="crescent" />
            </SpinnerWrapper>
          </LoadingContainer>
        ) : (
          <Container>
            {orientacoes.map((orientacao, index) => (
              <ContentBox key={index}>
                <p>{orientacao}</p>
              </ContentBox>
            ))}
          </Container>
        )}
      </IonContent>
    </AppLayout>
  );
};

export default OrientacoesColoUtero;

const Container = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentBox = styled.div`
  background-color: #ffaec0;
  border-radius: 10px;
  padding: 5px;
  margin: 10px;
  color: var(--ion-color-text);
  width: 50%;
  text-align: center;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

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

