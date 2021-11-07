import { createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";

export function configureStore() {
  return createStore(rootReducer, composeWithDevTools());
}

const store = configureStore();

export default store;
