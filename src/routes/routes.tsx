import React from 'react'
import { Route } from 'react-router'
import MainPage from '../pages/mainPage/mainPage'
import { ColoUteroMenu } from '../pages/coloUtero'
import TextComponent from '../pages/coloUtero/text'
import CausaColoUtero from '../pages/coloUtero/Causa'
import CancerDeMama from '../pages/cancerDeMama/cancerDeMama'
import OqueE from '../pages/cancerDeMama/oqueE'
import Causa from '../pages/coloUtero/Causa'
import Riscos from '../pages/cancerDeMama/riscos'
import Prevencao from '../pages/cancerDeMama/prevencao'
import Autoexame from '../pages/cancerDeMama/autoexame'
import OrientacoesParaExame from '../pages/cancerDeMama/orientacoesParaExame'
import { AgendarColeta } from '../pages/AgendarColeta'
import { About } from '../pages/About'

const AppRoutes: React.FC = () => {
  return (
    <>
      {/* dashboard */}
      <Route path='/' exact={true}>
        <MainPage />
      </Route>

      {/* cancer */}
      <Route path='/cancer/colo-utero'>
        <ColoUteroMenu />
      </Route>
      <Route path='/cancer/oque-e'>
        {/* <OQueEColoUtero /> */}
        <TextComponent
          content='O câncer de colo de útero é um tumor maligno que ocorre na parte inferior do útero, que se conecta'
          title='O que é?'
        />
      </Route>

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
        <Causa />
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
