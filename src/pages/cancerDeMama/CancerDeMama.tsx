import React from 'react';
import { IonButton, IonHeader, IonTitle, IonToolbar, IonIcon, IonPage, IonRouterOutlet } from '@ionic/react';
import styled from 'styled-components';
import {arrowForwardOutline} from 'ionicons/icons'



const BotaoEstilizado = styled(IonButton)`
  background-color: #ffc0cb !important;
  border: none;
  --background: none;
  --background-activated: none;
  --background-focused: none;
  --background-hover: none;
  border-radius: 20px;
  width: calc(100% - 40px);  
  max-width: 400px;
  justify-content: space-between;
  margin: 15px auto;
  padding: 2%;
  color: var(--ion-color-primary-text);  
  box-shadow: none; 
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #ffaec0 !important; 
    transform: scale(1.05);   }

  
`;

const ButtonText = styled.span`
  font-size: 20px;
  `;

const Container = styled.div`
  padding: 20px; /* Espaçamento para o conteúdo */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconContainer = styled.div`
  position: absolute; 
  right: 15px; 
  top: 50%; 
  transform: translateY(-50%); 
`;

const buttonsData = [
  { text: "O que é?", route: "/oqueE" },
  { text: "Causa", route: "/Causa" },
  { text: "Orientações para Exame", route: "/OrientacoesParaExame" },
  { text: "Riscos", route: "/Riscos" },
  { text: "Prevenção", route: "/Prevencao" },
  { text: "Auto Exame", route: "/Autoexame" },
];

const CancerDeMama: React.FC = () => {
  return (
    <>
          
        <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Câncer de Mama</IonTitle>
        </IonToolbar>
      </IonHeader>

      <Container>
        {buttonsData.map((button, index) => (
          <BotaoEstilizado key={index} routerLink={button.route}>
            <ButtonText>{button.text}</ButtonText>
            <IconContainer>
            <IonIcon icon={arrowForwardOutline} />
            </IconContainer>
          </BotaoEstilizado>
        ))}
      </Container>

    </>
  );




}

export default CancerDeMama; 