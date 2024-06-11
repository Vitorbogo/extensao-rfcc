import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonIcon,
} from '@ionic/react'
import { arrowBack } from 'ionicons/icons'
import { useParams } from 'react-router'

export default function AppLayout({
  title,
  children,
  history,
}: {
  title: string
  children: React.ReactNode
  history: any
}) {
  const { name } = useParams<{ name: string }>()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>
            <div style={{display: "flex"}}>
              <div
                style={{ cursor: 'pointer', marginRight: '10px' }}
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
            <IonTitle size='large'>Title</IonTitle>
          </IonToolbar>
        </IonHeader>
        {children}
      </IonContent>
    </IonPage>
  )
}
