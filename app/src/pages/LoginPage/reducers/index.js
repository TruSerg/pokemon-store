import { handleActions } from "redux-actions";

import * as actions from "../actions";
import { LOCAL_STORAGE_KEYS } from "../../../constants/localStorageKeys";

const defaultState = {
  isLoading: false,
  info: {},
  isAuth: false,
  error: null,
};

const authReducer = handleActions(
  {
    [actions.LOG_IN_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.LOG_IN_SUCCESS]: (state, { payload }) => {
      const { accessToken, ...userInfo } = payload.response;

      localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, accessToken);

      return {
        ...state,
        isLoading: false,
        info: userInfo,
        error: null,
        isAuth: true,
      };
    },
    [actions.LOG_IN_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload.response,
    }),
  },
  defaultState
);

export default authReducer;
