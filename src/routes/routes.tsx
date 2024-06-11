import React from 'react'
import { Route } from 'react-router'
import MainPage from '../pages/mainPage/mainPage'
import { ColoUteroMenu } from '../pages/coloUtero'
import TextComponent from '../pages/coloUtero/text'
import CausaColoUtero from '../pages/coloUtero/CausaColoUtero'
import CancerDeMama from '../pages/cancerDeMama/cancerDeMama'
import OqueE from '../pages/cancerDeMama/oqueE'
import Riscos from '../pages/cancerDeMama/riscos'
import Prevencao from '../pages/cancerDeMama/prevencao'
import Autoexame from '../pages/cancerDeMama/autoexame'
import OrientacoesParaExame from '../pages/cancerDeMama/orientacoesParaExame'
import { AgendarColeta } from '../pages/AgendarColeta'
import { About } from '../pages/About'
import OQueEColoUtero from '../pages/coloUtero/oqueE'
import SinaisSintomasColoUtero from '../pages/coloUtero/SinaisSintomas'
import OrientacoesColoUtero from '../pages/coloUtero/OrientacoeColoUtero'

const AppRoutes: React.FC = () => {
  return (
    <>
      {/* dashboard */}
      <Route path='/' exact={true}>
        <MainPage />
      </Route>

      {/* cancer colo utero */}
      <Route path='/cancer/colo-utero'>
        <ColoUteroMenu />
      </Route>
      <Route path='/cancer/colo-utero/oque-e'>
        <OQueEColoUtero />
      </Route>
      <Route path='/cancer/colo-utero/causa'>
        <CausaColoUtero />
      </Route>
      <Route path='/cancer/colo-utero/sinais'>
        <SinaisSintomasColoUtero />
      </Route>
      <Route path='/cancer/colo-utero/orientacao'>
        <OrientacoesColoUtero />
      </Route>
      <Route path='/cancer/colo-utero/risco'>
        {/* <OQueEColoUtero /> */}
      </Route>
      <Route path='/cancer/colo-utero/preventivo'>
        <OQueEColoUtero />
      </Route>
      <Route path='/cancer/colo-utero/prevencao'>
        {/* <OQueEColoUtero /> */}
      </Route>


      {/* cancer mama */}
      <Route path='/cancer/causa'>
        <CausaColoUtero />
      </Route>
      <Route path='/cancer/mama'>
        <CancerDeMama />
      </Route>
      <Route path='/oqueE'>
        <OqueE />
      </Route>

      <Route path='/Causa'>
        {/* <Causa /> */}
      </Route>

      <Route path='/Riscos'>
        <Riscos />
      </Route>

      <Route path='/Prevencao'>
        <Prevencao />
      </Route>

      <Route path='/Autoexame'>
        <Autoexame />
      </Route>

      <Route path='/OrientacoesParaExame'>
        <OrientacoesParaExame />
      </Route>

      {/* Agendamento */}
      <Route path='/agendar-coleta'>
        <AgendarColeta />
      </Route>

       {/* About */}
       <Route path='/sobre'>
        <About />
      </Route>
    </>
  )
}

export default AppRoutes
