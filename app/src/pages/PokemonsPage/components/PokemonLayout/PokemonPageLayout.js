import PropTypes from "prop-types";

import { CircularProgress } from "@mui/material";

import MaterialCard from "../../../../commonComponents/MaterialCard";
import CustomPagination from "../../../../commonComponents/CustomPagination";
import List from "../../../../commonComponents/List";

import styles from "./styles.module.scss";

const PokemonPageLayout = ({
  list,
  itemInCart,
  isLoading,
  currentPage,
  handleGoToDetails,
  handlePageChange,
  handleAddPokemonToCart,
  handleDeletePokemonFromCart,
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
            items={list}
            renderItems={(pokemon) => (
              <div key={pokemon.id} className={styles.card}>
                <MaterialCard
                  name={pokemon.name}
                  itemInCart={itemInCart}
                  image={pokemon.image}
                  price={pokemon.price}
                  handleGoToDetails={() => handleGoToDetails(pokemon.id)}
                  handleAddPokemonToCart={() => handleAddPokemonToCart(pokemon)}
                  handleDeletePokemonFromCart={() =>
                    handleDeletePokemonFromCart(pokemon.id)
                  }
                />
              </div>
            )}
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
