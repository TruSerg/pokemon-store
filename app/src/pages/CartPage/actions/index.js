import { createAction, createActions } from "redux-actions";

export const GET_CART_REQUEST = createAction("GET_CART_REQUEST");
export const GET_CART_SUCCESS = createActions("GET_CART_SUCCESS");
export const GET_CART_FAIL = createAction("GET_CART_FAIL");

export const ADD_ITEM_REQUEST = createAction("ADD_ITEM_REQUEST");
export const ADD_ITEM_SUCCESS = createAction("ADD_ITEM_SUCCESS");
export const ADD_ITEM_FAIL = createAction("ADD_ITEM_FAIL");

export const CHANGE_CART_REQUEST = createAction("CHANGE_CART_REQUEST");
export const CHANGE_CART_SUCCESS = createAction("CHANGE_CART_SUCCESS");
export const CHANGE_CART_FAIL = createAction("CHANGE_CART_FAIL");

export const REMOVE_ITEM_REQUEST = createAction("REMOVE_ITEM_REQUEST");
export const REMOVE_ITEM_SUCCESS = createAction("REMOVE_ITEM_SUCCESS");
export const REMOVE_ITEM_FAIL = createAction("REMOVE_ITEM_FAIL");
