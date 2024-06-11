import React from 'react'
import { IonButton, IonIcon } from '@ionic/react'
import styled from 'styled-components'
import { arrowForwardOutline } from 'ionicons/icons'
import AppLayout from '../../components/appLayout'
import { useHistory } from 'react-router-dom'

const MenuItems = styled(IonButton)`
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
    transform: scale(1.05);
  }
`

const ButtonText = styled.span`
  font-size: 20px;
`

const Container = styled.div`
  padding: 20px; /* Espaçamento para o conteúdo */
  display: flex;
  flex-direction: column;
  align-items: center;
`

const IconContainer = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
`

const CancerDeMama: React.FC = () => {
  const history = useHistory()

  const buttonsData = [
    { text: 'O que é?', route: '/cancer/mama/o-que-e' },
    { text: 'Causa', route: '/cancer/mama/causa' },
    { text: 'Orientações para Exame', route: '/cancer/mama/orientacoes-para-exame' },
    { text: 'Riscos', route: '/cancer/mama/riscos' },
    { text: 'Prevenção', route: '/cancer/mama/prevencao' },
    { text: 'Auto Exame', route: '/cancer/mama/autoexame' },
  ]

  const handleRedirect = (route: number) => {
    history.push(buttonsData[route].route)
  }

  return (
    <AppLayout title='Câncer de Mama' history={history} > 
      <Container>
        {buttonsData.map((button, index) => (
          <MenuItems key={index} onClick={() => handleRedirect(index)}>
            <ButtonText>{button.text}</ButtonText>
            <IconContainer>
              <IonIcon icon={arrowForwardOutline} />
            </IconContainer>
          </MenuItems>
        ))}
      </Container>
    </AppLayout>
  )
}

export default CancerDeMama
