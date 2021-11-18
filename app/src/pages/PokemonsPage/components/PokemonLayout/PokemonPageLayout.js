import PropTypes from "prop-types";

import MaterialCard from "../../../../commonComponents/MaterialCard";
import CustomPagination from "../../../../commonComponents/CustomPagination";
import CustomCircularProgress from "../../../../commonComponents/CircularProgress";

import styles from "./styles.module.scss";
import List from "../../../../commonComponents/List";

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
            renderItems={({ id, name, image, price }, pokemon) => (
              <div className={styles.card}>
                <MaterialCard
                  key={id}
                  name={name}
                  image={image}
                  price={price}
                  handleGoToDetails={() => handleGoToDetails(id)}
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
