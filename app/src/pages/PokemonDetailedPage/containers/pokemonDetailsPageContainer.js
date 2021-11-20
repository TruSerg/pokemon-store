import PokemonDetailsPageLayout from "../components/PokemonDetailsPageLayout";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import useCart from "../../../hooks/useCart";

import { GET_POKEMON_DETAILS_REQUEST } from "../actions";

const PokemonDetailsPageContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { info, isLoading } = useSelector((state) => state.pokemonDetails);

  const abilitiesArray = info.abilities;
  const statsArray = info.stats;

  const [handleAddPokemonToCart] = useCart();

  useEffect(() => {
    dispatch(GET_POKEMON_DETAILS_REQUEST(id));
  }, [dispatch, id]);

  return (
    <PokemonDetailsPageLayout
      info={info}
      isLoading={isLoading}
      abilitiesArray={abilitiesArray}
      statsArray={statsArray}
      handleAddPokemonToCart={handleAddPokemonToCart}
    />
  );
};

export default PokemonDetailsPageContainer;
