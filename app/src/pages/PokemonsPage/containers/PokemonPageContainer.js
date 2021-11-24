import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { CHANGE_PAGE, GET_POKEMONS_REQUEST } from "../actions";
import { ROUTES } from "../../../routes/routeNames";

import PokemonPageLayout from "../components/PokemonLayout/PokemonPageLayout";

import useCart from "../../../hooks/useCart";

const PokemonPageContainer = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { list, isLoading, currentPage } = useSelector(
    (state) => state.pokemonsPage
  );

  const { quantity } = useSelector((state) => state.cartPage);

  const { handleAddPokemonToCart, handleDeletePokemonFromCart } = useCart();

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
      list={list}
      isLoading={isLoading}
      quantity={quantity}
      currentPage={currentPage}
      handleGoToDetails={handleGoToDetails}
      handlePageChange={handlePageChange}
      handleAddPokemonToCart={handleAddPokemonToCart}
      handleDeletePokemonFromCart={handleDeletePokemonFromCart}
    />
  );
};

export default PokemonPageContainer;
