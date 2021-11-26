import { handleActions } from "redux-actions";
import * as actions from "../actions";

const defaultState = {
  pokemonList: [],
  isLoading: false,
  currentPage: 1,
  error: null,
};

const pokemonsPageReducers = handleActions(
  {
    [actions.GET_POKEMONS_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_POKEMONS_SUCCESS]: (state, { payload }) => ({
      ...state,
      pokemonList: payload.response,
      isLoading: false,
    }),
    [actions.GET_POKEMONS_FAIL]: (state, { payload }) => ({
      ...state,
      error: payload.response,
      isLoading: false,
    }),
    [actions.CHANGE_PAGE]: (state, { payload }) => ({
      ...state,
      currentPage: payload,
    }),
  },
  defaultState
);

export default pokemonsPageReducers;
