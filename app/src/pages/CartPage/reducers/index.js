import { handleActions } from "redux-actions";

import * as actions from "../actions";

const defaultState = {
  isLoading: false,
  totalPrice: 0,
  quantity: 0,
  itemsList: [],
  error: null,
};

const cartPageReducer = handleActions(
  {
    [actions.GET_CART_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_CART_SUCCESS]: (state, { payload }) => {
      const { totalPrice, quantity, itemsList, customerId } = payload.response;
      return {
        ...state,
        isLoading: false,
        totalPrice,
        quantity,
        itemsList,
        customerId,
      };
    },
    [actions.GET_CART_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload.response,
    }),
    //==================================================================================
    [actions.ADD_ITEM_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.ADD_ITEM_SUCCESS]: (state, { payload }) => {
      const { totalPrice, quantity, itemsList } = payload.response;

      return { ...state, isLoading: false, totalPrice, quantity, itemsList };
    },
    [actions.ADD_ITEM_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload.response,
    }),
    //==================================================================================
    [actions.REMOVE_ITEM_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.REMOVE_ITEM_SUCCESS]: (state, { payload }) => {
      const { cartState, removedItemId } = payload.response;

      const itemsListCopy = [...state.itemsList];

      const removeItem = itemsListCopy.findIndex(
        (item) => removedItemId === item.id
      );

      itemsListCopy.splice(removeItem, 1);

      return {
        ...state,
        isLoading: false,
        itemsList: itemsListCopy,
        totalPrice: cartState.totalPrice,
        quantity: cartState.quantity,
      };
    },
    [actions.REMOVE_ITEM_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload.response,
    }),
    //=================================================================================
    [actions.CHANGE_CART_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.CHANGE_CART_SUCCESS]: (state, { payload }) => {
      const { cartState, updatedItem } = payload.response;

      const itemsListChange = [...state.itemsList];

      const changeItem = itemsListChange.findIndex(
        (item) => updatedItem.id === item.id
      );

      itemsListChange.splice(changeItem, 1, updatedItem);

      return {
        ...state,
        isLoading: false,
        itemsList: itemsListChange,
        totalPrice: cartState.totalPrice,
        quantity: cartState.quantity,
      };
    },
    [actions.CHANGE_CART_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
  },
  defaultState
);

export default cartPageReducer;
