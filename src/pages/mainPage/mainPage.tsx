import { IonCol, IonGrid, IonRow } from '@ionic/react'
import AppLayout from '../../components/appLayout'

export default function MainPage() {
  return (
    <AppLayout title="Página principal">
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
