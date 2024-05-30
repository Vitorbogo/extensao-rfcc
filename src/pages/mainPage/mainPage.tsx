import { IonCol, IonGrid, IonRow } from '@ionic/react'
import AppLayout from '../../components/appLayout'

const MainPage: React.FC = () => {
  return (
    <AppLayout title="Home">
      <IonGrid>
        <IonRow>
          <IonCol size="6">
            <div style={{ backgroundColor: 'pink', height: '100px' }}></div>
          </IonCol>
          <IonCol size="6">
            <div style={{ backgroundColor: 'pink', height: '100px' }}></div>
          </IonCol>
          <IonCol size="6">
            <div style={{ backgroundColor: 'pink', height: '100px' }}></div>
          </IonCol>
          <IonCol size="6">
            <div style={{ backgroundColor: 'pink', height: '100px' }}></div>
          </IonCol>
          <IonCol size="6">
            <div style={{ backgroundColor: 'pink', height: '100px' }}></div>
          </IonCol>
          <IonCol size="6">
            <div style={{ backgroundColor: 'pink', height: '100px' }}></div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </AppLayout>
  )
}

export default MainPage
