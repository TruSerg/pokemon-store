import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "../pages/Home";
import PokemonPageContainer from "../pages/PokemonsPage/containers/PokemonPageContainer";
import PokemonDetailsPageContainer from "../pages/PokemonDetailedPage/containers/pokemonDetailsPageContainer";
import LoginPageContainer from "../pages/LoginPage/containers/LoginPageContainer";

import { ROUTES } from "./routeNames";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <PrivateRoute
        exact
        path={ROUTES.POKEMONS_PAGE}
        component={PokemonPageContainer}
      />
      <Route
        path={ROUTES.POKEMONS_DETAILS}
        component={PokemonDetailsPageContainer}
      />
      <Route path={ROUTES.LOGIN} component={LoginPageContainer} />
      <Redirect path="*" to={ROUTES.HOME} />
    </Switch>
  );
};

export default Routes;
