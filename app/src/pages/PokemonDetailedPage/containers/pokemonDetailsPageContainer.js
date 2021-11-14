import PokemonDetailsPageLayout from "../components/PokemonDetailsPageLayout";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { GET_POKEMON_DETAILS_REQUEST } from "../actions";

const PokemonDetailsPageContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { info, isLoading } = useSelector((state) => state.pokemonDetails);

  useEffect(() => {
    dispatch(GET_POKEMON_DETAILS_REQUEST(id));
  }, [dispatch]);

  const pokemonDetails = {
    id: info.id,
    name: info.name,
    image: info.image,
    price: info.price,
  };

  return (
    <PokemonDetailsPageLayout
      info={info}
      isLoading={isLoading}
      pokemonDetails={pokemonDetails}
      stats={info.stats}
    />
  );
};

export default PokemonDetailsPageContainer;
