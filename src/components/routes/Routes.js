import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "../layout/LandingPage";
import Players from "../players/Players";
import Teams from "../teams/Teams";
import Games from "../games/Games";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/players" component={Players} />
    <Route path="/teams" component={Teams} />
    <Route path="/games" component={Games} />
  </Switch>
);

export default Routes;
