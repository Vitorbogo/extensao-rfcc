import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonToast, IonInput } from '@ionic/react';
import { loginUser, registerUser, loginUserWithGoogle } from '../../services/authService';
import { useFirebase } from '../../FirebaseContext';
import styled from 'styled-components';
import logoImage from '../../../public/assets/images/logo_rfcc.png'; // Renomeie a importação da imagem

const StyledIonButton = styled(IonButton)`
  --background: #ffc0cb !important;
  --background-activated: none;
  --background-focused: none;
  --background-hover: none;
  color: var(--ion-color-primary-text);
  margin-bottom: 10px;
  &:hover {
    transform: scale(1.05);
  }
`;

const StyledLogoImage = styled.img` // Renomeie para StyledLogoImage
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto; /* Centraliza horizontalmente */
`;

const Login: React.FC = () => {
  const { user, isLoading, setUser } = useFirebase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleLogin = async () => {
    const result = await loginUser(email, password);
    if (result) {
      setUser(result.user);
    } else {
      setToastMessage('Erro ao realizar login.');
    }
    setShowToast(true);
  };

  const handleRegister = async () => {
    const result = await registerUser(email, password);
    if (result) {
      setUser(result.user);
    } else {
      setToastMessage('Erro ao registrar usuário.');
    }
    setShowToast(true);
  };

  const handleGoogleLogin = async () => {
    const result = await loginUserWithGoogle();
    if (result) {
      setUser(result.user);
    } else {
      setToastMessage('Erro ao realizar login com Google.');
    }
    setShowToast(true);
  };

  if (isLoading) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Carregando...</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p>Carregando...</p>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* Imagem centralizada */}
        <StyledLogoImage width={"150px"} src={logoImage} alt="Logo RFCC" />

        <IonInput
          value={email}
          placeholder="Email"
          onIonChange={(e) => setEmail(e.detail.value!)}
        />
        <IonInput
          type="password"
          value={password}
          placeholder="Senha"
          onIonChange={(e) => setPassword(e.detail.value!)}
        />
        <StyledIonButton expand="block" onClick={handleLogin}>
          Login
        </StyledIonButton>
        <StyledIonButton expand="block" onClick={handleRegister}>
          Registrar
        </StyledIonButton>
        <StyledIonButton expand="block" onClick={handleGoogleLogin}>
          Login com Google
        </StyledIonButton>
        <IonToast // Mensagem de erro
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
