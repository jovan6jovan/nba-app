import React from "react";
import { Switch, Route } from "react-router-dom";

import Teams from "../teams/Teams";
import Players from "../players/Players";
import Games from "../games/Games";

const Main = () => (
  <Switch>
    <Route exact path="/" />
    <Route path="/teams" component={Teams} />
    <Route path="/players" component={Players} />
    <Route path="/games" component={Games} />
  </Switch>
);

export default Main;
