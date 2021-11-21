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

  const abilities = info.abilities;
  const stats = info.stats;

  const { handleAddPokemonToCart, itemList } = useCart();

  const addPokemonToCart = {
    id: info.id,
    name: info.name,
    image: info.image,
    price: info.price,
  };

  useEffect(() => {
    dispatch(GET_POKEMON_DETAILS_REQUEST(id));
  }, [dispatch, id]);

  return (
    <PokemonDetailsPageLayout
      itemsList={itemList}
      info={info}
      isLoading={isLoading}
      abilities={abilities}
      stats={stats}
      handleAddPokemonToCart={handleAddPokemonToCart}
      addPokemonToCart={addPokemonToCart}
    />
  );
};

export default PokemonDetailsPageContainer;
