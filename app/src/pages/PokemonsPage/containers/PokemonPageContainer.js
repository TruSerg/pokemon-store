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

  const { itemInCart, quantity } = useSelector((state) => state.cartPage);

  const { handleAddPokemonToCart, handleDeletePokemonFromCart, itemsList } =
    useCart();

  const handleGoToDetails = useCallback(
    (id) => {
      history.push(`${ROUTES.POKEMONS_PAGE}/${id}`);
    },
    [history]
  );

  const handlePageChange = useCallback(
    (page) => {
      dispatch(CHANGE_PAGE(page));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(GET_POKEMONS_REQUEST(currentPage));
  }, [currentPage]);

  return (
    <PokemonPageLayout
      list={list}
      itemInCart={itemInCart}
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
