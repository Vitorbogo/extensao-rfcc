import React from 'react';
import { IonButton, IonHeader, IonTitle, IonToolbar, IonIcon, IonPage, IonContent, IonButtons } from '@ionic/react';
import styled from 'styled-components';
import {arrowBackOutline} from 'ionicons/icons'
import { useHistory } from 'react-router';

const ContentBox = styled.div`
  background-color: #ffaec0;
  border-radius: 10px;
  padding: 20px;
  margin: 40px 20px 20px 20px; 
  color: var(--ion-color-text);
`;


const OqueE: React.FC = () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton onClick={goBack}>
                            <IonIcon icon={arrowBackOutline} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle className="ion-text-center"> O que é? </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <ContentBox>
                    <p>O câncer de mama pode ocorrer em mulheres e, raramente, em homens. Os sintomas do câncer de mama incluem um nódulo na mama, secreção com sangue pelo mamilo e mudanças na forma ou textura do mamilo ou da mama. O tratamento depende da fase do câncer. Pode envolver quimioterapia, radioterapia e cirurgia.</p>
                </ContentBox>
            </IonContent>
        </IonPage>
    );
}

export default OqueE;