import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PlanetsScreen from "./screens/planets";
import PlanetScreen from "./screens/planet";

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={PlanetsScreen} />
            <Route exact path="/planet/:id" component={PlanetScreen} />
        </Switch>
    </BrowserRouter>
)

export default Rotas;