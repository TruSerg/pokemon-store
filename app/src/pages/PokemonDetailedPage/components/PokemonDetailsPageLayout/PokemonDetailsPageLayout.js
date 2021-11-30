import PropTypes from "prop-types";

import { CircularProgress } from "@mui/material";

import MaterialCardDetail from "../../../../commonComponents/MaterialCardDetail";

import styles from "./styles.module.scss";

const PokemonDetailsPageLayout = ({
  abilities,
  stats,
  info,
  isLoading,
  handleAddPokemonToCart,
  addPokemonToCart,
  isAddPokemonToCart,
  handleGoToCartPage,
}) => {
  return (
    <div>
      <h1 className={styles.detailTitle}>DETAILS</h1>
      <div>
        {isLoading ? (
          <div className={styles.progressArea}>
            <CircularProgress />
          </div>
        ) : (
          <div>
            <div className={styles.cardArea}>
              <MaterialCardDetail
                key={info.id}
                name={info.name}
                image={info.image}
                price={info.price}
                handleAddPokemonToCart={() =>
                  handleAddPokemonToCart(addPokemonToCart)
                }
                isAddPokemonToCart={isAddPokemonToCart}
                handleGoToCartPage={handleGoToCartPage}
              />
            </div>
            <div className={styles.wrapperInfo}>
              <h2>ABILITIES</h2>
              {abilities?.map(({ title, description }) => (
                <div key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
              <h2>STATS</h2>
              {stats?.map(({ title, value }) => (
                <div key={title}>
                  <p>
                    {title} : {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

PokemonDetailsPageLayout.propTypes = {
  abilities: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ),
  info: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
  isLoading: PropTypes.bool.isRequired,
  handleAddPokemonToCart: PropTypes.func.isRequired,
  addPokemonToCart: PropTypes.func.isRequired,
  isAddPokemonToCart: PropTypes.func.isRequired,
  handleGoToCartPage: PropTypes.func.isRequired,
};

export default PokemonDetailsPageLayout;
