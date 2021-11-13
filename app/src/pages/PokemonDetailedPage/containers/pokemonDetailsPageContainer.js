import PokemonDetailsPageLayout from "../components/PokemonDetailsPageLayout";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { GET_POKEMON_DETAILS_REQUEST } from "../actions";

const PokemonDetailsPageContainer = () => {
  const dispatch = useDispatch();

  const { info, isLoading } = useSelector((state) => state.pokemonDetails);

  const { name } = useParams();

  useEffect(() => {
    dispatch(GET_POKEMON_DETAILS_REQUEST(name));
  }, [dispatch]);

  return <PokemonDetailsPageLayout info={info} isLoading={isLoading} />;
};

export default PokemonDetailsPageContainer;
