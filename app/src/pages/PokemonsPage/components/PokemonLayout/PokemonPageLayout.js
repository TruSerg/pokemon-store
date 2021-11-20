import PropTypes from "prop-types";

import MaterialCard from "../../../../commonComponents/MaterialCard";
import CustomPagination from "../../../../commonComponents/CustomPagination";
import CustomCircularProgress from "../../../../commonComponents/CircularProgress";
import List from "../../../../commonComponents/List";

import styles from "./styles.module.scss";

const PokemonPageLayout = ({
  list,
  isLoading,
  currentPage,
  handleGoToDetails,
  handlePageChange,
  handleAddPokemonToCart,
}) => {
  return (
    <div>
      <h1 className={styles.title}>POKEMONS</h1>
      <div className={styles.cardsArea}>
        {isLoading ? (
          <CustomCircularProgress />
        ) : (
          <List
            items={list}
            renderItems={(pokemon) => (
              <div className={styles.card}>
                <MaterialCard
                  key={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.image}
                  price={pokemon.price}
                  handleGoToDetails={() => handleGoToDetails(pokemon.id)}
                  handleAddPokemonToCart={() => handleAddPokemonToCart(pokemon)}
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
