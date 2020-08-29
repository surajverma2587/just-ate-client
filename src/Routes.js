import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/restaurants" component={Restaurants} />
    </Switch>
  );
};

export default Routes;
