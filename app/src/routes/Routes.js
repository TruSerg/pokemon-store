import { Switch, Route, Redirect } from "react-router-dom";

import PokemonPageContainer from "../pages/PokemonsPage/containers/PokemonPageContainer";
import PokemonDetailsPageContainer from "../pages/PokemonDetailedPage/containers/pokemonDetailsPageContainer";
import LoginPageContainer from "../pages/LoginPage/containers/LoginPageContainer";
import CartPageContainer from "../pages/CartPage/containers/CartPageContainer";
import UserAccountPageContainer from "../pages/UserAccountPage/containers/UserAccountPageContainer";

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
      <Route path={ROUTES.CART_PAGE} component={CartPageContainer} />
      <Route path={ROUTES.USER_PAGE} component={UserAccountPageContainer} />
      <Redirect path="*" to={ROUTES.LOGIN} />
    </Switch>
  );
};

export default Routes;
