import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { CHANGE_PAGE, GET_POKEMONS_REQUEST } from "../actions";

import PokemonPageLayout from "../components/PokemonLayout/PokemonPageLayout";

const PokemonPageContainer = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { list, isLoading, currentPage } = useSelector(
    (state) => state.pokemonsPage
  );

  const handleGoToDetails = useCallback((pokemonName) => {
    history.push(`/products/${pokemonName}`);
  }, []);

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
      isLoading={isLoading}
      currentPage={currentPage}
      handleGoToDetails={handleGoToDetails}
      handlePageChange={handlePageChange}
    />
  );
};

export default PokemonPageContainer;
