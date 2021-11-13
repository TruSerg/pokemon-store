import { CircularProgress } from "@mui/material";
import PropTypes from "prop-types";

import MaterialCard from "../../../../commonComponents/MaterialCard";
import CustomPagination from "../../../../commonComponents/CustomPagination";

import styles from "./styles.module.scss";

const PokemonPageLayout = ({
  list,
  isLoading,
  currentPage,
  handleGoToDetails,
  handlePageChange,
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
          list.map(({ name, url }) => (
            <div className={styles.card}>
              <MaterialCard
                key={url}
                name={name}
                handleGoToDetails={() => handleGoToDetails(name)}
              />
            </div>
          ))
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
      url: PropTypes.string.isRequired,
    })
  ),
};

export default PokemonPageLayout;
