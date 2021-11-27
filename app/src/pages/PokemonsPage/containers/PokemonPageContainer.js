import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { CHANGE_PAGE, GET_POKEMONS_REQUEST } from "../actions";
import { ROUTES } from "../../../routes/routeNames";

import PokemonPageLayout from "../components/PokemonLayout/PokemonPageLayout";

import useCart from "../../../hooks/useCart";
import { useSnackBar } from "../../../hooks";

const PokemonPageContainer = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { pokemonList, isLoading, currentPage } = useSelector(
    (state) => state.pokemonsPage
  );

  const { itemsList, quantity } = useSelector((state) => state.cartPage);

  const { handleAddPokemonToCart, handleGoToCartPage } = useCart();

  const handleGoToDetails = useCallback(
    (id) => {
      history.push(`${ROUTES.POKEMONS_PAGE}/${id}`);
    },
    [history]
  );

  const handlePageChange = useCallback(
    (page) => {
      if (page !== currentPage) {
        dispatch(CHANGE_PAGE(page));
      }
    },
    [dispatch, currentPage]
  );

  useEffect(() => {
    dispatch(GET_POKEMONS_REQUEST(currentPage));
  }, [dispatch, currentPage]);

  return (
    <PokemonPageLayout
      pokemonList={pokemonList}
      cartItems={itemsList}
      isLoading={isLoading}
      quantity={quantity}
      currentPage={currentPage}
      handleGoToDetails={handleGoToDetails}
      handlePageChange={handlePageChange}
      handleAddPokemonToCart={handleAddPokemonToCart}
      handleGoToCartPage={handleGoToCartPage}
    />
  );
};

export default PokemonPageContainer;
