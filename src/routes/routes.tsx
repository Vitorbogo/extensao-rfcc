import React from 'react'
import { Route } from 'react-router'
import MainPage from '../pages/mainPage/mainPage'
import { ColoUteroMenu, PrevencaoColoUtero, PreventivoColoUtero, RiscoColoUtero } from '../pages/coloUtero'
import CausaColoUtero from '../pages/coloUtero/CausaColoUtero'
import CancerDeMama from '../pages/cancerDeMama/cancerDeMama'
import OqueE from '../pages/cancerDeMama/oqueE'
import Riscos from '../pages/cancerDeMama/riscos'
import Prevencao from '../pages/cancerDeMama/prevencao'
import Autoexame from '../pages/cancerDeMama/autoexame'
import OrientacoesParaExame from '../pages/cancerDeMama/orientacoesParaExame'
import OQueEColoUtero from '../pages/coloUtero/oqueE'
import SinaisSintomasColoUtero from '../pages/coloUtero/SinaisSintomas'
import OrientacoesColoUtero from '../pages/coloUtero/OrientacoeColoUtero'
import { Colaboracoes } from '../pages/Colaboracoes'
import Noticias from '../pages/Noticias/Noticias'
import Login from '../pages/login/Login'
import { Contato } from '../pages/Contato' 
import AgendarColeta from '../pages/AgendarColeta/AgendarColeta'
import About from '../pages/About/about'
import { Artesanato, Brecho, ColaboraPix, DoacoesCabelo, Terapeutas } from '../pages/Colaboracoes/components'

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
        <RiscoColoUtero />
      </Route>
      <Route path='/cancer/colo-utero/preventivo'>
        <PreventivoColoUtero />
      </Route>
      <Route path='/cancer/colo-utero/prevencao'>
        <PrevencaoColoUtero />
      </Route>

      <Route path='/login'>
        <Login />
      </Route>

      {/* Notícias */}
      <Route path='/noticias'>
        <Noticias />
      </Route>

      {/* cancer mama */}
      <Route path='/cancer/causa'>
        <CausaColoUtero />
      </Route>
      <Route path='/cancer/mama'>
        <CancerDeMama />
      </Route>
      <Route path='/cancer/mama/o-que-e'>
        <OqueE />
      </Route>

      <Route path='/cancer/mama/causa'>{/* <Causa /> */}</Route>

      <Route path='/cancer/mama/riscos'>
        <Riscos />
      </Route>

      <Route path='/cancer/mama/prevencao'>
        <Prevencao />
      </Route>

      <Route path='/cancer/mama/autoexame'>
        <Autoexame />
      </Route>

      <Route path='cancer/mama/orientacoes-para-exame'>
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
      <Route path='/sobre/colaboracoes'>
        <Colaboracoes />
      </Route>
      <Route path='/colabora/pix'>
        <ColaboraPix />
      </Route>
      <Route path='/colabora/cabelo'>
        <DoacoesCabelo />
      </Route>
      <Route path='/colabora/terapeuta'>
        <Terapeutas />
      </Route>
      <Route path='/colabora/brecho'>
        <Brecho />
      </Route>
      <Route path='/colabora/artesanato'>
        <Artesanato />
      </Route>

      {/* Contato */}
      <Route path='/contato'>
        <Contato />
      </Route>
    </>
  )
}

export default AppRoutes
