import PokemonDetailsPageLayout from "../components/PokemonDetailsPageLayout";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { GET_POKEMON_DETAILS_REQUEST } from "../actions";

const PokemonDetailsPageContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { info, isLoading } = useSelector((state) => state.pokemonDetails);

  const abilitiesArray = info.abilities;
  const statsArray = info.stats;

  useEffect(() => {
    dispatch(GET_POKEMON_DETAILS_REQUEST(id));
  }, [dispatch]);

  return (
    <PokemonDetailsPageLayout
      info={info}
      isLoading={isLoading}
      abilitiesArray={abilitiesArray}
      statsArray={statsArray}
    />
  );
};

export default PokemonDetailsPageContainer;
