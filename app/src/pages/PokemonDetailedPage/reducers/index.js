import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  info: {},
  isLoading: false,
  error: null,
};

const pokemonDetailsPageReducer = handleActions(
  {
    [actions.GET_POKEMON_DETAILS_REQUEST]: (state) => ({
      ...state,
      isdLoading: true,
    }),
    [actions.GET_POKEMON_DETAILS_SUCCESS]: (state, { payload }) => ({
      ...state,
      info: payload.response,
      isLoading: false,
    }),
    [actions.GET_POKEMON_DETAILS_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
  },
  defaultState
);

export default pokemonDetailsPageReducer;
