import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Route } from 'react-router-dom'
import Menu from './components/Menu'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css'

/* Theme variables */
import './theme/variables.css'
import MainPage from './pages/mainPage/mainPage'
import CancerDeMama from './pages/cancerDeMama/CancerDeMama'
import OqueE from './pages/cancerDeMama/oqueE'
import Causa from './pages/cancerDeMama/Causa'
import Riscos from './pages/cancerDeMama/Riscos'
import Prevencao from './pages/cancerDeMama/Prevencao'
import Autoexame from './pages/cancerDeMama/Autoexame'
import OrientacoesParaExame from './pages/cancerDeMama/OrientacoesParaExame'

setupIonicReact()

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId='main'>
          <Menu />
          <IonRouterOutlet id='main'>
            <Route path='/' exact={true}>
              <MainPage />
            </Route>

            <Route path='/cancer/mama' exact={true}>
               <CancerDeMama/>
              </Route>

              <Route path='/oqueE' exact={true}>
                <OqueE/>
              </Route>

              <Route path='/Causa' exact={true}>
                <Causa/>
              </Route>

              <Route path='/Riscos' exact= {true}>

                  <Riscos/>

              </Route>

              <Route path= '/Prevencao' exact = {true}>

                <Prevencao/>

              </Route>

              <Route path='/Autoexame' exact={true}>
                <Autoexame/>
              </Route>

              <Route path= '/OrientacoesParaExame'>
                <OrientacoesParaExame/>
              </Route>
              
            {/* <Route path="/sobre" exact={true}>
              <Page />
            </Route> */}
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  )
}

export default App
