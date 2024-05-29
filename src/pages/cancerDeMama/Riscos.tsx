import React from 'react';
import { IonButton, IonHeader, IonTitle, IonToolbar, IonIcon, IonPage, IonContent, IonButtons } from '@ionic/react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {arrowBackOutline} from 'ionicons/icons'




const ContentBox = styled.div`
  background-color: #ffaec0;
  border-radius: 10px;
  padding: 20px;
  margin: 40px 20px 20px 20px; 
  color: var(--ion-color-text);
`;


const Riscos: React.FC = () => {
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
                        <IonTitle className='ion-text-center'> Riscos </IonTitle>   
                    </IonToolbar>       
                </IonHeader>

                <IonContent>
                    <ContentBox>
                        <p>
                            O câncer de mama não tem uma causa única. Diversos fatores estão relacionados ao aumento do risco de desenvolver a doença, tais como: idade, fatores endócrinos/história reprodutiva, fatores comportamentais/ambientais e fatores genéticos/hereditários. 
                            Mulheres mais velhas, sobretudo a partir dos 50 anos de idade, têm maior risco de desenvolver câncer de mama. O acúmulo de exposições ao longo da vida e as próprias alterações biológicas com o envelhecimento aumentam, de modo geral, esse risco.
                        </p>
                        <p>
                            Histórico de menarca precoce (idade da primeira menstruação menor que 12 anos), menopausa tardia (após os 55 anos), primeira gravidez após os 30 anos, nuliparidade, uso de contraceptivos orais (estrogênio-progesterona) e terapia de reposição hormonal pós-menopausa (estrogênio-progesterona).
                        </p>
                    </ContentBox>
                </IonContent>
            </IonPage>        
        </>
    )
}

export default Riscos;