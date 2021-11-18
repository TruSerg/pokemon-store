import { ROUTES } from "../../routes/routeNames";

export const NAV_TYPE_NAMES = {
  PUBLIC: "public",
  PRIVATE: "private",
};

export const NAV_CONFIG = {
  [NAV_TYPE_NAMES.PUBLIC]: [
    {
      label: "Login",
      path: ROUTES.LOGIN,
    },
    {
      label: "Signup",
      path: ROUTES.REGISTRATION,
    },
  ],
  [NAV_TYPE_NAMES.PRIVATE]: [
    {
      label: "Pokemons",
      path: ROUTES.POKEMONS_PAGE,
    },
    {
      label: "Cart",
      path: ROUTES.CART_PAGE,
    },
  ],
};
