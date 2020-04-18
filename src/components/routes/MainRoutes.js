import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "../layout/LandingPage";
import Players from "../players/Players";
import Teams from "../teams/Teams";
import Team from "../teams/Team";
import Games from "../games/Games";

const MainRoutes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/players" component={Players} />
    <Route exact path="/teams" component={Teams} />
    <Route exact path="/teams/:id" component={(props) => <Team {...props} />} />
    <Route path="/games" component={Games} />
  </Switch>
);

export default MainRoutes;
