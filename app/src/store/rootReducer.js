import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { createBlacklistFilter } from "redux-persist-transform-filter";
import storage from "redux-persist/lib/storage";

import pokemonsPageReducers from "../pages/PokemonsPage/reducers";
import pokemonDetailsPageReducer from "../pages/PokemonDetailedPage/reducers";
import authReducer from "../pages/LoginPage/reducers";
import authUpReducer from "../pages/RegistrationPage/reducers";
import cartPageReducer from "../pages/CartPage/reducers";

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
  signup: authUpReducer,
  pokemonsPage: pokemonsPageReducers,
  pokemonDetails: pokemonDetailsPageReducer,
  cartPage: cartPageReducer,
});
export default persistReducer(persistConfig, rootReducer);
