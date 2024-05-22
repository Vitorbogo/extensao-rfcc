import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react'

import { useLocation } from 'react-router-dom'
import {
  femaleOutline,
  femaleSharp,
  heartOutline,
  heartSharp,
  helpCircleOutline,
  helpCircleSharp,
  homeSharp,
  mailOutline,
  newspaperOutline,
  newspaperSharp,
  womanOutline,
  womanSharp,
} from 'ionicons/icons'
import './Menu.css'

interface AppPage {
  url: string
  iosIcon: string
  mdIcon: string
  title: string
}

const appPages: AppPage[] = [
  {
    title: 'Página Inicial',
    url: '/',
    iosIcon: mailOutline,
    mdIcon: homeSharp,
  },
  {
    title: 'Câncer de Mama',
    url: '/cancer/mama',
    iosIcon: womanOutline,
    mdIcon: womanSharp,
  },
  {
    title: 'Câncer do Colo do Útero',
    url: '/cancer/colo-utero',
    iosIcon: femaleOutline,
    mdIcon: femaleSharp,
  },
  {
    title: 'Colaborações',
    url: '/sobre/colaboracoes',
    iosIcon: heartOutline,
    mdIcon: heartSharp,
  },
  {
    title: 'Notícias',
    url: '/noticias',
    iosIcon: newspaperOutline,
    mdIcon: newspaperSharp,
  },
  {
    title: 'Sobre',
    url: '/sobre',
    iosIcon: helpCircleOutline,
    mdIcon: helpCircleSharp,
  },
]

// const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders']

const Menu: React.FC = () => {
  const location = useLocation()

  return (
    <IonMenu contentId='main' type='overlay'>
      <IonContent>
        <IonList id='inbox-list'>
          <IonListHeader>Bem-vinda!</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? 'selected' : ''
                  }
                  routerLink={appPage.url}
                  routerDirection='none'
                  lines='none'
                  detail={false}
                >
                  <IonIcon
                    aria-hidden='true'
                    slot='start'
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            )
          })}
        </IonList>

        {/* <IonList id='labels-list'>
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines='none' key={index}>
              <IonIcon aria-hidden='true' slot='start' icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList> */}
      </IonContent>
    </IonMenu>
  )
}

export default Menu
