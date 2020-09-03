import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import Checkout from "./pages/Checkout";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/restaurants" component={Restaurants} />
      <Route exact path="/checkout" component={Checkout} />
    </Switch>
  );
};

export default Routes;
