import { handleActions } from "redux-actions";

import * as actions from "../actions";
import { LOCAL_STORAGE_KEYS } from "../../../constants/localStorageKeys";
import { SIGN_UP_FAIL, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from "../actions";

const defaultState = {
  isLoading: false,
  info: {},
  isAuth: false,
  error: null,
};

const authUpReducer = handleActions(
  {
    [actions.SIGN_UP_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.SIGN_UP_SUCCESS]: (state, { payload }) => {
      const { userInfo } = payload.response;

      return {
        ...state,
        isLoading: false,
        info: userInfo,
        error: null,
        isAuth: true,
      };
    },
    [actions.SIGN_UP_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload.response,
    }),
  },
  defaultState
);

export default authUpReducer;
