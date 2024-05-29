import React from "react";
import { Route } from "react-router";
import Page from "../pages/Page";
import { ColoUteroMenu } from "../pages/coloUtero";
import { CausaColoUtero, OQueEColoUtero } from "../pages/coloUtero/components";

const AppRoutes: React.FC = () => {
    return (
        <>
            {/* dashbord */}
            <Route path="/" exact={true}>
                <Page />
            </Route>

            {/* cancer */}
            <Route path="/cancer/colo-utero" exact={true}>
                <ColoUteroMenu />
            </Route>
            <Route path="/cancer/oque-e" exact={true}>
                <OQueEColoUtero />
            </Route>
            <Route path="/cancer/causa" exact={true}>
                <CausaColoUtero />
            </Route>

            {/* others routes */}
        </>
    );
};

export default AppRoutes;
