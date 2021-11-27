import PokemonDetailsPageLayout from "../components/PokemonDetailsPageLayout/PokemonDetailsPageLayout";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import useCart from "../../../hooks/useCart";

import { GET_POKEMON_DETAILS_REQUEST } from "../actions";

const PokemonDetailsPageContainer = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const { info, isLoading } = useSelector((state) => state.pokemonDetailsPage);

  const { itemsList } = useSelector((state) => state.cartPage);

  const abilities = info.abilities;
  const stats = info.stats;

  const { handleAddPokemonToCart, itemList, handleGoToCartPage } = useCart();

  const addPokemonToCart = {
    id: info.id,
    name: info.name,
    image: info.image,
    price: info.price,
  };

  const isAddPokemonToCart =
    itemsList.findIndex((item) => item.id === info.id) !== -1;

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
      isAddPokemonToCart={isAddPokemonToCart}
      handleGoToCartPage={handleGoToCartPage}
    />
  );
};

export default PokemonDetailsPageContainer;
