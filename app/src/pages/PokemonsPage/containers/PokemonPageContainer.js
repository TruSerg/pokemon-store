import { GET_POKEMONS_REQUEST } from "../actions";

import PokemonPageLayout from "../components/PokemonLayout";

import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const PokemonPageContainer = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { list, isLoading } = useSelector((state) => state.pokemonsPage);

  const handleGoToDetails = useCallback((pokemonName) => {
    history.push(`/products/${pokemonName}`);
  }, []);

  useEffect(() => {
    dispatch(GET_POKEMONS_REQUEST());
  }, [dispatch]);

  return (
    <PokemonPageLayout
      list={list}
      isLoading={isLoading}
      handleGoToDetails={handleGoToDetails}
    />
  );
};

export default PokemonPageContainer;
