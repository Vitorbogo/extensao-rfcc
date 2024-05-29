import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react'
import { useParams } from 'react-router'
import ExploreContainer from '../components/ExploreContainer'
import './Page.css'
import AppLayout from '../components/appLayout'

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>()

  return (
    <AppLayout title={name}>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={name} />
      </IonContent>
    </AppLayout>
  )
}

export default Page
