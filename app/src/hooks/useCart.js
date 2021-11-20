import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  ADD_ITEM_REQUEST,
  CHANGE_CART_REQUEST,
  REMOVE_ITEM_REQUEST,
} from "../pages/CartPage/actions";

const useCart = () => {
  const dispatch = useDispatch();

  const { itemsList } = useSelector((state) => state.cartPage);

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

  return {
    list,
    itemsList,
    handleAddPokemonToCart,
    handleDeletePokemonFromCart,
    handleIncrement,
    handleDecrement,
  };
};

export default useCart;
