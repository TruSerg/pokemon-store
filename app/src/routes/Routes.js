import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "../pages/Home";

import { ROUTES } from "./routeNames";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Redirect path="*" to={ROUTES.HOME} />
    </Switch>
  );
};

export default Routes;
