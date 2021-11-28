import PropTypes from "prop-types";

import { CircularProgress } from "@mui/material";

import MaterialCard from "../../../../commonComponents/MaterialCard";
import CustomPagination from "../../../../commonComponents/CustomPagination";
import List from "../../../../commonComponents/List";

import styles from "./styles.module.scss";

const PokemonPageLayout = ({
  pokemonList,
  cartItems,
  isLoading,
  currentPage,
  handleGoToDetails,
  handlePageChange,
  handleAddPokemonToCart,
  handleGoToCartPage,
}) => {
  return (
    <div>
      <h1 className={styles.title}>POKEMONS</h1>
      <div className={styles.cardsArea}>
        {isLoading ? (
          <div className={styles.progressArea}>
            <CircularProgress />
          </div>
        ) : (
          <List
            items={pokemonList}
            renderItems={(pokemon) => {
              const isAddItemToCart =
                cartItems.findIndex((item) => item.id === pokemon.id) !== -1;
              return (
                <div key={pokemon.id} className={styles.card}>
                  <MaterialCard
                    name={pokemon.name}
                    image={pokemon.image}
                    price={pokemon.price}
                    handleGoToDetails={() => handleGoToDetails(pokemon.id)}
                    handleAddPokemonToCart={() =>
                      handleAddPokemonToCart(pokemon)
                    }
                    isAddPokemonToCart={isAddItemToCart}
                    handleGoToCartPage={handleGoToCartPage}
                  />
                </div>
              );
            }}
          />
        )}
      </div>
      <div className={styles.paginationArea}>
        <CustomPagination
          currentPage={currentPage}
          onPageChange={handlePageChange}
          pageCount={20}
        />
      </div>
    </div>
  );
};

PokemonPageLayout.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default PokemonPageLayout;
