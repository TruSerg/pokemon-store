import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  ADD_ITEM_REQUEST,
  CHANGE_CART_REQUEST,
  REMOVE_ITEM_REQUEST,
} from "../pages/CartPage/actions";
import { ADD_ORDER_REQUEST } from "../pages/UserAccountPage/actions";
import { ROUTES } from "../routes/routeNames";

const useCart = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { info } = useSelector((state) => state.auth);

  const { itemsList, totalPrice } = useSelector((state) => state.cartPage);

  const { list } = useSelector((state) => state.pokemonsPage);

  const handleAddPokemonToCart = useCallback(
    (pokemon) => {
      const addPokemon = { ...pokemon, quantity: 1 };
      dispatch(ADD_ITEM_REQUEST(addPokemon));
    },
    [dispatch]
  );

  const handleDeletePokemonFromCart = useCallback(
    (pokemon) => {
      dispatch(REMOVE_ITEM_REQUEST(pokemon));
    },
    [dispatch]
  );

  const handleIncrement = useCallback(
    (pokemon) => {
      const updatedPokemon = { id: pokemon.id, quantity: pokemon.quantity + 1 };
      dispatch(CHANGE_CART_REQUEST(updatedPokemon));
    },
    [dispatch]
  );

  const handleDecrement = useCallback(
    (pokemon) => {
      if (pokemon.quantity > 0) {
        const updatedPokemon = {
          id: pokemon.id,
          quantity: pokemon.quantity - 1,
        };
        dispatch(CHANGE_CART_REQUEST(updatedPokemon));
      }
    },
    [dispatch]
  );

  const handleConfirmOrder = useCallback(() => {
    const addOrder = {
      itemsList: itemsList,
      totalPrice: totalPrice,
      customerId: info._id,
    };

    dispatch(ADD_ORDER_REQUEST(addOrder));
  }, [dispatch, itemsList, totalPrice, info]);

  const handleGoToCartPage = useCallback(() => {
    history.push(ROUTES.CART_PAGE);
  }, [history]);

  return {
    list,
    itemsList,
    handleAddPokemonToCart,
    handleDeletePokemonFromCart,
    handleIncrement,
    handleDecrement,
    handleConfirmOrder,
    handleGoToCartPage,
  };
};

export default useCart;
