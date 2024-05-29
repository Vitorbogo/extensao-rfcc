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

const Prevencao: React.FC = () => {
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
                        <IonTitle className='ion-text-center'> Prevenção </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <ContentBox>
                        <p>Como medidas que podem contribuir para a prevenção primária da doença, estimula-se, portanto, praticar atividade física, manter o peso corporal adequado, adotar uma alimentação mais saudável e evitar ou reduzir o consumo de bebidas alcoólicas. Amamentar é também um fator protetor.</p>
                    </ContentBox>
                </IonContent>
            </IonPage>
        </>
    )
}

export default Prevencao;