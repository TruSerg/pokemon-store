import PropTypes from "prop-types";

import { Box, CircularProgress, Container } from "@mui/material";
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
    <Box className={classes.pokemonsWrapper}>
      <Container>
        <h1 className={classes.orderTitle}>POKEMONS</h1>

        <Box className={classes.cardsArea}>
          {isLoading ? (
            <Box className={classes.progressArea}>
              <CircularProgress />
            </Box>
          ) : (
            <List
              items={pokemonList}
              renderItems={(pokemon) => {
                const isAddItemToCart =
                  cartItems.findIndex((item) => item.id === pokemon.id) !== -1;
                return (
                  <Box key={pokemon.id} className={classes.card}>
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
                  </Box>
                );
              }}
            />
          )}
        </Box>
        <div className={classes.paginationArea}>
          <CustomPagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
            pageCount={20}
          />
        </div>
      </Container>
    </Box>
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
