import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { createBlacklistFilter } from "redux-persist-transform-filter";
import storage from "redux-persist/lib/storage";

import pokemonsPageReducers from "../pages/PokemonsPage/reducers";
import pokemonDetailsPageReducer from "../pages/PokemonDetailedPage/reducers";
import authReducer from "../pages/LoginPage/reducers";

const authBlackListedFields = createBlacklistFilter("auth", [
  "isLoading",
  "errors",
]);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
  transform: [authBlackListedFields],
};

const rootReducer = combineReducers({
  auth: authReducer,
  pokemonsPage: pokemonsPageReducers,
  pokemonDetails: pokemonDetailsPageReducer,
});
export default persistReducer(persistConfig, rootReducer);
