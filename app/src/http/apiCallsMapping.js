import * as pokemonsPageActions from "../pages/PokemonsPage/actions";
import * as pokemonsPageAPI from "../pages/PokemonsPage/api";

import * as pokemonDetailedActions from "../pages/PokemonDetailedPage/actions";
import * as pokemonDetailsAPI from "../pages/PokemonDetailedPage/api";

import * as loginPageActions from "../pages/LoginPage/actions";
import * as loginPageAPI from "../pages/LoginPage/api";

import * as signUpPageActions from "../pages/RegistrationPage/actions";
import * as signUpPageAPI from "../pages/RegistrationPage/api";

import * as cartPageActions from "../pages/CartPage/actions";
import * as cartPageAPI from "../pages/CartPage/api";

import * as userAccountPageActions from "../pages/UserAccountPage/actions";
import * as userAccountPageAPI from "../pages/UserAccountPage/api";

const apiCallsMapping = (action) => {
  const mapping = {
    [pokemonsPageActions.GET_POKEMONS_REQUEST]: pokemonsPageAPI.getPokemons,

    [pokemonDetailedActions.GET_POKEMON_DETAILS_REQUEST]:
      pokemonDetailsAPI.getPokemonDetail,

    [loginPageActions.LOG_IN_REQUEST]: loginPageAPI.login,

    [signUpPageActions.SIGN_UP_REQUEST]: signUpPageAPI.signup,

    [cartPageActions.GET_CART_REQUEST]: cartPageAPI.getCart,
    [cartPageActions.ADD_ITEM_REQUEST]: cartPageAPI.addItemToCart,
    [cartPageActions.REMOVE_ITEM_REQUEST]: cartPageAPI.removeItemFromCart,
    [cartPageActions.CHANGE_CART_REQUEST]: cartPageAPI.changeItem,

    [userAccountPageActions.GET_ORDER_REQUEST]: userAccountPageAPI.getUserOrder,
    [userAccountPageActions.ADD_ORDER_REQUEST]: userAccountPageAPI.addUserOrder,
  };
  return mapping[action.type];
};

export default apiCallsMapping;
