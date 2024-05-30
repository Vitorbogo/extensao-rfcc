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

const OrientacoesParaExame: React.FC = () => {
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
                        <IonTitle className='ion-text-center'> Orientações </IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <ContentBox>
                        <p>Trazer seus documentos pessoais: identidade, CPF e o cartão do SUS.</p>
                    </ContentBox>
                </IonContent>
            </IonPage>
        </>
    )
}

export default OrientacoesParaExame;