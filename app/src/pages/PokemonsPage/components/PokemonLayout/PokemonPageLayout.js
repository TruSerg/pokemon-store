import PropTypes from "prop-types";

import { CircularProgress } from "@mui/material";
import { withStyles } from "@mui/styles";

import MaterialCard from "../../../../commonComponents/MaterialCard";
import CustomPagination from "../../../../commonComponents/CustomPagination";
import List from "../../../../commonComponents/List";

import styles from "./styles";

const PokemonPageLayout = ({
  pokemonList,
  cartItems,
  isLoading,
  currentPage,
  handleGoToDetails,
  handlePageChange,
  handleAddPokemonToCart,
  handleGoToCartPage,
  classes,
}) => {
  return (
    <div>
      <h1 className={classes.title}>POKEMONS</h1>
      <div className={classes.cardsArea}>
        {isLoading ? (
          <div className={classes.progressArea}>
            <CircularProgress />
          </div>
        ) : (
          <List
            items={pokemonList}
            renderItems={(pokemon) => {
              const isAddItemToCart =
                cartItems.findIndex((item) => item.id === pokemon.id) !== -1;
              return (
                <div key={pokemon.id} className={classes.card}>
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
      <div className={classes.paginationArea}>
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
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default withStyles(styles)(PokemonPageLayout);
