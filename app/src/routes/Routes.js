import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import PokemonPageContainer from "../pages/PokemonsPage/containers/PokemonPageContainer";
import PokemonDetailsPageContainer from "../pages/PokemonDetailedPage/containers/pokemonDetailsPageContainer";
import LoginPageContainer from "../pages/LoginPage/containers/LoginPageContainer";

import { ROUTES } from "./routeNames";
import PrivateRoute from "./PrivateRoute";
import RegistrationPageContainer from "../pages/RegistrationPage/containers/RegistrationPageContainer";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.LOGIN} component={LoginPageContainer} />
      <Route path={ROUTES.REGISTRATION} component={RegistrationPageContainer} />
      <PrivateRoute
        exact
        path={ROUTES.POKEMONS_PAGE}
        component={PokemonPageContainer}
      />
      <Route
        path={ROUTES.POKEMONS_DETAILS}
        component={PokemonDetailsPageContainer}
      />

      <Redirect path="*" to={ROUTES.LOGIN} />
    </Switch>
  );
};

export default Routes;
