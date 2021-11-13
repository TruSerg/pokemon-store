import { ROUTES } from "../../routes/routeNames";

export const NAV_TYPE_NAMES = {
  PUBLIC: "public",
  PRIVATE: "private",
};

export const NAV_CONFIG = {
  [NAV_TYPE_NAMES.PUBLIC]: [
    {
      label: "Home",
      path: ROUTES.HOME,
    },
    {
      label: "Login",
      path: ROUTES.LOGIN,
    },
  ],
  [NAV_TYPE_NAMES.PRIVATE]: [
    {
      label: "Pokemons",
      path: ROUTES.POKEMONS_PAGE,
    },
  ],
};
