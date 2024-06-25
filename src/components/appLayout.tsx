import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonIcon } from '@ionic/react'
import { arrowBack } from 'ionicons/icons'

export default function AppLayout({
  title,
  children,
  history,
}: {
  title: string
  children: React.ReactNode
  history: any
}) {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>
            <div style={{ display: 'flex' }}>
              <div
                style={{ cursor: 'pointer', marginRight: '10px', alignSelf: 'center', display: 'flex' }}
                onClick={() => history.goBack()}
              >
                <IonIcon icon={arrowBack} />
              </div>
              {title}
            </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>{title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {children}
      </IonContent>
    </IonPage>
  )
}
