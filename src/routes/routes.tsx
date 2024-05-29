import React from 'react'
import { Route } from 'react-router'
import Page from '../pages/Page'
import { ColoUteroMenu } from '../pages/coloUtero'
import CausaColoUtero from '../pages/coloUtero/Causa'
import TextComponent from '../pages/coloUtero/text'

const AppRoutes: React.FC = () => {
  return (
    <>
      {/* dashboard */}
      <Route path="/" exact={true}>
        <Page />
      </Route>

      {/* cancer */}
      <Route path="/cancer/colo-utero">
        <ColoUteroMenu />
      </Route>
      <Route path="/cancer/oque-e">
        {/* <OQueEColoUtero /> */}
        <TextComponent
          content="O câncer de colo de útero é um tumor maligno que ocorre na parte inferior do útero, que se conecta"
          title="O que é?"
        />
      </Route>
      <Route path="/cancer/causa">
        <CausaColoUtero />
      </Route>

      {/* others routes */}
    </>
  )
}

export default AppRoutes
