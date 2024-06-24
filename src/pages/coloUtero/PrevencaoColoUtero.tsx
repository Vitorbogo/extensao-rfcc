import React, { useState, useEffect } from 'react';
import { IonContent, IonSpinner } from '@ionic/react';
import styled from 'styled-components'
import AppLayout from '../../components/appLayout'
import { useHistory } from 'react-router'
import { fetchFieldFromDocument } from '../../services/pagesInfo';

const ContentBox = styled.div`
  background-color: #ffaec0;
  border-radius: 10px;
  padding: 20px;
  margin: 40px 20px 20px 20px;
  color: var(--ion-color-text);`

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

const PrevencaoColoUtero: React.FC = () => {
  const history = useHistory();
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFieldFromDocument('cancer_colo_utero', 'prevencao');
        setContent(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <AppLayout title='Prevenção' history={history}>
       <IonContent>
        {loading ? (
          <LoadingContainer>
            <SpinnerWrapper>
              <IonSpinner name="crescent" />
            </SpinnerWrapper>
          </LoadingContainer>
        ) : (
          <ContentBox style={{ display: !!content ? 'block' : 'none' }}>
            <p dangerouslySetInnerHTML={{ __html: content || '' }} />
          </ContentBox>
        )}
      </IonContent>
    </AppLayout>
  )
}

export default PrevencaoColoUtero
