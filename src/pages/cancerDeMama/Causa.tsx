import React from 'react';
import { IonButton, IonHeader, IonTitle, IonToolbar, IonIcon, IonPage, IonContent, IonButtons } from '@ionic/react';
import styled from 'styled-components';
import {arrowBackOutline} from 'ionicons/icons'
import { useHistory } from 'react-router';

const ContentBox = styled.div`
  background-color: #ffaec0;
  border-radius: 10px;
  padding: 20px;
  margin: 70px 20px 20px 20px; 
  color: var(--ion-color-text);
`;


const Causa: React.FC = () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };

    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonButton onClick={goBack}>
                                <IonIcon icon={arrowBackOutline} />
                            </IonButton>
                        </IonButtons>
                        <IonTitle className="ion-text-center"> Causa </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <ContentBox>
                        <p>O câncer de mama não tem uma causa única. Diversos fatores estão relacionados ao aumento do risco de desenvolver a doença, tais como: idade, fatores endócrinos/história reprodutiva, fatores comportamentais/ambientais e fatores genéticos/hereditários.</p>
                    </ContentBox>
                </IonContent>
            </IonPage>
        </>
    );
}

export default Causa;