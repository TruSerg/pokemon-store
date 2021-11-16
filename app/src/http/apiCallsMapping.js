import * as pokemonsPageActions from "../pages/PokemonsPage/actions";
import * as pokemonsPageAPI from "../pages/PokemonsPage/api";

import * as pokemonDetailedActions from "../pages/PokemonDetailedPage/actions";
import * as pokemonDetailsAPI from "../pages/PokemonDetailedPage/api";

import * as loginPageActions from "../pages/LoginPage/actions";
import * as loginPageAPI from "../pages/LoginPage/api";

import * as signUpPageActions from "../pages/RegistrationPage/actions";
import * as signUpPageAPI from "../pages/RegistrationPage/api";

const apiCallsMapping = (action) => {
  const mapping = {
    [pokemonsPageActions.GET_POKEMONS_REQUEST]: pokemonsPageAPI.getPokemons,
    [pokemonDetailedActions.GET_POKEMON_DETAILS_REQUEST]:
      pokemonDetailsAPI.getPokemonDetail,
    [loginPageActions.LOG_IN_REQUEST]: loginPageAPI.login,
    [signUpPageActions.SIGN_UP_REQUEST]: signUpPageAPI.signup,
  };
  return mapping[action.type];
};

export default apiCallsMapping;
