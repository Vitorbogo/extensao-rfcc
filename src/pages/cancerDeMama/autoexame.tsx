import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonToast, IonInput } from '@ionic/react';
import { loginUser, registerUser, loginUserWithGoogle } from '../../services/authService';
import { useFirebase } from '../../FirebaseContext';
import styled from 'styled-components';

const StyledIonButton = styled(IonButton)`
  background-color: #ffaec0; 
  color: #ffffff;
  margin-bottom: 10px;
  &:hover {
    background-color: #ff8bb4; 
  }
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
      // Renderizar usuário
      setUser(result.user);
    } else {
      setToastMessage('Erro ao realizar login.');
    }
    setShowToast(true);
  };

  const handleRegister = async () => {
    const result = await registerUser(email, password);
    if (result) {
      // Renderizar usuário
      setUser(result.user);
    } else {
      setToastMessage('Erro ao registrar usuário.');
    }
    setShowToast(true);
  };

  const handleGoogleLogin = async () => {
    const result = await loginUserWithGoogle();
    if (result) {
      // Renderizar usuário
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
